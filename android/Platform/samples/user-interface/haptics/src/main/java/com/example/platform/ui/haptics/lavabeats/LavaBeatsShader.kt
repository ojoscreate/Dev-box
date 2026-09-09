/*
 * Copyright 2026 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.example.platform.ui.haptics.lavabeats

import android.graphics.RuntimeShader
import android.os.Build
import androidx.annotation.RequiresApi
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import org.intellij.lang.annotations.Language

@RequiresApi(Build.VERSION_CODES.TIRAMISU)
class LavaBeatsShader : RuntimeShader(SHADER) {
    fun enablePulsing(enable: Boolean) =
        if (enable) {
            setFloatUniform("in_pulse", 1f)
        } else {
            setFloatUniform("in_pulse", 0f)
        }

    fun setTime(time: Float) = setFloatUniform("in_time", time)

    fun setResolution(width: Float, height: Float) = setFloatUniform("in_resolution", width, height)

    fun setBeatEffectTimingParameters(effect: BeatEffectTimingParams) {
        setFloatUniform("in_pulse_dur_millis", effect.beatDurationMillis)
        setFloatUniform("in_time_to_first_pulse_millis", effect.timeToFirstPulseMillis)
        setFloatUniform("in_time_to_second_pulse_millis", effect.timeToSecondPulseMillis)
    }

    fun setPulseTime(time: Float) {
        setFloatUniform("in_pulseTime", time)
    }

    fun enableDarkMode() = setFloatUniform("in_theme", 1f)

    fun enableLightMode() = setFloatUniform("in_theme", 0f)

    fun setBackground(color: Color) = setColorUniform("in_background", color.toArgb())

    companion object {
        @Language("AGSL")
        private const val SHADER =
            """
                uniform half in_pulse_dur_millis;
                uniform half in_time_to_first_pulse_millis;
                uniform half in_time_to_second_pulse_millis;
                uniform half in_pulse;
                uniform half in_time;
                uniform vec2 in_resolution;
                uniform half in_pulseTime;
                uniform half in_theme;
                layout(color) uniform vec4 in_background;
                
                const float PI = 3.14159265359;
                const float TWO_PI = 6.28318530718;

                // A smooth min function from: https://iquilezles.org/articles/smin/
                float smin(float a, float b, float k) {
                    k *= 1.0 / (1.0 - sqrt(0.5));
                    return max(k, min(a, b)) - length(max(k - vec2(a, b), 0.0));
                }
                
                // An impulse function
                float impulse(float x, float k) {
                    float h = k * x;
                    return h * exp(1.0 - h);
                }
                
                float delayedImpulse(float t, float delay, float k) {
                    return impulse(t - delay, k);
                }
                
                float beatPulses() {
                    float beatDuration = in_pulse_dur_millis / 1000.;
                    float normalizedTime = mod(in_pulseTime, beatDuration) / beatDuration;
                    float firstPulse =
                        delayedImpulse(
                            normalizedTime,
                            in_time_to_first_pulse_millis / in_pulse_dur_millis,
                            20.
                        );
                    float secondPulse =
                        delayedImpulse(
                            normalizedTime,
                            in_time_to_second_pulse_millis / in_pulse_dur_millis,
                            30.
                        );
                    return max(firstPulse, 0.7 * secondPulse);
                }
                
                float sdParticle(vec2 center, float r0, vec2 uv) { 
                    vec2 p = uv - center; 
                    return length(p) - r0;
                }
                
                float angle(vec2 p) {
                    float quadrantFactor = step(p.y, 0.0);
                    return quadrantFactor * PI + acos(((1. - 2. * quadrantFactor) * p.x)/length(p));
                }
                
                float blob(
                    vec2 uv,
                    float T,
                    float direction,
                    float timeFactor,
                    float a,
                    float n,
                    float baseR,
                    float r0
                ) {
                    float alpha = angle(uv);
                    float sweepAngle = direction * TWO_PI * mod(timeFactor * in_time, T) / T;
                    
                    float centerMagnitude = baseR + a * sin(n * alpha) / 2. + 0.5; 
                    float beta = asin(r0 / centerMagnitude); 
                    vec2 center = centerMagnitude * vec2(cos(sweepAngle), sin(sweepAngle));     
                    return sdParticle(center, r0 + in_pulse * beatPulses() * 0.1, uv);
                }
                
                float blobs(vec2 uv) {
                    float T = 5.;
                    float a = 0.2;
                    float n = 2.;
                    float baseR = 0.1; 
                    float r0 = 0.2; 
                    const half maxBlobs = 7.; 
                    float timeFactor = 0.6;
                    
                    float currentBlob = 1.; 
                    for (float i = 0.0; i < maxBlobs - 1.; i++) { 
                        float iBaseR = ((i + 1.) / maxBlobs) * baseR; 
                        float iTimeFactor = ((i + 1.) / maxBlobs) * timeFactor; 
                        float iA = ((i + 1.) / maxBlobs) * a; 
                        float iN = i + 1.;
                        float iR0 = min(((i + 2.) / maxBlobs) * r0, 1.0);
                        
                        currentBlob =
                            smin(
                                currentBlob,
                                blob(uv, T, 1.0, iTimeFactor, iA, iN, iBaseR, iR0),
                                0.05
                            );
                    }
                    
                    float finalBlob = blob(uv, T, 1.0, 0.6, 0.2, 7., 0.4, 0.3); 
                    currentBlob = smoothstep(0.99, 1., 1. - smin(currentBlob, finalBlob, 0.1)); 
                    return currentBlob;
                }
                    
                // A color palette from: https://iquilezles.org/articles/palettes/
                vec3 palette(float t) {
                    vec3 a = vec3(0.5, 0.5, 0.5); 
                    vec3 b = vec3(0.5, 0.5, 0.5); 
                    vec3 c = vec3(1.0, 1.0, 1.0); 
                    vec3 d = vec3(0., 0.1, 0.2);
                    return a + b * cos(TWO_PI * (c * t + d));
                }
                    
                vec3 radialColor(vec2 uv) {
                    float alpha = angle(uv); 
                    float sweepAngle = -TWO_PI * mod(0.8 * in_time, 3.) / 3.; 
                    float angularDifference = mod(alpha - sweepAngle + PI, TWO_PI) - PI; 
                    vec3 angularColor = palette(angularDifference / TWO_PI) + vec3(0.3); 
                    vec3 color =
                        mix(
                            angularColor,
                            vec3(1., 0., 0.),
                            clamp(0.6 * in_pulse * beatPulses(), 0.1, 0.8)
                        ); 
                    return color;
                }
                
                vec4 main(in vec2 fragCoord) {
                    // Normalized pixel coordinates (from -1 to 1)
                    vec2 centeredCoord = 2.0 * fragCoord.xy - in_resolution.xy;
                    float minDimension = min(in_resolution.x, in_resolution.y);
                    vec2 uv = (centeredCoord / minDimension) * 1.35;

                    // Blobs
                    float allBlobs = blobs(uv);
                    
                    // Output to screen
                    vec3 baseColor = radialColor(uv) * allBlobs;
                    vec3 outColor = in_theme * baseColor + (1. - in_theme) * (1. - baseColor);
                    vec3 finalColor = mix(in_background.xyz, outColor, allBlobs);
                    return vec4(finalColor, 1.);
                }
            """
    }
}
