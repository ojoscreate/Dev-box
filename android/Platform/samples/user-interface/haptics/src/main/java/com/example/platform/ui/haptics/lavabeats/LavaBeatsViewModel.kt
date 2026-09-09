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

import android.annotation.SuppressLint
import android.app.Application
import android.os.Build
import android.os.Vibrator
import android.os.vibrator.VibratorFrequencyProfile
import androidx.annotation.RequiresApi
import androidx.compose.runtime.State
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.core.content.ContextCompat
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import com.example.platform.ui.haptics.R
import kotlin.time.Duration.Companion.milliseconds
import kotlin.time.TimeSource
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

/**
 * The view model that encapsulates business logic to modify the parameters of the haptic beat
 * effect, play the effect, and control the corresponding visualization.
 */
class LavaBeatsViewModel(
    val messageToUser: String,
    val supportsHapticBeatEffect: Boolean,
    private val vibrator: Vibrator,
) : ViewModel() {

    // Haptic beat effect state variables
    val beatParameters = mutableStateListOf<BeatParameter>()

    // This is safely used by checks on supportsBeatHapticEffect
    @RequiresApi(Build.VERSION_CODES.BAKLAVA)
    private val vibratorFrequencyProfile: VibratorFrequencyProfile? = vibrator.frequencyProfile

    // This is safely checked by supportsBeatHapticEffect
    @SuppressLint("NewApi")
    private val vibratorFrequencyRange: ClosedFloatingPointRange<Float>? =
        if (supportsHapticBeatEffect) {
            vibratorFrequencyProfile?.let { it.minFrequencyHz..it.maxFrequencyHz }
        } else {
            null
        }

    // This is safely checked by supportsBeatHapticEffect
    @SuppressLint("NewApi")
    private val beatEffect = derivedStateOf {
        if (supportsHapticBeatEffect) {
            LavaBeatsHapticHelper.createEnvelopeBeatEffect(beatParameters = beatParameters)
        } else {
            null
        }
    }

    val beatTimingParams = derivedStateOf {
        beatEffect.value?.timingParams ?: BeatEffectTimingParams.Empty
    }

    // UI state control variables
    private val _isVibrating = mutableStateOf(false)
    val isVibrating: State<Boolean> = _isVibrating

    private val _showVisualization = mutableStateOf(true)
    val showVisualization: State<Boolean> = _showVisualization

    private val _showSettings = mutableStateOf(false)
    val showSettings: State<Boolean> = _showSettings

    // Visualization pulsing effect variables
    private val timeSource = TimeSource.Monotonic
    private val _pulseTime = mutableFloatStateOf(0f)
    val pulseTime: State<Float> = _pulseTime
    private var pulseTimeJob: Job? = null

    init {
        setDefaultParameters()
        updateFrequencyRanges()
    }

    fun setDefaultParameters() {
        beatParameters.clear()
        beatParameters.addAll(DEFAULT_PARAMETERS)
    }

    fun updateFrequencyRanges() {
        if (vibratorFrequencyRange != null) {
            beatParameters.forEachIndexed { i, parameter ->
                if (parameter.isFrequencyType) {
                    val value = parameter.value.coerceIn(vibratorFrequencyRange)
                    val newParameter = parameter.copy(value = value, range = vibratorFrequencyRange)
                    beatParameters[i] = newParameter
                }
            }
        }
    }

    fun onToggleShowSettings() {
        _showSettings.value = !_showSettings.value
    }

    fun onToggleVisualization() {
        if (supportsHapticBeatEffect) {
            _showVisualization.value = !_showVisualization.value
        }
    }

    fun onSettingChanged(key: Int, settingValue: Float) {
        val range = beatParameters[key].range
        beatParameters[key] = beatParameters[key].copy(value = settingValue.coerceIn(range))
    }

    fun playHaptics() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.S) return

        beatEffect.value?.let {
            viewModelScope.launch {
                beginPulseTime()
                vibrator.vibrate(it.vibrationEffect)
                _isVibrating.value = true
                delay(it.totalDurationEstimateMillis.toLong().milliseconds)
                _isVibrating.value = false
                endPulseTime()
            }
        }
    }

    private fun beginPulseTime() {
        pulseTimeJob = viewModelScope.launch {
            val beginTime = timeSource.markNow()
            while (true) {
                val time = beginTime.elapsedNow().inWholeMilliseconds
                _pulseTime.floatValue = time / 1_000f
                delay(10L.milliseconds)
            }
        }
    }

    private fun endPulseTime() {
        pulseTimeJob?.cancel()
        pulseTimeJob = null
        _pulseTime.floatValue = 0f
    }

    companion object {

        private val DEFAULT_PARAMETERS =
            listOf(
                BeatParameter(
                    description = "First pulse starting frequency (Hz)",
                    value = 70f,
                    isFrequencyType = true,
                ),
                BeatParameter(
                    description = "First pulse end frequency (Hz)",
                    value = 90f,
                    isFrequencyType = true,
                ),
                BeatParameter(
                    description = "First pulse duration (ms)",
                    value = 16f,
                    range = 1f..500f,
                ),
                BeatParameter(description = "First pulse amplitude", value = 0.4f, range = 0f..1f),
                BeatParameter(
                    description = "Second pulse frequency (Hz)",
                    value = 80f,
                    isFrequencyType = true,
                ),
                BeatParameter(description = "Second pulse amplitude", value = 0.5f, range = 0f..1f),
                BeatParameter(
                    description = "First to second pulse delay (ms)",
                    value = 280f,
                    range = 1f..500f,
                ),
                BeatParameter(
                    description = "Beats per minute",
                    value = 60f,
                    range = 1f..120f,
                    steps = 1,
                ),
                BeatParameter(
                    description = "Number of beats",
                    value = 5f,
                    range = 1f..7f,
                    steps = 5,
                ),
            )

        fun provideFactory(application: Application): ViewModelProvider.Factory =
            object : ViewModelProvider.Factory {
                @Suppress("UNCHECKED_CAST")
                override fun <T : ViewModel> create(modelClass: Class<T>): T {
                    val vibrator =
                        ContextCompat.getSystemService(
                            /*context = */ application,
                            /*serviceClass = */ Vibrator::class.java,
                        )!!

                    var messageToUser: String
                    var supportsHapticBeatEffect: Boolean
                    if (
                        Build.VERSION.SDK_INT >= Build.VERSION_CODES.BAKLAVA &&
                            vibrator.areEnvelopeEffectsSupported()
                    ) {
                        supportsHapticBeatEffect = true
                        messageToUser = ""
                    } else {
                        supportsHapticBeatEffect = false
                        messageToUser = application.getString(R.string.message_not_supported)
                    }

                    val viewModel =
                        LavaBeatsViewModel(messageToUser, supportsHapticBeatEffect, vibrator)

                    return viewModel as T
                }
            }
    }
}
