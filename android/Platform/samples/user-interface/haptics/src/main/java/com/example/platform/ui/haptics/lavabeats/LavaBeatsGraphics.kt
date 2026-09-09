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

import android.os.Build
import androidx.compose.animation.core.withInfiniteAnimationFrameMillis
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawWithCache
import androidx.compose.ui.graphics.ShaderBrush
import androidx.compose.ui.platform.LocalDensity

@Composable
fun LavaBeatsGraphics(
    pulseTime: Float,
    beatEffectTimingParams: BeatEffectTimingParams,
    pulse: Boolean = false,
) {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) return

    BoxWithConstraints {
        val constraints = this
        val density = LocalDensity.current
        val width = with(density) { constraints.maxWidth.toPx() }
        val height = with(density) { constraints.maxHeight.toPx() }
        var firstTime by remember { mutableFloatStateOf(-1f) }
        var time by remember { mutableFloatStateOf(0f) }
        val isInDarkMode = isSystemInDarkTheme()
        val surfaceColor = MaterialTheme.colorScheme.background

        LaunchedEffect(Unit) {
            // Use withInfiniteAnimationFrameMillis to update the time uniform per frame.
            // This is a more efficient approach than passing a new shader instance
            // or re-creating the RenderEffect on every frame.
            while (true) {
                withInfiniteAnimationFrameMillis { frameTime ->
                    if (firstTime == -1f) {
                        firstTime = frameTime / 1000f
                    } else {
                        time = frameTime / 1000f - firstTime
                    }
                }
            }
        }
        val shader = remember { LavaBeatsShader() }

        Box(
            modifier =
                Modifier.drawWithCache {
                        if (isInDarkMode) {
                            shader.enableDarkMode()
                        } else {
                            shader.enableLightMode()
                        }
                        shader.setBackground(surfaceColor)
                        shader.enablePulsing(pulse)
                        shader.setResolution(width, height)
                        shader.setTime(time)
                        shader.setPulseTime(pulseTime)
                        shader.setBeatEffectTimingParameters(beatEffectTimingParams)
                        val shaderBrush = ShaderBrush(shader)
                        onDrawBehind { drawRect(shaderBrush) }
                    }
                    .fillMaxSize()
        )
    }
}
