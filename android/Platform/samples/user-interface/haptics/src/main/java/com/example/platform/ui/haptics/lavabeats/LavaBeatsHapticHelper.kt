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
import android.os.VibrationEffect
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.compose.runtime.Stable

/**
 * A Helper that creates the Lava Beats haptic effect as well as beat parameters
 */
object LavaBeatsHapticHelper {
    private const val TAG = "LavaBeatsEffectPlayer"
    private const val MIN_BEAT_DELAY_MILLIS = 5f
    private const val ENVELOPE_RAMP_DURATION_MILLIS = 5L

    @RequiresApi(Build.VERSION_CODES.BAKLAVA)
    fun createEnvelopeBeatEffect(beatParameters: List<BeatParameter>): HapticBeatEffect {
        val effect = createEnvelopeEffect(beatParameters)
        val rampsDuration = 4L * ENVELOPE_RAMP_DURATION_MILLIS * beatParameters.getNumBeats()
        val duration = rampsDuration + beatParameters.getIntrinsicDurationMillis()
        val timingParams =
            BeatEffectTimingParams(
                beatDurationMillis =
                    beatParameters.getBaseBeatDurationMillis() + 4 * ENVELOPE_RAMP_DURATION_MILLIS,
                timeToFirstPulseMillis = ENVELOPE_RAMP_DURATION_MILLIS.toFloat(),
                timeToSecondPulseMillis =
                    beatParameters.getFirstPulseDurationMillis() +
                            beatParameters.getFirstToSecondPulseDelayMillis() +
                            3 * ENVELOPE_RAMP_DURATION_MILLIS,
                beatDelayMillis = beatParameters.getBeatDelayMillis(),
            )
        return HapticBeatEffect(
            vibrationEffect = effect,
            totalDurationEstimateMillis = duration,
            beats = beatParameters.getNumBeats(),
            timingParams = timingParams,
        )
    }

    @RequiresApi(Build.VERSION_CODES.BAKLAVA)
    private fun createEnvelopeEffect(beatParameters: List<BeatParameter>): VibrationEffect =
        VibrationEffect.WaveformEnvelopeBuilder()
            .apply {
                repeat(beatParameters.getNumBeats()) {
                    // First pulse chirp
                    addControlPoint(
                        beatParameters.getFirstPulseAmplitude(),
                        beatParameters.getFirstPulseStartFreq(),
                        ENVELOPE_RAMP_DURATION_MILLIS,
                    )
                    addControlPoint(
                        beatParameters.getFirstPulseAmplitude(),
                        beatParameters.getFirstPulseEndFreq(),
                        beatParameters.getFirstPulseDurationMillis().toLong(),
                    )
                    addControlPoint(
                        0f,
                        beatParameters.getFirstPulseEndFreq(),
                        ENVELOPE_RAMP_DURATION_MILLIS,
                    )
                    // Delay between first and second pulse
                    addControlPoint(
                        0f,
                        beatParameters.getFirstPulseEndFreq(),
                        beatParameters.getFirstToSecondPulseDelayMillis().toLong(),
                    )
                    // Second pulse
                    addControlPoint(
                        beatParameters.getSecondPulseAmplitude(),
                        beatParameters.getSecondPulseFreq(),
                        ENVELOPE_RAMP_DURATION_MILLIS,
                    )
                    addControlPoint(
                        beatParameters.getSecondPulseAmplitude(),
                        beatParameters.getSecondPulseFreq(),
                        (1_000 / (2f * beatParameters.getSecondPulseFreq())).toLong(),
                    )
                    addControlPoint(
                        0f,
                        beatParameters.getSecondPulseFreq(),
                        ENVELOPE_RAMP_DURATION_MILLIS,
                    )
                    addControlPoint(
                        0f,
                        beatParameters.getSecondPulseFreq(),
                        beatParameters.getBeatDelayMillis().toLong(),
                    )
                }
            }
            .build()

    // Helper functions to idiomatically index the list of parameters

    private fun List<BeatParameter>.getFirstPulseStartFreq(): Float = this[0].value

    private fun List<BeatParameter>.getFirstPulseEndFreq(): Float = this[1].value

    private fun List<BeatParameter>.getFirstPulseDurationMillis(): Float = this[2].value

    private fun List<BeatParameter>.getFirstPulseAmplitude(): Float = this[3].value

    private fun List<BeatParameter>.getSecondPulseFreq(): Float = this[4].value

    private fun List<BeatParameter>.getSecondPulseAmplitude(): Float = this[5].value

    private fun List<BeatParameter>.getFirstToSecondPulseDelayMillis(): Float = this[6].value

    private fun List<BeatParameter>.getBpm(): Float = this[7].value

    private fun List<BeatParameter>.getNumBeats(): Int = this[8].value.toInt()

    private fun List<BeatParameter>.getBeatDelayMillis(): Float {
        val targetValue =
            60_000f / getBpm() - getFirstPulseDurationMillis() - getFirstToSecondPulseDelayMillis()
        if (targetValue <= 0) {
            Log.e(
                TAG,
                "Invalid beat delay from selected parameters, returning a minimum of " +
                        "$MIN_BEAT_DELAY_MILLIS",
            )
            return MIN_BEAT_DELAY_MILLIS
        }
        return targetValue
    }

    private fun List<BeatParameter>.getBaseBeatDurationMillis(): Float =
        getBeatDelayMillis() +
                getFirstPulseDurationMillis() +
                getFirstToSecondPulseDelayMillis() +
                (1_000 * 2f / getSecondPulseFreq())

    private fun List<BeatParameter>.getIntrinsicDurationMillis(): Float =
        getNumBeats() * getBaseBeatDurationMillis()
}

/** A parameter of a haptic beat effect that represents an EKG signal parameter */
@Stable
data class BeatParameter(
    val description: String = "",
    val value: Float = 0f,
    val range: ClosedFloatingPointRange<Float> = 0f..1f,
    val steps: Int = 0,
    val isFrequencyType: Boolean = false,
)

/** Encapsulates the vibration effect of a haptic beat effect with its timing parameters */
@Stable
data class HapticBeatEffect(
    val vibrationEffect: VibrationEffect,
    val totalDurationEstimateMillis: Float,
    val beats: Int,
    val timingParams: BeatEffectTimingParams,
)

/** Timing parameters of the overall haptic beat effect */
@Stable
data class BeatEffectTimingParams(
    val beatDurationMillis: Float = 0f,
    val timeToFirstPulseMillis: Float = 0f,
    val timeToSecondPulseMillis: Float = 0f,
    val beatDelayMillis: Float = 0f,
) {
    companion object {
        val Empty = BeatEffectTimingParams()
    }
}
