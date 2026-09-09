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

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.example.platform.ui.haptics.R
import com.example.platform.ui.haptics.components.Screen

@Composable
fun LavaBeatsRoute(viewModel: LavaBeatsViewModel) {
    LavaBeatsScreen(viewModel)
}

@Composable
fun LavaBeatsScreen(viewModel: LavaBeatsViewModel) {
    val isVibrating by viewModel.isVibrating
    val pulseTime by viewModel.pulseTime
    val showVisualization by viewModel.showVisualization
    val supportsPlayback = viewModel.supportsHapticBeatEffect
    val timingParams by viewModel.beatTimingParams
    val showSettings by viewModel.showSettings
    val animatedShaderFraction by
        animateFloatAsState(
            targetValue = if (showSettings) 0.35f else 0.7f,
            animationSpec = tween(durationMillis = 350),
            label = "shaderHeightFraction",
        )
    val scrollState = rememberScrollState()

    LaunchedEffect(showSettings) {
        if (!showSettings) {
            scrollState.animateScrollTo(0)
        }
    }

    Screen(
        pageTitle = stringResource(R.string.lava_beats),
        messageToUser = viewModel.messageToUser,
        scrollState = scrollState,
    ) {
        BoxWithConstraints(modifier = Modifier.fillMaxSize()) {
            val shaderHeight = maxHeight * animatedShaderFraction

            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(8.dp),
                modifier =
                    Modifier.fillMaxSize()
                        .verticalScroll(scrollState)
                        .padding(top = 16.dp, bottom = 16.dp),
            ) {
                Box(modifier = Modifier.fillMaxWidth().height(shaderHeight)) {
                    if (showVisualization) {
                        LavaBeatsGraphics(
                            beatEffectTimingParams = timingParams,
                            pulse = isVibrating,
                            pulseTime = pulseTime,
                        )
                    }
                }

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.Absolute.SpaceAround,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Button(
                        onClick = { viewModel.playHaptics() },
                        enabled = !isVibrating && supportsPlayback,
                    ) {
                        Text("Play Haptics")
                    }
                    VisualizationSwitch(viewModel = viewModel)
                }

                LavaBeatsSettings(
                    viewModel,
                    showSettings,
                    onToggleShowSettings = viewModel::onToggleShowSettings,
                )
            }
        }
    }
}

@Composable
fun VisualizationSwitch(viewModel: LavaBeatsViewModel) {
    val showVisualization by viewModel.showVisualization

    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text("Toggle visualization:")
        Switch(
            checked = showVisualization,
            onCheckedChange = { viewModel.onToggleVisualization() },
        )
    }
}
