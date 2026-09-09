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

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.ime
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.ArrowDropUp
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Slider
import androidx.compose.material3.SliderDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp

@Composable
fun LavaBeatsSettings(
    viewModel: LavaBeatsViewModel,
    showSettings: Boolean,
    onToggleShowSettings: () -> Unit,
) {
    Card(
        colors =
            CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.surfaceContainerHigh
            ),
        modifier = Modifier.fillMaxWidth().padding(horizontal = 8.dp),
    ) {
        val parameters = viewModel.beatParameters
        val isVibrating by viewModel.isVibrating
        val supportsPlayback = viewModel.supportsHapticBeatEffect

        Column(modifier = Modifier.padding(8.dp)) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween,
                modifier = Modifier.fillMaxWidth(),
            ) {
                Text("Settings", fontWeight = FontWeight.Bold)
                IconButton(onClick = onToggleShowSettings) {
                    val imageVector: ImageVector
                    val contentDescription: String
                    if (showSettings) {
                        imageVector = Icons.Default.ArrowDropUp
                        contentDescription = "Close settings"
                    } else {
                        imageVector = Icons.Default.ArrowDropDown
                        contentDescription = "Open settings"
                    }
                    Icon(imageVector, contentDescription)
                }
            }

            AnimatedVisibility(showSettings) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    parameters.forEachIndexed { i, parameter ->
                        key(i) {
                            LavaBeatsSetting(
                                settingValue = parameter.value,
                                settingRange = parameter.range,
                                steps = parameter.steps,
                                enabled = !isVibrating && supportsPlayback,
                                onSettingChange = { newValue ->
                                    viewModel.onSettingChanged(i, newValue)
                                },
                                label = { Text(parameter.description) },
                            )
                        }
                    }

                    Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                        Button(
                            enabled = !isVibrating,
                            onClick = {
                                viewModel.setDefaultParameters()
                                viewModel.updateFrequencyRanges()
                            },
                        ) {
                            Text("Reset")
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun LavaBeatsSetting(
    settingValue: Float,
    settingRange: ClosedFloatingPointRange<Float>,
    steps: Int,
    enabled: Boolean,
    onSettingChange: (Float) -> Unit,
    label: @Composable () -> Unit = { Text("Setting:") },
) {
    val density = LocalDensity.current
    val focusManager = LocalFocusManager.current
    val isKeyboardVisible = WindowInsets.ime.getBottom(density) > 0

    var draftText by remember { mutableStateOf(settingValue.toClearFormat()) }
    var isTextFieldFocused by remember { mutableStateOf(false) }

    LaunchedEffect(isKeyboardVisible) {
        if (!isKeyboardVisible && isTextFieldFocused) {
            focusManager.clearFocus()
        }
    }

    Row(
        modifier = Modifier.fillMaxWidth().padding(8.dp),
        horizontalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Box(
            contentAlignment = Alignment.CenterStart,
            modifier = Modifier.align(Alignment.CenterVertically).weight(2f),
        ) {
            label()
        }
        Slider(
            value = settingValue,
            onValueChange = { onSettingChange(it) },
            valueRange = settingRange,
            steps = steps,
            enabled = enabled,
            colors =
                SliderDefaults.colors(
                    activeTrackColor = MaterialTheme.colorScheme.primary,
                    inactiveTrackColor = MaterialTheme.colorScheme.primary.copy(alpha = 0.25f),
                ),
            modifier = Modifier.align(Alignment.CenterVertically).weight(2f),
        )
        TextField(
            value = if (isTextFieldFocused) draftText else settingValue.toClearFormat(),
            onValueChange = { draftText = it },
            keyboardOptions =
                KeyboardOptions(
                    keyboardType = KeyboardType.Decimal,
                    imeAction = ImeAction.Done,
                ),
            keyboardActions = KeyboardActions(onDone = { focusManager.clearFocus() }),
            enabled = enabled,
            modifier =
                Modifier.align(Alignment.CenterVertically).weight(1.5f).onFocusChanged { focusState
                    ->
                    if (focusState.isFocused) {
                        draftText = settingValue.toClearFormat()
                        isTextFieldFocused = true
                    } else if (isTextFieldFocused) {
                        isTextFieldFocused = false
                        draftText
                            .toFloatOrNull()
                            ?.takeIf { it in settingRange }
                            ?.let { onSettingChange(it) }
                    }
                },
        )
    }
}

private fun Float.toClearFormat(): String = "%.2f".format(this)
