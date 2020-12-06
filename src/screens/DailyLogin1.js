import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import Svg, { Path, Defs, Mask } from "react-native-svg";

function DailyLogin1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <ImageBackground
          style={styles.background}
          imageStyle={styles.background_imageStyle}
          source={require("../assets/images/Gradient_TmilAqy.png")}
        >
          <View style={styles.gameCardStackStack}>
            <View style={styles.gameCardStack}>
              <View style={styles.gameCard}>
                <View style={styles.tournament}>
                  <View style={styles.tournament1ColumnRow}>
                    <View style={styles.tournament1Column}>
                      <Text style={styles.tournament1}>Tournament</Text>
                      <Text style={styles.manyRoundsAndCool}>
                        Many rounds and cool prizes
                      </Text>
                    </View>
                    <View style={styles.dropdown}>
                      <View style={styles.rectangleCopy33}>
                        <Svg viewBox="0 0 24 10.29" style={styles.path17Copy3}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(74,100,149,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M1.60 10.29 L22.40 10.29 C23.20 10.29 23.40 9.76 22.79 9.24 L13.32 1.05 C12.72 0.52 11.50 0.52 10.89 1.04 L1.22 9.25 C0.61 9.77 0.80 10.29 1.60 10.29 Z"
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.rectangle4}>
                  <View style={styles.maleHand1Row}>
                    <View style={styles.maleHand1}>
                      <View style={styles.fill110Stack}>
                        <Svg viewBox="0 0 63.91 116.15" style={styles.fill110}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(251,195,153,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M50.81 115.61 C46.80 114.20 22.74 102.77 23.01 98.29 C25.62 53.84 3.33 17.23 2.89 16.79 C-0.94 12.98 -0.97 6.76 2.82 2.91 C6.61 -0.94 12.77 -0.98 16.60 2.83 C18.66 4.88 66.90 53.53 63.76 106.91 C63.44 112.33 58.82 116.46 53.45 116.13 C52.53 116.08 51.64 115.90 50.81 115.61 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 61.2 115.79" style={styles.fill33}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M58.02 112.97 C57.10 112.91 56.21 112.73 55.38 112.44 C51.37 111.03 27.31 99.61 27.58 95.12 C30.19 50.68 7.90 14.07 7.46 13.63 C3.72 9.89 3.62 3.87 7.16 0.00 C5.57 0.44 4.07 1.29 2.82 2.55 C-0.97 6.40 -0.94 12.62 2.89 16.43 C3.33 16.87 25.62 53.48 23.01 97.93 C22.74 102.41 46.80 113.84 50.81 115.25 C51.64 115.54 52.53 115.72 53.45 115.78 C56.49 115.96 59.28 114.71 61.20 112.62 C60.19 112.90 59.12 113.03 58.02 112.97 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 24.25 25.34" style={styles.fill53}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M3.27 25.07 C1.31 24.38 -0.06 22.48 0.00 20.29 L0.29 10.71 C0.34 8.78 1.52 7.06 3.29 6.32 L17.50 0.38 C19.99 -0.66 22.84 0.52 23.87 3.03 C24.91 5.53 23.73 8.40 21.24 9.44 L9.94 14.17 L9.75 20.58 C9.67 23.29 7.42 25.42 4.73 25.34 C4.22 25.33 3.73 25.23 3.27 25.07 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 35.02 36.64" style={styles.fill72}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(251,195,153,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M13.73 36.64 C24.63 35.88 39.48 29.37 33.74 20.80 C24.37 6.83 11.17 -3.49 1.87 1.11 C1.87 1.11 -1.22 9.00 0.54 15.40 C15.63 23.17 13.73 36.64 13.73 36.64 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 15.8 21.28" style={styles.fill92}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M13.55 8.13 C11.62 4.86 5.13 -0.48 0.00 0.04 C15.09 7.80 13.18 21.28 13.18 21.28 C15.94 21.08 17.18 14.28 13.55 8.13 "
                          ></Path>
                        </Svg>
                        <View style={styles.group131}>
                          <View style={styles.clip121Stack}>
                            <Svg
                              viewBox="0 0 28.93 34.82"
                              style={styles.clip121}
                            >
                              <Path
                                strokeWidth={0}
                                fill="transparent"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.00 0.00 L28.93 0.00 L28.93 34.82 L0.00 34.82 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 28.93 34.82"
                              style={styles.fill113}
                            >
                              <Defs>
                                <Mask
                                  id="iZERoi"
                                  x={0}
                                  y={0}
                                  width={28}
                                  height={34}
                                >
                                  <Path
                                    d="M0.00 0.00 L28.93 0.00 L28.93 34.82 L0.00 34.82 Z"
                                    fill="white"
                                  />
                                </Mask>
                              </Defs>
                              <Path
                                strokeWidth={0}
                                fill="rgba(251,195,153,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                mask="url(#iZERoi)"
                                d="M5.79 34.54 C4.58 34.12 3.53 33.21 2.96 31.95 C2.23 30.35 -3.89 16.12 3.96 7.50 C11.32 -0.58 23.78 -0.01 24.31 0.02 C27.00 0.16 29.06 2.47 28.92 5.18 C28.78 7.88 26.49 9.96 23.81 9.82 C21.47 9.72 14.65 10.29 11.14 14.14 C8.37 17.18 10.45 24.84 11.83 27.86 C12.95 30.33 11.87 33.24 9.42 34.37 C8.23 34.92 6.93 34.94 5.79 34.54 "
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <Svg viewBox="0 0 11.04 31.94" style={styles.fill142}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M8.52 30.11 C7.31 29.68 6.26 28.78 5.69 27.51 C4.96 25.92 -1.16 11.69 6.69 3.07 C7.79 1.86 9.00 0.85 10.27 0.00 C8.02 1.09 5.83 2.58 3.96 4.63 C-3.89 13.25 2.23 27.48 2.96 29.07 C3.53 30.34 4.58 31.24 5.79 31.67 C6.93 32.07 8.23 32.05 9.42 31.50 C10.06 31.20 10.60 30.78 11.04 30.28 C10.19 30.44 9.32 30.39 8.52 30.11 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 12.52 3.23" style={styles.fill161}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M11.36 0.09 C9.29 -0.01 3.68 0.44 0.00 3.23 C3.31 1.82 7.03 1.58 8.63 1.65 C10.17 1.72 11.57 1.07 12.52 0.00 C12.15 0.07 11.76 0.11 11.36 0.09 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 28.7 32.14" style={styles.fill182}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M24.74 0.12 C20.77 0.80 7.71 3.84 3.38 9.18 C1.08 12.17 -0.03 15.72 0.00 19.55 C0.63 24.44 2.37 28.46 2.73 29.27 C3.31 30.54 4.35 31.44 5.56 31.86 C6.71 32.27 8.00 32.24 9.19 31.69 C11.13 30.80 12.18 28.80 12.00 26.78 C10.44 24.00 9.70 21.40 9.83 19.17 C9.34 16.23 9.39 13.14 10.92 11.46 C14.42 7.61 21.24 7.04 23.58 7.15 C26.26 7.28 28.55 5.21 28.69 2.50 C28.72 1.87 28.63 1.27 28.45 0.70 C27.35 0.08 26.03 -0.17 24.74 0.12 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 29.32 37.93" style={styles.fill203}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(251,195,153,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M7.71 37.66 C6.78 37.33 5.94 36.72 5.33 35.85 C-1.04 26.75 -1.74 17.28 3.45 10.53 C7.65 5.06 19.53 1.24 23.07 0.20 C25.66 -0.56 28.37 0.93 29.12 3.54 C29.87 6.14 28.39 8.86 25.80 9.62 C19.98 11.34 12.70 14.53 11.16 16.54 C8.69 19.75 9.47 24.72 13.30 30.20 C14.85 32.42 14.32 35.48 12.12 37.04 C10.79 37.99 9.14 38.16 7.71 37.66 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 29.08 27.6" style={styles.fill222}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(251,195,153,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M3.27 27.33 C1.41 26.68 0.06 24.92 0.00 22.82 C-0.07 20.12 2.05 17.86 4.74 17.79 C6.85 17.72 13.08 16.93 16.48 14.09 C19.79 11.33 19.31 5.51 19.30 5.45 C19.01 2.76 20.94 0.33 23.61 0.03 C26.29 -0.27 28.70 1.67 29.00 4.37 C29.05 4.82 30.13 15.45 22.70 21.65 C16.11 27.16 6.12 27.57 5.00 27.60 C4.40 27.62 3.81 27.52 3.27 27.33 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 24.57 8.78" style={styles.fill242}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 6.47 C0.00 6.47 0.63 7.86 2.49 8.51 C3.03 8.70 3.62 8.80 4.22 8.78 C5.34 8.75 15.33 8.34 21.92 2.83 C22.96 1.96 23.83 1.00 24.57 0.00 C17.97 5.23 4.15 8.86 0.00 6.47 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 4.04 3.22"
                          style={styles.stroke26}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L2.61 1.79 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 2.1 4.53"
                          style={styles.stroke281}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L0.67 3.11 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 3.03 4.17"
                          style={styles.stroke302}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L1.60 2.74 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 3.03 4.17"
                          style={styles.stroke322}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L1.60 2.74 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 3.03 4.17"
                          style={styles.stroke341}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L1.60 2.74 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 3.43 3.89"
                          style={styles.stroke361}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L2.00 2.46 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 3.03 4.17"
                          style={styles.stroke381}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L1.60 2.74 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 1.99 4.56"
                          style={styles.stroke401}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L0.57 3.13 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 1.99 4.56"
                          style={styles.stroke421}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L0.57 3.13 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 1.99 4.56"
                          style={styles.stroke441}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L0.57 3.13 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 2.93 4.23"
                          style={styles.stroke461}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L1.50 2.80 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 2.05 4.55"
                          style={styles.stroke481}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.63 0.00 L0.00 3.12 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 2.05 4.55"
                          style={styles.stroke501}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.63 0.00 L0.00 3.12 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 1.55 4.61"
                          style={styles.stroke521}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.06 0.00 L0.06 3.18 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 2.49 4.42"
                          style={styles.stroke541}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M1.06 0.00 L0.00 2.99 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 2.05 4.55"
                          style={styles.stroke561}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.63 0.00 L0.00 3.12 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 2.05 4.55"
                          style={styles.stroke581}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.63 0.00 L0.00 3.12 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 2.05 4.55"
                          style={styles.stroke601}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.63 0.00 L0.00 3.12 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 2.05 4.55"
                          style={styles.stroke621}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.63 0.00 L0.00 3.12 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 3.21 4.05"
                          style={styles.stroke641}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M1.79 0.00 L0.00 2.62 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 3.87 3.45"
                          style={styles.stroke661}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L2.44 2.02 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 3.87 3.45"
                          style={styles.stroke681}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L2.44 2.02 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 3.87 3.45"
                          style={styles.stroke701}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.00 L2.44 2.02 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 8.96 6.01"
                          style={styles.stroke721}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.53 L4.57 0.02 C5.07 -0.04 5.58 0.05 6.03 0.27 C7.56 1.01 8.01 2.99 6.96 4.34 L6.76 4.59 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.36 -0.36 8.05 5.94"
                          style={styles.stroke74}
                        >
                          <Path
                            strokeWidth={0.714}
                            fill="transparent"
                            stroke="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M6.62 4.52 L5.16 1.58 C4.94 1.10 4.59 0.70 4.15 0.43 C2.67 -0.51 0.70 0.17 0.11 1.83 L0.00 2.14 "
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                    <View style={styles.fightBattleColumn}>
                      <Text style={styles.fightBattle}>FIGHT BATTLE</Text>
                      <View style={styles.prizesRow}>
                        <Text style={styles.prizes}>Prizes</Text>
                        <Text style={styles.style3}>2</Text>
                        <View style={styles.coin3}>
                          <View style={styles.fill19Stack}>
                            <Svg
                              viewBox="0 0 17.02 16.81"
                              style={styles.fill19}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(255,215,21,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.00 8.41 C0.00 3.76 3.81 0.00 8.51 0.00 C13.21 0.00 17.02 3.76 17.02 8.41 C17.02 13.05 13.21 16.81 8.51 16.81 C3.81 16.81 0.00 13.05 0.00 8.41 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 14.45 14.27"
                              style={styles.fill45}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(255,204,1,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.00 7.13 C0.00 3.19 3.23 0.00 7.22 0.00 C11.21 0.00 14.45 3.19 14.45 7.13 C14.45 11.07 11.21 14.27 7.22 14.27 C3.23 14.27 0.00 11.07 0.00 7.13 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 13.31 13.21"
                              style={styles.fill66}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(252,189,17,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M9.87 0.00 C10.59 1.11 11.00 2.43 11.00 3.84 C11.00 7.78 7.77 10.98 3.78 10.98 C2.39 10.98 1.10 10.59 0.00 9.92 C1.28 11.90 3.53 13.21 6.09 13.21 C10.08 13.21 13.31 10.02 13.31 6.08 C13.31 3.51 11.93 1.26 9.87 0.00 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 11.91 10.14"
                              style={styles.fill87}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(255,219,83,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.47 7.00 C0.47 3.52 3.33 0.70 6.85 0.70 C8.91 0.70 10.74 1.66 11.90 3.16 C10.80 1.27 8.74 0.00 6.38 0.00 C2.85 0.00 0.00 2.82 0.00 6.30 C0.00 7.74 0.49 9.07 1.32 10.14 C0.78 9.21 0.47 8.14 0.47 7.00 "
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <Text style={styles.style4}>5</Text>
                        <View style={styles.cristal}>
                          <View style={styles.group31Stack}>
                            <View style={styles.group31}>
                              <View style={styles.clip21Stack}>
                                <Svg
                                  viewBox="0 0 16.64 16.28"
                                  style={styles.clip21}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="transparent"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.00 0.00 L16.64 0.00 L16.64 16.28 L0.00 16.28 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 16.64 16.28"
                                  style={styles.fill18}
                                >
                                  <Defs>
                                    <Mask
                                      id="fPIUFG"
                                      x={0}
                                      y={0}
                                      width={16}
                                      height={16}
                                    >
                                      <Path
                                        d="M0.00 0.00 L16.64 0.00 L16.64 16.28 L0.00 16.28 Z"
                                        fill="white"
                                      />
                                    </Mask>
                                  </Defs>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(190,117,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    mask="url(#fPIUFG)"
                                    d="M16.49 7.79 C16.69 7.98 16.69 8.29 16.49 8.48 L8.67 16.13 C8.48 16.32 8.16 16.32 7.97 16.13 L0.15 8.48 C-0.05 8.29 -0.05 7.98 0.15 7.79 L7.97 0.14 C8.16 -0.05 8.48 -0.05 8.67 0.14 L16.49 7.79 Z"
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                            <Svg viewBox="0 0 10.48 9.25" style={styles.path11}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(254,185,235,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.32 7.03 L0.00 5.24 L7.42 0.00 L9.03 1.58 L1.32 7.03 Z M10.48 3.00 L1.64 9.25 L1.14 8.56 L9.86 2.39 L10.48 3.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="0 0 12.69 8.14" style={styles.fill65}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(160,97,255,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M2.23 4.52 L5.78 8.00 C5.97 8.19 6.29 8.19 6.49 7.99 L11.51 3.08 L12.69 0.00 L0.00 0.00 L2.23 4.52 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="0 0 8.06 8.06" style={styles.fill86}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(159,72,255,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M8.06 0.00 C8.02 0.02 7.99 0.04 7.97 0.07 L0.15 7.72 C0.05 7.81 0.00 7.94 0.00 8.06 L5.39 8.06 L8.06 0.00 Z"
                              ></Path>
                            </Svg>
                            <View style={styles.group12}>
                              <View style={styles.clip11Stack}>
                                <Svg
                                  viewBox="0 0 8.06 8.06"
                                  style={styles.clip11}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="transparent"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.00 0.00 L8.06 0.00 L8.06 8.06 L0.00 8.06 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 8.06 8.06"
                                  style={styles.fill101}
                                >
                                  <Defs>
                                    <Mask
                                      id="meopfd"
                                      x={0}
                                      y={0}
                                      width={8}
                                      height={8}
                                    >
                                      <Path
                                        d="M0.00 0.00 L8.06 0.00 L8.06 8.06 L0.00 8.06 Z"
                                        fill="white"
                                      />
                                    </Mask>
                                  </Defs>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(215,131,235,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    mask="url(#meopfd)"
                                    d="M2.66 8.06 L8.06 8.06 C8.06 7.94 8.01 7.81 7.91 7.72 L0.09 0.07 C0.06 0.04 0.03 0.02 0.00 0.00 L2.66 8.06 Z"
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                            <Svg viewBox="0 0 8.06 8.06" style={styles.fill132}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(139,56,214,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.97 8.00 C7.99 8.02 8.02 8.04 8.06 8.06 L5.39 0.00 L0.00 0.00 C0.00 0.13 0.05 0.25 0.15 0.35 L7.97 8.00 Z"
                              ></Path>
                            </Svg>
                            <View style={styles.group17}>
                              <View style={styles.clip16Stack}>
                                <Svg
                                  viewBox="0 0 8.06 8.06"
                                  style={styles.clip16}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="transparent"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.00 0.00 L8.06 0.00 L8.06 8.06 L0.00 8.06 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 8.06 8.06"
                                  style={styles.fill152}
                                >
                                  <Defs>
                                    <Mask
                                      id="VqM5wf"
                                      x={0}
                                      y={0}
                                      width={8}
                                      height={8}
                                    >
                                      <Path
                                        d="M0.00 0.00 L8.06 0.00 L8.06 8.06 L0.00 8.06 Z"
                                        fill="white"
                                      />
                                    </Mask>
                                  </Defs>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(133,54,205,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    mask="url(#VqM5wf)"
                                    d="M2.66 0.00 L0.00 8.06 C0.03 8.04 0.06 8.02 0.09 7.99 L7.91 0.35 C8.01 0.25 8.06 0.13 8.06 0.00 Z"
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                            <Svg viewBox="0 0 2.46 2.41" style={styles.fill181}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(255,255,255,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M2.46 1.20 C1.69 1.45 1.48 1.65 1.23 2.41 C0.98 1.65 0.78 1.45 0.00 1.20 C0.78 0.96 0.98 0.76 1.23 0.00 C1.48 0.76 1.69 0.96 2.46 1.20 "
                              ></Path>
                            </Svg>
                            <Svg viewBox="0 0 1.34 1.31" style={styles.fill202}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(255,255,255,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.34 0.65 C0.92 0.79 0.80 0.90 0.67 1.31 C0.53 0.90 0.42 0.79 0.00 0.65 C0.42 0.52 0.53 0.41 0.67 0.00 C0.80 0.41 0.92 0.52 1.34 0.65 "
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.group5Stack}>
                      <View style={styles.group5}>
                        <View style={styles.group6}>
                          <View style={styles.group9}></View>
                        </View>
                      </View>
                      <View style={styles.entry6}>
                        <View style={styles.rectangleCopy26}>
                          <View style={styles.entry7Row}>
                            <Text style={styles.entry7}>Entry</Text>
                            <Text style={styles.style5}>1</Text>
                            <View style={styles.fill17Stack}>
                              <Svg
                                viewBox="0 0 17.02 16.81"
                                style={styles.fill17}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,215,21,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.00 8.41 C0.00 3.76 3.81 0.00 8.51 0.00 C13.21 0.00 17.02 3.76 17.02 8.41 C17.02 13.05 13.21 16.81 8.51 16.81 C3.81 16.81 0.00 13.05 0.00 8.41 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 14.45 14.27"
                                style={styles.fill44}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,204,1,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.00 7.13 C0.00 3.19 3.23 0.00 7.22 0.00 C11.21 0.00 14.45 3.19 14.45 7.13 C14.45 11.07 11.21 14.27 7.22 14.27 C3.23 14.27 0.00 11.07 0.00 7.13 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 13.31 13.21"
                                style={styles.fill64}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(252,189,17,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M9.87 0.00 C10.59 1.11 11.00 2.43 11.00 3.84 C11.00 7.78 7.77 10.98 3.78 10.98 C2.39 10.98 1.10 10.59 0.00 9.92 C1.28 11.90 3.53 13.21 6.09 13.21 C10.08 13.21 13.31 10.02 13.31 6.08 C13.31 3.51 11.93 1.26 9.87 0.00 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 11.91 10.14"
                                style={styles.fill85}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,219,83,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.47 7.00 C0.47 3.52 3.33 0.70 6.85 0.70 C8.91 0.70 10.74 1.66 11.90 3.16 C10.80 1.27 8.74 0.00 6.38 0.00 C2.85 0.00 0.00 2.82 0.00 6.30 C0.00 7.74 0.49 9.07 1.32 10.14 C0.78 9.21 0.47 8.14 0.47 7.00 "
                                ></Path>
                              </Svg>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                style={styles.darkBack}
                imageStyle={styles.darkBack_imageStyle}
                source={require("../assets/images/Gradient_sfrDORI.png")}
              >
                <View style={styles.popUp}>
                  <View style={styles.group27Stack}>
                    <View style={styles.group27}>
                      <View style={styles.whiteBack}></View>
                    </View>
                    <Text style={styles.welcomeToEpicRps}>
                      Welcome To Epic RPS. Login to daily progress through the
                      Calendar and claim your prizes!
                    </Text>
                    <Text style={styles.dailyLogin}>Daily Login</Text>
                    <View style={styles.button}>
                      <View style={styles.rectangleCopy11}>
                        <View style={styles.rectangle8Stack}>
                          <View style={styles.rectangle8}>
                            <Text style={styles.ok}>OK</Text>
                          </View>
                          <Text style={styles.ok1}>OK</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rectangle9}>
                      <View style={styles.style22Row}>
                        <View style={styles.style22}>
                          <View style={styles.rectangle26Stack}>
                            <View style={styles.rectangle26}>
                              <View style={styles.character15}>
                                <View style={styles.fill131Stack}>
                                  <Svg
                                    viewBox="0 0 25.89 28.66"
                                    style={styles.fill131}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(238,65,60,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M10.02 0.33 C4.33 1.42 -0.61 6.96 0.06 14.33 C0.74 21.71 6.82 30.69 20.47 28.26 C26.14 26.94 25.61 20.93 25.35 17.96 C25.08 14.99 27.43 9.80 24.03 4.81 C20.64 -0.17 14.03 -0.45 10.02 0.33 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 13 11.05"
                                    style={styles.fill415}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.10 0.52 C-0.83 1.96 -0.80 8.03 2.85 10.00 C6.51 11.97 11.82 10.85 12.69 9.28 C14.00 6.91 10.93 2.57 7.92 1.02 C5.37 -0.29 3.59 -0.20 2.10 0.52 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 9.34 7.89"
                                    style={styles.fill618}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.61 0.40 C-0.62 1.48 -0.62 5.59 2.16 7.08 C4.94 8.58 8.52 7.77 9.16 6.57 C9.91 5.17 8.31 1.95 6.03 0.77 C4.09 -0.22 2.74 -0.15 1.61 0.40 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.31 11.45"
                                    style={styles.fill824}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M6.76 9.35 C6.59 7.35 7.57 4.34 7.25 1.06 C6.61 0.02 5.52 -0.40 3.80 0.47 C1.97 1.39 -1.25 5.17 0.51 9.87 C1.16 11.59 4.56 12.17 6.44 10.25 C6.56 10.12 6.68 9.96 6.80 9.76 C6.79 9.62 6.78 9.48 6.76 9.35 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 5.69 8.29"
                                    style={styles.fill1010}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.51 0.34 C1.12 1.01 -0.90 3.60 0.44 7.03 C0.93 8.29 3.09 8.88 4.52 7.48 C6.01 6.03 6.74 -1.70 2.51 0.34 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.88 1.97"
                                    style={styles.fill125}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.86 1.82 C4.07 0.27 1.64 -0.68 0.07 0.58 C-0.08 0.70 0.03 0.97 0.24 0.91 C1.05 0.70 1.83 0.46 2.68 0.65 C3.51 0.83 4.19 1.31 4.67 1.93 C4.75 2.03 4.92 1.93 4.86 1.82 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.44 3.95"
                                    style={styles.fill148}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.31 3.81 C0.54 2.30 1.38 1.31 2.39 0.28 C2.51 0.16 2.39 -0.06 2.22 0.02 C0.85 0.66 0.13 2.29 0.00 3.78 C-0.02 3.99 0.28 4.01 0.31 3.81 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.03 3.16"
                                    style={styles.fill167}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.78 0.00 C1.26 0.05 0.82 0.63 0.54 1.03 C0.16 1.57 -0.19 2.19 0.11 2.85 C0.20 3.05 0.45 3.20 0.66 3.15 C1.34 2.97 1.59 2.36 1.79 1.72 C1.94 1.24 2.16 0.57 1.93 0.08 C1.90 0.02 1.84 -0.00 1.78 0.00 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 3.66 1.58"
                                    style={styles.fill1810}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.01 0.50 C0.25 0.95 0.96 1.18 1.46 1.34 C2.15 1.57 2.82 1.74 3.46 1.34 C3.66 1.21 3.71 0.94 3.60 0.75 C3.27 0.15 2.53 0.05 1.81 0.01 C1.27 -0.01 0.47 -0.03 0.06 0.33 C0.00 0.38 -0.02 0.44 0.01 0.50 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.88 5.92"
                                    style={styles.fill2012}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.87 4.36 C5.00 4.04 2.12 -0.33 1.14 0.02 C0.34 0.31 -0.28 5.85 0.13 5.92 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 9.34 5.53"
                                    style={styles.fill228}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.39 0.79 C2.49 1.33 -0.67 2.23 0.12 4.36 C0.81 6.19 4.38 5.49 5.67 4.80 C6.84 4.17 9.64 3.39 9.32 1.18 C8.99 -1.04 5.35 0.51 4.39 0.79 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.31 4.34"
                                    style={styles.fill249}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.43 0.62 C1.95 1.04 -0.52 1.75 0.10 3.42 C0.63 4.86 3.43 4.31 4.44 3.77 C5.35 3.28 7.55 2.67 7.29 0.92 C7.04 -0.82 4.19 0.40 3.43 0.62 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 3.66 4.34"
                                    style={styles.fill266}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.86 0.01 C0.26 0.22 -0.21 4.29 0.10 4.34 C0.41 4.39 3.56 3.43 3.65 3.20 C3.75 2.96 1.59 -0.24 0.86 0.01 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 6.09 2.76"
                                    style={styles.fill284}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.94 1.04 C2.39 1.18 0.48 0.94 0.13 1.51 C-0.23 2.09 -0.04 3.36 3.49 2.44 C7.02 1.51 6.16 0.11 5.46 0.01 C4.76 -0.09 2.94 1.04 2.94 1.04 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 0.81 1.58"
                                    style={styles.fill303}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 0.01 C0.09 0.53 0.19 1.07 0.36 1.58 C0.50 1.56 0.65 1.54 0.81 1.51 C0.68 1.01 0.52 0.51 0.39 0.00 C0.26 0.00 0.13 0.00 0.00 0.01 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.22 1.97"
                                    style={styles.fill323}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 0.19 C0.25 0.79 0.49 1.41 0.82 1.97 C0.96 1.92 1.10 1.86 1.22 1.80 C1.01 1.19 0.69 0.59 0.41 0.00 C0.27 0.06 0.13 0.13 0.00 0.19 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 0.41 0.39"
                                    style={styles.fill343}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.20 0.22 C0.23 0.22 0.23 0.18 0.20 0.18 C0.18 0.18 0.18 0.22 0.20 0.22 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.44 2.76"
                                    style={styles.fill363}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.87 0.21 C1.48 -0.10 0.84 -0.05 0.47 0.27 C-0.11 0.77 -0.16 1.64 0.34 2.22 C0.66 2.60 1.11 2.92 1.62 2.68 C1.93 2.54 2.21 2.16 2.33 1.84 C2.58 1.23 2.38 0.61 1.87 0.21 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.84 2.76"
                                    style={styles.fill383}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.01 0.04 C0.36 0.19 -0.11 0.81 0.02 1.50 C0.20 2.41 1.07 2.90 1.92 2.73 C2.69 2.57 3.02 1.77 2.75 1.06 C2.48 0.37 1.75 -0.14 1.01 0.04 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.83 1.58"
                                    style={styles.fill404}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.59 1.22 C2.01 0.90 1.83 0.41 1.38 0.21 C1.43 0.23 1.42 0.23 1.35 0.19 C1.26 0.14 1.17 0.10 1.08 0.06 C0.90 0.00 0.61 -0.02 0.42 0.01 C0.27 0.04 0.00 0.19 0.00 0.19 C0.00 0.19 0.04 0.50 0.11 0.81 C0.18 1.16 0.26 1.52 0.26 1.52 C0.26 1.52 0.58 1.59 0.75 1.58 C1.09 1.55 1.34 1.41 1.59 1.22 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.44 2.76"
                                    style={styles.fill423}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.50 0.26 C-0.28 0.88 -0.08 2.03 0.64 2.58 C0.91 2.79 1.33 2.83 1.63 2.66 C2.02 2.46 2.32 2.06 2.44 1.63 C2.22 1.12 1.95 0.60 1.64 0.08 C1.27 -0.06 0.86 -0.02 0.50 0.26 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.56 8.68"
                                    style={styles.fill444}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M7.00 2.28 C8.10 2.98 8.68 4.00 8.83 5.25 C8.93 6.12 8.71 7.30 9.11 8.10 C9.40 8.69 10.14 8.94 10.56 8.33 C10.57 8.32 10.56 8.31 10.54 8.31 C9.64 8.68 9.86 5.96 9.85 5.65 C9.84 4.99 9.78 4.34 9.56 3.71 C9.18 2.64 8.36 1.74 7.36 1.13 C6.26 0.47 4.96 0.16 3.68 0.07 C2.89 0.02 1.99 0.08 1.16 0.00 C0.75 0.37 0.36 0.77 0.00 1.20 C0.14 1.24 0.28 1.28 0.43 1.30 C2.68 1.75 4.93 0.95 7.00 2.28 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.47 10.66"
                                    style={styles.fill463}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.07 3.73 C-0.12 4.87 0.06 6.05 0.69 7.04 C0.99 7.52 1.39 7.92 1.82 8.30 C2.19 8.62 4.48 10.09 3.59 10.63 C3.58 10.64 3.59 10.66 3.60 10.66 C4.56 10.69 4.67 9.81 4.20 9.18 C3.66 8.47 2.82 7.98 2.22 7.33 C1.31 6.34 1.00 5.19 1.28 3.91 C1.61 2.39 2.65 1.42 3.62 0.36 C3.08 0.21 2.54 0.09 2.00 0.00 C1.98 0.01 1.97 0.03 1.96 0.05 C1.05 1.12 0.31 2.37 0.07 3.73 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.22 1.58"
                                    style={styles.fill504}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 1.56 C-0.01 1.57 0.01 1.58 0.02 1.58 C0.76 1.26 0.99 0.71 1.22 0.02 C0.97 0.01 0.72 0.00 0.47 0.00 C0.51 0.54 0.43 1.06 0.00 1.56 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.84 5.13"
                                    style={styles.fill523}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.50 5.12 C0.52 5.14 0.55 5.14 0.55 5.11 C0.59 4.10 0.47 3.19 0.94 2.23 C1.34 1.40 2.05 0.78 2.84 0.23 C2.64 0.15 2.43 0.07 2.22 0.00 C0.43 1.06 -0.71 3.42 0.50 5.12 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.72 1.97"
                                    style={styles.fill543}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.97 1.46 C2.80 1.58 6.18 0.17 7.39 1.90 C7.51 2.08 7.79 1.89 7.70 1.71 C7.14 0.60 6.05 0.36 4.88 0.27 C3.79 0.20 2.04 0.36 0.73 0.00 C0.47 0.42 0.22 0.85 0.00 1.31 C0.30 1.39 0.64 1.44 0.97 1.46 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 22.65 8.26"
                                    style={styles.fill564}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(238,65,60,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 8.26 C0.22 7.97 0.36 8.12 0.61 7.85 C3.00 5.23 6.26 3.34 9.81 2.53 C13.36 1.71 17.17 1.98 20.56 3.27 C21.37 3.58 21.91 3.90 22.65 4.35 C19.16 -0.23 13.10 -0.42 9.21 0.34 C5.12 1.14 1.52 3.81 0.00 8.26 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 20.31 6.32"
                                    style={styles.fill583}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(204,204,204,1)"
                                      d="M0.00 2.51 C3.33 5.44 8.35 7.14 15.35 5.91 C18.88 5.11 20.02 2.54 20.31 0.00 C18.08 3.18 16.36 4.15 11.76 4.53 C6.21 4.98 3.71 3.62 0.00 2.51 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <Text style={styles.day1}>Day 1</Text>
                            </View>
                            <Svg viewBox="0 0 10 8" style={styles.path34}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(75,160,71,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M9.89 0.59 C9.62 0.07 8.96 -0.15 8.42 0.11 C7.05 0.75 5.68 2.03 4.36 3.92 C4.17 4.20 3.99 4.46 3.83 4.72 C3.59 4.41 3.33 4.10 3.03 3.80 C2.37 3.12 1.78 2.70 1.75 2.68 C1.26 2.34 0.58 2.44 0.22 2.90 C-0.15 3.37 -0.04 4.03 0.45 4.37 C0.46 4.38 2.27 5.70 2.75 7.25 C2.88 7.67 3.26 7.96 3.72 8.00 C3.75 8.00 3.77 8.00 3.80 8.00 C4.23 8.00 4.62 7.77 4.80 7.39 C4.80 7.38 5.34 6.29 6.20 5.06 C7.29 3.52 8.39 2.46 9.38 1.99 C9.93 1.74 10.15 1.11 9.89 0.59 Z"
                              ></Path>
                            </Svg>
                            <View style={styles.rectangleCopy317}>
                              <Text style={styles.x15}>1x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style21}>
                          <View style={styles.rectangle25Stack}>
                            <View style={styles.rectangle25}>
                              <View style={styles.character14}>
                                <View style={styles.fill130Stack}>
                                  <Svg
                                    viewBox="0 0 10.25 3.58"
                                    style={styles.fill130}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,199,171,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M10.25 0.09 C10.21 0.03 10.19 0.00 10.19 0.00 L5.22 0.32 L0.05 0.01 C0.05 0.01 0.03 0.03 0.00 0.08 C0.60 2.09 2.67 3.58 5.13 3.58 C7.58 3.58 9.65 2.10 10.25 0.09 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 27.62 27.41"
                                    style={styles.fill39}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,199,171,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M27.62 13.70 C27.62 21.27 21.45 27.41 13.82 27.41 C6.19 27.42 0.00 21.29 0.00 13.72 C-0.00 6.15 6.17 0.00 13.80 0.00 C21.43 -0.00 27.61 6.13 27.62 13.70 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 8.92 7.49"
                                    style={styles.fill59}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(248,185,159,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 0.10 C1.72 3.70 4.97 6.44 8.92 7.49 C8.85 3.34 5.44 -0.00 1.24 0.00 C0.82 0.00 0.40 0.04 0.00 0.10 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 9.23 7.58"
                                    style={styles.fill75}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(248,185,159,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 7.58 C4.08 6.61 7.46 3.84 9.23 0.15 C8.73 0.05 8.21 -0.00 7.68 0.00 C3.45 0.00 0.02 3.39 0.00 7.58 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 27.62 23.26"
                                    style={styles.fill95}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(48,80,185,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M27.62 13.70 C27.61 6.13 21.43 -0.00 13.80 0.00 C6.17 0.00 -0.00 6.15 0.00 13.72 C0.00 16.60 0.90 19.28 2.44 21.48 C2.45 21.50 2.46 21.51 2.46 21.52 C2.59 21.70 2.73 21.88 2.86 22.06 C2.88 22.09 2.91 22.11 2.93 22.14 C3.06 22.30 3.19 22.46 3.32 22.62 C3.35 22.65 3.38 22.68 3.40 22.71 C3.54 22.86 3.67 23.01 3.81 23.16 C3.84 23.19 3.87 23.21 3.90 23.24 C3.90 23.25 3.91 23.26 3.92 23.26 C5.96 20.67 9.63 18.43 13.82 18.43 C18.00 18.43 21.67 20.67 23.71 23.26 C23.86 23.11 24.00 22.95 24.14 22.80 C24.18 22.76 24.21 22.72 24.24 22.68 C24.37 22.54 24.49 22.39 24.61 22.25 C24.65 22.20 24.69 22.15 24.73 22.10 C24.84 21.96 24.95 21.81 25.05 21.66 C25.09 21.61 25.13 21.56 25.16 21.51 C25.27 21.35 25.38 21.19 25.48 21.04 C25.51 20.99 25.54 20.95 25.57 20.90 C25.69 20.70 25.80 20.51 25.92 20.30 C25.92 20.29 25.93 20.29 25.93 20.28 C26.05 20.06 26.17 19.83 26.28 19.60 L26.28 19.60 L26.28 19.60 C27.14 17.81 27.62 15.81 27.62 13.70 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 22.44 6.69"
                                    style={styles.fill119}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M11.22 0.00 C6.59 0.00 2.49 2.31 0.00 5.12 C0.09 5.24 0.18 5.37 0.27 5.49 C0.29 5.51 0.31 5.54 0.34 5.57 C0.46 5.73 0.59 5.89 0.73 6.04 C0.75 6.07 0.78 6.11 0.81 6.14 C0.94 6.29 1.08 6.44 1.22 6.58 C1.25 6.61 1.27 6.64 1.30 6.67 C1.31 6.68 1.32 6.68 1.32 6.69 C3.37 4.10 7.04 1.86 11.23 1.86 C15.41 1.86 19.07 4.09 21.12 6.68 C21.27 6.53 21.41 6.38 21.55 6.22 C21.58 6.19 21.62 6.15 21.65 6.11 C21.77 5.97 21.90 5.82 22.02 5.67 C22.05 5.62 22.09 5.57 22.13 5.52 C22.24 5.39 22.34 5.25 22.44 5.11 C19.95 2.31 15.85 0.00 11.22 0.00 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.22 8.14"
                                    style={styles.fill1312}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M5.11 8.14 C1.96 8.14 0.00 6.52 0.00 3.92 C0.00 2.45 0.66 0.00 5.11 0.00 C9.56 0.00 10.22 2.45 10.22 3.92 C10.22 6.52 8.27 8.14 5.11 8.14 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 8.09 6.02"
                                    style={styles.fill1511}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,199,171,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M8.09 2.86 C8.09 5.07 6.28 6.02 4.04 6.02 C1.81 6.02 0.00 5.07 0.00 2.86 C0.00 0.64 1.81 0.00 4.04 0.00 C6.28 0.00 8.09 0.64 8.09 2.86 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.22 8.14"
                                    style={styles.fill178}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M5.11 8.14 C1.96 8.14 0.00 6.52 0.00 3.92 C0.00 2.45 0.66 0.00 5.11 0.00 C9.56 0.00 10.22 2.45 10.22 3.92 C10.22 6.52 8.27 8.14 5.11 8.14 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 8.09 6.02"
                                    style={styles.fill196}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,199,171,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M8.09 2.86 C8.09 5.07 6.28 6.02 4.04 6.02 C1.81 6.02 0.00 5.07 0.00 2.86 C0.00 0.64 1.81 0.00 4.04 0.00 C6.28 0.00 8.09 0.64 8.09 2.86 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 21.69 4.29"
                                    style={styles.fill216}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M10.85 4.29 C14.98 4.29 19.14 3.53 21.69 2.05 C21.10 1.30 20.43 0.61 19.70 0.00 C17.98 0.79 15.02 1.53 10.85 1.53 C6.67 1.53 3.71 0.79 2.00 0.00 C1.26 0.61 0.59 1.30 0.00 2.04 C2.56 3.53 6.72 4.29 10.85 4.29 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1 16.74"
                                    style={styles.path33}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.21 0.85 C0.10 0.85 0.00 0.74 0.00 0.74 L0.00 0.11 C0.00 0.11 0.09 0.00 0.21 0.00 C0.33 0.00 0.42 0.11 0.42 0.11 L0.42 0.74 C0.42 0.74 0.33 0.85 0.21 0.85 Z M0.22 2.33 C0.10 2.33 0.00 2.22 0.00 2.22 L0.00 1.59 C0.00 1.59 0.10 1.48 0.21 1.48 C0.33 1.48 0.42 1.59 0.42 1.59 L0.43 2.22 C0.43 2.22 0.33 2.33 0.22 2.33 Z M0.22 3.81 L0.01 3.71 L0.01 3.07 L0.22 2.97 L0.22 2.97 L0.43 3.07 L0.43 3.71 L0.22 3.81 Z M0.22 5.30 C0.10 5.30 0.01 5.19 0.01 5.19 L0.01 4.56 C0.01 4.56 0.10 4.45 0.22 4.45 C0.34 4.45 0.43 4.56 0.43 4.56 L0.43 5.19 C0.43 5.19 0.34 5.30 0.22 5.30 Z M0.22 6.78 L0.01 6.67 L0.01 6.04 C0.01 6.04 0.11 5.93 0.22 5.93 C0.34 5.93 0.43 6.04 0.43 6.04 L0.43 6.67 L0.23 6.78 Z M0.23 8.26 C0.11 8.26 0.02 8.16 0.02 8.16 L0.02 7.52 C0.02 7.52 0.11 7.42 0.23 7.42 C0.34 7.42 0.44 7.52 0.44 7.52 L0.44 8.16 C0.44 8.16 0.34 8.26 0.23 8.26 Z M0.23 9.75 C0.11 9.75 0.02 9.64 0.02 9.64 L0.02 9.01 C0.02 9.01 0.11 8.90 0.23 8.90 C0.35 8.90 0.44 9.01 0.44 9.01 L0.44 9.64 C0.44 9.64 0.35 9.75 0.23 9.75 Z M0.23 11.23 L0.02 11.12 L0.02 10.49 L0.23 10.38 L0.23 10.38 L0.44 10.49 L0.44 11.12 L0.23 11.23 Z M0.24 12.71 C0.12 12.71 0.03 12.61 0.03 12.61 L0.03 11.97 C0.03 11.97 0.12 11.87 0.24 11.87 C0.35 11.87 0.45 11.97 0.45 11.97 L0.45 12.61 C0.45 12.61 0.35 12.71 0.24 12.71 Z M0.24 14.20 C0.12 14.20 0.03 14.09 0.03 14.09 L0.03 13.46 C0.03 13.46 0.12 13.35 0.24 13.35 C0.36 13.35 0.45 13.46 0.45 13.46 L0.45 14.09 C0.45 14.09 0.36 14.20 0.24 14.20 Z M0.24 15.68 L0.03 15.57 L0.03 14.94 L0.24 14.83 L0.24 14.83 L0.45 14.94 L0.45 15.57 L0.24 15.68 Z M0.25 16.74 C0.13 16.74 0.03 16.63 0.03 16.63 L0.03 16.42 C0.03 16.42 0.13 16.32 0.24 16.32 C0.36 16.32 0.46 16.42 0.46 16.42 L0.46 16.63 C0.46 16.63 0.36 16.74 0.25 16.74 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.55 3.89"
                                    style={styles.fill256}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(44,46,64,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.47 3.89 C0.43 3.89 0.38 3.89 0.34 3.87 C0.09 3.80 -0.05 3.54 0.02 3.30 C0.25 2.52 1.10 0.00 2.44 0.00 C3.86 -0.00 4.44 2.60 4.54 3.12 C4.59 3.37 4.42 3.61 4.17 3.66 C3.91 3.71 3.67 3.55 3.62 3.30 C3.40 2.18 2.85 0.93 2.44 0.93 C2.02 0.93 1.29 2.32 0.92 3.56 C0.86 3.76 0.67 3.89 0.47 3.89 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.55 3.89"
                                    style={styles.fill276}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(44,46,64,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.08 3.89 C3.88 3.89 3.69 3.76 3.63 3.56 C3.26 2.32 2.53 0.93 2.10 0.93 C1.69 0.93 1.15 2.18 0.93 3.30 C0.88 3.55 0.64 3.71 0.38 3.67 C0.13 3.62 -0.04 3.37 0.01 3.12 C0.11 2.60 0.68 0.00 2.10 0.00 C3.45 -0.00 4.30 2.52 4.53 3.29 C4.60 3.54 4.46 3.80 4.21 3.87 C4.17 3.88 4.12 3.89 4.08 3.89 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 9.5 6.1"
                                    style={styles.fill295}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(181,38,45,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.29 0.81 C2.42 0.93 3.75 2.32 5.48 1.37 C7.16 0.44 7.78 -0.36 9.08 0.46 C10.33 1.25 8.81 6.24 4.24 6.09 C1.75 6.02 -0.02 3.54 0.00 1.94 C0.01 0.72 0.39 -1.05 2.29 0.81 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 6 2.56"
                                    style={styles.fill311}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,113,115,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 2.25 C0.43 2.43 0.90 2.54 1.40 2.56 C3.68 2.63 5.20 1.42 6.00 0.09 C1.84 -0.46 0.34 1.62 0.00 2.25 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <Text style={styles.day2}>Day 2</Text>
                            </View>
                            <View style={styles.rectangleCopy316}>
                              <Text style={styles.x14}>1x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style20}>
                          <View style={styles.rectangle24Stack}>
                            <View style={styles.rectangle24}>
                              <View style={styles.character13}>
                                <View style={styles.fill823StackStack}>
                                  <View style={styles.fill823Stack}>
                                    <Svg
                                      viewBox="0 0 17.21 8.08"
                                      style={styles.fill823}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,154,143,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M8.60 0.00 C5.12 0.00 2.01 1.63 0.00 4.16 C0.62 4.35 1.30 4.52 2.05 4.66 C2.32 4.71 2.59 4.75 2.86 4.80 C3.98 4.98 5.13 5.18 6.19 5.66 C7.15 6.10 8.19 6.94 8.60 8.08 C9.02 6.94 10.06 6.10 11.02 5.66 C12.07 5.18 13.23 4.98 14.35 4.80 C14.61 4.75 14.89 4.71 15.16 4.66 C15.80 4.54 16.50 4.38 17.21 4.16 C15.20 1.63 12.09 0.00 8.60 0.00 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 30.32 24.72"
                                      style={styles.path18}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,206,75,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M6.56 6.31 C7.49 6.78 8.55 7.00 9.37 7.15 C10.17 7.29 10.89 7.45 11.54 7.94 C11.67 8.05 11.79 8.16 11.91 8.28 C12.31 8.69 12.84 9.76 12.84 9.76 L12.85 9.79 C12.85 9.79 13.20 10.90 13.16 10.98 C13.14 11.03 13.10 11.07 13.05 11.08 C13.04 11.08 13.04 11.08 13.04 11.08 L12.81 11.14 C12.81 11.14 11.19 11.56 10.35 11.56 C10.10 11.56 9.84 11.54 9.59 11.49 C8.52 11.31 7.56 10.75 6.95 9.95 C6.09 8.82 5.82 7.37 5.67 6.10 C5.66 6.10 5.66 6.10 5.66 6.10 C5.65 6.00 5.72 5.91 5.82 5.90 C5.91 5.89 5.98 5.94 6.01 6.01 C6.05 6.05 6.16 6.12 6.48 6.27 C6.51 6.28 6.54 6.30 6.56 6.31 Z M15.00 11.73 C15.00 11.73 15.09 11.63 15.16 11.63 C15.23 11.63 15.32 11.73 15.32 11.73 L17.88 16.49 C17.88 16.49 17.91 16.62 17.88 16.67 C17.85 16.73 17.72 16.76 17.72 16.76 L12.60 16.76 C12.60 16.76 12.48 16.73 12.44 16.67 C12.41 16.62 12.44 16.49 12.44 16.49 L15.00 11.73 Z M17.47 9.79 L17.48 9.76 C17.48 9.76 18.01 8.69 18.41 8.28 C18.53 8.16 18.66 8.05 18.79 7.94 C19.43 7.45 20.15 7.29 20.96 7.15 C21.77 7.00 22.83 6.78 23.76 6.31 C23.78 6.30 23.81 6.28 23.84 6.27 C24.16 6.12 24.27 6.05 24.31 6.01 C24.34 5.94 24.42 5.89 24.50 5.90 C24.60 5.91 24.67 6.00 24.66 6.10 C24.66 6.10 24.66 6.10 24.66 6.10 C24.50 7.37 24.23 8.82 23.37 9.95 C22.76 10.75 21.80 11.31 20.73 11.49 C20.48 11.54 20.22 11.56 19.97 11.56 C19.13 11.56 17.51 11.14 17.51 11.14 L17.28 11.08 C17.28 11.08 17.28 11.08 17.28 11.08 C17.22 11.07 17.18 11.03 17.16 10.98 C17.12 10.90 17.47 9.79 17.47 9.79 Z M19.91 19.51 C20.39 19.73 20.75 20.13 20.88 20.57 C20.98 20.91 20.93 21.25 20.75 21.51 C20.49 21.91 20.02 22.12 19.52 22.12 C19.27 22.12 19.03 22.07 18.79 21.97 C18.79 21.97 18.79 21.97 18.79 21.97 C16.48 20.93 13.84 20.93 11.53 21.97 C10.81 22.29 9.96 22.10 9.57 21.51 C9.39 21.25 9.34 20.91 9.44 20.57 C9.57 20.13 9.93 19.73 10.42 19.51 Z M4.99 11.96 C6.16 11.89 7.38 11.82 8.49 12.28 C9.70 12.77 10.62 13.86 10.90 15.12 C11.09 15.95 11.01 16.87 10.67 17.84 C10.65 17.91 10.59 17.95 10.52 17.96 C10.46 17.97 10.39 17.94 10.35 17.88 C10.30 17.81 10.25 17.75 10.20 17.71 C10.06 17.59 9.88 17.52 9.71 17.47 C9.41 17.36 9.09 17.27 8.78 17.19 C8.27 17.04 7.74 16.89 7.24 16.67 C6.78 16.46 6.04 16.04 5.62 15.32 C5.43 16.53 5.72 17.80 6.43 18.81 C6.48 18.88 6.47 18.98 6.41 19.04 C6.35 19.10 6.26 19.11 6.18 19.06 C5.82 18.83 5.50 18.53 5.25 18.19 C5.14 19.07 5.49 20.01 6.19 20.58 C6.26 20.64 6.28 20.73 6.23 20.81 C6.19 20.89 6.01 20.89 6.01 20.89 L5.30 20.63 C5.30 20.63 6.32 22.39 7.17 22.61 C7.29 22.65 7.43 22.67 7.57 22.68 C7.63 22.69 7.69 22.72 7.72 22.77 C7.75 22.83 7.75 22.89 7.72 22.94 C7.50 23.36 7.22 24.12 7.22 24.12 L7.22 24.14 C7.22 24.14 7.21 24.47 7.34 24.59 C7.47 24.72 7.65 24.75 7.82 24.69 C10.28 23.76 12.82 23.26 15.16 23.25 C17.50 23.26 20.04 23.76 22.51 24.69 C22.67 24.75 22.85 24.72 22.98 24.59 C23.11 24.47 23.11 24.14 23.11 24.14 L23.10 24.12 C23.10 24.12 22.82 23.36 22.60 22.94 C22.57 22.89 22.58 22.83 22.61 22.77 C22.63 22.72 22.69 22.69 22.75 22.68 C22.90 22.67 23.03 22.65 23.16 22.61 C24.00 22.39 25.02 20.63 25.02 20.63 L24.31 20.89 C24.31 20.89 24.14 20.89 24.09 20.81 C24.05 20.73 24.06 20.64 24.13 20.58 C24.83 20.01 25.18 19.07 25.07 18.19 C24.82 18.53 24.50 18.83 24.14 19.06 C24.07 19.11 23.97 19.10 23.91 19.04 C23.85 18.98 23.84 18.88 23.89 18.81 C24.60 17.80 24.89 16.53 24.70 15.32 C24.28 16.04 23.54 16.46 23.08 16.67 C22.58 16.89 22.05 17.04 21.54 17.19 C21.23 17.27 20.92 17.36 20.61 17.47 C20.44 17.52 20.26 17.59 20.12 17.71 C20.07 17.75 20.02 17.81 19.97 17.88 C19.93 17.94 19.87 17.97 19.80 17.96 C19.73 17.95 19.67 17.91 19.65 17.84 C19.31 16.87 19.24 15.95 19.42 15.12 C19.70 13.86 20.62 12.77 21.83 12.28 C22.94 11.82 24.16 11.89 25.34 11.96 C26.35 12.02 27.62 12.09 28.67 11.64 C29.73 11.17 30.27 10.23 30.27 9.45 C29.77 9.87 29.18 10.19 28.55 10.38 C28.47 10.40 28.39 10.37 28.34 10.30 C28.30 10.23 28.31 10.14 28.36 10.08 C29.29 9.06 29.94 7.78 30.23 6.43 C29.77 6.89 29.15 7.21 28.50 7.28 C28.42 7.29 28.34 7.25 28.31 7.18 C28.28 7.11 28.30 7.02 28.36 6.97 C29.46 6.04 30.18 4.67 30.32 3.24 C29.92 3.58 29.41 3.81 28.87 3.88 C28.80 3.89 28.73 3.85 28.69 3.79 C28.66 3.72 28.66 3.64 28.71 3.59 C29.51 2.59 29.84 1.25 29.62 0.00 C28.59 1.63 26.40 3.59 21.78 4.43 C21.51 4.48 21.23 4.53 20.97 4.58 C19.87 4.76 18.74 4.95 17.73 5.41 C16.63 5.92 15.43 6.97 15.34 8.39 C15.34 8.49 15.26 8.56 15.16 8.56 C15.07 8.56 14.99 8.49 14.98 8.39 C14.89 6.97 13.69 5.92 12.59 5.41 C11.58 4.95 10.45 4.76 9.36 4.58 C9.09 4.53 8.81 4.48 8.54 4.43 C3.92 3.59 1.74 1.63 0.70 0.00 C0.48 1.25 0.81 2.59 1.61 3.59 C1.66 3.64 1.66 3.72 1.63 3.79 C1.59 3.85 1.52 3.89 1.45 3.88 C0.91 3.81 0.41 3.58 0.00 3.24 C0.15 4.67 0.86 6.04 1.97 6.97 C2.03 7.02 2.05 7.11 2.01 7.18 C1.98 7.25 1.91 7.29 1.83 7.28 C1.17 7.21 0.56 6.89 0.09 6.43 C0.38 7.78 1.03 9.06 1.96 10.08 C2.02 10.14 2.02 10.23 1.98 10.30 C1.94 10.37 1.85 10.40 1.77 10.38 C1.15 10.19 0.56 9.87 0.05 9.45 C0.05 10.23 0.59 11.17 1.65 11.64 C2.71 12.09 3.97 12.02 4.99 11.96 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.31 -0.31 31.58 25.98"
                                      style={styles.path19}
                                    >
                                      <Path
                                        strokeWidth={1.26}
                                        fill="transparent"
                                        stroke="rgba(255,206,75,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M7.19 6.94 C8.12 7.41 9.18 7.63 10.00 7.78 C10.80 7.92 11.52 8.08 12.17 8.57 C12.30 8.68 12.42 8.79 12.54 8.91 C12.94 9.32 13.47 10.39 13.47 10.39 L13.48 10.42 C13.48 10.42 13.83 11.53 13.79 11.61 C13.77 11.66 13.73 11.70 13.68 11.71 C13.67 11.71 13.67 11.71 13.67 11.71 L13.44 11.77 C13.44 11.77 11.82 12.19 10.98 12.19 C10.73 12.19 10.47 12.17 10.22 12.12 C9.15 11.94 8.19 11.38 7.58 10.58 C6.72 9.45 6.45 8.00 6.29 6.73 C6.29 6.73 6.29 6.73 6.29 6.73 C6.28 6.63 6.35 6.54 6.45 6.53 C6.54 6.52 6.61 6.57 6.64 6.64 C6.68 6.68 6.79 6.75 7.11 6.90 C7.14 6.91 7.17 6.93 7.19 6.94 Z M15.63 12.36 C15.63 12.36 15.72 12.26 15.79 12.26 C15.86 12.26 15.95 12.36 15.95 12.36 L18.51 17.12 C18.51 17.12 18.54 17.25 18.51 17.30 C18.48 17.36 18.35 17.39 18.35 17.39 L13.23 17.39 C13.23 17.39 13.11 17.36 13.07 17.30 C13.04 17.25 13.07 17.12 13.07 17.12 L15.63 12.36 Z M18.10 10.42 L18.11 10.39 C18.11 10.39 18.64 9.32 19.04 8.91 C19.16 8.79 19.29 8.68 19.42 8.57 C20.06 8.08 20.78 7.92 21.59 7.78 C22.40 7.63 23.46 7.41 24.39 6.94 C24.41 6.93 24.44 6.91 24.47 6.90 C24.79 6.75 24.90 6.68 24.94 6.64 C24.97 6.57 25.05 6.52 25.13 6.53 C25.23 6.54 25.30 6.63 25.29 6.73 C25.29 6.73 25.29 6.73 25.29 6.73 C25.13 8.00 24.86 9.45 24.00 10.58 C23.39 11.38 22.43 11.94 21.36 12.12 C21.11 12.17 20.85 12.19 20.60 12.19 C19.76 12.19 18.14 11.77 18.14 11.77 L17.91 11.71 C17.91 11.71 17.91 11.71 17.91 11.71 C17.85 11.70 17.81 11.66 17.79 11.61 C17.75 11.53 18.10 10.42 18.10 10.42 Z M20.54 20.14 C21.02 20.36 21.38 20.76 21.51 21.20 C21.61 21.54 21.56 21.88 21.38 22.14 C21.12 22.54 20.65 22.75 20.15 22.75 C19.90 22.75 19.66 22.70 19.42 22.60 C19.42 22.60 19.42 22.60 19.42 22.60 C17.11 21.56 14.47 21.56 12.16 22.60 C11.44 22.92 10.59 22.73 10.20 22.14 C10.02 21.88 9.97 21.54 10.07 21.20 C10.20 20.76 10.56 20.36 11.05 20.14 Z M5.62 12.59 C6.79 12.52 8.01 12.45 9.12 12.91 C10.33 13.40 11.25 14.49 11.53 15.75 C11.72 16.58 11.64 17.50 11.30 18.47 C11.28 18.54 11.22 18.58 11.15 18.59 C11.09 18.60 11.02 18.57 10.98 18.51 C10.93 18.44 10.88 18.38 10.83 18.34 C10.69 18.22 10.51 18.15 10.34 18.10 C10.04 17.99 9.72 17.90 9.41 17.82 C8.90 17.67 8.37 17.52 7.87 17.30 C7.41 17.09 6.67 16.67 6.25 15.95 C6.06 17.16 6.35 18.43 7.06 19.44 C7.11 19.51 7.10 19.61 7.04 19.67 C6.98 19.73 6.89 19.74 6.81 19.69 C6.45 19.46 6.13 19.16 5.88 18.82 C5.77 19.70 6.12 20.64 6.82 21.21 C6.89 21.27 6.91 21.36 6.86 21.44 C6.82 21.52 6.64 21.52 6.64 21.52 L5.93 21.26 C5.93 21.26 6.95 23.02 7.80 23.24 C7.92 23.28 8.06 23.30 8.20 23.31 C8.26 23.32 8.32 23.35 8.35 23.40 C8.38 23.46 8.38 23.52 8.35 23.57 C8.13 23.99 7.85 24.75 7.85 24.75 L7.85 24.77 C7.85 24.77 7.84 25.10 7.97 25.22 C8.10 25.35 8.28 25.38 8.45 25.32 C10.91 24.39 13.45 23.89 15.79 23.88 C18.13 23.89 20.67 24.39 23.14 25.32 C23.30 25.38 23.48 25.35 23.61 25.22 C23.74 25.10 23.74 24.77 23.74 24.77 L23.73 24.75 C23.73 24.75 23.45 23.99 23.23 23.57 C23.20 23.52 23.21 23.46 23.24 23.40 C23.26 23.35 23.32 23.32 23.38 23.31 C23.53 23.30 23.66 23.28 23.79 23.24 C24.63 23.02 25.65 21.26 25.65 21.26 L24.94 21.52 C24.94 21.52 24.77 21.52 24.72 21.44 C24.68 21.36 24.69 21.27 24.76 21.21 C25.46 20.64 25.81 19.70 25.70 18.82 C25.45 19.16 25.13 19.46 24.77 19.69 C24.70 19.74 24.60 19.73 24.54 19.67 C24.48 19.61 24.47 19.51 24.52 19.44 C25.23 18.43 25.52 17.16 25.33 15.95 C24.91 16.67 24.17 17.09 23.71 17.30 C23.21 17.52 22.68 17.67 22.17 17.82 C21.86 17.90 21.55 17.99 21.24 18.10 C21.07 18.15 20.89 18.22 20.75 18.34 C20.70 18.38 20.65 18.44 20.60 18.51 C20.56 18.57 20.50 18.60 20.43 18.59 C20.36 18.58 20.30 18.54 20.28 18.47 C19.94 17.50 19.87 16.58 20.05 15.75 C20.33 14.49 21.25 13.40 22.46 12.91 C23.57 12.45 24.79 12.52 25.96 12.59 C26.98 12.65 28.25 12.72 29.30 12.27 C30.36 11.80 30.90 10.86 30.90 10.08 C30.40 10.50 29.81 10.82 29.18 11.01 C29.10 11.03 29.02 11.00 28.97 10.93 C28.93 10.86 28.94 10.77 28.99 10.71 C29.92 9.69 30.57 8.41 30.86 7.06 C30.40 7.52 29.78 7.84 29.13 7.91 C29.05 7.92 28.97 7.88 28.94 7.81 C28.91 7.74 28.93 7.65 28.99 7.60 C30.09 6.67 30.81 5.30 30.95 3.87 C30.55 4.21 30.04 4.44 29.50 4.51 C29.43 4.52 29.36 4.48 29.32 4.42 C29.29 4.35 29.29 4.27 29.34 4.22 C30.14 3.22 30.47 1.88 30.25 0.63 C29.22 2.26 27.03 4.22 22.41 5.06 C22.14 5.11 21.86 5.16 21.60 5.21 C20.50 5.39 19.37 5.58 18.36 6.04 C17.26 6.55 16.06 7.60 15.97 9.02 C15.97 9.12 15.89 9.19 15.79 9.19 C15.70 9.19 15.62 9.12 15.61 9.02 C15.52 7.60 14.32 6.55 13.22 6.04 C12.21 5.58 11.08 5.39 9.99 5.21 C9.72 5.16 9.44 5.11 9.17 5.06 C4.55 4.22 2.37 2.26 1.33 0.63 C1.11 1.88 1.44 3.22 2.24 4.22 C2.29 4.27 2.29 4.35 2.26 4.42 C2.22 4.48 2.15 4.52 2.08 4.51 C1.54 4.44 1.04 4.21 0.63 3.87 C0.78 5.30 1.49 6.67 2.60 7.60 C2.66 7.65 2.68 7.74 2.64 7.81 C2.61 7.88 2.54 7.92 2.46 7.91 C1.80 7.84 1.19 7.52 0.72 7.06 C1.01 8.41 1.66 9.69 2.59 10.71 C2.65 10.77 2.65 10.86 2.61 10.93 C2.57 11.00 2.48 11.03 2.40 11.01 C1.78 10.82 1.19 10.50 0.68 10.08 C0.68 10.86 1.22 11.80 2.28 12.27 C3.34 12.72 4.60 12.65 5.62 12.59 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 4.52 4.21"
                                      style={styles.fill166}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(188,138,106,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M2.26 0.00 L0.00 4.21 L4.52 4.21 L2.26 0.00 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 5.49 5.13"
                                      style={styles.path20}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(188,138,106,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M2.74 0.56 L5.00 4.77 L0.48 4.77 L2.74 0.56 Z M0.03 5.04 C0.06 5.09 0.18 5.13 0.18 5.13 L5.30 5.13 C5.30 5.13 5.43 5.09 5.46 5.04 C5.49 4.98 5.46 4.86 5.46 4.86 L2.90 0.10 C2.90 0.10 2.81 0.00 2.74 0.00 C2.68 0.00 2.58 0.10 2.58 0.10 L0.02 4.86 C0.02 4.86 -0.01 4.98 0.03 5.04 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 10.82 2.91"
                                      style={styles.path21}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(169,29,73,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M8.68 1.57 L1.78 1.68 L1.67 1.34 L8.78 1.22 L8.68 1.57 Z M10.01 0.99 C7.08 -0.33 3.73 -0.33 0.81 0.99 C0.43 1.16 0.14 1.47 0.04 1.82 C-0.03 2.06 -0.00 2.28 0.12 2.46 C0.41 2.90 1.06 3.04 1.63 2.79 C4.03 1.71 6.78 1.71 9.18 2.79 C9.75 3.04 10.40 2.90 10.70 2.46 C10.82 2.28 10.85 2.06 10.78 1.82 C10.68 1.47 10.39 1.16 10.01 0.99 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 11.54 3.63"
                                      style={styles.path22}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(169,29,73,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M11.06 2.82 C10.77 3.26 10.11 3.40 9.55 3.15 C7.15 2.07 4.39 2.07 1.99 3.15 C1.43 3.40 0.77 3.26 0.48 2.82 C0.36 2.64 0.33 2.42 0.40 2.18 C0.50 1.83 0.79 1.52 1.17 1.35 C4.09 0.03 7.45 0.03 10.37 1.35 C10.75 1.52 11.04 1.83 11.14 2.18 M1.02 1.02 C0.54 1.23 0.18 1.63 0.05 2.08 C-0.05 2.42 -0.00 2.75 0.18 3.02 C0.57 3.60 1.42 3.80 2.14 3.47 C4.45 2.44 7.09 2.44 9.40 3.47 C9.40 3.47 9.40 3.47 9.40 3.47 C9.63 3.58 9.88 3.63 10.12 3.63 C10.63 3.63 11.10 3.41 11.36 3.02 C11.54 2.75 11.59 2.42 11.49 2.08 C11.36 1.63 11.00 1.23 10.52 1.02 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 7.11 0.96"
                                      style={styles.fill248}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,154,143,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.62 L0.12 0.96 C2.33 0.20 4.77 0.16 7.01 0.84 L7.11 0.50 C4.81 -0.20 2.28 -0.16 0.00 0.62 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 6.73 4.72"
                                      style={styles.path23}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(188,138,106,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M3.94 4.30 C3.24 4.30 2.67 3.73 2.67 3.04 C2.67 2.34 3.24 1.78 3.94 1.78 C4.64 1.78 5.21 2.34 5.21 3.04 M5.23 1.76 C4.66 1.31 4.01 1.17 3.22 1.03 C2.38 0.88 1.29 0.65 0.32 0.15 C0.30 0.15 0.28 0.13 0.25 0.12 C0.15 0.08 0.07 0.04 0.00 0.00 C0.16 1.12 0.45 2.32 1.16 3.26 C1.72 3.99 2.60 4.50 3.57 4.67 C4.60 4.84 6.64 4.32 6.64 4.32 L6.73 4.30 L6.43 3.44 L6.42 3.41 L5.57 2.06 L5.57 2.06 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 7.52 5.66"
                                      style={styles.path24}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(188,138,106,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M6.84 3.98 L6.85 4.01 L7.14 4.87 L7.05 4.90 C7.05 4.90 5.01 5.42 3.99 5.24 C3.01 5.07 2.13 4.56 1.58 3.83 C0.86 2.89 0.57 1.69 0.41 0.57 C0.49 0.61 0.57 0.65 0.66 0.69 C0.69 0.71 0.72 0.72 0.73 0.73 C1.71 1.22 2.80 1.45 3.64 1.60 C4.42 1.74 5.07 1.88 5.65 2.33 C5.77 2.42 5.99 2.63 5.99 2.63 L5.99 2.63 M0.16 0.00 C0.06 0.01 -0.01 0.10 0.00 0.20 C0.00 0.20 0.00 0.20 0.00 0.20 C0.16 1.47 0.43 2.93 1.29 4.05 C1.90 4.85 2.86 5.41 3.92 5.60 C4.18 5.64 4.43 5.66 4.69 5.66 C5.52 5.66 7.14 5.24 7.14 5.24 L7.37 5.19 C7.37 5.19 7.38 5.18 7.38 5.18 C7.43 5.17 7.48 5.13 7.50 5.08 C7.54 5.00 7.19 3.89 7.19 3.89 L7.18 3.86 C7.18 3.86 6.65 2.79 6.25 2.38 C6.13 2.26 6.00 2.15 5.87 2.05 C5.23 1.55 4.51 1.39 3.70 1.25 C2.89 1.10 1.83 0.88 0.89 0.41 C0.88 0.40 0.85 0.39 0.82 0.37 C0.50 0.22 0.39 0.15 0.35 0.11 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 6.73 4.72"
                                      style={styles.path25}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(188,138,106,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M2.77 1.78 C3.47 1.78 4.04 2.34 4.04 3.04 C4.04 3.73 3.47 4.30 2.77 4.30 C2.07 4.30 1.50 3.73 1.50 3.04 C1.50 2.34 2.07 1.78 2.77 1.78 Z M0.09 4.32 C0.09 4.32 2.13 4.84 3.16 4.67 C4.13 4.50 5.01 3.99 5.56 3.26 C6.28 2.32 6.57 1.12 6.73 0.00 C6.66 0.04 6.57 0.08 6.48 0.12 C6.45 0.13 6.43 0.15 6.41 0.15 C5.43 0.65 4.34 0.88 3.50 1.03 C2.72 1.17 2.07 1.31 1.49 1.76 C1.37 1.85 1.26 1.95 1.15 2.06 C0.79 2.43 0.31 3.41 0.31 3.41 L0.29 3.44 L0.00 4.30 L0.09 4.32 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 7.52 5.66"
                                      style={styles.path26}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(188,138,106,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.69 3.98 C0.69 3.98 1.17 3.00 1.54 2.63 C1.64 2.52 1.76 2.42 1.87 2.33 C2.45 1.88 3.10 1.74 3.88 1.60 C4.73 1.45 5.82 1.22 6.79 0.73 C6.81 0.72 6.83 0.71 6.86 0.69 C6.96 0.65 7.04 0.61 7.11 0.57 C6.95 1.69 6.66 2.89 5.95 3.83 C5.39 4.56 4.51 5.07 3.54 5.24 C2.51 5.42 0.47 4.90 0.47 4.90 L0.38 4.87 L0.68 4.01 L0.69 3.98 Z M0.14 5.18 C0.14 5.18 0.15 5.19 0.15 5.19 L0.38 5.24 C0.38 5.24 2.00 5.66 2.84 5.66 C3.09 5.66 3.34 5.64 3.60 5.60 C4.66 5.41 5.62 4.85 6.23 4.05 C7.09 2.93 7.37 1.47 7.52 0.20 C7.52 0.20 7.52 0.20 7.52 0.20 C7.53 0.10 7.46 0.01 7.37 0.00 C7.28 -0.01 7.20 0.04 7.18 0.11 C7.14 0.15 7.02 0.22 6.71 0.37 C6.67 0.39 6.65 0.40 6.63 0.41 C5.70 0.88 4.64 1.10 3.82 1.25 C3.01 1.39 2.29 1.55 1.65 2.05 C1.52 2.15 1.40 2.26 1.28 2.38 C0.88 2.79 0.35 3.86 0.35 3.86 L0.34 3.89 C0.34 3.89 -0.02 5.00 0.02 5.08 C0.05 5.13 0.09 5.17 0.14 5.18 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 1.81 1.8"
                                      style={styles.path27}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(254,254,254,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.91 1.35 C0.66 1.35 0.46 1.15 0.46 0.90 C0.46 0.65 0.66 0.45 0.91 0.45 C1.15 0.45 1.36 0.65 1.36 0.90 M1.81 0.90 C1.81 0.40 1.41 0.00 0.91 0.00 C0.41 0.00 0.00 0.40 0.00 0.90 C0.00 1.40 0.41 1.80 0.91 1.80 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 2.54 2.52"
                                      style={styles.path28}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(254,254,254,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.36 1.26 C0.36 0.76 0.77 0.36 1.27 0.36 C1.77 0.36 2.17 0.76 2.17 1.26 C2.17 1.76 1.77 2.16 1.27 2.16 M1.27 0.00 C0.57 0.00 0.00 0.57 0.00 1.26 C0.00 1.95 0.57 2.52 1.27 2.52 C1.97 2.52 2.54 1.95 2.54 1.26 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 1 1"
                                      style={styles.path29}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(43,42,42,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.36 0.50 C0.27 0.50 0.20 0.43 0.20 0.34 C0.20 0.25 0.27 0.17 0.36 0.17 C0.45 0.17 0.53 0.25 0.53 0.34 M0.50 0.00 C0.22 0.00 0.00 0.22 0.00 0.50 C0.00 0.78 0.22 1.00 0.50 1.00 C0.78 1.00 1.00 0.78 1.00 0.50 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 0.3 0.29"
                                      style={styles.fill403}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(254,254,254,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.15 0.00 C0.07 0.00 0.00 0.07 0.00 0.15 C0.00 0.23 0.07 0.29 0.15 0.29 C0.23 0.29 0.30 0.23 0.30 0.15 C0.30 0.07 0.23 0.00 0.15 0.00 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 1.81 1.8"
                                      style={styles.path30}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(254,254,254,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.91 0.45 C1.15 0.45 1.36 0.65 1.36 0.90 C1.36 1.15 1.15 1.35 0.91 1.35 C0.66 1.35 0.46 1.15 0.46 0.90 M0.00 0.90 C0.00 1.40 0.41 1.80 0.91 1.80 C1.41 1.80 1.81 1.40 1.81 0.90 C1.81 0.40 1.41 0.00 0.91 0.00 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 2.54 2.52"
                                      style={styles.path31}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(254,254,254,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M2.17 1.26 C2.17 1.76 1.77 2.16 1.27 2.16 C0.77 2.16 0.36 1.76 0.36 1.26 C0.36 0.76 0.77 0.36 1.27 0.36 M1.27 2.52 C1.97 2.52 2.54 1.95 2.54 1.26 C2.54 0.57 1.97 0.00 1.27 0.00 C0.57 0.00 0.00 0.57 0.00 1.26 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 1 1"
                                      style={styles.path32}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(43,42,42,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.36 0.17 C0.46 0.17 0.53 0.25 0.53 0.34 C0.53 0.43 0.46 0.50 0.36 0.50 C0.27 0.50 0.20 0.43 0.20 0.34 M0.50 1.00 C0.78 1.00 1.00 0.78 1.00 0.50 C1.00 0.22 0.78 0.00 0.50 0.00 C0.22 0.00 0.00 0.22 0.00 0.50 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 0.3 0.29"
                                      style={styles.fill481}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(254,254,254,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.15 0.29 C0.23 0.29 0.30 0.23 0.30 0.15 C0.30 0.07 0.23 0.00 0.15 0.00 C0.07 0.00 0.00 0.07 0.00 0.15 C0.00 0.23 0.07 0.29 0.15 0.29 "
                                      ></Path>
                                    </Svg>
                                  </View>
                                  <Svg
                                    viewBox="0 0 21.89 16.69"
                                    style={styles.fill109}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,154,143,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M10.95 16.69 C16.98 16.69 21.89 11.81 21.89 5.81 L21.89 0.09 C21.62 0.08 21.35 0.06 21.10 0.05 C19.96 -0.02 18.79 -0.08 17.75 0.34 C16.65 0.78 15.81 1.78 15.56 2.93 C15.41 3.61 15.45 4.36 15.68 5.15 C15.87 5.00 16.09 4.92 16.28 4.85 C16.59 4.75 16.91 4.66 17.23 4.57 C17.73 4.43 18.24 4.28 18.72 4.07 C19.22 3.84 20.11 3.32 20.37 2.41 C20.40 2.34 20.47 2.28 20.55 2.28 L20.55 2.28 C20.63 2.28 20.70 2.34 20.72 2.41 C21.03 3.52 20.95 4.72 20.51 5.78 C20.61 5.65 20.70 5.51 20.78 5.36 C20.81 5.30 20.88 5.26 20.96 5.27 C21.03 5.28 21.09 5.33 21.11 5.40 C21.38 6.28 21.20 7.27 20.67 8.02 L21.01 7.90 C21.07 7.87 21.14 7.89 21.19 7.93 C21.24 7.97 21.26 8.04 21.25 8.10 C20.97 9.39 20.10 10.41 19.03 10.69 C18.96 10.71 18.90 10.72 18.82 10.73 C18.99 11.08 19.13 11.42 19.23 11.74 L19.24 11.76 C19.33 12.05 19.25 12.37 19.02 12.58 C18.86 12.73 18.66 12.81 18.46 12.81 C18.36 12.81 18.26 12.79 18.16 12.75 C15.74 11.84 13.24 11.35 10.95 11.34 C8.65 11.35 6.15 11.84 3.73 12.75 C3.43 12.86 3.11 12.80 2.88 12.58 C2.65 12.37 2.56 12.05 2.66 11.76 L2.66 11.74 C2.77 11.42 2.90 11.08 3.07 10.73 C3.00 10.72 2.93 10.71 2.86 10.69 C1.79 10.41 0.92 9.39 0.65 8.10 C0.63 8.04 0.65 7.97 0.70 7.93 C0.75 7.89 0.82 7.87 0.89 7.90 L1.22 8.02 C0.69 7.27 0.51 6.28 0.78 5.40 C0.80 5.33 0.86 5.28 0.94 5.27 C1.01 5.26 1.08 5.30 1.11 5.36 C1.19 5.51 1.28 5.65 1.39 5.78 C0.94 4.72 0.86 3.52 1.17 2.41 C1.19 2.34 1.26 2.28 1.35 2.28 L1.35 2.28 C1.43 2.28 1.50 2.34 1.52 2.41 C1.79 3.32 2.67 3.84 3.18 4.07 C3.65 4.28 4.17 4.43 4.67 4.57 C4.98 4.66 5.30 4.75 5.61 4.85 C5.81 4.92 6.03 5.00 6.21 5.15 C6.44 4.36 6.49 3.61 6.34 2.93 C6.08 1.78 5.24 0.78 4.14 0.34 C3.10 -0.08 1.93 -0.02 0.79 0.05 C0.54 0.06 0.28 0.08 0.00 0.09 L0.00 5.81 C0.00 11.81 4.91 16.69 10.95 16.69 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day3}>Day 3</Text>
                            <View style={styles.rectangleCopy315}>
                              <Text style={styles.x13}>1x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style19}>
                          <View style={styles.rectangle23Stack}>
                            <View style={styles.rectangle23}>
                              <Svg viewBox="0 0 14 34" style={styles.fill129}>
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(122,164,247,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M3.59 1.08 L0.19 20.89 C0.09 21.43 0.53 21.82 1.05 21.66 L6.58 20.02 C7.11 19.87 7.63 19.71 7.63 19.71 L9.44 34.00 L13.77 13.82 C13.88 13.29 13.47 12.88 12.93 13.01 L7.03 14.48 C6.49 14.62 5.96 14.75 5.96 14.75 L3.96 -1.08 Z"
                                ></Path>
                              </Svg>
                            </View>
                            <Text style={styles.day4}>Day 4</Text>
                            <View style={styles.rectangleCopy314}>
                              <Text style={styles.x12}>1x</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.style18Row}>
                        <View style={styles.style18}>
                          <View style={styles.rectangle22Stack}>
                            <View style={styles.rectangle22}>
                              <View style={styles.character12}>
                                <View style={styles.fill128Stack}>
                                  <Svg
                                    viewBox="0 0 25.89 28.66"
                                    style={styles.fill128}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(238,65,60,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M10.02 0.33 C4.33 1.42 -0.61 6.96 0.06 14.33 C0.74 21.71 6.82 30.69 20.47 28.26 C26.14 26.94 25.61 20.93 25.35 17.96 C25.08 14.99 27.43 9.80 24.03 4.81 C20.64 -0.17 14.03 -0.45 10.02 0.33 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 13 11.05"
                                    style={styles.fill414}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.10 0.52 C-0.83 1.96 -0.80 8.03 2.85 10.00 C6.51 11.97 11.82 10.85 12.69 9.28 C14.00 6.91 10.93 2.57 7.92 1.02 C5.37 -0.29 3.59 -0.20 2.10 0.52 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 9.34 7.89"
                                    style={styles.fill617}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.61 0.40 C-0.62 1.48 -0.62 5.59 2.16 7.08 C4.94 8.58 8.52 7.77 9.16 6.57 C9.91 5.17 8.31 1.95 6.03 0.77 C4.09 -0.22 2.74 -0.15 1.61 0.40 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.31 11.45"
                                    style={styles.fill822}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M6.76 9.35 C6.59 7.35 7.57 4.34 7.25 1.06 C6.61 0.02 5.52 -0.40 3.80 0.47 C1.97 1.39 -1.25 5.17 0.51 9.87 C1.16 11.59 4.56 12.17 6.44 10.25 C6.56 10.12 6.68 9.96 6.80 9.76 C6.79 9.62 6.78 9.48 6.76 9.35 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 5.69 8.29"
                                    style={styles.fill108}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.51 0.34 C1.12 1.01 -0.90 3.60 0.44 7.03 C0.93 8.29 3.09 8.88 4.52 7.48 C6.01 6.03 6.74 -1.70 2.51 0.34 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.88 1.97"
                                    style={styles.fill124}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.86 1.82 C4.07 0.27 1.64 -0.68 0.07 0.58 C-0.08 0.70 0.03 0.97 0.24 0.91 C1.05 0.70 1.83 0.46 2.68 0.65 C3.51 0.83 4.19 1.31 4.67 1.93 C4.75 2.03 4.92 1.93 4.86 1.82 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.44 3.95"
                                    style={styles.fill147}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.31 3.81 C0.54 2.30 1.38 1.31 2.39 0.28 C2.51 0.16 2.39 -0.06 2.22 0.02 C0.85 0.66 0.13 2.29 0.00 3.78 C-0.02 3.99 0.28 4.01 0.31 3.81 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.03 3.16"
                                    style={styles.fill165}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.78 0.00 C1.26 0.05 0.82 0.63 0.54 1.03 C0.16 1.57 -0.19 2.19 0.11 2.85 C0.20 3.05 0.45 3.20 0.66 3.15 C1.34 2.97 1.59 2.36 1.79 1.72 C1.94 1.24 2.16 0.57 1.93 0.08 C1.90 0.02 1.84 -0.00 1.78 0.00 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 3.66 1.58"
                                    style={styles.fill189}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.01 0.50 C0.25 0.95 0.96 1.18 1.46 1.34 C2.15 1.57 2.82 1.74 3.46 1.34 C3.66 1.21 3.71 0.94 3.60 0.75 C3.27 0.15 2.53 0.05 1.81 0.01 C1.27 -0.01 0.47 -0.03 0.06 0.33 C0.00 0.38 -0.02 0.44 0.01 0.50 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.88 5.92"
                                    style={styles.fill2011}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.87 4.36 C5.00 4.04 2.12 -0.33 1.14 0.02 C0.34 0.31 -0.28 5.85 0.13 5.92 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 9.34 5.53"
                                    style={styles.fill227}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.39 0.79 C2.49 1.33 -0.67 2.23 0.12 4.36 C0.81 6.19 4.38 5.49 5.67 4.80 C6.84 4.17 9.64 3.39 9.32 1.18 C8.99 -1.04 5.35 0.51 4.39 0.79 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.31 4.34"
                                    style={styles.fill247}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.43 0.62 C1.95 1.04 -0.52 1.75 0.10 3.42 C0.63 4.86 3.43 4.31 4.44 3.77 C5.35 3.28 7.55 2.67 7.29 0.92 C7.04 -0.82 4.19 0.40 3.43 0.62 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 3.66 4.34"
                                    style={styles.fill265}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.86 0.01 C0.26 0.22 -0.21 4.29 0.10 4.34 C0.41 4.39 3.56 3.43 3.65 3.20 C3.75 2.96 1.59 -0.24 0.86 0.01 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 6.09 2.76"
                                    style={styles.fill283}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.94 1.04 C2.39 1.18 0.48 0.94 0.13 1.51 C-0.23 2.09 -0.04 3.36 3.49 2.44 C7.02 1.51 6.16 0.11 5.46 0.01 C4.76 -0.09 2.94 1.04 2.94 1.04 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 0.81 1.58"
                                    style={styles.fill302}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 0.01 C0.09 0.53 0.19 1.07 0.36 1.58 C0.50 1.56 0.65 1.54 0.81 1.51 C0.68 1.01 0.52 0.51 0.39 0.00 C0.26 0.00 0.13 0.00 0.00 0.01 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.22 1.97"
                                    style={styles.fill322}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 0.19 C0.25 0.79 0.49 1.41 0.82 1.97 C0.96 1.92 1.10 1.86 1.22 1.80 C1.01 1.19 0.69 0.59 0.41 0.00 C0.27 0.06 0.13 0.13 0.00 0.19 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 0.41 0.39"
                                    style={styles.fill342}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.20 0.22 C0.23 0.22 0.23 0.18 0.20 0.18 C0.18 0.18 0.18 0.22 0.20 0.22 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.44 2.76"
                                    style={styles.fill362}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.87 0.21 C1.48 -0.10 0.84 -0.05 0.47 0.27 C-0.11 0.77 -0.16 1.64 0.34 2.22 C0.66 2.60 1.11 2.92 1.62 2.68 C1.93 2.54 2.21 2.16 2.33 1.84 C2.58 1.23 2.38 0.61 1.87 0.21 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.84 2.76"
                                    style={styles.fill382}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.01 0.04 C0.36 0.19 -0.11 0.81 0.02 1.50 C0.20 2.41 1.07 2.90 1.92 2.73 C2.69 2.57 3.02 1.77 2.75 1.06 C2.48 0.37 1.75 -0.14 1.01 0.04 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.83 1.58"
                                    style={styles.fill402}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.59 1.22 C2.02 0.90 1.83 0.41 1.39 0.21 C1.44 0.23 1.43 0.23 1.35 0.19 C1.27 0.14 1.18 0.10 1.09 0.06 C0.90 0.00 0.61 -0.02 0.42 0.01 C0.27 0.04 0.12 0.09 0.01 0.18 C-0.02 0.21 0.05 0.55 0.12 0.87 C0.19 1.20 0.25 1.51 0.28 1.52 C0.42 1.59 0.59 1.59 0.76 1.58 C1.09 1.55 1.34 1.41 1.59 1.22 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.46 2.73"
                                    style={styles.fill422}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.64 2.55 C0.91 2.75 1.33 2.79 1.63 2.63 C2.02 2.42 2.34 1.94 2.46 1.51 C2.24 0.99 1.96 0.59 1.63 0.10 C1.26 -0.05 0.86 -0.05 0.50 0.23 C-0.28 0.85 -0.08 1.99 0.64 2.55 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.56 8.68"
                                    style={styles.fill443}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M7.00 2.28 C8.10 2.98 8.68 4.00 8.83 5.25 C8.93 6.12 8.71 7.30 9.11 8.10 C9.40 8.69 10.14 8.94 10.56 8.33 C10.57 8.32 10.56 8.31 10.54 8.31 C9.64 8.68 9.86 5.96 9.85 5.65 C9.84 4.99 9.78 4.34 9.56 3.71 C9.18 2.64 8.36 1.74 7.36 1.13 C6.26 0.47 4.96 0.16 3.68 0.07 C2.89 0.02 1.99 0.08 1.16 0.00 C0.75 0.37 0.36 0.77 0.00 1.20 C0.14 1.24 0.28 1.28 0.43 1.30 C2.68 1.75 4.93 0.95 7.00 2.28 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.47 10.66"
                                    style={styles.fill462}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.07 3.73 C-0.12 4.87 0.06 6.05 0.69 7.04 C0.99 7.52 1.39 7.92 1.82 8.30 C2.19 8.62 4.48 10.09 3.59 10.63 C3.58 10.64 3.59 10.66 3.60 10.66 C4.56 10.69 4.67 9.81 4.20 9.18 C3.66 8.47 2.82 7.98 2.22 7.33 C1.31 6.34 1.00 5.19 1.28 3.91 C1.61 2.39 2.65 1.42 3.62 0.36 C3.08 0.21 2.54 0.09 2.00 0.00 C1.98 0.01 1.97 0.03 1.96 0.05 C1.05 1.12 0.31 2.37 0.07 3.73 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.22 1.58"
                                    style={styles.fill503}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 1.56 C-0.01 1.57 0.01 1.58 0.02 1.58 C0.76 1.26 0.99 0.71 1.22 0.02 C0.97 0.01 0.72 0.00 0.47 0.00 C0.51 0.54 0.43 1.06 0.00 1.56 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.84 5.13"
                                    style={styles.fill522}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.50 5.12 C0.52 5.14 0.55 5.14 0.55 5.11 C0.59 4.10 0.47 3.19 0.94 2.23 C1.34 1.40 2.05 0.78 2.84 0.23 C2.64 0.15 2.43 0.07 2.22 0.00 C0.43 1.06 -0.71 3.42 0.50 5.12 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.72 1.97"
                                    style={styles.fill542}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.97 1.46 C2.80 1.58 6.18 0.17 7.39 1.90 C7.51 2.08 7.79 1.89 7.70 1.71 C7.14 0.60 6.05 0.36 4.88 0.27 C3.79 0.20 2.04 0.36 0.73 0.00 C0.47 0.42 0.22 0.85 0.00 1.31 C0.30 1.39 0.64 1.44 0.97 1.46 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 22.88 8.62"
                                    style={styles.fill563}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(238,65,60,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 8.62 C0.22 8.33 0.51 8.10 0.76 7.83 C3.17 5.21 6.46 3.32 10.03 2.51 C13.60 1.69 17.44 1.96 20.85 3.25 C21.67 3.56 22.13 3.98 22.88 4.43 C19.36 -0.15 13.34 -0.43 9.42 0.32 C5.31 1.12 1.53 4.17 0.00 8.62 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 20.31 6.32"
                                    style={styles.fill582}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(204,204,204,1)"
                                      d="M0.00 2.51 C3.33 5.44 8.35 7.14 15.35 5.91 C18.88 5.11 20.02 2.54 20.31 0.00 C18.08 3.18 16.36 4.15 11.76 4.53 C6.21 4.98 3.71 3.62 0.00 2.51 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day51}>Day 5</Text>
                            <View style={styles.rectangleCopy313}>
                              <Text style={styles.x11}>1x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style17}>
                          <View style={styles.rectangle21Stack}>
                            <View style={styles.rectangle21}>
                              <View style={styles.character11}>
                                <View style={styles.fill127Stack}>
                                  <Svg
                                    viewBox="0 0 22.9 22.42"
                                    style={styles.fill127}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,215,21,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 11.21 C0.00 5.02 5.13 0.00 11.45 0.00 C17.77 0.00 22.90 5.02 22.90 11.21 C22.90 17.40 17.77 22.42 11.45 22.42 C5.13 22.42 0.00 17.40 0.00 11.21 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 19.43 19.02"
                                    style={styles.fill413}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,204,1,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 9.51 C0.00 4.26 4.35 0.00 9.72 0.00 C15.08 0.00 19.43 4.26 19.43 9.51 C19.43 14.77 15.08 19.02 9.72 19.02 C4.35 19.02 0.00 14.77 0.00 9.51 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 17.9 17.62"
                                    style={styles.fill616}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,189,17,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M13.27 0.00 C14.24 1.48 14.80 3.24 14.80 5.12 C14.80 10.38 10.45 14.64 5.08 14.64 C3.22 14.64 1.48 14.12 0.00 13.23 C1.73 15.87 4.75 17.62 8.19 17.62 C13.55 17.62 17.90 13.36 17.90 8.11 C17.90 4.68 16.05 1.67 13.27 0.00 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 16.01 13.52"
                                    style={styles.fill821}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,219,83,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.64 9.33 C0.64 4.69 4.48 0.93 9.21 0.93 C11.98 0.93 14.44 2.22 16.01 4.21 C14.53 1.69 11.76 0.00 8.58 0.00 C3.84 0.00 0.00 3.76 0.00 8.40 C0.00 10.32 0.66 12.10 1.78 13.52 C1.05 12.28 0.64 10.85 0.64 9.33 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day61}>Day 6</Text>
                            <View style={styles.rectangleCopy312}>
                              <Text style={styles.x10}>5x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style16}>
                          <View style={styles.rectangle20Stack}>
                            <View style={styles.rectangle20}>
                              <View style={styles.character10}>
                                <View style={styles.fill126Stack}>
                                  <Svg
                                    viewBox="0 0 22.51 22.02"
                                    style={styles.fill126}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(190,117,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M22.31 10.54 C22.58 10.80 22.58 11.22 22.31 11.48 L11.73 21.83 C11.47 22.09 11.04 22.09 10.78 21.83 L0.20 11.48 C-0.07 11.22 -0.07 10.80 0.20 10.54 L10.78 0.19 C11.04 -0.06 11.47 -0.06 11.73 0.19 L22.31 10.54 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 14.18 12.51"
                                    style={styles.path17}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(254,185,235,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.78 9.51 L0.00 7.10 L10.03 0.00 L12.21 2.13 L1.78 9.51 Z M14.18 4.06 L2.22 12.51 L1.54 11.58 L13.34 3.24 L14.18 4.06 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 17.17 11.01"
                                    style={styles.fill615}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(160,97,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.01 6.12 L7.82 10.82 C8.08 11.08 8.51 11.08 8.78 10.82 L15.57 4.17 L17.17 0.00 L0.00 0.00 L3.01 6.12 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.9 10.91"
                                    style={styles.fill820}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(159,72,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M10.90 0.00 C10.86 0.03 10.81 0.06 10.78 0.09 L0.20 10.44 C0.07 10.57 0.00 10.74 0.00 10.91 L7.29 10.91 L10.90 0.00 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.9 10.91"
                                    style={styles.fill107}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(215,131,235,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.60 10.91 L10.90 10.91 C10.90 10.74 10.83 10.57 10.70 10.44 L0.12 0.09 C0.08 0.06 0.04 0.03 0.00 0.00 L3.60 10.91 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.9 10.91"
                                    style={styles.fill1311}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(139,56,214,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M10.78 10.82 C10.81 10.85 10.86 10.88 10.90 10.91 L7.29 0.00 L0.00 0.00 C0.00 0.17 0.07 0.34 0.20 0.47 L10.78 10.82 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.9 10.91"
                                    style={styles.fill1510}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(133,54,205,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.60 0.00 L0.00 10.91 C0.04 10.88 0.08 10.85 0.12 10.82 L10.70 0.47 C10.83 0.34 10.90 0.17 10.90 0.00 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 3.33 3.26"
                                    style={styles.fill188}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.33 1.63 C2.28 1.96 2.01 2.23 1.67 3.26 C1.33 2.23 1.05 1.96 0.00 1.63 C1.05 1.30 1.32 1.03 1.67 0.00 C2.01 1.03 2.28 1.29 3.33 1.63 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.81 1.77"
                                    style={styles.fill2010}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.81 0.88 C1.24 1.06 1.09 1.21 0.90 1.77 C0.72 1.21 0.57 1.06 0.00 0.88 C0.57 0.70 0.72 0.56 0.90 0.00 C1.09 0.56 1.24 0.70 1.81 0.88 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day71}>Day 7</Text>
                            <View style={styles.rectangleCopy131}>
                              <Text style={styles.x9}>1x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style15}>
                          <View style={styles.rectangle19Stack}>
                            <View style={styles.rectangle19}>
                              <View style={styles.character9}>
                                <View style={styles.fill125Stack}>
                                  <Svg
                                    viewBox="0 0 11.94 25.75"
                                    style={styles.fill125}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(242,188,167,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.65 23.78 L3.78 23.98 C5.34 25.99 8.21 26.34 10.20 24.75 C12.18 23.17 12.52 20.25 10.96 18.24 L6.98 13.11 L10.05 6.66 C11.15 4.35 10.20 1.58 7.93 0.46 C5.66 -0.65 2.92 0.31 1.83 2.62 C-1.14 9.53 -0.46 17.50 3.65 23.78 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 30.9 35.68"
                                    style={styles.fill38}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,217,195,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M14.88 35.67 C23.35 35.93 30.41 29.16 30.66 20.57 L30.89 16.03 C31.14 7.43 24.48 0.26 16.01 0.01 C7.55 -0.25 0.48 6.52 0.23 15.12 L0.01 19.65 C-0.24 28.25 6.42 35.42 14.88 35.67 "
                                    ></Path>
                                  </Svg>
                                  <View style={styles.group73}>
                                    <View style={styles.clip63Stack}>
                                      <Svg
                                        viewBox="0 0 25.45 106.15"
                                        style={styles.clip63}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="transparent"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M0.00 0.00 L25.45 0.00 L25.45 106.15 L0.00 106.15 Z"
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 25.45 106.15"
                                        style={styles.fill58}
                                      >
                                        <Defs>
                                          <Mask
                                            id="skcSPR"
                                            x={0}
                                            y={0}
                                            width={25}
                                            height={106}
                                          >
                                            <Path
                                              d="M0.00 0.00 L25.45 0.00 L25.45 106.15 L0.00 106.15 Z"
                                              fill="white"
                                            />
                                          </Mask>
                                        </Defs>
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(252,217,195,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          mask="url(#skcSPR)"
                                          d="M4.75 9.28 L0.00 96.87 C0.00 101.99 8.84 106.15 13.89 106.15 C18.93 106.15 25.45 101.99 25.45 96.87 L23.02 9.28 C23.02 4.15 18.93 0.00 13.89 0.00 C8.84 0.00 4.75 4.15 4.75 9.28 "
                                        ></Path>
                                      </Svg>
                                    </View>
                                  </View>
                                  <View style={styles.group103}>
                                    <View style={styles.clip93Stack}>
                                      <Svg
                                        viewBox="0 0 26.95 112.96"
                                        style={styles.clip93}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="transparent"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M0.00 0.00 L26.95 0.00 L26.95 112.96 L0.00 112.96 Z"
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 26.95 112.96"
                                        style={styles.fill819}
                                      >
                                        <Defs>
                                          <Mask
                                            id="u7YkLJ"
                                            x={0}
                                            y={0}
                                            width={26}
                                            height={112}
                                          >
                                            <Path
                                              d="M0.00 0.00 L26.95 0.00 L26.95 112.96 L0.00 112.96 Z"
                                              fill="white"
                                            />
                                          </Mask>
                                        </Defs>
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(242,188,167,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          mask="url(#u7YkLJ)"
                                          d="M9.26 17.18 C10.48 17.87 11.00 19.39 10.93 20.81 L6.77 100.91 C6.77 106.04 18.04 110.19 23.08 110.19 C24.47 110.19 25.77 109.87 26.95 109.31 C25.28 111.53 20.23 112.96 17.28 112.96 C12.23 112.96 3.39 108.80 3.39 103.68 L8.05 20.27 C8.11 19.34 7.67 18.47 6.91 17.95 C2.66 15.07 -1.12 10.16 0.30 0.00 C0.30 0.00 -1.19 11.26 9.26 17.18 "
                                        ></Path>
                                      </Svg>
                                    </View>
                                  </View>
                                  <Svg
                                    viewBox="0 0 10.72 37.27"
                                    style={styles.fill118}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,217,195,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.53 34.05 C3.76 36.05 5.55 37.48 7.53 37.25 C9.51 37.01 10.92 35.19 10.69 33.18 L9.19 20.14 C9.19 20.14 7.19 3.23 7.19 3.23 C6.96 1.22 5.16 -0.21 3.19 0.03 C1.21 0.26 -0.21 2.08 0.02 4.09 L3.52 34.04 C3.52 34.04 3.52 34.04 3.53 34.05 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 3.87 34.13"
                                    style={styles.fill1310}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(242,188,167,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.40 3.92 C1.40 3.92 3.76 36.05 3.53 34.04 C3.52 34.04 3.52 34.04 3.52 34.03 L0.02 4.09 C-0.21 2.08 1.21 0.26 3.19 0.02 C3.42 -0.00 3.65 -0.01 3.87 0.01 C2.26 0.54 1.19 2.16 1.40 3.92 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.25 20.36"
                                    style={styles.fill159}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,217,195,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 3.66 L0.00 3.67 L0.03 16.70 C0.04 18.73 1.66 20.36 3.65 20.36 C5.64 20.35 7.25 18.71 7.25 16.70 L7.25 16.68 L7.22 3.66 C7.21 1.63 5.59 -0.01 3.60 0.00 C1.61 0.01 0.00 1.64 0.00 3.66 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 5.03 13.94"
                                    style={styles.fill177}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(242,188,167,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.13 3.68 C2.13 3.68 2.13 3.68 2.13 3.68 C2.13 3.68 0.77 10.99 0.50 13.75 L0.00 13.94 L0.00 3.67 L0.00 3.66 C0.00 1.64 1.61 0.00 3.60 0.00 C4.60 0.00 4.81 0.26 5.03 0.30 C3.35 0.61 2.61 1.91 2.13 3.68 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 9.52 37.39"
                                    style={styles.fill195}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,217,195,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.01 33.45 C-0.14 35.46 1.34 37.22 3.32 37.38 C5.31 37.54 7.05 36.03 7.21 34.02 L8.23 20.93 C8.23 20.93 9.51 3.95 9.51 3.94 C9.66 1.93 8.18 0.17 6.19 0.01 C4.21 -0.15 2.47 1.36 2.31 3.38 L0.01 33.44 C0.01 33.44 0.01 33.45 0.01 33.45 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.25 20.36"
                                    style={styles.fill215}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,217,195,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 3.67 L0.00 3.67 L0.03 16.70 C0.04 18.73 1.66 20.37 3.65 20.36 C5.64 20.35 7.25 18.71 7.25 16.70 L7.25 16.69 L7.22 3.66 C7.21 1.63 5.59 -0.00 3.60 0.00 C1.61 0.01 0.00 1.65 0.00 3.67 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.27 13.3"
                                    style={styles.fill235}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(242,188,167,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.31 3.67 L1.31 3.67 C1.31 3.67 0.04 15.09 0.03 13.06 L0.00 3.67 L0.00 3.67 C0.00 1.65 1.61 0.01 3.60 0.00 C3.83 -0.00 4.05 0.02 4.27 0.06 C2.59 0.38 1.31 1.87 1.31 3.67 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 6.23 25.28"
                                    style={styles.fill255}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(242,188,167,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.05 3.48 C3.05 3.48 -0.00 25.28 0.00 25.28 L1.67 3.38 C1.83 1.36 3.57 -0.15 5.56 0.01 C5.79 0.03 6.01 0.07 6.23 0.13 C4.55 0.33 3.19 1.71 3.05 3.48 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 5.3 7.5"
                                    style={styles.fill275}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(206,78,170,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.68 0.65 L5.27 4.75 C5.34 5.20 5.28 5.66 5.10 6.08 C4.56 7.32 3.13 7.83 1.97 7.29 C1.76 7.19 1.56 7.05 1.39 6.89 C0.86 6.41 0.52 5.75 0.45 5.03 L0.00 1.64 L0.16 1.40 C1.18 -0.12 3.24 -0.46 4.68 0.65 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 5.09 7.5"
                                    style={styles.fill294}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(206,78,170,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M5.09 1.14 L4.78 5.27 C4.75 5.73 4.59 6.16 4.33 6.53 L4.33 6.53 C3.53 7.62 2.03 7.80 1.01 7.01 C0.83 6.87 0.67 6.69 0.53 6.50 C0.12 5.91 -0.06 5.18 0.02 4.47 L0.31 1.06 L0.52 0.86 C1.84 -0.39 3.93 -0.26 5.09 1.14 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="-0.27 -0.27 25.46 8.64"
                                    style={styles.stroke313}
                                  >
                                    <Path
                                      strokeWidth={0.54432}
                                      fill="transparent"
                                      stroke="rgba(255,182,0,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.59 5.43 C-7.85 10.29 28.08 6.01 24.05 0.64 C23.45 -0.16 20.54 -0.07 19.50 0.18 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="-0.27 -0.27 25.95 9.45"
                                    style={styles.stroke333}
                                  >
                                    <Path
                                      strokeWidth={0.54432}
                                      fill="transparent"
                                      stroke="rgba(255,182,0,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M22.63 0.00 C33.78 -0.21 -0.44 13.17 0.00 6.50 C0.07 5.50 2.69 4.19 3.76 3.92 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day81}>Day 8</Text>
                            <View style={styles.rectangleCopy311}>
                              <Text style={styles.x8}>1x</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.style14Row}>
                        <View style={styles.style14}>
                          <View style={styles.rectangle17Stack}>
                            <View style={styles.rectangle17}>
                              <View style={styles.character8}>
                                <View style={styles.fill124StackStack}>
                                  <View style={styles.fill124Stack}>
                                    <Svg
                                      viewBox="0 0 16.05 15.54"
                                      style={styles.fill124}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(240,191,124,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 4.50 C0.00 4.50 2.54 15.54 8.35 15.54 C14.15 15.54 16.05 7.54 16.05 7.54 L15.47 0.00 L0.00 4.50 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 6.51 13.8"
                                      style={styles.fill74}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(233,73,54,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M6.51 7.41 C5.11 5.89 1.77 2.21 0.72 0.51 C-0.62 -1.67 0.15 3.76 1.08 5.08 C1.08 5.08 -0.12 6.32 1.11 8.61 C1.11 8.61 -0.12 12.13 5.15 13.80 L5.01 13.16 L5.66 9.99 L5.81 8.20 L6.51 7.41 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 17.57 21.06"
                                      style={styles.fill94}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(80,161,210,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 7.59 C0.00 12.36 0.53 17.75 2.82 21.06 C1.83 18.43 1.83 15.96 1.91 15.38 C1.98 14.71 2.31 14.82 2.31 14.82 C5.55 15.88 8.78 13.27 8.78 13.27 C8.78 13.27 12.01 15.88 15.24 14.82 C15.24 14.82 15.57 14.71 15.66 15.38 C15.73 15.96 15.72 18.43 14.74 21.06 C17.03 17.75 17.57 12.36 17.57 7.59 C17.57 -2.53 0.00 -2.53 0.00 7.59 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 14.45 3.97"
                                      style={styles.path15}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(254,254,254,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M8.27 2.53 C8.27 2.53 10.64 -1.21 14.35 0.40 C14.35 0.40 14.97 2.66 13.11 3.69 M1.34 3.69 C-0.51 2.66 0.10 0.40 0.10 0.40 C3.82 -1.21 6.18 2.53 6.18 2.53 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 3.93 1.4"
                                      style={styles.fill138}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M1.49 0.16 C0.62 -0.03 -0.04 -0.02 0.00 0.05 C0.24 0.39 0.63 0.68 1.09 0.90 C1.46 1.08 1.87 1.22 2.27 1.30 C2.92 1.44 3.55 1.44 3.93 1.29 C3.46 0.90 2.91 0.61 2.37 0.42 C2.06 0.31 1.77 0.22 1.49 0.16 "
                                      ></Path>
                                    </Svg>
                                    <View style={styles.rectangle18}></View>
                                    <View style={styles.rectangleCopy14}></View>
                                    <Svg
                                      viewBox="0 0 7.95 7.62"
                                      style={styles.fill139}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(254,254,254,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M3.98 0.00 L4.91 2.92 L7.95 2.92 L5.48 4.71 L6.44 7.62 L3.98 5.82 L1.51 7.62 L2.47 4.71 L0.00 2.92 L3.04 2.92 L3.98 0.00 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 13.94 21.06"
                                      style={styles.fill158}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(66,132,171,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M12.47 4.81 C12.86 5.69 13.11 6.73 13.11 7.97 C13.11 8.71 13.09 9.46 13.07 10.23 C12.96 12.92 12.63 15.67 11.89 18.04 C11.75 18.94 11.51 19.99 11.12 21.06 C12.73 18.72 13.47 15.33 13.77 11.86 C13.89 10.44 13.94 8.98 13.94 7.58 C13.94 6.25 13.63 5.09 13.09 4.11 C10.79 -0.17 4.19 -1.11 0.00 1.30 C2.17 0.37 4.32 0.33 4.32 0.33 C4.32 0.33 10.44 0.42 12.47 4.81 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 3.37 5.25"
                                      style={styles.path16}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(254,254,254,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.87 1.69 C1.02 1.48 1.30 1.42 1.52 1.57 C1.73 1.72 1.78 2.01 1.64 2.22 C1.41 2.55 1.21 2.95 1.08 3.40 C0.97 3.81 0.91 4.27 0.92 4.77 C0.93 5.03 0.73 5.25 0.47 5.25 C0.22 5.26 0.00 5.05 0.00 4.79 C-0.02 4.19 0.05 3.64 0.19 3.16 M2.68 0.06 C2.91 -0.07 3.19 0.02 3.31 0.24 C3.44 0.46 3.35 0.75 3.12 0.87 C3.03 0.92 2.94 0.98 2.84 1.04 C2.74 1.10 2.64 1.18 2.56 1.24 C2.35 1.40 2.06 1.35 1.90 1.14 C1.75 0.94 1.80 0.65 2.00 0.49 C2.12 0.40 2.23 0.33 2.34 0.27 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.54 3.66"
                                      style={styles.stroke19}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(195,133,57,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.26 0.90 C1.44 1.03 1.54 1.24 1.54 1.46 L1.54 2.66 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.54 3.66"
                                      style={styles.stroke21}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(195,133,57,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M1.54 0.00 L0.25 0.93 C0.09 1.04 0.00 1.22 0.00 1.42 L0.00 2.66 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 6.01 1.21"
                                      style={styles.stroke23}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(195,133,57,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.21 L0.35 0.00 L5.01 0.00 "
                                      ></Path>
                                    </Svg>
                                  </View>
                                  <Svg
                                    viewBox="0 0 6.29 13.8"
                                    style={styles.fill412}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(233,73,54,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 7.18 C1.50 5.54 4.57 2.12 5.57 0.51 C6.91 -1.67 6.14 3.76 5.23 5.08 C5.23 5.08 6.41 6.32 5.19 8.61 C5.19 8.61 6.41 12.13 1.15 13.80 C1.36 13.00 1.32 9.01 0.59 7.97 C0.42 7.72 0.21 7.45 0.00 7.18 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day9}>Day 9</Text>
                            <View style={styles.rectangleCopy310}>
                              <Text style={styles.x7}>1x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style13}>
                          <View style={styles.rectangle16Stack}>
                            <View style={styles.rectangle16}>
                              <View style={styles.character7}>
                                <View style={styles.fill123StackStack}>
                                  <View style={styles.fill123Stack}>
                                    <Svg
                                      viewBox="0 0 8.27 16.18"
                                      style={styles.fill123}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(251,195,153,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M2.13 0.02 C2.11 0.02 2.08 0.02 2.04 0.01 C0.95 -0.12 0.00 0.78 0.00 1.88 L0.00 14.31 C0.00 15.34 0.84 16.18 1.88 16.18 C2.24 16.18 2.60 16.07 2.91 15.87 L6.23 13.68 C6.53 13.48 6.77 13.21 6.91 12.88 L7.59 11.37 C7.66 11.20 7.71 11.02 7.74 10.84 C7.89 9.67 8.47 5.08 8.21 5.08 C7.90 5.08 2.64 0.02 2.13 0.02 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 11.21 26.07"
                                      style={styles.fill818}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(38,50,56,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M7.43 3.56 L0.00 1.40 L0.00 17.77 L0.86 17.99 L4.96 20.36 L8.08 26.07 L11.21 15.51 C11.21 15.51 10.34 0.11 10.02 0.00 L7.43 3.56 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 6.57 4.31"
                                      style={styles.fill176}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(251,195,153,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 3.66 L2.05 4.31 L4.96 3.34 L6.57 0.00 L2.38 0.93 L0.00 3.66 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 3.93 1.4"
                                      style={styles.fill194}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M2.44 0.16 C2.17 0.23 1.87 0.31 1.57 0.42 C1.03 0.61 0.47 0.89 0.00 1.29 C0.39 1.44 1.01 1.44 1.67 1.30 C2.06 1.22 2.48 1.08 2.85 0.90 C3.30 0.68 3.69 0.39 3.93 0.05 C3.98 -0.02 3.32 -0.03 2.44 0.16 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 1.4 1.14"
                                      style={styles.fill214}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(44,62,80,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.99 0.00 C0.71 0.07 0.41 0.15 0.12 0.26 C0.04 0.36 0.00 0.50 0.00 0.64 C0.00 0.84 0.08 1.01 0.21 1.14 C0.61 1.06 1.02 0.92 1.39 0.74 C1.40 0.71 1.40 0.67 1.40 0.64 C1.40 0.36 1.23 0.11 0.99 0.00 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 3.81 1.41"
                                      style={styles.fill234}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(198,141,103,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.44 L2.08 1.41 L3.81 0.00 L1.87 0.68 L0.00 0.44 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 7.7 1.57"
                                      style={styles.fill254}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(198,141,103,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M1.13 1.04 L0.00 1.57 L7.70 0.81 L6.98 0.00 L1.13 1.04 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 3.98 1.18"
                                      style={styles.fill274}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(214,157,118,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.36 1.18 L2.75 1.06 L3.98 0.00 L0.00 0.61 L0.36 1.18 Z"
                                      ></Path>
                                    </Svg>
                                  </View>
                                  <View style={styles.fill37Stack}>
                                    <Svg
                                      viewBox="0 0 8.27 16.18"
                                      style={styles.fill37}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(251,195,153,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M6.14 0.02 C6.16 0.02 6.19 0.02 6.23 0.01 C7.32 -0.12 8.27 0.78 8.27 1.88 L8.27 14.31 C8.27 15.34 7.43 16.18 6.40 16.18 C6.03 16.18 5.67 16.07 5.37 15.87 L2.04 13.68 C1.74 13.48 1.51 13.21 1.36 12.88 L0.69 11.37 C0.61 11.20 0.56 11.02 0.54 10.84 C0.38 9.67 -0.20 5.08 0.07 5.08 C0.37 5.08 5.63 0.02 6.14 0.02 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 11.21 26.07"
                                      style={styles.fill57}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(55,71,79,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M1.19 0.00 C0.86 0.11 0.00 15.51 0.00 15.51 L3.12 26.07 L6.25 20.36 L10.34 17.99 L11.21 17.77 L11.21 1.40 L3.77 3.56 L1.19 0.00 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 6.57 4.31"
                                      style={styles.fill117}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(251,195,153,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.62 3.34 L4.52 4.31 L6.57 3.66 L4.09 0.93 L0.00 0.00 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 3.93 1.4"
                                      style={styles.fill137}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M1.49 0.16 C0.62 -0.03 -0.04 -0.02 0.00 0.05 C0.24 0.39 0.63 0.68 1.09 0.90 C1.46 1.08 1.87 1.22 2.27 1.30 C2.92 1.44 3.55 1.44 3.93 1.29 C3.46 0.90 2.91 0.61 2.37 0.42 C2.06 0.31 1.77 0.22 1.49 0.16 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 1.4 1.14"
                                      style={styles.fill157}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(44,62,80,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.41 0.00 C0.17 0.11 0.00 0.36 0.00 0.64 C0.00 0.67 0.00 0.71 0.01 0.74 C0.38 0.92 0.79 1.06 1.19 1.14 C1.32 1.01 1.40 0.84 1.40 0.64 C1.40 0.50 1.36 0.36 1.29 0.26 C0.98 0.15 0.69 0.06 0.41 0.00 "
                                      ></Path>
                                    </Svg>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day10}>Day 10</Text>
                            <View style={styles.rectangleCopy39}>
                              <Text style={styles.x6}>1x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style12}>
                          <View style={styles.rectangle15Stack}>
                            <View style={styles.rectangle15}>
                              <View style={styles.character6Stack}>
                                <View style={styles.character6}>
                                  <View style={styles.fill122Stack}>
                                    <Svg
                                      viewBox="0 0 41.23 75.59"
                                      style={styles.fill122}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(251,195,153,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M32.78 75.24 C30.19 74.32 14.67 66.88 14.84 63.96 C16.53 35.04 2.15 11.22 1.86 10.93 C-0.60 8.45 -0.62 4.40 1.82 1.90 C4.26 -0.61 8.24 -0.63 10.71 1.84 C12.04 3.17 43.16 34.84 41.14 69.58 C40.93 73.10 37.95 75.79 34.48 75.58 C33.89 75.54 33.32 75.43 32.78 75.24 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 39.48 75.36"
                                      style={styles.fill36}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M37.43 73.52 C36.84 73.48 36.27 73.36 35.73 73.17 C33.14 72.26 17.62 64.82 17.79 61.90 C19.48 32.98 5.09 9.15 4.81 8.87 C2.40 6.44 2.33 2.52 4.62 0.00 C3.59 0.29 2.62 0.84 1.82 1.66 C-0.62 4.17 -0.60 8.21 1.86 10.70 C2.15 10.98 16.53 34.81 14.84 63.73 C14.67 66.65 30.19 74.09 32.78 75.00 C33.32 75.19 33.89 75.31 34.48 75.35 C36.44 75.46 38.25 74.65 39.48 73.29 C38.83 73.48 38.14 73.56 37.43 73.52 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 15.64 16.49"
                                      style={styles.fill56}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M2.11 16.32 C0.85 15.87 -0.04 14.63 0.00 13.20 L0.18 6.97 C0.22 5.71 0.98 4.60 2.12 4.11 L11.29 0.25 C12.89 -0.43 14.74 0.34 15.40 1.97 C16.07 3.60 15.31 5.47 13.70 6.15 L6.41 9.22 L6.29 13.39 C6.24 15.16 4.79 16.54 3.05 16.49 C2.72 16.48 2.41 16.42 2.11 16.32 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 22.59 23.85"
                                      style={styles.fill73}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(251,195,153,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M8.86 23.85 C15.89 23.35 25.47 19.11 21.77 13.54 C15.72 4.44 7.20 -2.27 1.21 0.72 C1.21 0.72 -0.78 5.86 0.35 10.02 C10.09 15.08 8.86 23.85 8.86 23.85 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 10.19 13.85"
                                      style={styles.fill93}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M8.74 5.29 C7.50 3.17 3.31 -0.31 0.00 0.02 C9.74 5.08 8.51 13.85 8.51 13.85 C10.29 13.72 11.09 9.29 8.74 5.29 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 18.66 22.66"
                                      style={styles.fill116}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(251,195,153,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M3.73 22.48 C2.95 22.20 2.28 21.62 1.91 20.79 C1.44 19.75 -2.51 10.49 2.55 4.88 C7.30 -0.38 15.34 -0.01 15.68 0.01 C17.42 0.11 18.75 1.61 18.66 3.37 C18.56 5.13 17.09 6.48 15.36 6.39 C13.85 6.33 9.45 6.70 7.19 9.20 C5.40 11.18 6.74 16.16 7.63 18.13 C8.35 19.74 7.66 21.63 6.08 22.37 C5.31 22.72 4.47 22.74 3.73 22.48 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 7.12 20.79"
                                      style={styles.fill146}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M5.50 19.59 C4.71 19.32 4.04 18.73 3.67 17.90 C3.20 16.87 -0.75 7.61 4.32 2.00 C5.02 1.21 5.81 0.55 6.63 0.00 C5.18 0.71 3.76 1.68 2.55 3.01 C-2.51 8.62 1.44 17.88 1.91 18.92 C2.28 19.75 2.95 20.33 3.73 20.61 C4.47 20.87 5.31 20.85 6.08 20.50 C6.49 20.31 6.84 20.03 7.12 19.70 C6.57 19.81 6.01 19.78 5.50 19.59 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 8.08 2.1"
                                      style={styles.fill164}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M7.33 0.06 C5.99 -0.00 2.38 0.29 0.00 2.10 C2.13 1.19 4.53 1.03 5.57 1.07 C6.56 1.12 7.47 0.70 8.08 0.00 C7.84 0.05 7.59 0.07 7.33 0.06 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 18.52 20.91"
                                      style={styles.fill187}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M15.96 0.08 C13.40 0.52 4.98 2.50 2.18 5.98 C0.70 7.92 -0.02 10.23 0.00 12.72 C0.40 15.91 1.53 18.52 1.76 19.05 C2.13 19.87 2.81 20.46 3.59 20.74 C4.33 21.00 5.16 20.98 5.93 20.62 C7.18 20.05 7.86 18.74 7.74 17.43 C6.73 15.62 6.26 13.93 6.34 12.48 C6.03 10.57 6.06 8.55 7.04 7.46 C9.31 4.95 13.71 4.58 15.21 4.65 C16.94 4.74 18.42 3.39 18.51 1.63 C18.53 1.22 18.47 0.82 18.35 0.46 C17.64 0.05 16.79 -0.11 15.96 0.08 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 18.91 24.69"
                                      style={styles.fill209}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(251,195,153,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M4.97 24.51 C4.37 24.30 3.83 23.90 3.44 23.33 C-0.67 17.41 -1.12 11.25 2.22 6.85 C4.94 3.29 12.60 0.81 14.89 0.13 C16.55 -0.37 18.30 0.61 18.79 2.30 C19.27 4.00 18.32 5.77 16.65 6.26 C12.89 7.38 8.19 9.46 7.20 10.76 C5.61 12.85 6.11 16.09 8.58 19.65 C9.58 21.10 9.24 23.09 7.82 24.10 C6.96 24.72 5.90 24.84 4.97 24.51 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 18.76 17.96"
                                      style={styles.fill226}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(251,195,153,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M2.11 17.79 C0.91 17.36 0.04 16.22 0.00 14.85 C-0.04 13.09 1.32 11.63 3.06 11.58 C4.42 11.53 8.44 11.02 10.63 9.17 C12.77 7.37 12.46 3.59 12.45 3.55 C12.26 1.79 13.51 0.21 15.23 0.02 C16.96 -0.17 18.52 1.09 18.71 2.84 C18.74 3.13 19.44 10.06 14.65 14.09 C10.39 17.68 3.95 17.94 3.23 17.96 C2.84 17.97 2.46 17.91 2.11 17.79 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 15.85 5.72"
                                      style={styles.fill246}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 4.21 C0.00 4.21 0.41 5.12 1.61 5.54 C1.96 5.66 2.33 5.73 2.72 5.72 C3.44 5.70 9.89 5.43 14.14 1.84 C14.81 1.28 15.38 0.65 15.85 0.00 C11.59 3.40 2.68 5.77 0.00 4.21 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.68 2.17"
                                      style={styles.stroke261}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.68 1.17 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.43 3.02"
                                      style={styles.stroke283}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L0.43 2.02 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.03 2.79"
                                      style={styles.stroke304}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.03 1.79 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.03 2.79"
                                      style={styles.stroke324}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.03 1.79 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.03 2.79"
                                      style={styles.stroke343}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.03 1.79 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.29 2.6"
                                      style={styles.stroke363}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.29 1.60 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.03 2.79"
                                      style={styles.stroke383}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.03 1.79 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.36 3.04"
                                      style={styles.stroke403}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L0.36 2.04 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.36 3.04"
                                      style={styles.stroke423}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L0.36 2.04 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.36 3.04"
                                      style={styles.stroke443}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L0.36 2.04 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.97 2.82"
                                      style={styles.stroke463}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L0.97 1.82 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.4 3.03"
                                      style={styles.stroke483}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.40 0.00 L0.00 2.03 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.4 3.03"
                                      style={styles.stroke503}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.40 0.00 L0.00 2.03 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.1 3.07"
                                      style={styles.stroke523}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.05 0.00 L0.05 2.07 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.69 2.95"
                                      style={styles.stroke543}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.69 0.00 L0.00 1.95 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.4 3.03"
                                      style={styles.stroke563}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.40 0.00 L0.00 2.03 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.4 3.03"
                                      style={styles.stroke583}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.40 0.00 L0.00 2.03 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.4 3.03"
                                      style={styles.stroke603}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.40 0.00 L0.00 2.03 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 1.4 3.03"
                                      style={styles.stroke623}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.40 0.00 L0.00 2.03 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.15 2.71"
                                      style={styles.stroke643}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M1.15 0.00 L0.00 1.71 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.57 2.31"
                                      style={styles.stroke663}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.57 1.31 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.57 2.31"
                                      style={styles.stroke683}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.57 1.31 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 2.57 2.31"
                                      style={styles.stroke703}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.00 L1.57 1.31 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 5.86 3.98"
                                      style={styles.stroke723}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 0.34 L2.95 0.01 C3.27 -0.03 3.60 0.03 3.89 0.17 C4.88 0.66 5.17 1.95 4.49 2.82 L4.36 2.98 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="-0.25 -0.25 5.27 3.94"
                                      style={styles.stroke741}
                                    >
                                      <Path
                                        strokeWidth={0.5}
                                        fill="transparent"
                                        stroke="rgba(234,153,117,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M4.27 2.94 L3.33 1.03 C3.18 0.72 2.96 0.46 2.67 0.28 C1.72 -0.33 0.45 0.11 0.07 1.19 L0.00 1.39 "
                                      ></Path>
                                    </Svg>
                                  </View>
                                </View>
                                <Text style={styles.day11}>Day 11</Text>
                              </View>
                            </View>
                            <View style={styles.rectangleCopy38}>
                              <Text style={styles.x5}>1x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style11}>
                          <View style={styles.rectangle14Stack}>
                            <View style={styles.rectangle14}>
                              <View style={styles.character5}>
                                <View style={styles.group36Stack}>
                                  <View style={styles.group36}>
                                    <View style={styles.clip26Stack}>
                                      <Svg
                                        viewBox="0 0 22.9 22.42"
                                        style={styles.clip26}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="transparent"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M0.00 0.00 L22.89 0.00 L22.89 22.42 L0.00 22.42 Z"
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 22.9 22.42"
                                        style={styles.fill121}
                                      >
                                        <Defs>
                                          <Mask
                                            id="ZZtnXi"
                                            x={0}
                                            y={0}
                                            width={22}
                                            height={22}
                                          >
                                            <Path
                                              d="M0.00 0.00 L22.89 0.00 L22.89 22.42 L0.00 22.42 Z"
                                              fill="white"
                                            />
                                          </Mask>
                                        </Defs>
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(255,215,21,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          mask="url(#ZZtnXi)"
                                          d="M0.00 11.21 C0.00 5.02 5.13 0.00 11.45 0.00 C17.77 0.00 22.90 5.02 22.90 11.21 C22.90 17.40 17.77 22.42 11.45 22.42 C5.13 22.42 0.00 17.40 0.00 11.21 "
                                        ></Path>
                                      </Svg>
                                    </View>
                                  </View>
                                  <Svg
                                    viewBox="0 0 19.43 19.02"
                                    style={styles.fill411}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,204,1,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 9.51 C0.00 4.26 4.35 0.00 9.72 0.00 C15.08 0.00 19.43 4.26 19.43 9.51 C19.43 14.77 15.08 19.02 9.72 19.02 C4.35 19.02 0.00 14.77 0.00 9.51 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 17.9 17.62"
                                    style={styles.fill614}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,189,17,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M13.27 0.00 C14.24 1.48 14.80 3.24 14.80 5.12 C14.80 10.38 10.45 14.64 5.08 14.64 C3.22 14.64 1.48 14.12 0.00 13.23 C1.73 15.87 4.75 17.62 8.19 17.62 C13.55 17.62 17.90 13.36 17.90 8.11 C17.90 4.68 16.05 1.67 13.27 0.00 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 16.01 13.52"
                                    style={styles.fill817}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,219,83,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.64 9.33 C0.64 4.69 4.48 0.93 9.21 0.93 C11.98 0.93 14.44 2.22 16.01 4.21 C14.53 1.69 11.76 0.00 8.58 0.00 C3.84 0.00 0.00 3.76 0.00 8.40 C0.00 10.32 0.66 12.10 1.78 13.52 C1.05 12.28 0.64 10.85 0.64 9.33 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <Text style={styles.day12}>Day 12</Text>
                            </View>
                            <View style={styles.rectangleCopy37}>
                              <Text style={styles.x4}>1x</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.style10Row}>
                        <View style={styles.style10}>
                          <View style={styles.rectangle13Stack}>
                            <View style={styles.rectangle13}>
                              <View style={styles.character4}>
                                <View style={styles.fill120Stack}>
                                  <Svg
                                    viewBox="0 0 25.89 28.66"
                                    style={styles.fill120}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(238,65,60,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M10.02 0.33 C4.33 1.42 -0.61 6.96 0.06 14.33 C0.74 21.71 6.82 30.69 20.47 28.26 C26.14 26.94 25.61 20.93 25.35 17.96 C25.08 14.99 27.43 9.80 24.03 4.81 C20.64 -0.17 14.03 -0.45 10.02 0.33 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 13 11.05"
                                    style={styles.fill410}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.10 0.52 C-0.83 1.96 -0.80 8.03 2.85 10.00 C6.51 11.97 11.82 10.85 12.69 9.28 C14.00 6.91 10.93 2.57 7.92 1.02 C5.37 -0.29 3.59 -0.20 2.10 0.52 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 9.34 7.89"
                                    style={styles.fill613}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.61 0.40 C-0.62 1.48 -0.62 5.59 2.16 7.08 C4.94 8.58 8.52 7.77 9.16 6.57 C9.91 5.17 8.31 1.95 6.03 0.77 C4.09 -0.22 2.74 -0.15 1.61 0.40 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.31 11.45"
                                    style={styles.fill816}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M6.76 9.35 C6.59 7.35 7.57 4.34 7.25 1.06 C6.61 0.02 5.52 -0.40 3.80 0.47 C1.97 1.39 -1.25 5.17 0.51 9.87 C1.16 11.59 4.56 12.17 6.44 10.25 C6.56 10.12 6.68 9.96 6.80 9.76 C6.79 9.62 6.78 9.48 6.76 9.35 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 5.69 8.29"
                                    style={styles.fill106}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.51 0.34 C1.12 1.01 -0.90 3.60 0.44 7.03 C0.93 8.29 3.09 8.88 4.52 7.48 C6.01 6.03 6.74 -1.70 2.51 0.34 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.88 1.97"
                                    style={styles.fill123}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.86 1.82 C4.07 0.27 1.64 -0.68 0.07 0.58 C-0.08 0.70 0.03 0.97 0.24 0.91 C1.05 0.70 1.83 0.46 2.68 0.65 C3.51 0.83 4.19 1.31 4.67 1.93 C4.75 2.03 4.92 1.93 4.86 1.82 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.44 3.95"
                                    style={styles.fill145}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.31 3.81 C0.54 2.30 1.38 1.31 2.39 0.28 C2.51 0.16 2.39 -0.06 2.22 0.02 C0.85 0.66 0.13 2.29 0.00 3.78 C-0.02 3.99 0.28 4.01 0.31 3.81 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.03 3.16"
                                    style={styles.fill163}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.78 0.00 C1.26 0.05 0.82 0.63 0.54 1.03 C0.16 1.57 -0.19 2.19 0.11 2.85 C0.20 3.05 0.45 3.20 0.66 3.15 C1.34 2.97 1.59 2.36 1.79 1.72 C1.94 1.24 2.16 0.57 1.93 0.08 C1.90 0.02 1.84 -0.00 1.78 0.00 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 3.66 1.58"
                                    style={styles.fill186}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.01 0.50 C0.25 0.95 0.96 1.18 1.46 1.34 C2.15 1.57 2.82 1.74 3.46 1.34 C3.66 1.21 3.71 0.94 3.60 0.75 C3.27 0.15 2.53 0.05 1.81 0.01 C1.27 -0.01 0.47 -0.03 0.06 0.33 C0.00 0.38 -0.02 0.44 0.01 0.50 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.88 5.92"
                                    style={styles.fill208}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.87 4.36 C5.00 4.04 2.12 -0.33 1.14 0.02 C0.34 0.31 -0.28 5.85 0.13 5.92 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 9.34 5.53"
                                    style={styles.fill225}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.39 0.79 C2.49 1.33 -0.67 2.23 0.12 4.36 C0.81 6.19 4.38 5.49 5.67 4.80 C6.84 4.17 9.64 3.39 9.32 1.18 C8.99 -1.04 5.35 0.51 4.39 0.79 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.31 4.34"
                                    style={styles.fill245}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.43 0.62 C1.95 1.04 -0.52 1.75 0.10 3.42 C0.63 4.86 3.43 4.31 4.44 3.77 C5.35 3.28 7.55 2.67 7.29 0.92 C7.04 -0.82 4.19 0.40 3.43 0.62 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 3.66 4.34"
                                    style={styles.fill264}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(243,223,162,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.86 0.01 C0.26 0.22 -0.21 4.29 0.10 4.34 C0.41 4.39 3.56 3.43 3.65 3.20 C3.75 2.96 1.59 -0.24 0.86 0.01 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 6.09 2.76"
                                    style={styles.fill282}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.94 1.04 C2.39 1.18 0.48 0.94 0.13 1.51 C-0.23 2.09 -0.04 3.36 3.49 2.44 C7.02 1.51 6.16 0.11 5.46 0.01 C4.76 -0.09 2.94 1.04 2.94 1.04 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 0.81 1.58"
                                    style={styles.fill301}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 0.01 C0.09 0.53 0.19 1.07 0.36 1.58 C0.50 1.56 0.65 1.54 0.81 1.51 C0.68 1.01 0.52 0.51 0.39 0.00 C0.26 0.00 0.13 0.00 0.00 0.01 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.22 1.97"
                                    style={styles.fill321}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 0.19 C0.25 0.79 0.49 1.41 0.82 1.97 C0.96 1.92 1.10 1.86 1.22 1.80 C1.01 1.19 0.69 0.59 0.41 0.00 C0.27 0.06 0.13 0.13 0.00 0.19 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 0.41 0.39"
                                    style={styles.fill341}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.20 0.22 C0.23 0.22 0.23 0.18 0.20 0.18 C0.18 0.18 0.18 0.22 0.20 0.22 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.44 2.76"
                                    style={styles.fill361}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.87 0.21 C1.48 -0.10 0.84 -0.05 0.47 0.27 C-0.11 0.77 -0.16 1.64 0.34 2.22 C0.66 2.60 1.11 2.92 1.62 2.68 C1.93 2.54 2.21 2.16 2.33 1.84 C2.58 1.23 2.38 0.61 1.87 0.21 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.84 2.76"
                                    style={styles.fill381}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.01 0.04 C0.36 0.19 -0.11 0.81 0.02 1.50 C0.20 2.41 1.07 2.90 1.92 2.73 C2.69 2.57 3.02 1.77 2.75 1.06 C2.48 0.37 1.75 -0.14 1.01 0.04 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.83 1.58"
                                    style={styles.fill401}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.59 1.22 C2.02 0.90 1.83 0.41 1.39 0.21 C1.44 0.23 1.43 0.23 1.35 0.19 C1.27 0.14 1.18 0.10 1.09 0.06 C0.90 0.00 0.61 -0.02 0.42 0.01 C0.27 0.04 0.12 0.09 0.01 0.18 C-0.02 0.21 0.05 0.55 0.12 0.87 C0.19 1.20 0.25 1.51 0.28 1.52 C0.42 1.59 0.59 1.59 0.76 1.58 C1.09 1.55 1.34 1.41 1.59 1.22 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.46 2.73"
                                    style={styles.fill421}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.64 2.55 C0.91 2.75 1.33 2.79 1.63 2.63 C2.02 2.42 2.34 1.94 2.46 1.51 C2.24 0.99 1.96 0.59 1.63 0.10 C1.26 -0.05 0.86 -0.05 0.50 0.23 C-0.28 0.85 -0.08 1.99 0.64 2.55 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.56 8.68"
                                    style={styles.fill442}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M7.00 2.28 C8.10 2.98 8.68 4.00 8.83 5.25 C8.93 6.12 8.71 7.30 9.11 8.10 C9.40 8.69 10.14 8.94 10.56 8.33 C10.57 8.32 10.56 8.31 10.54 8.31 C9.64 8.68 9.86 5.96 9.85 5.65 C9.84 4.99 9.78 4.34 9.56 3.71 C9.18 2.64 8.36 1.74 7.36 1.13 C6.26 0.47 4.96 0.16 3.68 0.07 C2.89 0.02 1.99 0.08 1.16 0.00 C0.75 0.37 0.36 0.77 0.00 1.20 C0.14 1.24 0.28 1.28 0.43 1.30 C2.68 1.75 4.93 0.95 7.00 2.28 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.47 10.66"
                                    style={styles.fill461}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.07 3.73 C-0.12 4.87 0.06 6.05 0.69 7.04 C0.99 7.52 1.39 7.92 1.82 8.30 C2.19 8.62 4.48 10.09 3.59 10.63 C3.58 10.64 3.59 10.66 3.60 10.66 C4.56 10.69 4.67 9.81 4.20 9.18 C3.66 8.47 2.82 7.98 2.22 7.33 C1.31 6.34 1.00 5.19 1.28 3.91 C1.61 2.39 2.65 1.42 3.62 0.36 C3.08 0.21 2.54 0.09 2.00 0.00 C1.98 0.01 1.97 0.03 1.96 0.05 C1.05 1.12 0.31 2.37 0.07 3.73 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.22 1.58"
                                    style={styles.fill502}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 1.56 C-0.01 1.57 0.01 1.58 0.02 1.58 C0.76 1.26 0.99 0.71 1.22 0.02 C0.97 0.01 0.72 0.00 0.47 0.00 C0.51 0.54 0.43 1.06 0.00 1.56 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 2.84 5.13"
                                    style={styles.fill521}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.50 5.12 C0.52 5.14 0.55 5.14 0.55 5.11 C0.59 4.10 0.47 3.19 0.94 2.23 C1.34 1.40 2.05 0.78 2.84 0.23 C2.64 0.15 2.43 0.07 2.22 0.00 C0.43 1.06 -0.71 3.42 0.50 5.12 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.72 1.97"
                                    style={styles.fill541}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.97 1.46 C2.80 1.58 6.18 0.17 7.39 1.90 C7.51 2.08 7.79 1.89 7.70 1.71 C7.14 0.60 6.05 0.36 4.88 0.27 C3.79 0.20 2.04 0.36 0.73 0.00 C0.47 0.42 0.22 0.85 0.00 1.31 C0.30 1.39 0.64 1.44 0.97 1.46 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 22.88 8.62"
                                    style={styles.fill562}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(238,65,60,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 8.62 C0.22 8.33 0.51 8.10 0.76 7.83 C3.17 5.21 6.46 3.32 10.03 2.51 C13.60 1.69 17.44 1.96 20.85 3.25 C21.67 3.56 22.13 3.98 22.88 4.43 C19.36 -0.15 13.34 -0.43 9.42 0.32 C5.31 1.12 1.53 4.17 0.00 8.62 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 20.31 6.32"
                                    style={styles.fill581}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(204,204,204,1)"
                                      d="M0.00 2.51 C3.33 5.44 8.35 7.14 15.35 5.91 C18.88 5.11 20.02 2.54 20.31 0.00 C18.08 3.18 16.36 4.15 11.76 4.53 C6.21 4.98 3.71 3.62 0.00 2.51 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day5}>Day 5</Text>
                            <View style={styles.rectangleCopy36}>
                              <Text style={styles.x3}>1x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style9}>
                          <View style={styles.rectangle12Stack}>
                            <View style={styles.rectangle12}>
                              <View style={styles.character3}>
                                <View style={styles.fill119Stack}>
                                  <Svg
                                    viewBox="0 0 22.9 22.42"
                                    style={styles.fill119}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,215,21,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 11.21 C0.00 5.02 5.13 0.00 11.45 0.00 C17.77 0.00 22.90 5.02 22.90 11.21 C22.90 17.40 17.77 22.42 11.45 22.42 C5.13 22.42 0.00 17.40 0.00 11.21 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 19.43 19.02"
                                    style={styles.fill49}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,204,1,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 9.51 C0.00 4.26 4.35 0.00 9.72 0.00 C15.08 0.00 19.43 4.26 19.43 9.51 C19.43 14.77 15.08 19.02 9.72 19.02 C4.35 19.02 0.00 14.77 0.00 9.51 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 17.9 17.62"
                                    style={styles.fill612}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,189,17,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M13.27 0.00 C14.24 1.48 14.80 3.24 14.80 5.12 C14.80 10.38 10.45 14.64 5.08 14.64 C3.22 14.64 1.48 14.12 0.00 13.23 C1.73 15.87 4.75 17.62 8.19 17.62 C13.55 17.62 17.90 13.36 17.90 8.11 C17.90 4.68 16.05 1.67 13.27 0.00 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 16.01 13.52"
                                    style={styles.fill815}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,219,83,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.64 9.33 C0.64 4.69 4.48 0.93 9.21 0.93 C11.98 0.93 14.44 2.22 16.01 4.21 C14.53 1.69 11.76 0.00 8.58 0.00 C3.84 0.00 0.00 3.76 0.00 8.40 C0.00 10.32 0.66 12.10 1.78 13.52 C1.05 12.28 0.64 10.85 0.64 9.33 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day6}>Day 6</Text>
                            <View style={styles.rectangleCopy35}>
                              <Text style={styles.x2}>5x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style8}>
                          <View style={styles.rectangle11Stack}>
                            <View style={styles.rectangle11}>
                              <View style={styles.character2}>
                                <View style={styles.fill118Stack}>
                                  <Svg
                                    viewBox="0 0 22.51 22.02"
                                    style={styles.fill118}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(190,117,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M22.31 10.54 C22.58 10.80 22.58 11.22 22.31 11.48 L11.73 21.83 C11.47 22.09 11.04 22.09 10.78 21.83 L0.20 11.48 C-0.07 11.22 -0.07 10.80 0.20 10.54 L10.78 0.19 C11.04 -0.06 11.47 -0.06 11.73 0.19 L22.31 10.54 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 14.18 12.51"
                                    style={styles.path14}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(254,185,235,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.78 9.51 L0.00 7.10 L10.03 0.00 L12.21 2.13 L1.78 9.51 Z M14.18 4.06 L2.22 12.51 L1.54 11.58 L13.34 3.24 L14.18 4.06 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 17.17 11.01"
                                    style={styles.fill611}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(160,97,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.01 6.12 L7.82 10.82 C8.08 11.08 8.51 11.08 8.78 10.82 L15.57 4.17 L17.17 0.00 L0.00 0.00 L3.01 6.12 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.9 10.91"
                                    style={styles.fill814}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(159,72,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M10.90 0.00 C10.86 0.03 10.81 0.06 10.78 0.09 L0.20 10.44 C0.07 10.57 0.00 10.74 0.00 10.91 L7.29 10.91 L10.90 0.00 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.9 10.91"
                                    style={styles.fill105}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(215,131,235,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.60 10.91 L10.90 10.91 C10.90 10.74 10.83 10.57 10.70 10.44 L0.12 0.09 C0.08 0.06 0.04 0.03 0.00 0.00 L3.60 10.91 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.9 10.91"
                                    style={styles.fill136}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(139,56,214,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M10.78 10.82 C10.81 10.85 10.86 10.88 10.90 10.91 L7.29 0.00 L0.00 0.00 C0.00 0.17 0.07 0.34 0.20 0.47 L10.78 10.82 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 10.9 10.91"
                                    style={styles.fill156}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(133,54,205,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.60 0.00 L0.00 10.91 C0.04 10.88 0.08 10.85 0.12 10.82 L10.70 0.47 C10.83 0.34 10.90 0.17 10.90 0.00 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 3.33 3.26"
                                    style={styles.fill185}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.33 1.63 C2.28 1.96 2.01 2.23 1.67 3.26 C1.33 2.23 1.05 1.96 0.00 1.63 C1.05 1.30 1.32 1.03 1.67 0.00 C2.01 1.03 2.28 1.29 3.33 1.63 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 1.81 1.77"
                                    style={styles.fill207}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.81 0.88 C1.24 1.06 1.09 1.21 0.90 1.77 C0.72 1.21 0.57 1.06 0.00 0.88 C0.57 0.70 0.72 0.56 0.90 0.00 C1.09 0.56 1.24 0.70 1.81 0.88 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day7}>Day 7</Text>
                            <View style={styles.rectangleCopy13}>
                              <Text style={styles.x1}>1x</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.style7}>
                          <View style={styles.rectangle10Stack}>
                            <View style={styles.rectangle10}>
                              <View style={styles.character1}>
                                <View style={styles.fill117Stack}>
                                  <Svg
                                    viewBox="0 0 11.94 25.75"
                                    style={styles.fill117}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(242,188,167,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.65 23.78 L3.78 23.98 C5.34 25.99 8.21 26.34 10.20 24.75 C12.18 23.17 12.52 20.25 10.96 18.24 L6.98 13.11 L10.05 6.66 C11.15 4.35 10.20 1.58 7.93 0.46 C5.66 -0.65 2.92 0.31 1.83 2.62 C-1.14 9.53 -0.46 17.50 3.65 23.78 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 30.9 35.68"
                                    style={styles.fill35}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,217,195,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M14.88 35.67 C23.35 35.93 30.41 29.16 30.66 20.57 L30.89 16.03 C31.14 7.43 24.48 0.26 16.01 0.01 C7.55 -0.25 0.48 6.52 0.23 15.12 L0.01 19.65 C-0.24 28.25 6.42 35.42 14.88 35.67 "
                                    ></Path>
                                  </Svg>
                                  <View style={styles.group72}>
                                    <View style={styles.clip62Stack}>
                                      <Svg
                                        viewBox="0 0 25.45 106.15"
                                        style={styles.clip62}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="transparent"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M0.00 0.00 L25.45 0.00 L25.45 106.15 L0.00 106.15 Z"
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 25.45 106.15"
                                        style={styles.fill55}
                                      >
                                        <Defs>
                                          <Mask
                                            id="eeMV6T"
                                            x={0}
                                            y={0}
                                            width={25}
                                            height={106}
                                          >
                                            <Path
                                              d="M0.00 0.00 L25.45 0.00 L25.45 106.15 L0.00 106.15 Z"
                                              fill="white"
                                            />
                                          </Mask>
                                        </Defs>
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(252,217,195,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          mask="url(#eeMV6T)"
                                          d="M4.75 9.28 L0.00 96.87 C0.00 101.99 8.84 106.15 13.89 106.15 C18.93 106.15 25.45 101.99 25.45 96.87 L23.02 9.28 C23.02 4.15 18.93 0.00 13.89 0.00 C8.84 0.00 4.75 4.15 4.75 9.28 "
                                        ></Path>
                                      </Svg>
                                    </View>
                                  </View>
                                  <View style={styles.group102}>
                                    <View style={styles.clip92Stack}>
                                      <Svg
                                        viewBox="0 0 26.95 112.96"
                                        style={styles.clip92}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="transparent"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M0.00 0.00 L26.95 0.00 L26.95 112.96 L0.00 112.96 Z"
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 26.95 112.96"
                                        style={styles.fill813}
                                      >
                                        <Defs>
                                          <Mask
                                            id="A0Cejo"
                                            x={0}
                                            y={0}
                                            width={26}
                                            height={112}
                                          >
                                            <Path
                                              d="M0.00 0.00 L26.95 0.00 L26.95 112.96 L0.00 112.96 Z"
                                              fill="white"
                                            />
                                          </Mask>
                                        </Defs>
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(242,188,167,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          mask="url(#A0Cejo)"
                                          d="M9.26 17.18 C10.48 17.87 11.00 19.39 10.93 20.81 L6.77 100.91 C6.77 106.04 18.04 110.19 23.08 110.19 C24.47 110.19 25.77 109.87 26.95 109.31 C25.28 111.53 20.23 112.96 17.28 112.96 C12.23 112.96 3.39 108.80 3.39 103.68 L8.05 20.27 C8.11 19.34 7.67 18.47 6.91 17.95 C2.66 15.07 -1.12 10.16 0.30 0.00 C0.30 0.00 -1.19 11.26 9.26 17.18 "
                                        ></Path>
                                      </Svg>
                                    </View>
                                  </View>
                                  <Svg
                                    viewBox="0 0 10.72 37.27"
                                    style={styles.fill115}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,217,195,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.53 34.05 C3.76 36.05 5.55 37.48 7.53 37.25 C9.51 37.01 10.92 35.19 10.69 33.18 L9.19 20.14 C9.19 20.14 7.19 3.23 7.19 3.23 C6.96 1.22 5.16 -0.21 3.19 0.03 C1.21 0.26 -0.21 2.08 0.02 4.09 L3.52 34.04 C3.52 34.04 3.52 34.04 3.53 34.05 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 3.87 34.13"
                                    style={styles.fill135}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(242,188,167,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.40 3.92 C1.40 3.92 3.76 36.05 3.53 34.04 C3.52 34.04 3.52 34.04 3.52 34.03 L0.02 4.09 C-0.21 2.08 1.21 0.26 3.19 0.02 C3.42 -0.00 3.65 -0.01 3.87 0.01 C2.26 0.54 1.19 2.16 1.40 3.92 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.25 20.36"
                                    style={styles.fill155}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,217,195,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 3.66 L0.00 3.67 L0.03 16.70 C0.04 18.73 1.66 20.36 3.65 20.36 C5.64 20.35 7.25 18.71 7.25 16.70 L7.25 16.68 L7.22 3.66 C7.21 1.63 5.59 -0.01 3.60 0.00 C1.61 0.01 0.00 1.64 0.00 3.66 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 5.03 13.94"
                                    style={styles.fill175}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(242,188,167,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.13 3.68 C2.13 3.68 2.13 3.68 2.13 3.68 C2.13 3.68 0.77 10.99 0.50 13.75 L0.00 13.94 L0.00 3.67 L0.00 3.66 C0.00 1.64 1.61 0.00 3.60 0.00 C4.60 0.00 4.81 0.26 5.03 0.30 C3.35 0.61 2.61 1.91 2.13 3.68 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 9.52 37.39"
                                    style={styles.fill193}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,217,195,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.01 33.45 C-0.14 35.46 1.34 37.22 3.32 37.38 C5.31 37.54 7.05 36.03 7.21 34.02 L8.23 20.93 C8.23 20.93 9.51 3.95 9.51 3.94 C9.66 1.93 8.18 0.17 6.19 0.01 C4.21 -0.15 2.47 1.36 2.31 3.38 L0.01 33.44 C0.01 33.44 0.01 33.45 0.01 33.45 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 7.25 20.36"
                                    style={styles.fill213}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(252,217,195,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M0.00 3.67 L0.00 3.67 L0.03 16.70 C0.04 18.73 1.66 20.37 3.65 20.36 C5.64 20.35 7.25 18.71 7.25 16.70 L7.25 16.69 L7.22 3.66 C7.21 1.63 5.59 -0.00 3.60 0.00 C1.61 0.01 0.00 1.65 0.00 3.67 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 4.27 13.3"
                                    style={styles.fill233}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(242,188,167,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.31 3.67 L1.31 3.67 C1.31 3.67 0.04 15.09 0.03 13.06 L0.00 3.67 L0.00 3.67 C0.00 1.65 1.61 0.01 3.60 0.00 C3.83 -0.00 4.05 0.02 4.27 0.06 C2.59 0.38 1.31 1.87 1.31 3.67 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 6.23 25.28"
                                    style={styles.fill253}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(242,188,167,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M3.05 3.48 C3.05 3.48 -0.00 25.28 0.00 25.28 L1.67 3.38 C1.83 1.36 3.57 -0.15 5.56 0.01 C5.79 0.03 6.01 0.07 6.23 0.13 C4.55 0.33 3.19 1.71 3.05 3.48 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 5.3 7.5"
                                    style={styles.fill273}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(206,78,170,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M4.68 0.65 L5.27 4.75 C5.34 5.20 5.28 5.66 5.10 6.08 C4.56 7.32 3.13 7.83 1.97 7.29 C1.76 7.19 1.56 7.05 1.39 6.89 C0.86 6.41 0.52 5.75 0.45 5.03 L0.00 1.64 L0.16 1.40 C1.18 -0.12 3.24 -0.46 4.68 0.65 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 5.09 7.5"
                                    style={styles.fill293}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(206,78,170,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M5.09 1.14 L4.78 5.27 C4.75 5.73 4.59 6.16 4.33 6.53 L4.33 6.53 C3.53 7.62 2.03 7.80 1.01 7.01 C0.83 6.87 0.67 6.69 0.53 6.50 C0.12 5.91 -0.06 5.18 0.02 4.47 L0.31 1.06 L0.52 0.86 C1.84 -0.39 3.93 -0.26 5.09 1.14 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="-0.27 -0.27 25.46 8.64"
                                    style={styles.stroke312}
                                  >
                                    <Path
                                      strokeWidth={0.54432}
                                      fill="transparent"
                                      stroke="rgba(255,182,0,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M1.59 5.43 C-7.85 10.29 28.08 6.01 24.05 0.64 C23.45 -0.16 20.54 -0.07 19.50 0.18 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="-0.27 -0.27 25.95 9.45"
                                    style={styles.stroke332}
                                  >
                                    <Path
                                      strokeWidth={0.54432}
                                      fill="transparent"
                                      stroke="rgba(255,182,0,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M22.63 0.00 C33.78 -0.21 -0.44 13.17 0.00 6.50 C0.07 5.50 2.69 4.19 3.76 3.92 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.day8}>Day 8</Text>
                            <View style={styles.rectangleCopy34}>
                              <Text style={styles.x}>1x</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.topBar}>
              <View style={styles.player1Row}>
                <View style={styles.player1}>
                  <View style={styles.characterRow}>
                    <View style={styles.character}>
                      <View style={styles.group35Stack}>
                        <View style={styles.group35}>
                          <View style={styles.clip25Stack}>
                            <Svg
                              viewBox="0 0 35.85 41.38"
                              style={styles.clip25}
                            >
                              <Path
                                strokeWidth={0}
                                fill="transparent"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.00 0.00 L35.85 0.00 L35.85 41.38 L0.00 41.38 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 35.85 41.38"
                              style={styles.fill116}
                            >
                              <Defs>
                                <Mask
                                  id="oZZ3X2"
                                  x={0}
                                  y={0}
                                  width={35}
                                  height={41}
                                >
                                  <Path
                                    d="M0.00 0.00 L35.85 0.00 L35.85 41.38 L0.00 41.38 Z"
                                    fill="white"
                                  />
                                </Mask>
                              </Defs>
                              <Path
                                strokeWidth={0}
                                fill="rgba(238,65,60,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                mask="url(#oZZ3X2)"
                                d="M13.88 0.47 C5.99 2.05 -0.85 10.05 0.09 20.70 C1.02 31.34 9.44 44.32 28.34 40.79 C36.20 38.90 35.47 30.21 35.10 25.93 C34.73 21.65 37.98 14.15 33.28 6.95 C28.57 -0.25 19.43 -0.65 13.88 0.47 "
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <Svg viewBox="0 0 17.86 15.65" style={styles.fill48}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M2.89 0.74 C-1.14 2.78 -1.10 11.37 3.92 14.16 C8.95 16.95 16.24 15.36 17.43 13.14 C19.24 9.79 15.01 3.64 10.88 1.45 C7.38 -0.41 4.93 -0.29 2.89 0.74 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 12.71 11.1" style={styles.fill610}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(243,223,162,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M2.19 0.56 C-0.84 2.09 -0.85 7.86 2.93 9.96 C6.71 12.06 11.58 10.93 12.45 9.24 C13.47 7.27 11.30 2.74 8.20 1.09 C5.56 -0.31 3.72 -0.22 2.19 0.56 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 10.06 16.23" style={styles.fill812}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M9.30 13.26 C9.06 10.42 10.41 6.16 9.97 1.51 C9.10 0.03 7.59 -0.56 5.23 0.66 C2.71 1.97 -1.72 7.33 0.70 13.99 C1.59 16.43 6.27 17.26 8.86 14.53 C9.03 14.35 9.19 14.12 9.35 13.84 C9.34 13.64 9.32 13.45 9.30 13.26 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 7.71 12.08" style={styles.fill104}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(243,223,162,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M3.41 0.50 C1.51 1.48 -1.22 5.25 0.60 10.25 C1.26 12.07 4.18 12.95 6.13 10.90 C8.14 8.78 9.14 -2.48 3.41 0.50 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 6.54 2.89" style={styles.fill122}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(27,18,46,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M6.53 2.66 C5.47 0.40 2.20 -0.99 0.09 0.86 C-0.10 1.02 0.04 1.41 0.32 1.33 C1.41 1.02 2.46 0.68 3.60 0.95 C4.71 1.21 5.63 1.92 6.27 2.83 C6.37 2.97 6.60 2.82 6.53 2.66 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 3.59 5.47" style={styles.fill144}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(27,18,46,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.45 5.28 C0.80 3.19 2.03 1.82 3.52 0.39 C3.70 0.22 3.52 -0.09 3.28 0.02 C1.25 0.92 0.20 3.18 0.00 5.24 C-0.03 5.53 0.41 5.56 0.45 5.28 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 2.99 4.35" style={styles.fill162}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(27,18,46,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M2.61 0.00 C1.85 0.06 1.21 0.86 0.79 1.42 C0.23 2.16 -0.27 3.02 0.17 3.93 C0.30 4.21 0.66 4.41 0.98 4.33 C1.97 4.09 2.33 3.26 2.63 2.37 C2.85 1.71 3.18 0.78 2.84 0.11 C2.79 0.03 2.71 -0.01 2.61 0.00 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 4.79 2.37" style={styles.fill184}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(27,18,46,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.02 0.74 C0.33 1.42 1.26 1.76 1.92 2.01 C2.82 2.35 3.70 2.61 4.53 2.00 C4.79 1.81 4.86 1.41 4.72 1.13 C4.29 0.22 3.31 0.07 2.37 0.02 C1.66 -0.02 0.61 -0.04 0.07 0.50 C0.01 0.57 -0.02 0.65 0.02 0.74 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 6.63 8.43" style={styles.fill206}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M6.63 6.21 C6.79 5.75 2.89 -0.47 1.56 0.03 C0.46 0.44 -0.39 8.33 0.18 8.43 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 13.12 8.21" style={styles.fill224}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M6.16 1.17 C3.50 1.97 -0.94 3.31 0.18 6.47 C1.13 9.20 6.15 8.16 7.96 7.12 C9.60 6.19 13.54 5.04 13.08 1.75 C12.63 -1.55 7.51 0.76 6.16 1.17 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 10.02 6.27" style={styles.fill244}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(243,223,162,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M4.70 0.89 C2.67 1.50 -0.72 2.53 0.13 4.94 C0.87 7.02 4.69 6.23 6.08 5.44 C7.33 4.73 10.34 3.85 9.99 1.33 C9.64 -1.18 5.73 0.58 4.70 0.89 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 4.78 6.08" style={styles.fill263}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(243,223,162,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M1.12 0.02 C0.33 0.31 -0.28 6.01 0.13 6.08 C0.54 6.15 4.66 4.81 4.78 4.48 C4.90 4.15 2.08 -0.34 1.12 0.02 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 8.38 4.09" style={styles.fill281}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M4.04 1.54 C3.29 1.75 0.66 1.39 0.17 2.24 C-0.32 3.09 -0.06 4.98 4.80 3.61 C9.66 2.24 8.48 0.16 7.52 0.01 C6.55 -0.14 4.04 1.54 4.04 1.54 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 1.06 2.39" style={styles.fill30}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(27,18,46,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.01 C0.11 0.80 0.24 1.62 0.47 2.39 C0.65 2.37 0.85 2.33 1.06 2.29 C0.89 1.53 0.68 0.77 0.50 0.00 C0.34 0.00 0.17 0.01 0.00 0.01 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 1.46 2.57" style={styles.fill32}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(27,18,46,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 0.25 C0.30 1.03 0.59 1.84 0.98 2.57 C1.16 2.50 1.32 2.42 1.46 2.34 C1.21 1.55 0.83 0.77 0.49 0.00 C0.32 0.08 0.16 0.16 0.00 0.25 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 0.4 0.4" style={styles.fill34}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.20 0.22 C0.23 0.22 0.23 0.18 0.20 0.18 C0.18 0.18 0.18 0.22 0.20 0.22 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 3.63 4.05" style={styles.fill36}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M2.78 0.30 C2.20 -0.15 1.25 -0.07 0.70 0.39 C-0.16 1.12 -0.23 2.41 0.51 3.26 C0.99 3.80 1.65 4.28 2.41 3.93 C2.88 3.72 3.28 3.16 3.47 2.70 C3.83 1.80 3.54 0.89 2.78 0.30 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 4.17 3.87" style={styles.fill38}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M1.48 0.05 C0.54 0.26 -0.16 1.14 0.03 2.11 C0.29 3.38 1.56 4.07 2.82 3.82 C3.95 3.61 4.43 2.48 4.04 1.49 C3.64 0.51 2.56 -0.20 1.48 0.05 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 2.55 2.23" style={styles.fill40}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M1.20 2.23 C1.62 2.19 1.93 1.99 2.25 1.72 C2.78 1.27 2.55 0.58 1.99 0.30 C2.06 0.33 2.04 0.32 1.95 0.27 C1.84 0.20 1.73 0.14 1.61 0.09 C1.39 0.01 1.02 -0.02 0.78 0.02 C0.47 0.08 0.18 0.27 0.00 0.53 C0.08 1.02 0.18 1.51 0.29 1.99 C0.54 2.17 0.87 2.25 1.20 2.23 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 3.39 3.7" style={styles.fill42}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.70 0.35 C-0.40 1.17 -0.11 2.71 0.89 3.45 C1.27 3.73 1.85 3.78 2.26 3.56 C2.80 3.29 3.23 2.76 3.39 2.18 C3.08 1.49 2.72 0.80 2.28 0.11 C1.77 -0.08 1.20 -0.03 0.70 0.35 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 14.52 12.24" style={styles.fill441}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M9.63 3.21 C11.14 4.20 11.94 5.64 12.14 7.40 C12.28 8.63 11.98 10.29 12.52 11.42 C12.92 12.25 13.94 12.60 14.52 11.74 C14.53 11.73 14.52 11.71 14.50 11.72 C13.26 12.23 13.55 8.40 13.55 7.96 C13.53 7.04 13.46 6.12 13.15 5.24 C12.63 3.71 11.50 2.45 10.12 1.59 C8.61 0.66 6.82 0.22 5.06 0.10 C3.97 0.02 2.74 0.11 1.59 0.00 C1.03 0.52 0.50 1.08 0.00 1.69 C0.19 1.75 0.39 1.80 0.59 1.84 C3.68 2.46 6.78 1.34 9.63 3.21 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 6.14 15.28" style={styles.fill46}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.10 5.35 C-0.16 6.98 0.08 8.68 0.94 10.10 C1.36 10.78 1.91 11.35 2.51 11.89 C3.01 12.35 6.16 14.46 4.94 15.24 C4.92 15.25 4.93 15.28 4.95 15.28 C6.27 15.32 6.42 14.06 5.77 13.16 C5.04 12.14 3.88 11.44 3.05 10.50 C1.80 9.08 1.37 7.44 1.76 5.60 C2.22 3.42 3.64 2.03 4.98 0.51 C4.24 0.30 3.49 0.13 2.74 0.00 C2.73 0.02 2.71 0.04 2.69 0.06 C1.44 1.60 0.42 3.39 0.10 5.35 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 5.06 2.14" style={styles.fill48}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M5.03 1.96 C5.06 1.95 5.07 1.91 5.04 1.90 C4.03 1.68 3.05 1.43 2.16 0.88 C1.76 0.63 1.41 0.31 1.06 0.00 C0.70 0.17 0.35 0.36 0.00 0.56 C0.55 0.89 1.03 1.32 1.63 1.62 C2.67 2.15 3.91 2.29 5.03 1.96 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 1.89 2.4" style={styles.fill501}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 2.37 C-0.01 2.38 0.01 2.40 0.03 2.39 C1.18 1.91 1.54 1.08 1.89 0.03 C1.50 0.01 1.12 0.00 0.74 0.00 C0.79 0.82 0.67 1.61 0.00 2.37 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 3.74 7.58" style={styles.fill52}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.66 7.57 C0.68 7.59 0.73 7.59 0.73 7.55 C0.77 6.07 0.62 4.72 1.23 3.29 C1.76 2.08 2.70 1.15 3.74 0.35 C3.47 0.22 3.20 0.11 2.92 0.00 C0.56 1.57 -0.93 5.05 0.66 7.57 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 10.77 2.74" style={styles.fill54}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,217,29,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M1.36 2.03 C3.90 2.19 8.63 0.24 10.31 2.64 C10.48 2.88 10.87 2.62 10.74 2.37 C9.97 0.84 8.44 0.49 6.81 0.38 C5.29 0.27 2.85 0.50 1.02 0.00 C0.65 0.58 0.31 1.18 0.00 1.81 C0.42 1.93 0.89 2.00 1.36 2.03 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 31.78 12.37" style={styles.fill561}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(238,65,60,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M12.86 0.47 C7.21 1.60 2.10 6.03 0.00 12.37 C0.31 11.95 0.64 11.55 0.98 11.17 C4.28 7.44 8.79 4.74 13.69 3.58 C18.59 2.42 23.86 2.80 28.54 4.64 C29.67 5.09 30.76 5.62 31.78 6.26 C26.96 -0.27 18.23 -0.61 12.86 0.47 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 27.98 9.27" style={styles.fill58}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(204,204,204,1)"
                            d="M0.00 3.69 C4.58 7.98 11.50 10.47 21.14 8.68 C26.01 7.51 27.58 3.73 27.98 0.00 C24.90 4.66 22.53 6.09 16.20 6.64 C8.56 7.31 5.11 5.32 0.00 3.69 "
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                    <Text style={styles.player11}>Player 1</Text>
                  </View>
                </View>
                <View style={styles.status3}>
                  <View style={styles.rectangleCopy9}>
                    <View style={styles.beginner2Row}>
                      <Text style={styles.beginner2}>Beginner</Text>
                      <View style={styles.crystal}>
                        <View style={styles.group34Stack}>
                          <View style={styles.group34}>
                            <View style={styles.clip24Stack}>
                              <Svg
                                viewBox="0 0 18.6 18.19"
                                style={styles.clip24}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="transparent"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.00 0.00 L18.60 0.00 L18.60 18.19 L0.00 18.19 Z"
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 18.6 18.19"
                                style={styles.fill115}
                              >
                                <Defs>
                                  <Mask
                                    id="UbmZZA"
                                    x={0}
                                    y={0}
                                    width={18}
                                    height={18}
                                  >
                                    <Path
                                      d="M0.00 0.00 L18.60 0.00 L18.60 18.19 L0.00 18.19 Z"
                                      fill="white"
                                    />
                                  </Mask>
                                </Defs>
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(190,117,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  mask="url(#UbmZZA)"
                                  d="M18.43 8.71 C18.65 8.92 18.65 9.27 18.43 9.48 L9.69 18.03 C9.48 18.25 9.12 18.25 8.90 18.03 L0.16 9.48 C-0.05 9.27 -0.05 8.92 0.16 8.71 L8.90 0.16 C9.12 -0.05 9.48 -0.05 9.69 0.16 L18.43 8.71 Z"
                                ></Path>
                              </Svg>
                            </View>
                          </View>
                          <Svg viewBox="0 0 11.71 10.34" style={styles.path12}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(254,185,235,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M1.47 7.86 L0.00 5.86 L8.29 0.00 L10.09 1.76 L1.47 7.86 Z M11.71 3.35 L1.84 10.34 L1.27 9.57 L11.02 2.67 L11.71 3.35 Z"
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 14.18 9.1" style={styles.fill69}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(160,97,255,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M2.49 5.05 L6.46 8.94 C6.68 9.15 7.03 9.15 7.25 8.94 L12.86 3.45 L14.18 0.00 L0.00 0.00 L2.49 5.05 Z"
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 9 9.01" style={styles.fill811}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(159,72,255,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M9.00 0.00 C8.97 0.02 8.93 0.05 8.90 0.08 L0.16 8.63 C0.05 8.73 0.00 8.87 0.00 9.01 L6.03 9.01 L9.00 0.00 Z"
                            ></Path>
                          </Svg>
                          <View style={styles.group121}>
                            <View style={styles.clip111Stack}>
                              <Svg viewBox="0 0 9 9.01" style={styles.clip111}>
                                <Path
                                  strokeWidth={0}
                                  fill="transparent"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.00 0.00 L9.00 0.00 L9.00 9.01 L0.00 9.01 Z"
                                ></Path>
                              </Svg>
                              <Svg viewBox="0 0 9 9.01" style={styles.fill103}>
                                <Defs>
                                  <Mask
                                    id="w0gkBC"
                                    x={0}
                                    y={0}
                                    width={9}
                                    height={9}
                                  >
                                    <Path
                                      d="M0.00 0.00 L9.00 0.00 L9.00 9.01 L0.00 9.01 Z"
                                      fill="white"
                                    />
                                  </Mask>
                                </Defs>
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(215,131,235,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  mask="url(#w0gkBC)"
                                  d="M2.98 9.01 L9.00 9.01 C9.00 8.87 8.95 8.73 8.84 8.63 L0.10 0.08 C0.07 0.05 0.04 0.02 0.00 0.00 L2.98 9.01 Z"
                                ></Path>
                              </Svg>
                            </View>
                          </View>
                          <Svg viewBox="0 0 9 9.01" style={styles.fill134}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(139,56,214,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M8.90 8.94 C8.93 8.97 8.97 8.99 9.00 9.01 L6.03 0.00 L0.00 0.00 C0.00 0.14 0.05 0.28 0.16 0.39 L8.90 8.94 Z"
                            ></Path>
                          </Svg>
                          <View style={styles.group171}>
                            <View style={styles.clip161Stack}>
                              <Svg viewBox="0 0 9 9.01" style={styles.clip161}>
                                <Path
                                  strokeWidth={0}
                                  fill="transparent"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.00 0.00 L9.00 0.00 L9.00 9.01 L0.00 9.01 Z"
                                ></Path>
                              </Svg>
                              <Svg viewBox="0 0 9 9.01" style={styles.fill154}>
                                <Defs>
                                  <Mask
                                    id="dJhbSE"
                                    x={0}
                                    y={0}
                                    width={9}
                                    height={9}
                                  >
                                    <Path
                                      d="M0.00 0.00 L9.00 0.00 L9.00 9.01 L0.00 9.01 Z"
                                      fill="white"
                                    />
                                  </Mask>
                                </Defs>
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(133,54,205,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  mask="url(#dJhbSE)"
                                  d="M2.98 0.00 L0.00 9.01 C0.04 8.99 0.07 8.97 0.10 8.94 L8.84 0.39 C8.95 0.28 9.00 0.14 9.00 0.00 Z"
                                ></Path>
                              </Svg>
                            </View>
                          </View>
                          <Svg viewBox="0 0 2.75 2.69" style={styles.fill183}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,255,255,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M2.75 1.34 C1.88 1.62 1.66 1.84 1.38 2.69 C1.10 1.84 0.87 1.62 0.00 1.35 C0.87 1.07 1.09 0.85 1.38 0.00 C1.66 0.85 1.88 1.07 2.75 1.34 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 1.49 1.46" style={styles.fill205}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,255,255,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M1.49 0.73 C1.02 0.88 0.90 1.00 0.75 1.46 C0.59 1.00 0.47 0.88 0.00 0.73 C0.47 0.58 0.59 0.46 0.75 0.00 C0.90 0.46 1.02 0.58 1.49 0.73 "
                            ></Path>
                          </Svg>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.coins}>
                  <View style={styles.rectangleCopy27}>
                    <View style={styles.style6Row}>
                      <Text style={styles.style6}>40</Text>
                      <View style={styles.coin4}>
                        <View style={styles.group33Stack}>
                          <View style={styles.group33}>
                            <View style={styles.clip23Stack}>
                              <Svg
                                viewBox="0 0 18.91 18.68"
                                style={styles.clip23}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="transparent"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.00 0.00 L18.91 0.00 L18.91 18.68 L0.00 18.68 Z"
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 18.91 18.68"
                                style={styles.fill114}
                              >
                                <Defs>
                                  <Mask
                                    id="P1W1OU"
                                    x={0}
                                    y={0}
                                    width={18}
                                    height={18}
                                  >
                                    <Path
                                      d="M0.00 0.00 L18.91 0.00 L18.91 18.68 L0.00 18.68 Z"
                                      fill="white"
                                    />
                                  </Mask>
                                </Defs>
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,215,21,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  mask="url(#P1W1OU)"
                                  d="M0.00 9.34 C0.00 4.18 4.23 0.00 9.46 0.00 C14.68 0.00 18.91 4.18 18.91 9.34 C18.91 14.50 14.68 18.68 9.46 18.68 C4.23 18.68 0.00 14.50 0.00 9.34 "
                                ></Path>
                              </Svg>
                            </View>
                          </View>
                          <Svg viewBox="0 0 16.05 15.85" style={styles.fill47}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,204,1,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.00 7.93 C0.00 3.55 3.59 0.00 8.03 0.00 C12.46 0.00 16.05 3.55 16.05 7.93 C16.05 12.30 12.46 15.85 8.03 15.85 C3.59 15.85 0.00 12.30 0.00 7.93 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 14.79 14.68" style={styles.fill68}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(252,189,17,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M10.96 0.00 C11.76 1.23 12.22 2.70 12.22 4.27 C12.22 8.65 8.63 12.20 4.20 12.20 C2.66 12.20 1.22 11.77 0.00 11.03 C1.43 13.22 3.92 14.68 6.76 14.68 C11.20 14.68 14.79 11.13 14.79 6.76 C14.79 3.90 13.26 1.39 10.96 0.00 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 13.23 11.26" style={styles.fill810}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,219,83,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.53 7.78 C0.53 3.91 3.70 0.78 7.61 0.78 C9.90 0.78 11.93 1.85 13.23 3.51 C12.00 1.41 9.71 0.00 7.08 0.00 C3.17 0.00 0.00 3.13 0.00 7.00 C0.00 8.60 0.55 10.08 1.47 11.26 C0.87 10.24 0.53 9.04 0.53 7.78 "
                            ></Path>
                          </Svg>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.navigationBar}>
              <View style={styles.rectangle5}>
                <View style={styles.playIconRow}>
                  <View style={styles.playIcon}>
                    <View style={styles.rectangle7}>
                      <Svg viewBox="0 0 32 13.71" style={styles.path17Copy4}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(233,88,71,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M1.60 13.71 L30.40 13.71 C31.20 13.71 31.40 13.19 30.79 12.67 L17.36 1.05 C16.75 0.52 15.54 0.52 14.93 1.04 L1.22 12.68 C0.61 13.20 0.80 13.71 1.60 13.71 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                  <View style={styles.menuIcon}>
                    <View style={styles.rectangle6}></View>
                    <View style={styles.rectangleCopy}></View>
                    <View style={styles.rectangleCopy4}></View>
                  </View>
                  <View style={styles.storeIcon}>
                    <Svg viewBox="0 0 34.73 12.07" style={styles.combinedShape}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(134,146,170,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 29.56 11.67" style={styles.path13}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(134,146,170,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M25.62 0.00 L25.62 7.64 L5.94 7.64 C4.94 7.64 3.94 6.64 3.94 5.64 L3.94 2.00 C3.94 1.00 3.94 0.00 3.94 0.00 C3.05 0.40 2.07 0.60 0.98 0.60 C0.69 0.60 0.30 0.60 0.00 0.50 L0.00 11.67 L25.56 11.67 C27.56 11.67 29.56 9.67 29.56 7.67 L29.56 4.50 C29.56 2.50 29.56 0.50 29.56 0.50 C29.27 0.60 28.87 0.60 28.58 0.60 C27.49 0.60 26.51 0.40 25.62 0.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.pagination}>
            <View style={styles.rectangleRow}>
              <View style={styles.rectangle}></View>
              <View style={styles.rectangleCopy5}></View>
              <View style={styles.rectangleCopy6}></View>
              <View style={styles.rectangleCopy7}></View>
              <View style={styles.rectangleCopy8}></View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.trainYourSkills}>
          <Text style={styles.trainYourSkills1}>Train Your Skills</Text>
          <View style={styles.beginnerRow}>
            <View style={styles.beginner}>
              <View style={styles.card1Stack}>
                <View style={styles.card1}>
                  <View style={styles.previewBackground}>
                    <View style={styles.rectangle3}>
                      <View style={styles.group2}>
                        <View style={styles.femaleHand1}>
                          <View style={styles.fill15Stack}>
                            <Svg
                              viewBox="0 0 37.62 80.27"
                              style={styles.fill15}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(242,188,167,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M11.50 74.12 L11.92 74.75 C16.83 81.03 25.89 82.11 32.13 77.17 C38.38 72.23 39.45 63.13 34.54 56.86 L22.00 40.87 L31.68 20.76 C35.14 13.57 32.14 4.92 24.98 1.44 C17.82 -2.03 9.22 0.98 5.76 8.17 C-3.61 29.71 -1.45 54.55 11.50 74.12 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 97.38 111.24"
                              style={styles.fill32}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(252,217,195,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M46.90 111.22 C73.58 112.01 95.85 90.93 96.64 64.12 L97.36 49.99 C98.14 23.18 77.15 0.81 50.47 0.02 C23.79 -0.77 1.52 20.32 0.74 47.12 L0.02 61.25 C-0.77 88.06 20.22 110.43 46.90 111.22 "
                              ></Path>
                            </Svg>
                            <View style={styles.group7}>
                              <View style={styles.clip6Stack}>
                                <Svg
                                  viewBox="0 0 80.19 330.92"
                                  style={styles.clip6}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="transparent"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.00 0.00 L80.19 0.00 L80.19 330.92 L0.00 330.92 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 80.19 330.92"
                                  style={styles.fill52}
                                >
                                  <Defs>
                                    <Mask
                                      id="MFgs6D"
                                      x={0}
                                      y={0}
                                      width={80}
                                      height={330}
                                    >
                                      <Path
                                        d="M0.00 0.00 L80.19 0.00 L80.19 330.92 L0.00 330.92 Z"
                                        fill="white"
                                      />
                                    </Mask>
                                  </Defs>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(252,217,195,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    mask="url(#MFgs6D)"
                                    d="M14.98 28.93 L0.00 302.00 C0.00 317.97 27.87 330.92 43.77 330.92 C59.67 330.92 80.19 317.97 80.19 302.00 L72.56 28.93 C72.56 12.95 59.67 0.00 43.77 0.00 C27.87 0.00 14.98 12.95 14.98 28.93 "
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                            <View style={styles.group10}>
                              <View style={styles.clip9Stack}>
                                <Svg
                                  viewBox="0 0 84.92 352.17"
                                  style={styles.clip9}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="transparent"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.00 0.00 L84.92 0.00 L84.92 352.17 L0.00 352.17 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 84.92 352.17"
                                  style={styles.fill83}
                                >
                                  <Defs>
                                    <Mask
                                      id="D5Hr1R"
                                      x={0}
                                      y={0}
                                      width={84}
                                      height={352}
                                    >
                                      <Path
                                        d="M0.00 0.00 L84.92 0.00 L84.92 352.17 L0.00 352.17 Z"
                                        fill="white"
                                      />
                                    </Mask>
                                  </Defs>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(242,188,167,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    mask="url(#D5Hr1R)"
                                    d="M29.18 53.56 C33.02 55.71 34.68 60.45 34.43 64.87 L21.35 314.61 C21.35 330.59 56.85 343.54 72.75 343.54 C77.11 343.54 81.22 342.54 84.92 340.80 C79.66 347.70 63.77 352.17 54.45 352.17 C38.55 352.17 10.68 339.21 10.68 323.24 L25.38 63.19 C25.55 60.31 24.16 57.57 21.77 55.97 C8.37 46.99 -3.52 31.67 0.96 0.00 C0.96 0.00 -3.77 35.09 29.18 53.56 "
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                            <Svg
                              viewBox="0 0 33.78 116.21"
                              style={styles.fill112}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(252,217,195,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M11.11 106.14 C11.86 112.39 17.50 116.86 23.73 116.13 C29.96 115.39 34.43 109.72 33.70 103.45 L28.95 62.79 C28.95 62.79 22.67 10.08 22.66 10.07 C21.92 3.82 16.28 -0.65 10.05 0.08 C3.81 0.81 -0.65 6.49 0.08 12.76 L11.11 106.11 C11.11 106.12 11.11 106.13 11.11 106.14 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 12.2 106.42"
                              style={styles.fill131}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(242,188,167,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M4.40 12.23 C4.40 12.23 11.86 112.39 11.11 106.14 C11.11 106.13 11.11 106.12 11.11 106.11 L0.08 12.75 C-0.65 6.49 3.81 0.81 10.05 0.07 C10.78 -0.01 11.49 -0.02 12.20 0.03 C7.13 1.67 3.75 6.72 4.40 12.23 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 22.85 63.47"
                              style={styles.fill151}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(252,217,195,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.00 11.42 L0.00 11.45 L0.10 52.08 C0.12 58.39 5.23 63.49 11.51 63.47 C17.78 63.46 22.85 58.34 22.85 52.05 L22.85 52.02 L22.74 11.40 C22.73 5.09 17.62 -0.02 11.34 0.00 C5.07 0.02 0.00 5.13 0.00 11.42 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 15.85 43.46"
                              style={styles.fill172}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(242,188,167,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M6.73 11.47 C6.72 11.48 6.73 11.46 6.73 11.47 C6.73 11.47 2.42 34.26 1.59 42.87 L0.00 43.46 L0.00 11.45 L0.00 11.42 C0.00 5.13 5.07 0.00 11.34 0.00 C14.51 0.00 15.17 0.80 15.85 0.92 C10.56 1.90 8.21 5.94 6.73 11.47 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 29.99 116.58"
                              style={styles.fill191}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(252,217,195,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.03 104.28 C-0.44 110.56 4.22 116.05 10.48 116.54 C16.74 117.04 22.22 112.34 22.71 106.05 L25.92 65.25 C25.92 65.24 29.96 12.31 29.96 12.30 C30.43 6.02 25.77 0.53 19.51 0.04 C13.25 -0.46 7.78 4.24 7.28 10.52 L0.04 104.25 C0.04 104.26 0.03 104.27 0.03 104.28 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 22.85 63.47"
                              style={styles.fill211}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(252,217,195,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.00 11.43 L0.00 11.46 L0.10 52.08 C0.12 58.39 5.23 63.49 11.51 63.47 C17.78 63.46 22.85 58.35 22.85 52.05 L22.85 52.02 L22.74 11.40 C22.73 5.09 17.62 -0.01 11.34 0.00 C5.07 0.02 0.00 5.13 0.00 11.43 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 13.45 41.47"
                              style={styles.fill231}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(242,188,167,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M4.14 11.43 L4.14 11.46 C4.14 11.46 0.12 47.03 0.11 40.72 L0.00 11.46 L0.00 11.43 C0.00 5.13 5.07 0.02 11.34 0.00 C12.06 -0.00 12.77 0.07 13.45 0.20 C8.16 1.18 4.14 5.83 4.14 11.43 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 19.63 78.81"
                              style={styles.fill251}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(242,188,167,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M9.62 10.86 C9.62 10.86 -0.00 78.82 0.00 78.81 L5.28 10.52 C5.77 4.24 11.25 -0.46 17.51 0.04 C18.24 0.09 18.95 0.23 19.63 0.41 C14.34 1.03 10.05 5.33 9.62 10.86 "
                              ></Path>
                            </Svg>
                            <Svg viewBox="0 0 16.7 23.4" style={styles.fill271}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(206,78,170,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M14.75 2.04 L16.62 14.81 C16.83 16.21 16.64 17.65 16.07 18.94 C14.37 22.82 9.88 24.41 6.21 22.73 C5.54 22.42 4.93 21.99 4.38 21.49 C2.71 19.99 1.65 17.92 1.42 15.68 L0.00 5.10 L0.50 4.37 C3.71 -0.36 10.21 -1.42 14.75 2.04 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 16.05 23.37"
                              style={styles.fill291}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(206,78,170,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M16.05 3.56 L15.08 16.44 C14.98 17.85 14.48 19.21 13.64 20.34 L13.64 20.34 C11.13 23.76 6.40 24.31 3.19 21.86 C2.60 21.41 2.10 20.86 1.67 20.25 C0.37 18.42 -0.20 16.16 0.06 13.92 L0.99 3.29 L1.64 2.69 C5.81 -1.22 12.38 -0.82 16.05 3.56 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.85 -0.85 80.19 26.95"
                              style={styles.stroke31}
                            >
                              <Path
                                strokeWidth={1.701}
                                fill="transparent"
                                stroke="rgba(255,182,0,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M5.85 17.78 C-23.90 32.92 89.33 19.59 76.65 2.83 C74.76 0.34 65.60 0.62 62.32 1.40 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.85 -0.85 81.76 29.47"
                              style={styles.stroke33}
                            >
                              <Path
                                strokeWidth={1.701}
                                fill="transparent"
                                stroke="rgba(255,182,0,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M72.16 0.86 C107.30 0.18 -0.55 41.90 0.86 21.10 C1.07 18.01 9.33 13.92 12.68 13.07 "
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <View style={styles.maleHand}>
                          <View style={styles.group3Stack}>
                            <View style={styles.group3}>
                              <View style={styles.clip2Stack}>
                                <Svg
                                  viewBox="0 0 40.15 85.34"
                                  style={styles.clip2}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="transparent"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.00 0.00 L40.15 0.00 L40.15 85.34 L0.00 85.34 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 40.15 85.34"
                                  style={styles.fill14}
                                >
                                  <Defs>
                                    <Mask
                                      id="iAuxx4"
                                      x={0}
                                      y={0}
                                      width={40}
                                      height={85}
                                    >
                                      <Path
                                        d="M0.00 0.00 L40.15 0.00 L40.15 85.34 L0.00 85.34 Z"
                                        fill="white"
                                      />
                                    </Mask>
                                  </Defs>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(234,153,117,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    mask="url(#iAuxx4)"
                                    d="M12.27 78.80 L12.72 79.47 C17.97 86.14 27.63 87.29 34.30 82.04 C40.96 76.78 42.11 67.12 36.86 60.45 L23.49 43.45 L33.81 22.07 C37.51 14.43 34.30 5.23 26.66 1.54 C19.02 -2.16 9.84 1.04 6.15 8.69 L6.15 8.69 C-3.85 31.58 -1.54 57.99 12.27 78.80 "
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                            <Svg
                              viewBox="0 0 103.93 118.26"
                              style={styles.fill42}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(251,195,153,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M50.06 118.24 C78.54 119.08 102.30 96.66 103.14 68.17 L103.91 53.14 C104.74 24.64 82.35 0.86 53.87 0.02 C25.39 -0.82 1.63 21.60 0.79 50.10 L0.02 65.12 C-0.82 93.62 21.59 117.40 50.06 118.24 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 85.59 351.81"
                              style={styles.fill62}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(251,195,153,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M15.99 30.75 L0.00 321.06 C0.00 338.04 29.74 351.81 46.72 351.81 C63.69 351.81 85.59 338.04 85.59 321.06 L77.44 30.75 C77.44 13.77 63.69 0.00 46.72 0.00 C29.74 0.00 15.99 13.77 15.99 30.75 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 90.4 417.26"
                              style={styles.fill82}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M12.17 33.70 L11.41 48.72 C10.89 66.35 19.26 82.16 32.46 91.86 C36.25 94.65 38.33 99.19 38.07 103.88 L22.55 377.34 C22.55 394.32 60.43 408.09 77.41 408.09 C82.06 408.09 86.45 407.03 90.40 405.18 C84.78 412.51 67.82 417.26 57.88 417.26 C40.90 417.26 11.16 403.50 11.16 386.51 L26.85 110.05 C27.03 106.99 25.55 104.08 23.00 102.38 C8.70 92.83 -0.52 76.36 0.02 57.89 L0.79 42.87 C1.33 24.53 11.37 8.72 26.04 0.00 C17.77 8.85 12.56 20.63 12.17 33.70 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 24.38 65.53"
                              style={styles.fill10}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(251,195,153,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.00 53.38 C0.00 60.07 5.41 65.51 12.11 65.53 C18.81 65.54 24.26 60.12 24.27 53.41 L24.38 12.18 L24.38 12.15 C24.38 5.45 18.97 0.02 12.28 0.00 C5.58 -0.02 0.13 5.40 0.11 12.11 L0.00 53.35 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 14.83 54.02"
                              style={styles.fill12}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M5.26 12.11 C5.26 12.11 0.00 60.07 0.00 53.38 L0.00 53.35 L0.11 12.11 C0.13 5.40 5.58 -0.02 12.28 0.00 C13.15 0.00 14.01 0.10 14.83 0.28 C9.38 1.46 5.28 6.30 5.26 12.11 "
                              ></Path>
                            </Svg>
                            <View style={styles.group16}>
                              <View style={styles.clip15Stack}>
                                <Svg
                                  viewBox="0 0 24.39 67.81"
                                  style={styles.clip15}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="transparent"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.00 0.00 L24.39 0.00 L24.39 67.81 L0.00 67.81 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 24.39 67.81"
                                  style={styles.fill141}
                                >
                                  <Defs>
                                    <Mask
                                      id="tknlgc"
                                      x={0}
                                      y={0}
                                      width={24}
                                      height={67}
                                    >
                                      <Path
                                        d="M0.00 0.00 L24.39 0.00 L24.39 67.81 L0.00 67.81 Z"
                                        fill="white"
                                      />
                                    </Mask>
                                  </Defs>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(251,195,153,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    mask="url(#tknlgc)"
                                    d="M0.00 55.67 C0.00 62.36 5.41 67.79 12.11 67.81 C18.81 67.83 24.26 62.40 24.28 55.70 L24.39 12.18 L24.39 12.15 C24.39 5.45 18.97 0.02 12.28 -0.00 C5.58 -0.02 0.13 5.41 0.11 12.12 L0.00 55.63 Z"
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                            <View style={styles.group19}>
                              <View style={styles.clip18Stack}>
                                <Svg
                                  viewBox="0 0 14.56 56.28"
                                  style={styles.clip18}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="transparent"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.00 0.00 L14.56 0.00 L14.56 56.28 L0.00 56.28 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 14.56 56.28"
                                  style={styles.fill171}
                                >
                                  <Defs>
                                    <Mask
                                      id="HiluVa"
                                      x={0}
                                      y={0}
                                      width={14}
                                      height={56}
                                    >
                                      <Path
                                        d="M0.00 0.00 L14.56 0.00 L14.56 56.28 L0.00 56.28 Z"
                                        fill="white"
                                      />
                                    </Mask>
                                  </Defs>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(234,153,117,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    mask="url(#HiluVa)"
                                    d="M4.75 12.12 C4.75 12.12 0.00 62.36 0.00 55.67 L0.00 55.63 L0.11 12.12 C0.13 5.41 5.58 -0.02 12.28 -0.00 C13.06 0.00 13.82 0.08 14.56 0.23 C8.99 1.31 4.77 6.22 4.75 12.12 "
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                            <Svg
                              viewBox="0 0 24.39 67.48"
                              style={styles.fill201}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(251,195,153,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.00 12.15 L0.00 12.18 L0.11 55.36 C0.13 62.07 5.58 67.50 12.28 67.48 C18.97 67.46 24.39 62.03 24.39 55.34 L24.39 55.30 L24.27 12.12 C24.26 5.41 18.81 -0.02 12.11 0.00 C5.41 0.02 0.00 5.45 0.00 12.15 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 14.36 55.99"
                              style={styles.fill221}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M4.42 12.15 L4.42 12.18 C4.42 12.18 0.13 62.07 0.11 55.36 L0.00 12.18 L0.00 12.15 C0.00 5.45 5.41 0.02 12.11 0.00 C12.88 -0.00 13.62 0.08 14.36 0.21 C8.70 1.25 4.42 6.20 4.42 12.15 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 24.39 67.48"
                              style={styles.fill241}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(251,195,153,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.00 12.15 L0.00 12.18 L0.11 55.36 C0.13 62.07 5.58 67.50 12.28 67.48 C18.97 67.46 24.39 62.03 24.39 55.33 L24.39 55.30 L24.27 12.12 C24.26 5.41 18.81 -0.02 12.11 0.00 C5.41 0.02 0.00 5.45 0.00 12.15 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 14.36 55.99"
                              style={styles.fill261}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M4.42 12.15 L4.42 12.18 C4.42 12.18 0.13 62.07 0.11 55.36 L0.00 12.18 L0.00 12.15 C0.00 5.45 5.41 0.02 12.11 0.00 C12.88 -0.00 13.63 0.08 14.36 0.21 C8.70 1.25 4.42 6.20 4.42 12.15 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 8.01 10.35"
                              style={styles.stroke28}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L5.30 7.63 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 5.05 11.53"
                              style={styles.stroke301}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M2.33 0.91 L0.91 8.81 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 4.72 11.58"
                              style={styles.stroke321}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L2.00 8.87 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 4.72 11.59"
                              style={styles.stroke34}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L2.00 8.87 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 4.72 11.58"
                              style={styles.stroke36}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L2.00 8.87 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 4.72 11.59"
                              style={styles.stroke38}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L2.00 8.87 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 5.95 11.32"
                              style={styles.stroke40}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L3.23 8.60 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 4.72 11.59"
                              style={styles.stroke42}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L2.00 8.87 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 5.33 11.48"
                              style={styles.stroke44}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M2.61 0.91 L0.91 8.76 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 5.33 11.48"
                              style={styles.stroke46}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M2.61 0.91 L0.91 8.76 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 5.33 11.48"
                              style={styles.stroke48}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M2.61 0.91 L0.91 8.76 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 4.43 11.62"
                              style={styles.stroke50}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L1.72 8.90 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 8.11 10.29"
                              style={styles.stroke52}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M5.39 0.91 L0.91 7.57 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 8.11 10.29"
                              style={styles.stroke54}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M5.39 0.91 L0.91 7.57 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 6.71 11.04"
                              style={styles.stroke56}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M3.99 0.91 L0.91 8.33 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 7.34 10.75"
                              style={styles.stroke58}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M4.63 0.91 L0.91 8.03 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 8.11 10.29"
                              style={styles.stroke60}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M5.39 0.91 L0.91 7.57 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 8.11 10.29"
                              style={styles.stroke62}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M5.39 0.91 L0.91 7.57 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 8.11 10.29"
                              style={styles.stroke64}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M5.39 0.91 L0.91 7.57 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 10.36 8"
                              style={styles.stroke66}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.64 0.91 L0.91 5.28 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 7.4 10.72"
                              style={styles.stroke68}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L4.68 8.00 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 7.4 10.72"
                              style={styles.stroke70}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L4.68 8.00 "
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.91 -0.91 7.4 10.72"
                              style={styles.stroke72}
                            >
                              <Path
                                strokeWidth={1.81125}
                                fill="transparent"
                                stroke="rgba(234,153,117,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.91 0.91 L4.68 8.00 "
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.play2}>
                  <View style={styles.rectangleCopy32}>
                    <Svg viewBox="0 0 28 12" style={styles.path17Copy2}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(233,88,71,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.60 12.00 L26.40 12.00 C27.20 12.00 27.40 11.48 26.79 10.95 L15.34 1.05 C14.74 0.52 13.52 0.52 12.91 1.04 L1.22 10.96 C0.61 11.48 0.80 12.00 1.60 12.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <View style={styles.entry4}>
                  <View style={styles.rectangleCopy24}>
                    <View style={styles.entry5Row}>
                      <Text style={styles.entry5}>Entry</Text>
                      <Text style={styles.style2}>1</Text>
                      <View style={styles.coin2}>
                        <View style={styles.fill16Stack}>
                          <Svg viewBox="0 0 17.02 16.81" style={styles.fill16}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,215,21,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.00 8.41 C0.00 3.76 3.81 0.00 8.51 0.00 C13.21 0.00 17.02 3.76 17.02 8.41 C17.02 13.05 13.21 16.81 8.51 16.81 C3.81 16.81 0.00 13.05 0.00 8.41 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 14.45 14.27" style={styles.fill43}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,204,1,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.00 7.13 C0.00 3.19 3.23 0.00 7.22 0.00 C11.21 0.00 14.45 3.19 14.45 7.13 C14.45 11.07 11.21 14.27 7.22 14.27 C3.23 14.27 0.00 11.07 0.00 7.13 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 13.31 13.21" style={styles.fill63}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(252,189,17,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M9.87 0.00 C10.59 1.11 11.00 2.43 11.00 3.84 C11.00 7.78 7.77 10.98 3.78 10.98 C2.39 10.98 1.10 10.59 0.00 9.92 C1.28 11.90 3.53 13.21 6.09 13.21 C10.08 13.21 13.31 10.02 13.31 6.08 C13.31 3.51 11.93 1.26 9.87 0.00 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 11.91 10.14" style={styles.fill84}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,219,83,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.47 7.00 C0.47 3.52 3.33 0.70 6.85 0.70 C8.91 0.70 10.74 1.66 11.90 3.16 C10.80 1.27 8.74 0.00 6.38 0.00 C2.85 0.00 0.00 2.82 0.00 6.30 C0.00 7.74 0.49 9.07 1.32 10.14 C0.78 9.21 0.47 8.14 0.47 7.00 "
                            ></Path>
                          </Svg>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.status2}>
                  <View style={styles.rectangleCopy25}>
                    <Text style={styles.beginner1}>Beginner</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.amator}>
              <View style={styles.menuTypeCopy1Stack}>
                <View style={styles.menuTypeCopy1}>
                  <View style={styles.rectangle2}>
                    <View style={styles.femaleHand}>
                      <View style={styles.fill12Stack}>
                        <Svg viewBox="0 0 106.15 315.43" style={styles.fill12}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(252,217,195,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M80.46 8.44 C87.52 16.53 111.28 63.09 105.15 72.56 C44.39 166.34 62.76 282.60 63.18 284.11 C63.18 284.11 59.20 310.83 46.14 314.50 C33.06 318.18 19.51 310.55 15.83 297.45 C13.85 290.41 -31.67 123.87 41.31 11.23 C48.71 -0.19 63.94 -3.44 75.33 3.99 C77.28 5.26 79.00 6.76 80.46 8.44 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 72.69 315.41" style={styles.fill31}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(242,188,167,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M28.38 4.40 C30.33 5.67 32.05 7.18 33.51 8.85 C40.57 16.95 64.33 63.51 58.20 72.97 C-2.56 166.75 15.81 283.02 16.23 284.53 C19.80 297.36 12.56 310.64 0.00 314.65 C4.03 315.68 8.38 315.71 12.68 314.50 C25.75 310.83 29.73 284.11 29.73 284.11 C29.30 282.60 10.94 166.34 71.69 72.56 C77.82 63.09 54.06 16.53 47.01 8.43 C45.54 6.76 43.83 5.25 41.88 3.98 C35.43 -0.21 27.77 -1.00 20.98 1.18 C23.54 1.82 26.04 2.87 28.38 4.40 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 75.59 45.23" style={styles.fill51}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(242,188,167,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M72.55 4.22 C75.99 8.16 76.66 14.03 73.80 18.75 L61.32 39.30 C58.80 43.45 54.10 45.73 49.30 45.13 L10.79 40.35 C4.05 39.51 -0.74 33.35 0.09 26.60 C0.93 19.84 7.07 15.03 13.81 15.87 L44.44 19.68 L52.79 5.92 C56.32 0.10 63.89 -1.74 69.69 1.80 C70.79 2.47 71.75 3.29 72.55 4.22 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 66.16 101.89" style={styles.fill71}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(252,217,195,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M59.47 9.47 C34.62 -2.48 -1.91 -6.84 0.08 19.04 C3.32 61.27 19.48 100.30 45.55 101.89 C45.55 101.89 62.09 88.51 66.16 72.34 C42.70 36.51 59.47 9.47 59.47 9.47 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 19.69 63.29" style={styles.fill91}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(242,188,167,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.01 28.67 C0.20 38.23 7.80 58.01 19.69 63.29 C-3.77 27.47 13.00 0.43 13.00 0.43 C6.71 -2.60 -0.34 10.71 0.01 28.67 "
                          ></Path>
                        </Svg>
                        <View style={styles.group13}>
                          <View style={styles.clip12Stack}>
                            <Svg
                              viewBox="0 0 92.04 67.91"
                              style={styles.clip12}
                            >
                              <Path
                                strokeWidth={0}
                                fill="transparent"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M0.00 0.00 L92.04 0.00 L92.04 67.91 L0.00 67.91 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="0 0 92.04 67.91"
                              style={styles.fill111}
                            >
                              <Defs>
                                <Mask
                                  id="N9hNFQ"
                                  x={0}
                                  y={0}
                                  width={92}
                                  height={67}
                                >
                                  <Path
                                    d="M0.00 0.00 L92.04 0.00 L92.04 67.91 L0.00 67.91 Z"
                                    fill="white"
                                  />
                                </Mask>
                              </Defs>
                              <Path
                                strokeWidth={0}
                                fill="rgba(252,217,195,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                mask="url(#N9hNFQ)"
                                d="M89.00 4.21 C91.13 6.66 92.30 9.93 92.00 13.42 C91.61 17.80 87.42 56.53 59.54 65.54 C33.40 73.99 6.78 57.17 5.66 56.45 C-0.06 52.77 -1.72 45.14 1.95 39.41 C5.61 33.68 13.19 32.01 18.90 35.66 C23.89 38.81 39.55 46.09 52.00 42.07 C61.84 38.88 66.76 19.57 67.50 11.25 C68.09 4.46 74.06 -0.55 80.83 0.05 C84.12 0.34 86.99 1.90 89.00 4.21 "
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <Svg viewBox="0 0 52.08 67.9" style={styles.fill14}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M41.12 4.21 C43.25 6.65 44.42 9.93 44.11 13.41 C43.72 17.80 39.53 56.53 11.66 65.54 C7.75 66.80 3.84 67.49 0.00 67.76 C6.27 68.19 12.94 67.68 19.58 65.54 C47.45 56.53 51.65 17.80 52.03 13.41 C52.34 9.93 51.17 6.65 49.04 4.21 C47.02 1.90 44.15 0.34 40.86 0.05 C39.09 -0.11 37.38 0.14 35.80 0.68 C37.88 1.39 39.72 2.60 41.12 4.21 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 31.45 9.49" style={styles.fill16}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(234,153,117,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M2.64 1.92 C7.08 4.72 19.92 10.75 31.45 9.26 C22.46 8.20 13.99 4.09 10.56 1.92 C7.29 -0.16 3.41 -0.50 0.00 0.66 C0.91 0.97 1.80 1.38 2.64 1.92 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 91.8 58.52" style={styles.fill18}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(242,188,167,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M7.42 49.55 C16.96 53.04 49.35 62.72 65.45 56.46 C74.20 52.82 81.03 46.45 85.70 38.06 C90.38 26.58 91.55 15.63 91.75 13.42 C92.05 9.93 90.88 6.66 88.75 4.21 C86.74 1.90 83.87 0.34 80.58 0.05 C75.24 -0.43 70.44 2.63 68.34 7.25 C68.33 15.28 66.73 21.88 63.68 26.58 C61.13 33.62 57.19 40.31 51.75 42.07 C39.30 46.09 23.65 38.81 18.65 35.66 C12.94 32.01 5.36 33.68 1.70 39.41 C0.85 40.74 0.29 42.18 0.00 43.65 C1.65 46.39 4.22 48.57 7.42 49.55 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 92.93 71.73" style={styles.fill20}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(252,217,195,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M89.53 4.22 C91.16 6.09 92.25 8.48 92.50 11.14 C95.19 38.98 85.01 60.53 65.28 68.79 C49.29 75.48 18.51 68.97 9.46 66.81 C2.85 65.24 -1.23 58.59 0.34 51.97 C1.91 45.34 8.53 41.24 15.14 42.82 C30.04 46.35 49.94 48.49 55.81 46.03 C65.18 42.10 69.64 30.26 68.03 13.52 C67.37 6.74 72.32 0.71 79.08 0.06 C83.18 -0.34 87.01 1.33 89.53 4.22 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 88.87 47.84" style={styles.fill22}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(252,217,195,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M85.83 12.64 C89.10 16.39 89.90 21.92 87.42 26.58 C84.22 32.57 76.78 34.84 70.80 31.65 C66.08 29.15 51.45 23.09 40.50 25.04 C29.80 26.94 23.65 40.24 23.59 40.38 C20.91 46.63 13.67 49.52 7.44 46.83 C1.20 44.13 -1.68 36.88 1.00 30.62 C1.45 29.58 12.25 5.01 36.21 0.76 C57.48 -3.03 79.89 8.55 82.37 9.89 C83.72 10.61 84.88 11.55 85.83 12.64 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 61.88 20.21" style={styles.fill24}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(242,188,167,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M61.87 20.21 C61.87 20.21 62.20 16.39 58.93 12.64 C57.98 11.55 56.82 10.61 55.47 9.89 C52.98 8.55 30.58 -3.03 9.30 0.76 C5.94 1.35 2.85 2.36 0.00 3.63 C20.92 0.46 55.72 9.80 61.87 20.21 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 19.85 20.32" style={styles.fill26}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(78,206,144,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M5.40 0.00 C0.36 1.19 -1.34 8.13 1.09 11.67 C1.82 12.72 2.82 13.54 3.99 14.04 L14.64 18.65 L18.36 20.32 L18.76 19.44 C21.52 13.33 18.84 6.13 12.76 3.33 L6.65 0.51 L5.40 0.00 Z"
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 13.48 18.63" style={styles.fill28}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(78,206,144,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.71 0.00 L0.02 10.51 C-0.08 11.82 0.20 13.13 0.82 14.29 C4.47 20.09 10.07 19.31 13.41 16.42 C14.24 3.43 6.60 0.32 0.71 0.00 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.9 -0.9 75.04 28.48"
                          style={styles.stroke30}
                        >
                          <Path
                            strokeWidth={1.8}
                            fill="transparent"
                            stroke="rgba(255,182,0,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M67.69 7.89 C95.36 -8.10 -9.98 5.98 1.83 23.68 C3.58 26.32 12.11 26.02 15.15 25.20 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.9 -0.9 76.49 31.14"
                          style={styles.stroke32}
                        >
                          <Path
                            strokeWidth={1.8}
                            fill="transparent"
                            stroke="rgba(255,182,0,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M7.45 28.43 C-25.24 29.15 75.09 -14.93 73.78 7.05 C73.59 10.31 65.90 14.63 62.78 15.53 "
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.entry2}>
                  <View style={styles.rectangleCopy22}>
                    <View style={styles.entry3Row}>
                      <Text style={styles.entry3}>Entry</Text>
                      <Text style={styles.style1}>10</Text>
                      <View style={styles.coin1}>
                        <View style={styles.fill13Stack}>
                          <Svg viewBox="0 0 17.02 16.81" style={styles.fill13}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,215,21,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.00 8.41 C0.00 3.76 3.81 0.00 8.51 0.00 C13.21 0.00 17.02 3.76 17.02 8.41 C17.02 13.05 13.21 16.81 8.51 16.81 C3.81 16.81 0.00 13.05 0.00 8.41 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 14.45 14.27" style={styles.fill41}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,204,1,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.00 7.13 C0.00 3.19 3.23 0.00 7.22 0.00 C11.21 0.00 14.45 3.19 14.45 7.13 C14.45 11.07 11.21 14.27 7.22 14.27 C3.23 14.27 0.00 11.07 0.00 7.13 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 13.31 13.21" style={styles.fill61}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(252,189,17,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M9.87 0.00 C10.59 1.11 11.00 2.43 11.00 3.84 C11.00 7.78 7.77 10.98 3.78 10.98 C2.39 10.98 1.10 10.59 0.00 9.92 C1.28 11.90 3.53 13.21 6.09 13.21 C10.08 13.21 13.31 10.02 13.31 6.08 C13.31 3.51 11.93 1.26 9.87 0.00 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 11.91 10.14" style={styles.fill81}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,219,83,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.47 7.00 C0.47 3.52 3.33 0.70 6.85 0.70 C8.91 0.70 10.74 1.66 11.90 3.16 C10.80 1.27 8.74 0.00 6.38 0.00 C2.85 0.00 0.00 2.82 0.00 6.30 C0.00 7.74 0.49 9.07 1.32 10.14 C0.78 9.21 0.47 8.14 0.47 7.00 "
                            ></Path>
                          </Svg>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.play1}>
                  <View style={styles.rectangleCopy31}>
                    <Svg viewBox="0 0 28 12" style={styles.path17Copy1}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(233,88,71,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.60 12.00 L26.40 12.00 C27.20 12.00 27.40 11.48 26.79 10.95 L15.34 1.05 C14.74 0.52 13.52 0.52 12.91 1.04 L1.22 10.96 C0.61 11.48 0.80 12.00 1.60 12.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <View style={styles.status1}>
                  <View style={styles.rectangleCopy23}>
                    <Text style={styles.amator1}>Amator</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.advace}>
              <View style={styles.menuTypeCopyStack}>
                <View style={styles.menuTypeCopy}>
                  <View style={styles.card}>
                    <View style={styles.rectangle1}>
                      <View style={styles.group187}>
                        <View style={styles.group43Stack}>
                          <View style={styles.group43}>
                            <View style={styles.fill3StackRow}>
                              <View style={styles.fill3Stack}>
                                <Svg
                                  viewBox="0 0 7.76 19.35"
                                  style={styles.fill3}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.36 1.12 C0.36 1.12 -1.34 18.77 2.64 19.33 C6.63 19.90 9.09 1.50 7.00 0.36 C4.92 -0.77 0.36 1.12 0.36 1.12 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 7.76 9.28"
                                  style={styles.fill5}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(204,204,204,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M7.32 9.09 C7.95 4.89 7.94 0.88 7.00 0.36 C4.91 -0.77 0.36 1.12 0.36 1.12 C0.36 1.12 0.05 4.36 0.00 8.11 C1.24 8.73 2.59 9.12 3.98 9.24 C5.09 9.33 6.22 9.27 7.32 9.09 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 38.22 41.78"
                                  style={styles.fill37}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M22.34 0.00 C12.57 0.14 -0.14 10.59 0.00 24.09 C0.14 37.59 10.10 43.15 18.36 35.53 C18.36 35.53 24.87 45.27 32.29 40.43 C39.70 35.59 43.69 -0.30 22.34 0.00 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 37.68 39.27"
                                  style={styles.fill39}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M27.13 12.25 C31.24 11.25 34.68 12.87 37.68 15.29 C37.55 14.44 37.38 13.59 37.18 12.77 C34.26 10.94 30.84 10.12 27.29 11.11 C28.20 7.54 29.01 4.21 29.63 1.62 C29.32 1.45 29.00 1.29 28.68 1.14 C27.81 4.82 26.47 10.21 24.94 15.83 C20.64 31.65 18.92 34.35 18.44 34.80 C17.01 33.12 18.38 16.56 20.67 0.00 C20.28 0.05 19.89 0.11 19.49 0.18 C19.13 2.78 18.71 5.97 18.31 9.37 C17.53 7.02 14.52 5.66 12.30 4.97 C11.61 4.75 10.92 4.60 10.24 4.48 C9.54 5.00 8.86 5.56 8.20 6.15 C9.21 6.23 10.22 6.40 11.20 6.69 C13.98 7.50 15.81 9.22 18.16 10.67 C17.90 12.90 17.66 15.19 17.45 17.44 C11.70 15.51 5.16 16.43 0.29 19.95 C0.15 20.71 0.06 21.47 0.00 22.25 C5.08 18.53 10.99 17.09 17.36 18.49 C17.09 21.52 16.89 24.45 16.81 27.02 C11.37 24.93 5.20 27.52 1.31 31.59 C1.51 32.11 1.74 32.60 1.99 33.07 C6.12 29.05 11.07 27.95 16.80 27.56 C16.70 31.82 16.96 34.99 17.85 35.79 C18.00 35.66 18.15 35.54 18.29 35.41 C18.29 35.41 18.43 35.61 18.68 35.94 C18.89 35.88 19.09 35.77 19.29 35.56 C20.21 34.57 21.43 31.43 22.75 27.33 C27.72 29.92 31.36 34.16 33.37 39.27 C33.71 38.88 34.04 38.44 34.35 37.93 C32.18 32.87 28.14 28.83 23.02 26.47 C23.81 23.94 24.63 21.10 25.43 18.20 C32.10 19.96 35.42 26.22 36.59 32.62 C36.79 31.93 36.98 31.22 37.15 30.47 C35.70 24.34 32.22 18.85 25.65 17.36 C26.11 15.65 26.57 13.94 27.00 12.26 C27.04 12.26 27.08 12.26 27.13 12.25 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 30.61 18.36"
                                  style={styles.fill41}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(204,204,204,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M13.05 18.35 C18.43 18.19 22.91 14.26 26.47 10.22 C27.97 8.52 29.42 6.70 30.61 4.76 C28.12 1.80 24.55 -0.07 19.63 0.00 C12.67 0.10 4.24 5.42 0.00 13.35 C0.47 13.62 0.94 13.90 1.42 14.18 C5.02 16.29 8.87 18.48 13.05 18.35 "
                                  ></Path>
                                </Svg>
                              </View>
                              <View style={styles.fill7Stack}>
                                <Svg
                                  viewBox="0 0 30.79 60.29"
                                  style={styles.fill7}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M4.12 5.35 C4.12 5.35 17.86 -4.77 25.81 2.82 C33.77 10.41 29.79 60.29 29.79 60.29 C29.79 60.29 -13.23 38.61 4.12 5.35 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 24.42 46.2"
                                  style={styles.fill9}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M24.42 44.67 C19.83 39.56 16.39 33.14 13.12 27.29 C11.04 23.57 9.08 19.79 7.18 15.98 C4.82 11.25 1.32 5.85 1.07 0.51 C1.04 -0.17 -0.03 -0.17 0.00 0.51 C0.17 4.66 2.08 8.09 3.83 11.78 C6.28 16.91 8.79 22.01 11.51 27.00 C15.05 33.52 18.76 40.94 24.30 46.19 C24.30 46.19 24.31 46.20 24.31 46.20 C24.31 46.20 24.36 45.65 24.42 44.67 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 24.42 46.2"
                                  style={styles.fill11}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M24.42 44.67 C19.83 39.56 16.39 33.14 13.12 27.29 C11.04 23.57 9.08 19.79 7.18 15.98 C4.82 11.25 1.32 5.85 1.07 0.51 C1.04 -0.17 -0.03 -0.17 0.00 0.51 C0.17 4.66 2.08 8.09 3.83 11.78 C6.28 16.91 8.79 22.01 11.51 27.00 C15.05 33.52 18.76 40.94 24.30 46.19 C24.30 46.19 24.31 46.20 24.31 46.20 C24.31 46.20 24.36 45.65 24.42 44.67 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 20.07 55.48"
                                  style={styles.fill13}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.07 0.89 C4.53 10.10 9.00 19.33 12.58 28.92 C15.84 37.66 17.50 46.47 19.57 55.48 C19.69 53.73 19.89 50.62 20.07 46.72 C17.12 30.50 8.14 14.38 1.08 0.30 C0.74 -0.38 -0.26 0.22 0.07 0.89 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 20.07 55.48"
                                  style={styles.fill15}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.07 0.89 C4.53 10.10 9.00 19.33 12.58 28.92 C15.84 37.66 17.50 46.47 19.57 55.48 C19.69 53.73 19.89 50.62 20.07 46.72 C17.12 30.50 8.14 14.38 1.08 0.30 C0.74 -0.38 -0.26 0.22 0.07 0.89 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 1.25 1.47"
                                  style={styles.fill17}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.23 1.02 C0.35 1.52 0.92 1.58 1.25 1.33 C0.83 0.90 0.41 0.45 0.00 0.00 C0.08 0.34 0.15 0.68 0.23 1.02 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 1.25 1.47"
                                  style={styles.fill19}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.23 1.02 C0.35 1.52 0.92 1.58 1.25 1.33 C0.83 0.90 0.41 0.45 0.00 0.00 C0.08 0.34 0.15 0.68 0.23 1.02 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 17.91 46.5"
                                  style={styles.fill21}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M17.68 46.50 C17.78 43.79 17.87 40.81 17.91 37.71 C14.75 24.27 8.12 12.00 1.20 0.00 C0.80 0.11 0.40 0.22 0.00 0.34 C7.96 14.86 15.36 29.74 17.62 46.34 C17.63 46.41 17.66 46.45 17.68 46.50 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 17.91 46.5"
                                  style={styles.fill23}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M17.68 46.50 C17.78 43.79 17.87 40.81 17.91 37.71 C14.75 24.27 8.12 12.00 1.20 0.00 C0.80 0.11 0.40 0.22 0.00 0.34 C7.96 14.86 15.36 29.74 17.62 46.34 C17.63 46.41 17.66 46.45 17.68 46.50 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 10.46 17.82"
                                  style={styles.fill25}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M10.42 16.81 C8.43 10.99 5.53 5.54 2.18 0.38 C1.46 0.18 0.74 0.06 0.00 0.00 C3.38 5.60 6.18 11.45 8.96 17.43 C9.34 18.24 10.71 17.67 10.42 16.81 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 10.46 17.82"
                                  style={styles.fill27}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M10.42 16.81 C8.43 10.99 5.53 5.54 2.18 0.38 C1.46 0.18 0.74 0.06 0.00 0.00 C3.38 5.60 6.18 11.45 8.96 17.43 C9.34 18.24 10.71 17.67 10.42 16.81 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 24.42 46.2"
                                  style={styles.fill29}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M24.42 44.67 C19.83 39.56 16.39 33.14 13.12 27.29 C11.04 23.57 9.08 19.79 7.18 15.98 C4.82 11.25 1.32 5.85 1.07 0.51 C1.04 -0.17 -0.03 -0.17 0.00 0.51 C0.17 4.66 2.08 8.09 3.83 11.78 C6.28 16.91 8.79 22.01 11.51 27.00 C15.05 33.52 18.76 40.94 24.30 46.19 C24.30 46.19 24.31 46.20 24.31 46.20 C24.31 46.20 24.36 45.65 24.42 44.67 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 20.07 55.48"
                                  style={styles.fill31}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.07 0.89 C4.53 10.10 9.00 19.33 12.58 28.92 C15.84 37.66 17.50 46.47 19.57 55.48 C19.69 53.73 19.89 50.62 20.07 46.72 C17.12 30.50 8.14 14.38 1.08 0.30 C0.74 -0.38 -0.26 0.22 0.07 0.89 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 17.91 46.5"
                                  style={styles.fill33}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M17.68 46.50 C17.78 43.79 17.87 40.81 17.91 37.71 C14.75 24.27 8.12 12.00 1.20 0.00 C0.80 0.11 0.40 0.22 0.00 0.34 C7.96 14.86 15.36 29.74 17.62 46.34 C17.63 46.41 17.66 46.45 17.68 46.50 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 10.46 17.82"
                                  style={styles.fill35}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M10.42 16.81 C8.43 10.99 5.53 5.54 2.18 0.38 C1.46 0.18 0.74 0.06 0.00 0.00 C3.38 5.60 6.18 11.45 8.96 17.43 C9.34 18.24 10.71 17.67 10.42 16.81 "
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                            <Svg
                              viewBox="0 0 187.67 16.76"
                              style={styles.fill1}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(204,204,204,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M187.67 8.38 C187.67 13.01 145.66 16.76 93.83 16.76 C42.01 16.76 0.00 13.01 0.00 8.38 C0.00 3.75 42.01 0.00 93.83 0.00 C145.66 0.00 187.67 3.75 187.67 8.38 "
                              ></Path>
                            </Svg>
                          </View>
                          <View style={styles.group92}>
                            <View style={styles.group46Stack}>
                              <View style={styles.group46}>
                                <View style={styles.clip45Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip45}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill44}
                                  >
                                    <Defs>
                                      <Mask
                                        id="x6mkrK"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,255,255,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#x6mkrK)"
                                      d="M57.06 2.69 C37.82 -4.01 6.20 1.12 2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 C2.03 87.57 28.73 100.74 33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 C87.41 33.04 82.10 11.41 57.06 2.69 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group49}>
                                <View style={styles.clip48Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip48}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill47}
                                  >
                                    <Defs>
                                      <Mask
                                        id="ph1jtI"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#ph1jtI)"
                                      d="M24.23 70.03 C21.12 69.69 21.76 62.64 18.73 63.77 C15.69 64.91 13.22 79.14 20.06 82.56 C26.89 85.97 38.79 76.56 35.71 70.60 C34.19 67.66 29.35 70.60 24.23 70.03 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group52}>
                                <View style={styles.clip51Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip51}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill50}
                                  >
                                    <Defs>
                                      <Mask
                                        id="CxPPmc"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#CxPPmc)"
                                      d="M24.71 62.73 L21.57 66.59 C20.77 67.57 19.44 68.67 19.24 69.95 C19.19 70.28 19.48 70.51 19.79 70.37 C20.97 69.85 21.70 68.28 22.45 67.26 L25.38 63.25 C25.66 62.86 25.01 62.35 24.71 62.73 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group55}>
                                <View style={styles.clip54Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip54}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill53}
                                  >
                                    <Defs>
                                      <Mask
                                        id="VcSDqc"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#VcSDqc)"
                                      d="M29.24 63.99 C28.66 65.62 28.05 67.23 27.38 68.82 C27.05 69.60 26.70 70.37 26.35 71.14 C26.23 71.39 26.11 71.66 26.00 71.92 C25.66 72.55 25.77 72.73 26.35 72.46 C26.19 72.37 26.02 72.42 25.89 72.52 C25.87 72.54 25.85 72.56 25.83 72.57 C25.68 72.69 25.64 72.99 25.75 73.15 C25.78 73.18 25.80 73.21 25.82 73.24 C26.00 73.49 26.30 73.60 26.58 73.44 C27.72 72.81 28.07 71.02 28.49 69.90 C29.19 68.06 29.80 66.19 30.37 64.30 C30.59 63.57 29.49 63.29 29.24 63.99 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group58}>
                                <View style={styles.clip57Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip57}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill56}
                                  >
                                    <Defs>
                                      <Mask
                                        id="fRFHjY"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#fRFHjY)"
                                      d="M17.93 75.76 C17.85 75.91 17.17 76.18 16.98 76.34 C16.71 76.57 16.47 76.88 16.23 77.15 L14.47 79.09 C13.54 80.12 12.12 81.19 11.71 82.53 C11.61 82.86 11.98 83.08 12.26 82.95 C13.04 82.58 13.46 81.88 14.01 81.23 C14.63 80.49 15.24 79.74 15.86 79.00 C16.59 78.13 17.97 76.99 18.04 75.75 C18.04 75.73 18.02 75.71 18.00 75.70 C17.97 75.69 17.93 75.68 17.90 75.67 C17.75 75.65 17.87 75.87 17.93 75.76 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group61}>
                                <View style={styles.clip60Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip60}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill59}
                                  >
                                    <Defs>
                                      <Mask
                                        id="JpfiOe"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#JpfiOe)"
                                      d="M63.98 38.79 C63.98 38.79 66.25 35.51 63.89 34.20 C61.99 33.14 60.99 35.68 60.67 36.70 C60.93 35.68 61.44 33.01 59.81 32.46 C57.78 31.78 56.89 35.89 56.89 35.89 C56.89 35.89 56.07 31.55 53.66 31.93 C51.25 32.31 51.99 36.76 51.99 36.76 C51.99 36.76 50.80 32.44 47.96 33.32 C46.22 33.86 46.44 35.61 46.87 36.88 C46.26 35.86 45.17 34.87 43.52 36.09 C42.42 36.90 42.49 38.01 42.98 39.06 C42.17 38.51 41.23 38.28 40.25 38.93 C37.50 40.76 43.30 45.52 43.30 45.52 C43.30 45.52 38.30 41.61 36.53 44.88 C35.69 46.44 37.21 47.61 39.03 48.42 C37.86 48.41 36.77 48.81 36.26 50.13 C34.85 53.75 44.69 54.52 45.31 53.94 L69.55 50.83 C69.55 50.83 70.28 50.58 70.37 48.87 C70.47 47.16 69.57 46.85 69.57 46.85 C69.57 46.85 71.44 46.36 71.03 45.14 C70.61 43.92 68.62 45.00 68.62 45.00 C68.62 45.00 71.13 43.66 71.02 42.18 C70.91 40.70 66.65 41.58 66.65 41.58 C66.65 41.58 69.48 39.48 67.96 37.60 C66.43 35.71 63.98 38.79 63.98 38.79 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group64}>
                                <View style={styles.clip63Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip63}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill62}
                                  >
                                    <Defs>
                                      <Mask
                                        id="rhr2Nl"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#rhr2Nl)"
                                      d="M22.76 80.56 C22.34 81.92 21.88 83.28 21.38 84.62 C20.96 85.75 20.28 86.83 20.52 88.05 C20.60 88.43 21.15 88.68 21.47 88.44 C22.46 87.68 22.64 86.51 23.00 85.35 C23.45 83.89 23.84 82.43 24.21 80.96 C24.44 80.02 23.05 79.64 22.76 80.56 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group67}>
                                <View style={styles.clip66Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip66}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill65}
                                  >
                                    <Defs>
                                      <Mask
                                        id="MCPsy1"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#MCPsy1)"
                                      d="M45.75 55.37 C44.62 55.37 43.51 54.78 42.88 53.85 C42.24 52.91 42.10 51.68 42.52 50.63 C44.29 46.25 50.95 42.15 56.23 42.15 C60.23 42.15 63.14 44.44 64.00 48.30 C64.32 49.68 64.00 51.10 63.13 52.19 C62.26 53.27 60.91 53.92 59.51 53.92 C57.96 53.92 56.52 53.13 55.66 51.81 C55.25 51.18 55.06 51.18 54.96 51.18 C53.99 51.18 52.10 52.32 50.73 53.16 C49.50 53.90 48.24 54.66 46.98 55.14 C46.59 55.29 46.16 55.37 45.75 55.37 Z"
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group70}>
                                <View style={styles.clip69Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip69}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.path}
                                  >
                                    <Defs>
                                      <Mask
                                        id="F4MOKI"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(238,65,60,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#F4MOKI)"
                                      d="M28.47 8.82 C29.01 11.22 28.45 13.69 26.93 15.59 C25.39 17.50 23.10 18.60 20.64 18.60 C18.59 18.60 16.65 17.82 15.18 16.43 C14.64 16.73 14.06 17.08 13.63 17.34 C12.28 18.17 10.88 19.01 9.30 19.61 C8.54 19.90 7.71 20.05 6.88 20.05 C4.59 20.05 2.45 18.91 1.17 17.01 C-0.10 15.13 -0.36 12.69 0.50 10.58 C2.78 4.95 10.66 0.00 17.37 0.00 M6.83 13.15 C6.81 13.18 6.85 13.22 6.88 13.22 C6.89 13.22 6.89 13.22 6.90 13.22 C9.57 12.21 13.06 9.03 16.09 9.03 C17.40 9.03 18.62 9.62 19.66 11.22 C19.91 11.61 20.28 11.77 20.64 11.77 C21.33 11.77 22.00 11.17 21.81 10.31 C21.24 7.79 19.49 6.83 17.37 6.83 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group73}>
                                <View style={styles.clip72Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip72}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill71}
                                  >
                                    <Defs>
                                      <Mask
                                        id="gZZZZr"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#gZZZZr)"
                                      d="M27.88 39.73 C27.88 39.73 32.15 39.30 31.58 36.46 C31.12 34.16 28.34 35.11 27.29 35.56 C28.31 35.06 30.85 33.62 30.16 31.90 C29.31 29.77 25.32 31.90 25.32 31.90 C25.32 31.90 28.31 28.20 26.32 26.50 C24.32 24.79 21.19 28.49 21.19 28.49 C21.19 28.49 23.90 24.50 21.19 22.80 C19.55 21.76 18.27 23.15 17.52 24.39 C17.93 23.17 17.98 21.59 15.84 21.09 C14.41 20.75 13.55 21.59 13.03 22.72 C12.92 21.67 12.45 20.74 11.23 20.40 C7.82 19.42 7.96 27.49 7.96 27.49 C7.96 27.49 7.68 20.66 3.77 21.50 C1.91 21.89 2.00 23.96 2.61 26.01 C1.81 25.04 0.72 24.43 -0.72 24.93 C-4.67 26.30 1.56 34.89 2.47 35.00 L21.91 52.67 C21.91 52.67 22.62 53.10 24.08 51.99 C25.55 50.87 25.18 49.92 25.18 49.92 C25.18 49.92 26.89 51.11 27.60 49.92 C28.31 48.73 26.03 47.85 26.03 47.85 C26.03 47.85 28.88 48.98 30.02 47.85 C31.16 46.73 27.46 43.85 27.46 43.85 C27.46 43.85 31.16 44.71 31.64 42.15 C32.11 39.59 27.88 39.73 27.88 39.73 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group76}>
                                <View style={styles.clip75Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip75}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill74}
                                  >
                                    <Defs>
                                      <Mask
                                        id="WT7nQH"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#WT7nQH)"
                                      d="M16.01 54.62 C13.78 54.62 9.54 53.80 6.16 48.32 C3.96 44.73 3.31 40.15 4.42 36.06 C5.29 32.84 7.13 30.35 9.58 29.05 C11.05 28.27 12.62 27.88 14.25 27.88 C19.43 27.88 24.02 31.82 25.68 37.69 C27.43 43.89 24.60 50.75 20.87 53.26 C19.60 54.11 17.79 54.62 16.01 54.62 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group79}>
                                <View style={styles.clip78Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip78}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.path1}
                                  >
                                    <Defs>
                                      <Mask
                                        id="UTXsl6"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(238,65,60,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#UTXsl6)"
                                      d="M26.26 11.47 C27.89 17.24 25.97 25.89 20.53 29.55 C18.87 30.66 16.64 31.30 14.40 31.30 C11.70 31.30 6.56 30.34 2.61 23.91 C0.08 19.80 -0.66 14.55 0.61 9.87 C1.65 6.03 3.89 3.04 6.91 1.44 C8.70 0.48 10.63 0.00 12.64 0.00 M9.04 5.46 C4.55 7.84 2.93 15.74 6.49 21.52 C8.99 25.59 12.01 26.74 14.40 26.74 C15.96 26.74 17.26 26.26 17.99 25.77 C20.70 23.94 23.40 18.11 21.87 12.70 C20.42 7.54 16.54 4.55 12.64 4.55 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group82}>
                                <View style={styles.clip81Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip81}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill80}
                                  >
                                    <Defs>
                                      <Mask
                                        id="AfKr0L"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#AfKr0L)"
                                      d="M14.45 37.71 C13.52 40.07 11.83 41.63 10.68 41.17 C9.53 40.72 9.35 38.43 10.28 36.07 C11.21 33.70 12.89 32.15 14.05 32.60 C15.20 33.06 15.38 35.34 14.45 37.71 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group85}>
                                <View style={styles.clip84Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip84}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill83}
                                  >
                                    <Defs>
                                      <Mask
                                        id="H6ScRx"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(27,18,46,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#H6ScRx)"
                                      d="M34.17 54.42 C33.55 53.24 33.14 52.01 32.68 50.76 C32.57 50.46 32.33 50.30 32.07 50.25 C31.88 50.15 31.64 50.11 31.44 50.15 C30.03 50.47 29.00 51.04 27.77 51.80 C26.44 52.62 25.12 53.23 24.59 54.80 C24.07 56.36 25.64 57.42 27.00 57.21 C28.50 56.97 29.42 55.49 30.36 54.42 C30.61 54.14 30.83 53.87 31.04 53.60 C30.99 54.02 30.93 54.44 30.83 54.85 C30.48 56.29 30.26 57.26 30.91 58.67 C31.71 60.42 34.62 59.94 35.01 58.14 C35.34 56.62 34.86 55.71 34.17 54.42 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group88}>
                                <View style={styles.clip87Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip87}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill86}
                                  >
                                    <Defs>
                                      <Mask
                                        id="ed6ZLF"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(238,65,60,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#ed6ZLF)"
                                      d="M41.98 -1.84 C41.98 -1.84 23.99 -5.44 24.08 -0.00 C24.18 5.44 37.42 5.15 37.42 5.15 C37.42 5.15 21.19 5.72 26.74 13.76 C32.29 21.80 43.25 11.41 43.25 11.41 C43.25 11.41 37.56 25.79 46.24 26.07 C54.92 26.35 54.21 13.76 54.21 13.76 C54.21 13.76 65.17 26.78 67.59 19.38 C70.01 11.98 61.04 10.13 61.47 9.85 C61.89 9.56 74.84 11.76 73.56 6.18 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.group91}>
                                <View style={styles.clip90Stack}>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.clip90}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="transparent"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 "
                                    ></Path>
                                  </Svg>
                                  <Svg
                                    viewBox="0 0 83.97 97.51"
                                    style={styles.fill89}
                                  >
                                    <Defs>
                                      <Mask
                                        id="wjpgyU"
                                        x={0}
                                        y={0}
                                        width={83}
                                        height={97}
                                      >
                                        <Path
                                          d="M2.79 25.99 C-0.63 50.87 17.21 57.84 17.21 57.84 L17.21 57.84 C17.21 57.84 -1.76 77.85 0.13 82.71 L0.13 82.71 C2.03 87.57 28.74 100.74 33.72 96.78 L33.72 96.78 C41.12 90.91 41.88 66.31 41.88 66.31 L41.88 66.31 C41.88 66.31 76.79 69.37 82.10 51.21 L82.10 51.21 C87.42 33.04 82.10 11.41 57.06 2.69 L57.06 2.69 C52.05 0.94 46.20 0.00 40.22 0.00 L40.22 0.00 C23.27 0.00 5.32 7.60 2.79 25.99 Z"
                                          fill="white"
                                        />
                                      </Mask>
                                    </Defs>
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(255,217,29,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      mask="url(#wjpgyU)"
                                      d="M55.62 4.26 C55.58 7.49 52.12 10.06 47.90 10.01 C43.68 9.96 40.30 7.30 40.34 4.07 C40.38 0.84 43.83 -1.74 48.05 -1.68 C52.27 -1.63 55.66 1.03 55.62 4.26 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                            </View>
                          </View>
                          <View style={styles.group186}>
                            <View style={styles.fill137StackRowColumnRow}>
                              <View style={styles.fill137StackRowColumn}>
                                <View style={styles.fill137StackRow}>
                                  <View style={styles.fill137Stack}>
                                    <Svg
                                      viewBox="0 0 34.09 32.48"
                                      style={styles.fill137}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M1.72 7.05 C-1.69 10.72 0.56 26.36 3.39 29.02 C6.22 31.67 24.86 33.39 27.43 31.96 C30.01 30.52 37.10 9.92 32.66 4.01 C28.22 -1.91 9.71 -1.57 1.72 7.05 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 34.01 17.07"
                                      style={styles.fill139}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(27,18,46,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M34.01 11.53 C33.97 11.53 33.92 11.53 33.88 11.54 C31.13 12.29 28.39 13.03 25.64 13.69 C26.40 9.25 25.75 4.61 24.90 0.14 C24.57 0.09 24.24 0.04 23.90 0.00 C24.63 4.71 24.95 9.23 24.44 13.97 C21.88 14.56 19.31 15.06 16.73 15.44 C16.02 10.41 15.20 5.44 14.89 0.34 C14.79 0.36 14.69 0.38 14.59 0.40 C14.43 5.42 14.46 10.65 15.24 15.64 C12.71 15.95 10.18 16.11 7.63 16.08 C7.19 14.00 6.90 11.91 6.87 9.72 C6.84 7.29 7.30 4.97 7.67 2.62 C7.32 2.79 6.97 2.97 6.62 3.15 C5.34 7.14 5.40 11.86 6.41 16.06 C4.28 15.98 2.15 15.74 0.00 15.35 C0.00 15.46 0.01 15.58 0.01 15.70 C2.21 16.26 4.41 16.65 6.62 16.86 C7.02 16.90 7.42 16.92 7.82 16.95 C10.36 17.13 12.90 17.10 15.44 16.89 C15.93 16.85 16.42 16.80 16.92 16.75 C19.36 16.48 21.80 16.07 24.23 15.54 C24.59 15.46 24.94 15.39 25.30 15.31 C28.18 14.64 31.05 13.80 33.89 12.88 C33.94 12.42 33.98 11.97 34.01 11.53 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 12.24 16.12"
                                      style={styles.fill141}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 5.96 C0.00 5.96 1.07 15.56 1.89 16.06 C2.71 16.56 12.52 13.78 12.24 11.01 C11.95 8.24 3.69 -0.20 2.68 0.00 C1.66 0.21 0.00 5.96 0.00 5.96 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 12.63 17.08"
                                      style={styles.path5}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(27,18,46,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.00 6.43 C0.00 6.43 0.12 5.74 0.41 4.57 C0.55 3.98 0.77 3.28 1.04 2.47 C1.18 2.07 1.33 1.64 1.56 1.19 C1.66 0.97 1.80 0.74 1.97 0.50 C2.09 0.36 2.40 0.11 2.40 0.11 L2.49 0.07 L2.51 0.05 L2.52 0.05 L2.64 0.01 L2.77 0.00 C2.77 0.00 3.04 0.04 3.15 0.07 C3.77 0.34 4.17 0.67 4.64 1.02 C5.09 1.37 5.52 1.77 5.97 2.17 C6.85 2.98 7.73 3.89 8.58 4.87 C9.43 5.86 10.28 6.90 11.06 8.04 C11.44 8.62 11.81 9.21 12.13 9.85 C12.29 10.17 12.42 10.50 12.53 10.88 C12.59 11.09 12.61 11.27 12.63 11.43 C12.64 11.70 12.60 11.88 12.53 12.09 C12.22 12.87 11.61 13.30 11.03 13.70 C10.45 14.09 9.84 14.42 9.22 14.71 C7.99 15.29 6.75 15.80 5.53 16.25 C4.91 16.48 4.30 16.67 3.69 16.84 C3.38 16.92 3.07 17.00 2.75 17.04 C2.58 17.07 2.42 17.08 2.23 17.08 C2.00 17.08 1.67 17.04 1.49 16.77 C1.44 16.71 1.35 16.59 1.35 16.59 L1.29 16.47 L1.19 16.23 C1.19 16.23 1.09 15.93 1.04 15.78 C0.94 15.48 0.89 15.21 0.83 14.93 C0.71 14.37 0.62 13.84 0.53 13.32 C0.38 12.30 0.27 11.36 0.20 10.52 C0.14 9.68 0.05 8.35 0.05 8.35 L0.00 6.44 L0.00 6.43 Z M0.12 6.45 C0.13 6.52 0.28 7.17 0.52 8.29 C0.75 9.46 1.09 11.14 1.48 13.16 C1.58 13.66 1.69 14.18 1.81 14.70 C1.89 14.96 1.94 15.24 2.02 15.49 C2.06 15.61 2.14 15.87 2.14 15.87 L2.20 16.03 C2.20 16.03 2.23 16.10 2.23 16.10 C2.23 16.10 2.22 16.11 2.23 16.11 C2.23 16.11 2.23 16.11 2.23 16.11 C2.23 16.11 2.23 16.11 2.23 16.11 C2.24 16.11 2.25 16.11 2.26 16.12 C2.37 16.12 2.51 16.12 2.65 16.11 C2.93 16.10 3.22 16.06 3.52 16.02 C4.12 15.93 4.73 15.81 5.35 15.67 C6.60 15.39 7.87 14.98 9.07 14.39 C9.66 14.08 10.25 13.75 10.78 13.35 C11.29 12.94 11.79 12.44 11.94 11.90 C11.97 11.78 11.97 11.62 11.96 11.55 C11.92 11.37 11.88 11.21 11.82 11.10 C11.71 10.82 11.55 10.53 11.38 10.26 C11.04 9.69 10.65 9.15 10.24 8.63 C9.44 7.58 8.57 6.59 7.70 5.66 C6.83 4.73 5.97 3.85 5.15 3.03 C4.74 2.62 4.32 2.24 3.92 1.88 C3.54 1.53 3.10 1.16 2.79 1.00 C2.77 1.02 2.73 1.05 2.73 1.06 C2.72 1.07 2.71 1.08 2.69 1.09 C2.57 1.25 2.44 1.42 2.33 1.62 C2.11 2.00 1.90 2.38 1.72 2.75 C1.35 3.49 1.08 4.17 0.84 4.71 C0.40 5.76 0.14 6.38 0.12 6.45 Z M2.79 1.00 C2.80 0.99 2.81 0.99 2.81 0.99 L2.89 0.95 L2.92 0.94 L2.93 0.93 C2.93 0.93 2.81 0.97 2.83 0.97 C2.81 0.97 2.80 0.98 2.79 0.98 C2.71 0.97 2.77 0.99 2.79 1.00 C2.79 1.00 2.79 1.00 2.79 1.00 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 10.4 9.16"
                                      style={styles.fill145}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M1.96 0.12 C0.86 0.62 -0.60 6.67 0.26 7.38 C1.11 8.09 7.80 9.51 8.51 9.09 C9.22 8.66 11.03 4.65 10.17 3.33 C9.32 2.01 3.53 -0.59 1.96 0.12 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 11.49 9.55"
                                      style={styles.path6}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(27,18,46,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M2.45 0.14 C2.45 0.14 2.57 0.10 2.80 0.03 C3.04 0.00 3.39 -0.02 3.83 0.02 C4.70 0.09 5.96 0.29 7.41 0.76 C8.13 1.00 8.88 1.34 9.65 1.79 C10.05 2.04 10.39 2.22 10.83 2.67 C10.95 2.77 11.08 2.94 11.08 2.94 L11.13 3.00 L11.15 3.02 L11.19 3.08 L11.20 3.09 L11.23 3.15 L11.34 3.38 C11.34 3.38 11.48 3.99 11.49 4.26 C11.47 5.36 11.13 6.30 10.74 7.23 C10.52 7.69 10.29 8.14 10.00 8.58 C9.84 8.81 9.73 8.99 9.47 9.24 C9.40 9.31 9.30 9.38 9.30 9.38 L9.19 9.46 L9.04 9.50 C9.04 9.50 8.72 9.53 8.57 9.54 C7.52 9.46 6.58 9.21 5.61 9.04 C4.65 8.85 3.70 8.69 2.78 8.53 C2.32 8.44 1.86 8.35 1.41 8.22 C1.21 8.17 0.69 7.96 0.69 7.96 L0.55 7.88 L0.51 7.86 L0.45 7.82 L0.43 7.79 L0.33 7.67 C0.33 7.67 0.14 7.34 0.10 7.21 C-0.12 6.15 0.07 5.38 0.24 4.62 C0.64 3.15 1.19 2.01 1.60 1.24 C1.81 0.85 1.99 0.56 2.16 0.37 C2.33 0.20 2.44 0.15 2.44 0.15 L2.45 0.14 Z M2.50 0.24 C2.50 0.24 2.38 0.30 2.24 0.47 C2.11 0.63 1.92 0.92 1.78 1.32 C1.47 2.12 1.26 3.34 1.13 4.78 C1.08 5.47 0.95 6.32 1.06 6.95 C1.00 7.10 1.32 7.24 1.70 7.43 C2.09 7.62 2.51 7.77 2.94 7.94 C3.80 8.26 4.72 8.52 5.67 8.70 C6.61 8.88 7.63 8.98 8.55 8.92 C8.96 8.93 9.01 8.58 9.27 8.15 C9.48 7.74 9.65 7.30 9.81 6.86 C10.11 5.99 10.35 5.07 10.31 4.30 C10.34 3.59 9.70 3.31 9.02 2.80 C8.34 2.36 7.65 2.00 7.02 1.64 C5.76 0.91 4.63 0.42 3.80 0.23 C3.38 0.14 3.05 0.14 2.82 0.16 C2.61 0.22 2.49 0.25 2.49 0.25 L2.50 0.24 Z"
                                      ></Path>
                                    </Svg>
                                  </View>
                                  <View style={styles.fill99StackColumn}>
                                    <View style={styles.fill99Stack}>
                                      <Svg
                                        viewBox="0 0 20.82 9.45"
                                        style={styles.fill99}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(27,18,46,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M0.07 5.91 C3.57 5.16 6.32 2.73 10.08 2.74 C12.46 2.74 15.29 3.54 16.58 5.77 C17.37 7.14 17.31 7.83 18.27 9.02 C18.96 9.87 20.44 9.36 20.68 8.38 C21.78 3.92 16.24 0.54 12.42 0.08 C7.98 -0.45 2.05 1.63 0.01 5.83 C-0.02 5.87 0.02 5.92 0.07 5.91 "
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 52.13 34.87"
                                        style={styles.fill113}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(27,18,46,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M52.13 11.39 C52.13 11.39 20.64 5.14 2.23 34.87 C2.23 34.87 -7.82 10.34 14.75 2.18 C37.34 -5.98 52.13 11.39 52.13 11.39 "
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 39.62 18.82"
                                        style={styles.fill115}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(27,18,46,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M39.08 2.10 C39.62 2.21 39.85 1.42 39.31 1.27 C23.75 -2.95 8.47 3.67 0.26 16.05 C0.12 16.98 0.04 17.91 0.00 18.82 C7.65 5.73 23.12 -1.24 39.08 2.10 "
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 39.62 18.82"
                                        style={styles.fill117}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(27,18,46,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M39.08 2.10 C39.62 2.21 39.85 1.42 39.31 1.27 C23.75 -2.95 8.47 3.67 0.26 16.05 C0.12 16.98 0.04 17.91 0.00 18.82 C7.65 5.73 23.12 -1.24 39.08 2.10 "
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 25.04 21.11"
                                        style={styles.fill119}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(27,18,46,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M0.03 20.79 C-0.10 21.03 0.25 21.24 0.40 21.01 C6.18 11.53 13.54 2.39 25.01 0.10 C25.06 0.09 25.05 -0.01 24.99 0.00 C12.91 1.31 5.55 10.85 0.03 20.79 "
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 25.04 21.11"
                                        style={styles.fill121}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(27,18,46,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M0.03 20.79 C-0.10 21.03 0.25 21.24 0.40 21.01 C6.18 11.53 13.54 2.39 25.01 0.10 C25.06 0.09 25.05 -0.01 24.99 0.00 C12.91 1.31 5.55 10.85 0.03 20.79 "
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 39.62 18.82"
                                        style={styles.fill123}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(27,18,46,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M39.08 2.10 C39.62 2.21 39.85 1.42 39.31 1.27 C23.75 -2.95 8.47 3.67 0.26 16.05 C0.12 16.98 0.04 17.91 0.00 18.82 C7.65 5.73 23.12 -1.24 39.08 2.10 "
                                        ></Path>
                                      </Svg>
                                      <Svg
                                        viewBox="0 0 25.04 21.11"
                                        style={styles.fill125}
                                      >
                                        <Path
                                          strokeWidth={0}
                                          fill="rgba(27,18,46,1)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          d="M0.03 20.79 C-0.10 21.03 0.25 21.24 0.40 21.01 C6.18 11.53 13.54 2.39 25.01 0.10 C25.06 0.09 25.05 -0.01 24.99 0.00 C12.91 1.31 5.55 10.85 0.03 20.79 "
                                        ></Path>
                                      </Svg>
                                    </View>
                                    <Svg
                                      viewBox="0 0 3.42 7.68"
                                      style={styles.fill95}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(238,65,60,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M3.42 5.27 L0.00 0.00 L0.00 7.68 "
                                      ></Path>
                                    </Svg>
                                  </View>
                                </View>
                                <View style={styles.fill127StackRow}>
                                  <View style={styles.fill127Stack}>
                                    <Svg
                                      viewBox="0 0 49.58 18.43"
                                      style={styles.fill127}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M45.79 7.90 C47.30 7.13 50.88 5.49 49.09 3.66 C47.31 1.83 43.23 -1.20 42.04 0.50 C40.86 2.21 40.98 6.38 40.98 6.38 C40.98 6.38 5.76 -1.58 2.91 1.26 C0.07 4.11 -1.26 9.74 1.58 11.29 C4.43 12.83 10.50 8.28 10.50 8.28 C10.50 8.28 39.81 12.27 40.34 13.59 C40.86 14.92 40.15 16.62 40.98 17.86 C41.81 19.10 46.67 18.14 47.45 16.63 C48.24 15.12 44.63 8.49 45.79 7.90 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 20.33 44.28"
                                      style={styles.path2}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M10.16 23.98 L11.70 9.75 M20.05 3.25 C18.34 1.16 17.97 -0.32 15.68 0.06 C13.40 0.44 11.07 3.21 11.07 3.21 C11.07 3.21 6.53 -1.56 5.04 1.22 C3.54 4.01 1.83 4.87 3.16 6.05 C4.49 7.23 8.34 5.90 7.84 7.61 C7.34 9.32 6.91 36.20 5.04 37.27 C3.16 38.34 -1.20 40.55 0.31 42.48 C1.83 44.41 8.23 45.29 8.35 42.48 C8.47 39.67 17.01 19.56 15.11 8.18 "
                                      ></Path>
                                    </Svg>
                                  </View>
                                  <Svg
                                    viewBox="0 0 16.49 8.85"
                                    style={styles.fill101}
                                  >
                                    <Path
                                      strokeWidth={0}
                                      fill="rgba(238,65,60,1)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      d="M16.49 5.06 C16.25 4.87 16.02 4.69 15.79 4.51 C12.36 1.95 8.33 -0.24 4.06 0.02 C2.65 0.11 1.29 0.48 0.00 1.02 C0.41 4.06 1.67 6.84 4.22 8.12 C7.88 9.95 13.00 8.09 16.49 5.06 "
                                    ></Path>
                                  </Svg>
                                </View>
                              </View>
                              <View style={styles.fill93StackStackStack}>
                                <View style={styles.fill93StackStack}>
                                  <View style={styles.fill93Stack}>
                                    <Svg
                                      viewBox="0 0 40.02 46.96"
                                      style={styles.fill93}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(27,18,46,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M13.11 2.56 C9.15 1.18 4.67 0.31 0.01 0.00 C-0.04 2.09 -0.51 30.78 15.57 39.55 C25.57 45.00 34.00 46.57 39.15 46.96 C42.56 29.75 36.29 10.63 13.11 2.56 "
                                      ></Path>
                                    </Svg>
                                    <View style={styles.group107}>
                                      <View style={styles.fill103Stack}>
                                        <Svg
                                          viewBox="0 0 29.44 28.65"
                                          style={styles.fill103}
                                        >
                                          <Path
                                            strokeWidth={0}
                                            fill="rgba(27,18,46,1)"
                                            fillOpacity={1}
                                            strokeOpacity={1}
                                            d="M0.13 0.85 C6.80 11.38 16.34 26.11 29.44 28.65 C29.27 27.82 29.07 27.00 28.84 26.19 C16.88 22.75 8.76 11.02 1.97 0.55 C1.36 0.36 0.77 0.17 0.14 0.00 C-0.02 0.23 -0.07 0.53 0.13 0.85 "
                                          ></Path>
                                        </Svg>
                                        <Svg
                                          viewBox="0 0 35.03 41.39"
                                          style={styles.fill105}
                                        >
                                          <Path
                                            strokeWidth={0}
                                            fill="rgba(27,18,46,1)"
                                            fillOpacity={1}
                                            strokeOpacity={1}
                                            d="M0.27 0.04 C0.18 0.03 0.09 0.02 0.00 0.00 C1.49 11.26 6.18 22.00 13.98 30.37 C19.52 36.30 27.03 40.92 34.89 41.39 C34.96 40.54 35.00 39.68 35.03 38.83 C16.81 37.41 3.60 17.36 0.27 0.04 "
                                          ></Path>
                                        </Svg>
                                      </View>
                                    </View>
                                    <View style={styles.group112}>
                                      <View style={styles.fill108Stack}>
                                        <Svg
                                          viewBox="0 0 29.44 28.65"
                                          style={styles.fill108}
                                        >
                                          <Path
                                            strokeWidth={0}
                                            fill="rgba(27,18,46,1)"
                                            fillOpacity={1}
                                            strokeOpacity={1}
                                            d="M0.13 0.85 C6.80 11.38 16.34 26.11 29.44 28.65 C29.27 27.82 29.07 27.00 28.84 26.19 C16.88 22.75 8.76 11.02 1.97 0.55 C1.36 0.36 0.77 0.17 0.14 0.00 C-0.02 0.23 -0.07 0.53 0.13 0.85 "
                                          ></Path>
                                        </Svg>
                                        <Svg
                                          viewBox="0 0 35.03 41.39"
                                          style={styles.fill110}
                                        >
                                          <Path
                                            strokeWidth={0}
                                            fill="rgba(27,18,46,1)"
                                            fillOpacity={1}
                                            strokeOpacity={1}
                                            d="M0.27 0.04 C0.18 0.03 0.09 0.02 0.00 0.00 C1.49 11.26 6.18 22.00 13.98 30.37 C19.52 36.30 27.03 40.92 34.89 41.39 C34.96 40.54 35.00 39.68 35.03 38.83 C16.81 37.41 3.60 17.36 0.27 0.04 "
                                          ></Path>
                                        </Svg>
                                      </View>
                                    </View>
                                  </View>
                                  <View style={styles.fill131Stack}>
                                    <Svg
                                      viewBox="0 0 48.35 21.66"
                                      style={styles.fill131}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M3.85 7.04 C2.59 5.91 -0.45 3.41 1.75 2.09 C3.93 0.78 8.65 -1.11 9.37 0.84 C10.08 2.79 8.89 6.80 8.89 6.80 C8.89 6.80 44.98 8.08 47.01 11.56 C49.03 15.04 48.88 20.82 45.73 21.59 C42.59 22.36 37.88 16.41 37.88 16.41 C37.88 16.41 8.52 12.78 7.67 13.93 C6.83 15.08 7.08 16.91 5.96 17.89 C4.85 18.87 0.39 16.71 0.02 15.05 C-0.35 13.39 4.83 7.90 3.85 7.04 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 16.83 45.99"
                                      style={styles.path3}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M6.91 10.71 L4.76 24.85 M4.01 8.31 C-0.73 18.83 2.39 40.46 1.79 43.21 C1.19 45.95 7.60 46.74 9.56 45.26 C11.52 43.78 7.87 40.53 6.33 39.01 C4.79 37.50 11.24 11.40 11.19 9.62 C11.14 7.84 14.53 10.11 16.11 9.30 C17.70 8.50 16.27 7.23 15.53 4.16 C14.79 1.09 9.19 4.54 9.19 4.54 C9.19 4.54 7.65 1.26 5.53 0.32 C3.42 -0.63 2.68 0.70 0.50 2.28 "
                                      ></Path>
                                    </Svg>
                                    <View style={styles.group151}>
                                      <View style={styles.clip150Stack}>
                                        <Svg
                                          viewBox="0 0 33.96 34.84"
                                          style={styles.clip150}
                                        >
                                          <Path
                                            strokeWidth={0}
                                            fill="transparent"
                                            fillOpacity={1}
                                            strokeOpacity={1}
                                            d="M0.00 0.00 L33.96 0.00 L33.96 34.84 L0.00 34.84 Z"
                                          ></Path>
                                        </Svg>
                                        <Svg
                                          viewBox="0 0 33.96 34.84"
                                          style={styles.fill149}
                                        >
                                          <Defs>
                                            <Mask
                                              id="t1mqlt"
                                              x={0}
                                              y={0}
                                              width={33}
                                              height={34}
                                            >
                                              <Path
                                                d="M0.00 0.00 L33.96 0.00 L33.96 34.84 L0.00 34.84 Z"
                                                fill="white"
                                              />
                                            </Mask>
                                          </Defs>
                                          <Path
                                            strokeWidth={0}
                                            fill="rgba(255,255,255,1)"
                                            fillOpacity={1}
                                            strokeOpacity={1}
                                            mask="url(#t1mqlt)"
                                            d="M33.61 14.31 C35.63 18.90 28.35 32.93 24.81 34.51 C21.27 36.09 3.09 31.58 1.14 29.38 C-0.82 27.18 -0.75 5.39 5.39 1.26 C11.53 -2.86 28.90 3.54 33.61 14.31 "
                                          ></Path>
                                        </Svg>
                                      </View>
                                    </View>
                                    <Svg
                                      viewBox="0 0 31.19 22.88"
                                      style={styles.fill152}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(27,18,46,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M0.33 7.77 C0.37 7.78 0.41 7.79 0.45 7.82 C2.79 9.43 5.14 11.03 7.52 12.56 C8.27 8.11 10.40 3.95 12.68 0.00 C13.00 0.06 13.33 0.12 13.66 0.20 C11.43 4.41 9.64 8.57 8.56 13.22 C10.79 14.62 13.05 15.94 15.36 17.13 C17.68 12.62 20.09 8.19 22.06 3.48 C22.15 3.53 22.24 3.59 22.32 3.64 C20.82 8.43 19.08 13.36 16.70 17.82 C18.99 18.94 21.33 19.92 23.75 20.73 C24.84 18.91 25.81 17.04 26.55 14.98 C27.38 12.70 27.71 10.35 28.13 8.01 C28.41 8.28 28.68 8.57 28.95 8.85 C28.85 13.05 27.24 17.48 24.90 21.11 C26.94 21.74 29.03 22.22 31.19 22.55 C31.15 22.66 31.11 22.77 31.07 22.88 C28.81 22.68 26.60 22.33 24.44 21.80 C24.05 21.70 23.67 21.60 23.28 21.50 C20.82 20.83 18.43 19.97 16.10 18.94 C15.65 18.74 15.20 18.52 14.75 18.31 C12.53 17.26 10.36 16.07 8.24 14.77 C7.93 14.58 7.62 14.39 7.31 14.20 C4.81 12.61 2.38 10.89 0.00 9.08 C0.10 8.63 0.21 8.19 0.33 7.77 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 13.39 15.47"
                                      style={styles.fill154}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M13.33 6.54 C13.33 6.54 9.16 15.26 8.23 15.46 C7.29 15.66 -1.07 9.81 0.11 7.29 C1.29 4.76 11.87 -0.49 12.76 0.04 C13.65 0.56 13.33 6.54 13.33 6.54 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 14.02 16.44"
                                      style={styles.path7}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(27,18,46,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M13.70 7.05 L13.02 8.83 C13.02 8.83 12.50 10.06 12.16 10.83 C11.83 11.60 11.41 12.45 10.93 13.38 C10.68 13.83 10.42 14.31 10.13 14.79 C9.97 15.04 9.83 15.28 9.64 15.53 C9.54 15.65 9.35 15.90 9.35 15.90 L9.17 16.09 L9.08 16.19 C9.08 16.19 8.96 16.28 8.89 16.32 C8.63 16.51 8.31 16.44 8.09 16.37 C7.91 16.31 7.76 16.23 7.62 16.16 C7.32 16.01 7.06 15.83 6.79 15.66 C6.27 15.30 5.75 14.91 5.25 14.50 C4.25 13.67 3.24 12.78 2.27 11.82 C1.78 11.35 1.31 10.84 0.89 10.28 C0.48 9.71 0.04 9.10 0.00 8.27 C0.00 8.04 0.03 7.86 0.13 7.61 C0.20 7.46 0.28 7.30 0.40 7.12 C0.63 6.80 0.86 6.54 1.12 6.28 C1.63 5.78 2.18 5.34 2.73 4.93 C3.84 4.11 4.98 3.40 6.11 2.75 C7.24 2.10 8.36 1.52 9.46 1.05 C10.02 0.82 10.55 0.59 11.10 0.41 C11.65 0.23 12.14 0.05 12.82 0.00 C12.93 0.01 13.19 0.06 13.19 0.06 L13.31 0.10 L13.42 0.18 L13.43 0.19 L13.44 0.21 L13.50 0.28 C13.50 0.28 13.72 0.62 13.79 0.79 C13.87 1.07 13.92 1.33 13.95 1.58 C14.02 2.07 14.02 2.53 14.02 2.96 C14.01 3.81 13.98 4.54 13.92 5.15 C13.81 6.35 13.70 7.03 13.70 7.03 L13.70 7.05 Z M13.47 5.14 C13.42 4.54 13.39 3.82 13.29 3.00 C13.24 2.59 13.17 2.16 13.08 1.73 C13.04 1.51 12.98 1.30 12.91 1.11 C12.90 1.10 12.89 1.09 12.89 1.07 C12.90 1.06 12.87 1.02 12.85 0.99 C12.50 1.05 11.97 1.25 11.49 1.45 C10.99 1.66 10.48 1.88 9.95 2.13 C8.91 2.64 7.81 3.19 6.68 3.78 C5.55 4.37 4.41 5.02 3.30 5.75 C2.74 6.11 2.19 6.49 1.69 6.91 C1.44 7.11 1.20 7.34 1.00 7.56 C0.91 7.65 0.81 7.79 0.72 7.94 C0.69 8.01 0.63 8.16 0.62 8.28 C0.58 8.84 0.89 9.48 1.24 10.03 C1.61 10.58 2.06 11.09 2.52 11.57 C3.46 12.53 4.53 13.33 5.61 14.00 C6.15 14.34 6.69 14.66 7.22 14.94 C7.49 15.08 7.76 15.21 8.02 15.31 C8.14 15.36 8.27 15.41 8.38 15.44 C8.39 15.44 8.40 15.45 8.41 15.45 C8.41 15.45 8.41 15.45 8.41 15.45 C8.41 15.45 8.41 15.45 8.41 15.45 C8.42 15.45 8.41 15.44 8.41 15.44 C8.41 15.44 8.46 15.38 8.46 15.38 L8.58 15.25 C8.58 15.25 8.74 15.04 8.81 14.93 C8.97 14.72 9.11 14.47 9.26 14.26 C9.56 13.80 9.83 13.34 10.09 12.90 C11.12 11.13 11.99 9.65 12.60 8.62 C13.19 7.65 13.55 7.08 13.58 7.02 C13.58 6.95 13.54 6.28 13.47 5.14 Z M12.85 0.99 C12.85 0.99 12.85 0.99 12.85 0.99 C12.87 0.99 12.94 0.99 12.86 0.97 C12.85 0.97 12.84 0.96 12.83 0.95 C12.84 0.96 12.74 0.89 12.74 0.89 L12.75 0.89 L12.77 0.91 L12.84 0.98 C12.84 0.98 12.84 0.98 12.85 0.99 Z"
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 10.06 8.19"
                                      style={styles.fill158}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M9.64 0.67 C10.51 1.51 9.90 7.70 8.86 8.09 C7.82 8.48 1.04 7.62 0.51 6.99 C-0.03 6.35 -0.42 1.97 0.83 1.01 C2.07 0.04 8.39 -0.51 9.64 0.67 "
                                      ></Path>
                                    </Svg>
                                    <Svg
                                      viewBox="0 0 10.85 9.03"
                                      style={styles.path8}
                                    >
                                      <Path
                                        strokeWidth={0}
                                        fill="rgba(27,18,46,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M10.21 1.05 C10.21 1.05 10.29 1.14 10.39 1.36 C10.49 1.59 10.57 1.93 10.64 2.36 C10.77 3.23 10.91 4.48 10.81 6.01 C10.72 6.78 10.65 7.57 10.10 8.49 C10.01 8.61 9.73 8.85 9.73 8.85 L9.59 8.93 L9.56 8.95 L9.49 8.97 L9.45 8.98 L9.29 9.01 C9.29 9.01 8.73 9.04 8.52 9.02 C8.05 8.99 7.59 8.93 7.13 8.86 C6.20 8.70 5.26 8.55 4.29 8.41 C3.32 8.25 2.35 8.18 1.33 7.91 C1.19 7.86 0.89 7.72 0.89 7.72 L0.77 7.63 L0.68 7.52 C0.68 7.52 0.61 7.42 0.58 7.33 C0.41 7.01 0.37 6.80 0.29 6.53 C0.16 6.03 0.09 5.52 0.04 5.02 C-0.03 4.01 -0.04 3.01 0.30 1.97 C0.40 1.71 0.74 1.19 0.74 1.19 L0.92 1.00 L0.96 0.96 L0.97 0.95 L1.03 0.91 L1.05 0.89 L1.12 0.85 C1.12 0.85 1.30 0.73 1.45 0.67 C2.01 0.40 2.40 0.34 2.85 0.24 C3.73 0.06 4.55 -0.01 5.31 0.00 C6.83 0.03 8.09 0.26 8.94 0.48 C9.36 0.59 9.68 0.72 9.90 0.83 C10.09 0.97 10.20 1.05 10.20 1.05 L10.21 1.05 Z M10.11 1.12 C10.11 1.12 10.12 1.12 10.12 1.13 C10.12 1.13 10.12 1.13 10.12 1.13 L10.11 1.12 Z M9.84 0.94 C9.63 0.85 9.32 0.73 8.90 0.69 C8.05 0.59 6.82 0.69 5.39 0.96 C4.67 1.09 3.90 1.20 3.11 1.40 C2.31 1.65 1.61 1.71 1.40 2.39 C1.11 3.10 1.04 4.05 1.04 4.97 C1.04 5.44 1.06 5.91 1.12 6.37 C1.22 6.86 1.15 7.21 1.55 7.33 C2.40 7.69 3.39 7.93 4.34 8.07 C5.30 8.21 6.25 8.27 7.17 8.25 C7.63 8.24 8.08 8.22 8.50 8.18 C8.93 8.13 9.28 8.10 9.27 7.93 C9.57 7.38 9.74 6.53 9.92 5.86 C10.27 4.46 10.47 3.23 10.44 2.38 C10.44 1.95 10.36 1.62 10.28 1.42 C10.22 1.25 10.14 1.15 10.12 1.13 C10.10 1.12 10.01 1.05 9.84 0.94 Z"
                                      ></Path>
                                    </Svg>
                                  </View>
                                </View>
                                <Svg
                                  viewBox="0 0 6.89 4.13"
                                  style={styles.fill97}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(238,65,60,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M0.66 0.00 L6.89 0.74 L0.00 4.13 "
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                            <View style={styles.path4Stack}>
                              <Svg
                                viewBox="0 0 50.48 31.92"
                                style={styles.path4}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,255,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M35.27 11.74 C38.88 9.64 43.21 9.39 44.24 10.59 C47.44 14.35 45.99 17.99 44.24 19.70 C42.48 21.41 36.41 22.73 35.27 20.65 M16.88 18.78 C15.74 20.87 9.67 19.54 7.92 17.83 C6.16 16.12 4.71 12.48 7.92 8.72 C8.94 7.52 13.27 7.77 16.88 9.87 M46.13 2.84 C42.87 1.89 28.56 11.48 25.24 12.05 C20.85 12.80 7.77 -1.87 3.98 0.20 C0.18 2.27 -1.53 18.97 1.70 22.19 C4.92 25.42 12.09 23.14 12.09 23.14 C12.09 23.14 8.26 27.69 12.09 29.59 C15.93 31.49 24.28 25.42 24.28 25.42 C24.28 25.42 28.45 33.50 32.44 31.64 C36.42 29.78 33.96 24.28 33.96 24.28 C33.96 24.28 49.17 27.31 50.20 23.14 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 11.58 6.85"
                                style={styles.fill162}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(204,204,204,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M11.25 1.86 C11.56 1.27 11.77 0.48 11.31 0.00 C11.31 0.00 4.25 1.29 0.00 2.11 C3.03 2.34 6.12 1.37 6.12 1.37 C6.12 1.37 3.33 4.70 4.91 6.85 C5.17 6.76 5.44 6.68 5.70 6.57 C7.99 5.62 10.09 4.04 11.25 1.86 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 45.83 9.76"
                                style={styles.fill166}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,255,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M45.46 5.89 C47.95 4.49 37.49 -1.48 24.69 0.34 C11.89 2.17 -1.10 3.98 0.07 7.16 C1.25 10.35 4.18 9.72 5.71 9.70 C7.24 9.68 44.03 6.68 45.46 5.89 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 13.27 11.64"
                                style={styles.fill168}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,255,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.27 1.28 C1.04 -0.72 13.26 -0.24 13.27 1.77 C13.27 3.77 8.46 12.42 5.66 11.58 C2.85 10.73 -1.07 4.76 0.27 1.28 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 18.52 38.27"
                                style={styles.path9}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,255,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M10.64 13.88 L13.77 25.97 M13.87 10.18 C15.95 17.96 18.04 37.69 15.00 38.26 C11.97 38.83 5.33 13.60 4.95 12.27 C4.57 10.94 2.10 12.84 1.22 12.27 C0.34 11.70 -0.36 9.04 0.21 7.01 C0.78 4.98 3.95 8.56 6.09 8.85 C7.50 9.05 9.31 3.35 10.45 0.89 C11.59 -1.58 16.90 1.64 18.29 3.92 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 7.83 6.57"
                                style={styles.fill174}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(204,204,204,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.29 0.25 C-0.81 1.15 1.48 4.29 3.45 6.57 C4.02 4.34 2.85 1.74 2.85 1.74 C2.85 1.74 5.05 2.18 7.83 2.50 C5.29 1.14 1.42 -0.67 0.29 0.25 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 45.83 9.76"
                                style={styles.fill178}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,255,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.37 5.89 C-2.12 4.49 8.33 -1.48 21.14 0.34 C33.94 2.17 46.93 3.98 45.75 7.16 C44.58 10.35 41.65 9.72 40.12 9.70 C38.59 9.68 1.79 6.68 0.37 5.89 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 13.27 11.63"
                                style={styles.fill180}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,255,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M12.99 1.28 C12.22 -0.72 0.01 -0.24 0.00 1.77 C-0.00 3.77 4.81 12.42 7.61 11.58 C10.41 10.73 14.33 4.76 12.99 1.28 "
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 18.52 38.27"
                                style={styles.path10}
                              >
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(255,255,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M4.74 25.97 L7.87 13.88 M0.23 3.92 C1.61 1.64 6.93 -1.58 8.06 0.89 C9.20 3.35 11.02 9.05 12.43 8.85 C14.57 8.56 17.74 4.98 18.31 7.01 C18.88 9.04 18.18 11.70 17.30 12.27 C16.41 12.84 13.95 10.94 13.57 12.27 C13.19 13.60 6.55 38.83 3.51 38.26 C0.47 37.69 2.56 17.96 4.65 10.18 "
                                ></Path>
                              </Svg>
                            </View>
                            <View style={styles.fill164StackRow}>
                              <View style={styles.fill164Stack}>
                                <Svg
                                  viewBox="0 0 42.7 16.99"
                                  style={styles.fill164}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M31.51 0.01 C34.68 -0.29 44.13 6.55 42.52 9.40 C40.91 12.25 3.42 18.79 0.25 16.51 C-2.92 14.24 25.54 0.58 31.51 0.01 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 22.87 9.28"
                                  style={styles.fill172}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M20.33 4.46 C19.89 4.08 19.42 3.72 18.95 3.37 C17.93 2.63 16.84 1.98 15.70 1.41 C15.46 1.29 15.21 1.17 14.97 1.06 C14.05 0.64 13.11 0.30 12.16 0.00 C11.90 0.13 11.64 0.27 11.38 0.40 C12.28 0.74 13.15 1.12 13.96 1.56 C9.22 3.89 4.62 6.56 0.00 9.14 C0.13 9.19 0.28 9.24 0.46 9.28 C5.23 6.92 10.06 4.61 14.68 1.98 C15.65 2.57 16.56 3.25 17.42 3.99 C13.92 5.47 10.53 7.33 7.31 9.27 C8.14 9.20 9.01 9.11 9.92 9.01 C12.80 7.63 15.73 6.38 18.67 5.16 C19.39 5.88 20.06 6.67 20.71 7.49 C21.44 7.37 22.15 7.25 22.87 7.12 C22.12 6.16 21.27 5.27 20.33 4.46 "
                                  ></Path>
                                </Svg>
                              </View>
                              <View style={styles.fill176Stack}>
                                <Svg
                                  viewBox="0 0 42.7 16.99"
                                  style={styles.fill176}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M11.19 0.01 C8.02 -0.29 -1.43 6.56 0.18 9.40 C1.79 12.25 39.28 18.79 42.45 16.51 C45.62 14.24 17.16 0.58 11.19 0.01 "
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 22.87 9.28"
                                  style={styles.fill184}
                                >
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(27,18,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M2.54 4.46 C2.98 4.08 3.45 3.72 3.92 3.37 C4.94 2.63 6.03 1.98 7.17 1.41 C7.41 1.29 7.66 1.17 7.90 1.06 C8.82 0.64 9.76 0.30 10.71 0.00 C10.97 0.13 11.23 0.27 11.49 0.40 C10.59 0.74 9.72 1.12 8.91 1.56 C13.65 3.89 18.25 6.56 22.87 9.14 C22.74 9.19 22.59 9.24 22.41 9.28 C17.64 6.92 12.81 4.61 8.19 1.98 C7.22 2.57 6.31 3.25 5.45 3.99 C8.95 5.47 12.34 7.33 15.56 9.27 C14.73 9.20 13.86 9.11 12.95 9.01 C10.07 7.63 7.14 6.38 4.20 5.16 C3.48 5.88 2.81 6.67 2.15 7.49 C1.43 7.37 0.72 7.25 0.00 7.12 C0.75 6.16 1.60 5.27 2.54 4.46 "
                                  ></Path>
                                </Svg>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.entry}>
                  <View style={styles.rectangleCopy2}>
                    <View style={styles.entry1Row}>
                      <Text style={styles.entry1}>Entry</Text>
                      <Text style={styles.style}>15</Text>
                      <View style={styles.coin}>
                        <View style={styles.fill11Stack}>
                          <Svg viewBox="0 0 17.02 16.81" style={styles.fill11}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,215,21,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.00 8.41 C0.00 3.76 3.81 0.00 8.51 0.00 C13.21 0.00 17.02 3.76 17.02 8.41 C17.02 13.05 13.21 16.81 8.51 16.81 C3.81 16.81 0.00 13.05 0.00 8.41 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 14.45 14.27" style={styles.fill4}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,204,1,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.00 7.13 C0.00 3.19 3.23 0.00 7.22 0.00 C11.21 0.00 14.45 3.19 14.45 7.13 C14.45 11.07 11.21 14.27 7.22 14.27 C3.23 14.27 0.00 11.07 0.00 7.13 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 13.31 13.21" style={styles.fill6}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(252,189,17,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M9.87 0.00 C10.59 1.11 11.00 2.43 11.00 3.84 C11.00 7.78 7.77 10.98 3.78 10.98 C2.39 10.98 1.10 10.59 0.00 9.92 C1.28 11.90 3.53 13.21 6.09 13.21 C10.08 13.21 13.31 10.02 13.31 6.08 C13.31 3.51 11.93 1.26 9.87 0.00 "
                            ></Path>
                          </Svg>
                          <Svg viewBox="0 0 11.91 10.14" style={styles.fill8}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,219,83,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.47 7.00 C0.47 3.52 3.33 0.70 6.85 0.70 C8.91 0.70 10.74 1.66 11.90 3.16 C10.80 1.27 8.74 0.00 6.38 0.00 C2.85 0.00 0.00 2.82 0.00 6.30 C0.00 7.74 0.49 9.07 1.32 10.14 C0.78 9.21 0.47 8.14 0.47 7.00 "
                            ></Path>
                          </Svg>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.play}>
                  <View style={styles.rectangleCopy3}>
                    <Svg viewBox="0 0 28 12" style={styles.path17Copy}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(233,88,71,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.60 12.00 L26.40 12.00 C27.20 12.00 27.40 11.48 26.79 10.95 L15.34 1.05 C14.74 0.52 13.52 0.52 12.91 1.04 L1.22 10.96 C0.61 11.48 0.80 12.00 1.60 12.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <View style={styles.status}>
                  <View style={styles.rectangleCopy21}>
                    <Text style={styles.advance}>Advance</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sparring}>
          <View style={styles.fill111Stack}>
            <Svg viewBox="0 0 232 231" style={styles.fill111}>
              <Path
                strokeWidth={0}
                fill="rgba(234,235,240,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M17.66 128.20 L17.66 128.20 C31.26 118.64 40.60 104.07 43.65 87.63 L42.96 77.07 C39.94 31.25 79.49 -5.75 124.55 0.74 L124.55 0.74 C166.90 10.56 203.79 36.62 227.41 73.41 L227.42 73.42 C238.61 90.85 228.24 114.13 207.89 117.26 C195.24 119.21 184.98 128.62 181.85 141.14 L181.85 141.14 C174.59 201.33 117.28 241.93 58.70 228.39 L55.31 227.53 C35.33 222.46 10.13 189.64 10.13 189.64 C-5.97 170.98 -2.46 142.35 17.66 128.20 "
              ></Path>
            </Svg>
            <View style={styles.femaleHand2}>
              <View style={styles.fill112Stack}>
                <Svg viewBox="0 0 30.11 64.18" style={styles.fill112}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(242,188,167,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M9.20 59.27 L9.54 59.77 C13.47 64.79 20.72 65.65 25.71 61.70 C30.71 57.75 31.57 50.48 27.64 45.46 L17.61 32.68 L25.35 16.60 C28.12 10.85 25.72 3.93 19.99 1.15 C14.26 -1.62 7.38 0.78 4.61 6.53 C-2.89 23.75 -1.16 43.61 9.20 59.27 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 77.92 88.95" style={styles.fill34}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(252,217,195,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M37.53 88.93 C58.88 89.56 76.70 72.70 77.33 51.27 L77.91 39.97 C78.54 18.53 61.74 0.65 40.39 0.02 C19.04 -0.62 1.22 16.24 0.59 37.68 L0.02 48.98 C-0.61 70.41 16.18 88.30 37.53 88.93 "
                  ></Path>
                </Svg>
                <View style={styles.group71}>
                  <View style={styles.clip61Stack}>
                    <Svg viewBox="0 0 64.17 264.6" style={styles.clip61}>
                      <Path
                        strokeWidth={0}
                        fill="transparent"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L64.17 0.00 L64.17 264.60 L0.00 264.60 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 64.17 264.6" style={styles.fill54}>
                      <Defs>
                        <Mask id="ZeHYyR" x={0} y={0} width={64} height={264}>
                          <Path
                            d="M0.00 0.00 L64.17 0.00 L64.17 264.60 L0.00 264.60 Z"
                            fill="white"
                          />
                        </Mask>
                      </Defs>
                      <Path
                        strokeWidth={0}
                        fill="rgba(252,217,195,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        mask="url(#ZeHYyR)"
                        d="M11.99 23.13 L0.00 241.47 C0.00 254.24 22.30 264.60 35.03 264.60 C47.75 264.60 64.17 254.24 64.17 241.47 L58.07 23.13 C58.07 10.35 47.75 0.00 35.03 0.00 C22.30 0.00 11.99 10.35 11.99 23.13 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <View style={styles.group101}>
                  <View style={styles.clip91Stack}>
                    <Svg viewBox="0 0 67.96 281.58" style={styles.clip91}>
                      <Path
                        strokeWidth={0}
                        fill="transparent"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L67.96 0.00 L67.96 281.58 L0.00 281.58 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 67.96 281.58" style={styles.fill88}>
                      <Defs>
                        <Mask id="th9YTz" x={0} y={0} width={67} height={281}>
                          <Path
                            d="M0.00 0.00 L67.96 0.00 L67.96 281.58 L0.00 281.58 Z"
                            fill="white"
                          />
                        </Mask>
                      </Defs>
                      <Path
                        strokeWidth={0}
                        fill="rgba(242,188,167,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        mask="url(#th9YTz)"
                        d="M23.35 42.82 C26.43 44.55 27.75 48.33 27.55 51.87 L17.08 251.56 C17.08 264.33 45.49 274.68 58.22 274.68 C61.70 274.68 65.00 273.89 67.96 272.49 C63.75 278.01 51.03 281.58 43.57 281.58 C30.85 281.58 8.55 271.23 8.55 258.45 L20.31 50.53 C20.44 48.22 19.33 46.03 17.42 44.75 C6.70 37.58 -2.81 25.33 0.77 0.00 C0.77 0.00 -3.01 28.06 23.35 42.82 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <Svg viewBox="0 0 27.03 92.92" style={styles.fill114}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(252,217,195,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M8.89 84.87 C9.49 89.87 14.00 93.44 18.99 92.85 C23.98 92.27 27.55 87.73 26.97 82.72 L23.17 50.21 C23.17 50.20 18.14 8.06 18.14 8.05 C17.54 3.05 13.03 -0.52 8.04 0.06 C3.05 0.65 -0.52 5.19 0.06 10.20 L8.89 84.84 C8.89 84.85 8.89 84.86 8.89 84.87 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 9.76 85.09" style={styles.fill133}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(242,188,167,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M3.52 9.78 C3.52 9.78 9.49 89.86 8.89 84.86 C8.89 84.86 8.89 84.85 8.89 84.84 L0.06 10.20 C-0.52 5.19 3.05 0.65 8.04 0.06 C8.62 -0.01 9.20 -0.02 9.76 0.03 C5.71 1.34 3.00 5.37 3.52 9.78 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 18.28 50.75" style={styles.fill153}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(252,217,195,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.00 9.13 L0.00 9.16 L0.08 41.64 C0.10 46.69 4.18 50.76 9.21 50.75 C14.23 50.74 18.28 46.65 18.28 41.62 L18.28 41.59 L18.20 9.11 C18.19 4.07 14.10 -0.01 9.08 0.00 C4.06 0.01 0.00 4.10 0.00 9.13 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 12.69 34.75" style={styles.fill173}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(242,188,167,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M5.38 9.17 C5.38 9.18 5.38 9.16 5.38 9.17 C5.38 9.17 1.94 27.39 1.27 34.28 L0.00 34.75 L0.00 9.16 L0.00 9.13 C0.00 4.10 4.06 0.00 9.08 0.00 C11.61 0.00 12.14 0.64 12.69 0.74 C8.45 1.52 6.57 4.75 5.38 9.17 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 24 93.21" style={styles.fill192}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(252,217,195,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.03 83.38 C-0.36 88.40 3.38 92.79 8.38 93.19 C13.39 93.58 17.78 89.83 18.17 84.80 L20.74 52.17 C20.74 52.16 23.97 9.84 23.97 9.83 C24.36 4.81 20.62 0.43 15.62 0.03 C10.61 -0.37 6.22 3.39 5.83 8.42 L0.03 83.36 C0.03 83.36 0.03 83.37 0.03 83.38 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 18.28 50.75" style={styles.fill212}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(252,217,195,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.00 9.14 L0.00 9.16 L0.08 41.64 C0.10 46.69 4.18 50.77 9.21 50.75 C14.23 50.74 18.28 46.65 18.28 41.62 L18.28 41.59 L18.20 9.11 C18.19 4.07 14.10 -0.01 9.08 0.00 C4.06 0.01 0.00 4.10 0.00 9.14 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 10.76 33.16" style={styles.fill232}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(242,188,167,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M3.32 9.14 L3.32 9.16 C3.32 9.16 0.10 37.61 0.08 32.56 L0.00 9.16 L0.00 9.14 C0.00 4.10 4.06 0.01 9.08 0.00 C9.65 -0.00 10.22 0.06 10.76 0.16 C6.53 0.94 3.32 4.66 3.32 9.14 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 15.71 63.01" style={styles.fill252}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(242,188,167,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M7.70 8.68 C7.70 8.68 -0.00 63.02 0.00 63.01 L4.22 8.42 C4.62 3.39 9.00 -0.37 14.01 0.03 C14.60 0.08 15.16 0.18 15.71 0.33 C11.48 0.82 8.04 4.26 7.70 8.68 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 13.36 18.71" style={styles.fill272}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(206,78,170,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M11.80 1.63 L13.30 11.85 C13.47 12.96 13.32 14.11 12.86 15.14 C11.50 18.25 7.90 19.52 4.97 18.18 C4.43 17.93 3.94 17.58 3.50 17.19 C2.17 15.98 1.32 14.33 1.14 12.53 L0.00 4.08 L0.40 3.49 C2.97 -0.29 8.17 -1.14 11.80 1.63 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 12.84 18.69" style={styles.fill292}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(206,78,170,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M12.84 2.85 L12.06 13.14 C11.98 14.27 11.59 15.36 10.92 16.27 L10.92 16.27 C8.91 19.00 5.12 19.44 2.55 17.48 C2.08 17.12 1.68 16.68 1.34 16.19 C0.30 14.72 -0.16 12.92 0.05 11.13 L0.79 2.63 L1.31 2.15 C4.65 -0.97 9.91 -0.65 12.84 2.85 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.68 -0.68 64.17 21.55" style={styles.stroke311}>
                  <Path
                    strokeWidth={1.3608}
                    fill="transparent"
                    stroke="rgba(255,182,0,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M4.68 14.22 C-19.12 26.32 71.49 15.66 61.33 2.27 C59.83 0.27 52.49 0.50 49.87 1.12 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.68 -0.68 65.42 23.56" style={styles.stroke331}>
                  <Path
                    strokeWidth={1.3608}
                    fill="transparent"
                    stroke="rgba(255,182,0,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M57.75 0.69 C85.87 0.15 -0.44 33.50 0.69 16.87 C0.86 14.40 7.47 11.13 10.15 10.45 "
                  ></Path>
                </Svg>
              </View>
            </View>
            <View style={styles.blood}>
              <Svg viewBox="0 0 7 9" style={styles.path4}>
                <Path
                  strokeWidth={0}
                  fill="rgba(233,88,71,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M0.14 8.55 C-1.35 -4.09 9.53 -0.69 6.45 5.81 C4.68 9.55 3.15 9.01 0.47 8.92 L0.14 8.55 Z"
                ></Path>
              </Svg>
              <View style={styles.path6Stack}>
                <Svg viewBox="0 0 155.22 135.15" style={styles.path6}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(233,88,71,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M155.22 70.66 C148.16 85.57 145.47 76.91 142.09 88.78 C140.46 94.51 154.50 102.71 150.01 106.75 C148.59 108.02 144.71 105.01 144.28 106.87 L136.56 100.88 C135.25 106.52 142.26 111.65 141.83 117.43 C141.67 119.59 137.46 117.80 135.32 117.43 C135.25 117.41 131.86 111.99 125.91 102.37 C118.84 90.98 99.42 98.35 90.99 101.13 C76.60 105.86 74.70 116.97 67.57 129.31 C63.76 135.91 57.93 135.92 55.53 134.15 C45.80 126.99 70.96 118.52 68.78 103.85 C66.91 91.24 55.57 107.14 51.52 98.75 C49.71 95.00 70.97 75.47 51.38 77.91 C49.21 78.18 45.50 79.45 43.14 79.19 C28.39 77.57 55.03 70.97 51.21 55.66 C48.71 45.69 15.49 52.34 7.37 50.96 C4.18 50.42 -1.77 46.55 0.51 41.88 C7.24 28.09 43.92 55.05 52.93 40.48 C54.51 37.92 53.61 34.19 55.47 31.83 C57.40 29.35 61.97 29.67 63.52 26.94 C67.69 19.60 52.34 18.08 53.68 9.04 C53.84 8.00 54.43 6.80 55.40 6.42 C71.51 0.03 59.99 25.91 79.86 17.32 C82.59 16.14 76.89 7.59 77.34 3.00 C77.79 -1.59 83.30 -1.37 84.06 6.88 C84.24 8.83 83.92 12.03 87.80 15.33 C111.86 35.79 116.76 24.53 123.61 19.91 C131.70 14.46 129.24 20.20 130.05 23.63 L129.59 27.89 C129.33 30.37 148.29 60.65 167.51 88.43 L116.77 15.09 C136.00 42.88 155.22 70.66 155.22 70.66 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 4.67 6" style={styles.path4Copy}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(233,88,71,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.09 5.70 C-0.90 -2.73 6.35 -0.46 4.30 3.87 C3.12 6.36 2.10 6.01 0.31 5.95 L0.09 5.70 Z"
                  ></Path>
                </Svg>
              </View>
            </View>
            <View style={styles.maleHand2}>
              <View style={styles.group32Stack}>
                <View style={styles.group32}>
                  <View style={styles.clip22Stack}>
                    <Svg viewBox="0 0 32.13 68.23" style={styles.clip22}>
                      <Path
                        strokeWidth={0}
                        fill="transparent"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L32.13 0.00 L32.13 68.23 L0.00 68.23 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 32.13 68.23" style={styles.fill113}>
                      <Defs>
                        <Mask id="UDBUTu" x={0} y={0} width={32} height={68}>
                          <Path
                            d="M0.00 0.00 L32.13 0.00 L32.13 68.23 L0.00 68.23 Z"
                            fill="white"
                          />
                        </Mask>
                      </Defs>
                      <Path
                        strokeWidth={0}
                        fill="rgba(234,153,117,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        mask="url(#UDBUTu)"
                        d="M9.82 63.01 L10.18 63.54 C14.38 68.88 22.11 69.80 27.44 65.60 C32.78 61.40 33.70 53.66 29.50 48.33 L18.79 34.74 L27.06 17.65 C30.01 11.53 27.45 4.18 21.34 1.23 C15.22 -1.73 7.87 0.83 4.92 6.95 L4.92 6.95 C-3.08 25.25 -1.23 46.37 9.82 63.01 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <Svg viewBox="0 0 83.17 94.56" style={styles.fill46}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(251,195,153,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M40.06 94.54 C62.85 95.21 81.87 77.29 82.54 54.50 L83.15 42.49 C83.82 19.70 65.90 0.69 43.11 0.02 C20.32 -0.65 1.30 17.27 0.63 40.06 L0.02 52.07 C-0.65 74.86 17.27 93.87 40.06 94.54 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 68.49 281.3" style={styles.fill67}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(251,195,153,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M12.79 24.59 L0.00 256.71 C0.00 270.29 23.80 281.30 37.38 281.30 C50.97 281.30 68.49 270.29 68.49 256.71 L61.97 24.59 C61.97 11.01 50.97 0.00 37.38 0.00 C23.80 0.00 12.79 11.01 12.79 24.59 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 72.34 333.63" style={styles.fill89}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M9.74 26.95 L9.13 38.96 C8.71 53.05 15.42 65.69 25.98 73.45 C29.01 75.68 30.68 79.31 30.46 83.06 L18.04 301.71 C18.04 315.29 48.36 326.30 61.94 326.30 C65.67 326.30 69.18 325.45 72.34 323.97 C67.85 329.84 54.27 333.63 46.31 333.63 C32.73 333.63 8.93 322.62 8.93 309.04 L21.49 88.00 C21.63 85.55 20.44 83.22 18.40 81.86 C6.96 74.23 -0.42 61.05 0.02 46.29 L0.63 34.28 C1.06 19.62 9.10 6.98 20.84 0.00 C14.22 7.08 10.05 16.50 9.74 26.95 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 19.51 52.39" style={styles.fill102}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(251,195,153,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.00 42.68 C0.00 48.03 4.33 52.38 9.69 52.39 C15.05 52.41 19.41 48.07 19.43 42.71 L19.51 9.74 L19.51 9.71 C19.51 4.36 15.18 0.01 9.83 0.00 C4.46 -0.01 0.10 4.32 0.09 9.69 L0.00 42.66 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 11.87 43.19" style={styles.fill121}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M4.21 9.69 C4.21 9.69 0.00 48.03 0.00 42.68 L0.00 42.65 L0.09 9.69 C0.10 4.32 4.46 -0.01 9.83 0.00 C10.53 0.00 11.21 0.08 11.87 0.22 C7.50 1.17 4.23 5.04 4.21 9.69 "
                  ></Path>
                </Svg>
                <View style={styles.group161}>
                  <View style={styles.clip151Stack}>
                    <Svg viewBox="0 0 19.51 54.22" style={styles.clip151}>
                      <Path
                        strokeWidth={0}
                        fill="transparent"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L19.51 0.00 L19.51 54.22 L0.00 54.22 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 19.51 54.22" style={styles.fill143}>
                      <Defs>
                        <Mask id="IU3ZnF" x={0} y={0} width={19} height={54}>
                          <Path
                            d="M0.00 0.00 L19.51 0.00 L19.51 54.22 L0.00 54.22 Z"
                            fill="white"
                          />
                        </Mask>
                      </Defs>
                      <Path
                        strokeWidth={0}
                        fill="rgba(251,195,153,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        mask="url(#IU3ZnF)"
                        d="M0.00 44.51 C0.00 49.86 4.33 54.21 9.69 54.22 C15.05 54.23 19.41 49.90 19.43 44.53 L19.51 9.74 L19.51 9.71 C19.51 4.36 15.18 0.01 9.83 -0.00 C4.46 -0.01 0.10 4.32 0.09 9.69 L0.00 44.48 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <View style={styles.group191}>
                  <View style={styles.clip181Stack}>
                    <Svg viewBox="0 0 11.65 45" style={styles.clip181}>
                      <Path
                        strokeWidth={0}
                        fill="transparent"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L11.65 0.00 L11.65 45.00 L0.00 45.00 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 11.65 45" style={styles.fill174}>
                      <Defs>
                        <Mask id="k12DDY" x={0} y={0} width={11} height={45}>
                          <Path
                            d="M0.00 0.00 L11.65 0.00 L11.65 45.00 L0.00 45.00 Z"
                            fill="white"
                          />
                        </Mask>
                      </Defs>
                      <Path
                        strokeWidth={0}
                        fill="rgba(234,153,117,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        mask="url(#k12DDY)"
                        d="M3.80 9.69 C3.80 9.69 0.00 49.86 0.00 44.51 L0.00 44.48 L0.09 9.69 C0.10 4.32 4.46 -0.01 9.83 -0.00 C10.45 0.00 11.06 0.07 11.65 0.18 C7.19 1.05 3.82 4.97 3.80 9.69 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <Svg viewBox="0 0 19.52 53.96" style={styles.fill204}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(251,195,153,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.00 9.71 L0.00 9.74 L0.09 44.27 C0.10 49.63 4.46 53.97 9.83 53.96 C15.18 53.94 19.52 49.59 19.52 44.24 L19.52 44.22 L19.43 9.69 C19.41 4.32 15.05 -0.01 9.69 0.00 C4.33 0.01 0.00 4.36 0.00 9.71 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 11.49 44.76" style={styles.fill223}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M3.54 9.71 L3.54 9.74 C3.54 9.74 0.10 49.63 0.09 44.27 L0.00 9.74 L0.00 9.71 C0.00 4.36 4.33 0.01 9.69 0.00 C10.30 -0.00 10.90 0.06 11.49 0.17 C6.97 1.00 3.54 4.96 3.54 9.71 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 19.52 53.96" style={styles.fill243}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(251,195,153,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.00 9.71 L0.00 9.74 L0.09 44.27 C0.10 49.63 4.46 53.97 9.83 53.95 C15.18 53.94 19.52 49.60 19.52 44.24 L19.52 44.22 L19.43 9.69 C19.41 4.32 15.05 -0.01 9.69 0.00 C4.33 0.01 0.00 4.36 0.00 9.71 "
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 11.49 44.76" style={styles.fill262}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M3.54 9.71 L3.54 9.74 C3.54 9.74 0.10 49.63 0.09 44.27 L0.00 9.74 L0.00 9.71 C0.00 4.36 4.33 0.01 9.69 0.00 C10.30 -0.00 10.90 0.06 11.49 0.17 C6.97 1.00 3.54 4.96 3.54 9.71 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 6.41 8.28" style={styles.stroke282}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L4.24 6.10 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 4.04 9.22" style={styles.stroke303}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M1.87 0.72 L0.72 7.05 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 3.77 9.26" style={styles.stroke323}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L1.60 7.09 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 3.77 9.26" style={styles.stroke342}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L1.60 7.09 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 3.77 9.26" style={styles.stroke362}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L1.60 7.09 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 3.77 9.26" style={styles.stroke382}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L1.60 7.09 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 4.76 9.05" style={styles.stroke402}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L2.59 6.88 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 3.77 9.26" style={styles.stroke422}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L1.60 7.09 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 4.26 9.18" style={styles.stroke442}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M2.09 0.72 L0.72 7.00 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 4.26 9.18" style={styles.stroke462}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M2.09 0.72 L0.72 7.00 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 4.26 9.18" style={styles.stroke482}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M2.09 0.72 L0.72 7.00 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 3.55 9.29" style={styles.stroke502}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L1.37 7.12 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 6.49 8.23" style={styles.stroke522}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M4.32 0.72 L0.72 6.05 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 6.49 8.23" style={styles.stroke542}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M4.32 0.72 L0.72 6.05 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 5.37 8.83" style={styles.stroke562}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M3.19 0.72 L0.72 6.66 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 5.88 8.59" style={styles.stroke582}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M3.70 0.72 L0.72 6.42 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 6.49 8.23" style={styles.stroke602}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M4.32 0.72 L0.72 6.05 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 6.49 8.23" style={styles.stroke622}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M4.32 0.72 L0.72 6.05 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 6.49 8.23" style={styles.stroke642}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M4.32 0.72 L0.72 6.05 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 8.29 6.4" style={styles.stroke662}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M6.11 0.72 L0.72 4.22 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 5.92 8.57" style={styles.stroke682}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L3.74 6.40 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 5.92 8.57" style={styles.stroke702}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L3.74 6.40 "
                  ></Path>
                </Svg>
                <Svg viewBox="-0.72 -0.72 5.92 8.57" style={styles.stroke722}>
                  <Path
                    strokeWidth={1.449}
                    fill="transparent"
                    stroke="rgba(234,153,117,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.72 0.72 L3.74 6.40 "
                  ></Path>
                </Svg>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(253,254,255,1)",
    flex: 1
  },
  background: {
    position: "absolute",
    top: 0,
    left: 124,
    height: 886,
    width: 360,
    backgroundColor: "transparent"
  },
  background_imageStyle: {},
  gameCard: {
    position: "absolute",
    top: 342,
    left: 23,
    height: 147,
    width: 314
  },
  tournament: {
    height: 47,
    width: 314
  },
  tournament1: {
    backgroundColor: "transparent",
    color: "rgba(74,100,149,1)",
    fontSize: 26,
    fontFamily: "rubik-500"
  },
  manyRoundsAndCool: {
    backgroundColor: "transparent",
    color: "rgba(235,203,165,1)",
    fontSize: 16,
    fontFamily: "rubik-500"
  },
  tournament1Column: {
    width: 218
  },
  dropdown: {
    height: 46,
    width: 48,
    marginLeft: 48,
    marginTop: 2
  },
  rectangleCopy33: {
    height: 46,
    width: 48,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  path17Copy3: {
    height: 9,
    width: 23,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    marginTop: 20,
    marginLeft: 12
  },
  tournament1ColumnRow: {
    height: 49,
    flexDirection: "row"
  },
  rectangle4: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    marginTop: 29
  },
  maleHand1: {
    height: 105,
    width: 89,
    transform: [
      {
        rotate: "38.00deg"
      }
    ],
    marginTop: 5
  },
  fill110: {
    position: "absolute",
    height: 38,
    width: 34,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill33: {
    position: "absolute",
    height: 42,
    width: 17,
    top: 1,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill53: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill72: {
    position: "absolute",
    height: 31,
    width: 34,
    top: 0,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill92: {
    position: "absolute",
    height: 18,
    width: 15,
    top: 13,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group131: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 29,
    width: 28
  },
  clip121: {
    position: "absolute",
    height: 29,
    width: 28,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill113: {
    position: "absolute",
    height: 62,
    width: 31,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip121Stack: {
    width: 28,
    height: 29
  },
  fill142: {
    position: "absolute",
    height: 27,
    width: 11,
    top: 3,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill161: {
    position: "absolute",
    height: 3,
    width: 12,
    top: 7,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill182: {
    position: "absolute",
    height: 27,
    width: 28,
    top: 2,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill203: {
    position: "absolute",
    height: 32,
    width: 28,
    top: 3,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill222: {
    position: "absolute",
    height: 23,
    width: 28,
    top: 16,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill242: {
    position: "absolute",
    height: 7,
    width: 24,
    top: 32,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke26: {
    position: "absolute",
    height: 3,
    width: 4,
    top: 28,
    left: 56,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke281: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 28,
    left: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke302: {
    position: "absolute",
    height: 3,
    width: 3,
    top: 33,
    left: 53,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke322: {
    position: "absolute",
    height: 3,
    width: 3,
    top: 47,
    left: 65,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke341: {
    position: "absolute",
    height: 3,
    width: 3,
    top: 70,
    left: 74,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke361: {
    position: "absolute",
    height: 3,
    width: 3,
    top: 55,
    left: 70,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke381: {
    position: "absolute",
    height: 3,
    width: 3,
    top: 50,
    left: 72,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke401: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 40,
    left: 59,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke421: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 54,
    left: 63,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke441: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 70,
    left: 66,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke461: {
    position: "absolute",
    height: 4,
    width: 3,
    top: 62,
    left: 69,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke481: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 37,
    left: 50,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke501: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 35,
    left: 44,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke521: {
    position: "absolute",
    height: 4,
    width: 1,
    top: 48,
    left: 58,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke541: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 58,
    left: 56,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke561: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 42,
    left: 53,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke581: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 63,
    left: 62,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke601: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 51,
    left: 52,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke621: {
    position: "absolute",
    height: 4,
    width: 2,
    top: 67,
    left: 57,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke641: {
    position: "absolute",
    height: 3,
    width: 3,
    top: 45,
    left: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke661: {
    position: "absolute",
    height: 3,
    width: 4,
    top: 34,
    left: 60,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke681: {
    position: "absolute",
    height: 3,
    width: 4,
    top: 42,
    left: 66,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke701: {
    position: "absolute",
    height: 3,
    width: 4,
    top: 63,
    left: 76,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke721: {
    position: "absolute",
    height: 5,
    width: 9,
    top: 34,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke74: {
    position: "absolute",
    height: 5,
    width: 8,
    top: 29,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill110Stack: {
    width: 89,
    height: 105
  },
  fightBattle: {
    backgroundColor: "transparent",
    color: "rgba(74,100,149,1)",
    fontSize: 16,
    fontFamily: "rubik-700"
  },
  prizes: {
    backgroundColor: "transparent",
    color: "rgba(74,100,149,1)",
    fontSize: 10,
    fontFamily: "rubik-700",
    marginTop: 3
  },
  style3: {
    backgroundColor: "transparent",
    color: "rgba(252,189,17,1)",
    fontSize: 12,
    fontFamily: "rubik-700",
    marginLeft: 13,
    marginTop: 2
  },
  coin3: {
    height: 15,
    width: 17,
    marginLeft: 4,
    marginTop: 1
  },
  fill19: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 54,
    left: 29,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill45: {
    position: "absolute",
    height: 12,
    width: 14,
    top: 1,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill66: {
    position: "absolute",
    height: 11,
    width: 13,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill87: {
    position: "absolute",
    height: 8,
    width: 11,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill19Stack: {
    width: 16,
    height: 14
  },
  style4: {
    backgroundColor: "transparent",
    color: "rgba(139,56,214,1)",
    fontSize: 12,
    fontFamily: "rubik-700",
    marginLeft: 12,
    marginTop: 2
  },
  cristal: {
    height: 14,
    width: 16,
    marginLeft: 3
  },
  group31: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 14,
    width: 16
  },
  clip21: {
    position: "absolute",
    height: 14,
    width: 16,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill18: {
    position: "absolute",
    height: 53,
    width: 88,
    top: 269,
    left: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip21Stack: {
    width: 16,
    height: 14
  },
  path11: {
    position: "absolute",
    height: 8,
    width: 10,
    top: 2,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill65: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill86: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group12: {
    position: "absolute",
    top: 0,
    left: 8,
    height: 7,
    width: 8
  },
  clip11: {
    position: "absolute",
    height: 7,
    width: 8,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill101: {
    height: 8,
    width: 16,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 1,
    marginTop: 23
  },
  clip11Stack: {
    width: 8,
    height: 7
  },
  fill132: {
    position: "absolute",
    height: 7,
    width: 8,
    top: 7,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group17: {
    position: "absolute",
    top: 7,
    left: 8,
    height: 7,
    width: 8
  },
  clip16: {
    position: "absolute",
    height: 7,
    width: 8,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill152: {
    position: "absolute",
    height: 21,
    width: 30,
    top: 1,
    left: 44,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip16Stack: {
    width: 8,
    height: 7
  },
  fill181: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill202: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 5,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group31Stack: {
    width: 16,
    height: 14
  },
  prizesRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 3,
    marginRight: 3
  },
  fightBattleColumn: {
    width: 113,
    marginLeft: 7,
    marginBottom: 72
  },
  group5: {
    position: "absolute",
    top: 6,
    left: 11,
    height: 11,
    width: 29
  },
  group6: {
    height: 10,
    width: 29
  },
  group9: {
    height: 10,
    width: 29
  },
  entry6: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 22,
    width: 81
  },
  rectangleCopy26: {
    height: 21,
    width: 80,
    borderWidth: 0.9,
    borderColor: "rgba(238,240,246,1)",
    borderRadius: 22.5,
    backgroundColor: "rgba(246,247,251,1)",
    flexDirection: "row",
    marginTop: 1
  },
  entry7: {
    backgroundColor: "transparent",
    color: "rgba(252,189,17,1)",
    fontSize: 10,
    fontFamily: "rubik-700",
    marginTop: 2
  },
  style5: {
    backgroundColor: "transparent",
    color: "rgba(252,189,17,1)",
    fontSize: 12,
    fontFamily: "rubik-700",
    marginLeft: 2,
    marginTop: 2
  },
  fill17: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 54,
    left: 29,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill44: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill64: {
    position: "absolute",
    height: 11,
    width: 13,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill85: {
    position: "absolute",
    height: 8,
    width: 11,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill17Stack: {
    width: 16,
    height: 14,
    marginLeft: 8
  },
  entry7Row: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 12,
    marginTop: 3
  },
  group5Stack: {
    width: 81,
    height: 22,
    marginLeft: 19,
    marginTop: 18
  },
  maleHand1Row: {
    height: 110,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: -10,
    marginRight: 15
  },
  darkBack: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 740,
    width: 360,
    backgroundColor: "transparent"
  },
  darkBack_imageStyle: {},
  popUp: {
    height: 446,
    width: 300,
    marginTop: 123,
    marginLeft: 30
  },
  group27: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 446,
    width: 300
  },
  whiteBack: {
    height: 446,
    width: 300,
    borderRadius: 23,
    backgroundColor: "rgba(255,255,255,1)"
  },
  welcomeToEpicRps: {
    position: "absolute",
    top: 315,
    left: 34,
    height: 45,
    width: 232,
    backgroundColor: "transparent",
    lineHeight: 15,
    textAlign: "center",
    color: "rgba(210,213,221,1)",
    fontSize: 12,
    fontFamily: "rubik-500"
  },
  dailyLogin: {
    position: "absolute",
    top: 282,
    left: 96,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(74,100,149,1)",
    fontSize: 21,
    fontFamily: "rubik-500"
  },
  button: {
    position: "absolute",
    top: 373,
    left: 102,
    height: 44,
    width: 97
  },
  rectangleCopy11: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(234,153,117,1)",
    flex: 1,
    marginRight: 1
  },
  rectangle8: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(251,195,153,1)"
  },
  ok: {
    backgroundColor: "transparent",
    color: "rgba(182,124,98,1)",
    fontSize: 16,
    fontFamily: "rubik-700",
    marginTop: 12,
    marginLeft: 37
  },
  ok1: {
    position: "absolute",
    top: 12,
    left: 37,
    backgroundColor: "transparent",
    color: "rgba(182,124,98,1)",
    fontSize: 16,
    fontFamily: "rubik-700"
  },
  rectangle8Stack: {
    flex: 1,
    marginBottom: 6,
    marginTop: -4
  },
  rectangle9: {
    position: "absolute",
    top: 28,
    left: 12,
    right: 11,
    bottom: 201,
    borderWidth: 1,
    borderColor: "rgba(239,241,247,1)",
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "rgba(252,252,252,1)"
  },
  style22: {
    height: 51,
    width: 59
  },
  rectangle26: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(108,200,103,1)"
  },
  character15: {
    height: 24,
    width: 25,
    marginTop: 6,
    marginLeft: 15
  },
  fill131: {
    position: "absolute",
    height: 20,
    width: 46,
    top: 58,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill415: {
    position: "absolute",
    height: 9,
    width: 12,
    top: 10,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill618: {
    position: "absolute",
    height: 6,
    width: 9,
    top: 12,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill824: {
    position: "absolute",
    height: 9,
    width: 7,
    top: 7,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill1010: {
    position: "absolute",
    height: 7,
    width: 5,
    top: 9,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill125: {
    position: "absolute",
    height: 19,
    width: 24,
    top: 8,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill148: {
    position: "absolute",
    height: 3,
    width: 2,
    top: 12,
    left: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill167: {
    position: "absolute",
    height: 3,
    width: 2,
    top: 10,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill1810: {
    position: "absolute",
    height: 1,
    width: 3,
    top: 13,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill2012: {
    position: "absolute",
    height: 5,
    width: 5,
    top: 13,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill228: {
    position: "absolute",
    height: 4,
    width: 9,
    top: 17,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill249: {
    position: "absolute",
    height: 4,
    width: 7,
    top: 18,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill266: {
    position: "absolute",
    height: 4,
    width: 3,
    top: 14,
    left: 16,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill284: {
    position: "absolute",
    height: 2,
    width: 6,
    top: 18,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill303: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 19,
    left: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill323: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 19,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill343: {
    position: "absolute",
    height: 0,
    width: 0,
    top: 9,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill363: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 7,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill383: {
    position: "absolute",
    height: 2,
    width: 3,
    top: 9,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill404: {
    position: "absolute",
    height: 1,
    width: 2,
    top: 13,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill423: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 4,
    left: 21,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill444: {
    position: "absolute",
    height: 7,
    width: 10,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill463: {
    position: "absolute",
    height: 9,
    width: 4,
    top: 0,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill504: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 0,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill523: {
    position: "absolute",
    height: 4,
    width: 3,
    top: 1,
    left: 16,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill543: {
    position: "absolute",
    height: 2,
    width: 7,
    top: 5,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill564: {
    position: "absolute",
    height: 7,
    width: 21,
    top: 0,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill583: {
    position: "absolute",
    height: 5,
    width: 19,
    top: 18,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill131Stack: {
    top: 26,
    left: 10,
    width: 75,
    height: 78,
    position: "absolute"
  },
  day1: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 17
  },
  path34: {
    position: "absolute",
    height: 7,
    width: 10,
    top: 39,
    left: 39,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangleCopy317: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderRadius: 25,
    backgroundColor: "rgba(75,160,71,1)"
  },
  x15: {
    backgroundColor: "transparent",
    color: "rgba(252,252,252,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle26Stack: {
    flex: 1,
    marginLeft: 1
  },
  style21: {
    height: 51,
    width: 59,
    marginLeft: 8
  },
  rectangle25: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character14: {
    height: 24,
    width: 27,
    marginTop: 8,
    marginLeft: 15
  },
  fill130: {
    position: "absolute",
    height: 3,
    width: 10,
    top: 20,
    left: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill39: {
    position: "absolute",
    height: 36,
    width: 36,
    top: 1,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill59: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill75: {
    position: "absolute",
    height: 6,
    width: 9,
    top: 16,
    left: 16,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill95: {
    height: 7,
    width: 3,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 12
  },
  fill119: {
    position: "absolute",
    height: 19,
    width: 24,
    top: 8,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill1312: {
    position: "absolute",
    height: 7,
    width: 10,
    top: 7,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill1511: {
    position: "absolute",
    height: 5,
    width: 8,
    top: 8,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill178: {
    position: "absolute",
    height: 9,
    width: 44,
    top: 16,
    left: 63,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill196: {
    position: "absolute",
    height: 5,
    width: 8,
    top: 8,
    left: 16,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill216: {
    position: "absolute",
    height: 3,
    width: 21,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path33: {
    position: "absolute",
    height: 14,
    width: 1,
    top: 0,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill256: {
    position: "absolute",
    height: 3,
    width: 4,
    top: 8,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill276: {
    position: "absolute",
    height: 3,
    width: 4,
    top: 8,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill295: {
    position: "absolute",
    height: 5,
    width: 9,
    top: 16,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill311: {
    position: "absolute",
    height: 2,
    width: 6,
    top: 19,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill130Stack: {
    width: 26,
    height: 23
  },
  day2: {
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 2,
    marginLeft: 17
  },
  rectangleCopy316: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x14: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle25Stack: {
    flex: 1,
    marginLeft: 1
  },
  style20: {
    height: 51,
    width: 62,
    marginLeft: 7
  },
  rectangle24: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 6,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character13: {
    height: 24,
    width: 29,
    marginTop: 6,
    marginLeft: 13
  },
  fill823: {
    position: "absolute",
    height: 7,
    width: 16,
    top: 0,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path18: {
    position: "absolute",
    height: 20,
    width: 29,
    top: 0,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path19: {
    position: "absolute",
    height: 21,
    width: 30,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill166: {
    position: "absolute",
    height: 9,
    width: 44,
    top: 15,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path20: {
    position: "absolute",
    height: 4,
    width: 5,
    top: 10,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path21: {
    position: "absolute",
    height: 2,
    width: 10,
    top: 16,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path22: {
    position: "absolute",
    height: 3,
    width: 11,
    top: 15,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill248: {
    position: "absolute",
    height: 1,
    width: 7,
    top: 16,
    left: 11,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path23: {
    position: "absolute",
    height: 4,
    width: 6,
    top: 6,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path24: {
    position: "absolute",
    height: 5,
    width: 7,
    top: 5,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path25: {
    position: "absolute",
    height: 4,
    width: 6,
    top: 6,
    left: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path26: {
    position: "absolute",
    height: 5,
    width: 7,
    top: 5,
    left: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path27: {
    position: "absolute",
    height: 1,
    width: 2,
    top: 7,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path28: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 7,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path29: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 8,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill403: {
    position: "absolute",
    height: 0,
    width: 0,
    top: 8,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path30: {
    position: "absolute",
    height: 1,
    width: 2,
    top: 7,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path31: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 7,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path32: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 8,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill481: {
    position: "absolute",
    height: 0,
    width: 0,
    top: 8,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill823Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 21,
    position: "absolute"
  },
  fill109: {
    position: "absolute",
    height: 14,
    width: 21,
    top: 10,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill823StackStack: {
    width: 30,
    height: 24
  },
  day3: {
    position: "absolute",
    top: 39,
    left: 16,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy315: {
    position: "absolute",
    top: 0,
    left: 42,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x13: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 4
  },
  rectangle24Stack: {
    flex: 1,
    marginLeft: 1
  },
  style19: {
    height: 51,
    width: 59,
    marginLeft: 5
  },
  rectangle23: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  fill129: {
    height: 28,
    width: 13,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-330.00deg"
      }
    ],
    marginTop: 6,
    marginLeft: 22
  },
  day4: {
    position: "absolute",
    top: 39,
    left: 16,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy314: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x12: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle23Stack: {
    flex: 1,
    marginLeft: 1
  },
  style22Row: {
    height: 51,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 7,
    marginRight: 11
  },
  style18: {
    height: 51,
    width: 59
  },
  rectangle22: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character12: {
    height: 24,
    width: 25,
    marginTop: 6,
    marginLeft: 15
  },
  fill128: {
    position: "absolute",
    height: 23,
    width: 25,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill414: {
    position: "absolute",
    height: 9,
    width: 12,
    top: 10,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill617: {
    position: "absolute",
    height: 6,
    width: 9,
    top: 12,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill822: {
    position: "absolute",
    height: 9,
    width: 7,
    top: 7,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill108: {
    position: "absolute",
    height: 26,
    width: 28,
    top: 1,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill124: {
    position: "absolute",
    height: 13,
    width: 15,
    top: 9,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill147: {
    position: "absolute",
    height: 3,
    width: 2,
    top: 12,
    left: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill165: {
    position: "absolute",
    height: 3,
    width: 2,
    top: 10,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill189: {
    position: "absolute",
    height: 1,
    width: 3,
    top: 13,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill2011: {
    position: "absolute",
    height: 5,
    width: 5,
    top: 13,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill227: {
    position: "absolute",
    height: 4,
    width: 9,
    top: 17,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill247: {
    position: "absolute",
    height: 4,
    width: 7,
    top: 18,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill265: {
    position: "absolute",
    height: 4,
    width: 3,
    top: 14,
    left: 16,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill283: {
    position: "absolute",
    height: 2,
    width: 6,
    top: 18,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill302: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 19,
    left: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill322: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 19,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill342: {
    position: "absolute",
    height: 0,
    width: 0,
    top: 9,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill362: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 7,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill382: {
    position: "absolute",
    height: 2,
    width: 3,
    top: 9,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill402: {
    position: "absolute",
    height: 1,
    width: 2,
    top: 13,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill422: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 4,
    left: 21,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill443: {
    position: "absolute",
    height: 7,
    width: 10,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill462: {
    position: "absolute",
    height: 9,
    width: 4,
    top: 0,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill503: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 0,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill522: {
    position: "absolute",
    height: 4,
    width: 3,
    top: 1,
    left: 16,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill542: {
    position: "absolute",
    height: 2,
    width: 7,
    top: 5,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill563: {
    position: "absolute",
    height: 7,
    width: 22,
    top: 0,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill582: {
    position: "absolute",
    height: 5,
    width: 19,
    top: 18,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill128Stack: {
    width: 25,
    height: 23
  },
  day51: {
    position: "absolute",
    top: 39,
    left: 16,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy313: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x11: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle22Stack: {
    flex: 1,
    marginLeft: 1
  },
  style17: {
    height: 51,
    width: 59,
    marginLeft: 8
  },
  rectangle21: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character11: {
    height: 19,
    width: 22,
    marginTop: 11,
    marginLeft: 18
  },
  fill127: {
    position: "absolute",
    height: 17,
    width: 48,
    top: 35,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill413: {
    position: "absolute",
    height: 15,
    width: 18,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill616: {
    position: "absolute",
    height: 14,
    width: 17,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill821: {
    position: "absolute",
    height: 11,
    width: 15,
    top: 2,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill127Stack: {
    width: 53,
    height: 52
  },
  day61: {
    position: "absolute",
    top: 39,
    left: 16,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy312: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x10: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle21Stack: {
    flex: 1,
    marginLeft: 1
  },
  style16: {
    height: 51,
    width: 60,
    marginLeft: 7
  },
  rectangle20: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 4,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character10: {
    height: 19,
    width: 22,
    marginTop: 11,
    marginLeft: 17
  },
  fill126: {
    position: "absolute",
    height: 18,
    width: 21,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path17: {
    position: "absolute",
    height: 10,
    width: 13,
    top: 2,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill615: {
    position: "absolute",
    height: 9,
    width: 16,
    top: 9,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill820: {
    position: "absolute",
    height: 9,
    width: 10,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill107: {
    position: "absolute",
    height: 9,
    width: 10,
    top: 0,
    left: 11,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill1311: {
    position: "absolute",
    height: 9,
    width: 10,
    top: 9,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill1510: {
    position: "absolute",
    height: 9,
    width: 10,
    top: 9,
    left: 11,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill188: {
    position: "absolute",
    height: 3,
    width: 3,
    top: 3,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill2010: {
    position: "absolute",
    height: 1,
    width: 2,
    top: 6,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill126Stack: {
    width: 21,
    height: 18
  },
  day71: {
    position: "absolute",
    top: 39,
    left: 16,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy131: {
    position: "absolute",
    top: 0,
    left: 40,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x9: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 6
  },
  rectangle20Stack: {
    flex: 1,
    marginLeft: 1
  },
  style15: {
    height: 51,
    width: 59,
    marginLeft: 7
  },
  rectangle19: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character9: {
    height: 124,
    width: 31,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    marginTop: -38,
    marginLeft: -52
  },
  fill38: {
    position: "absolute",
    height: 4,
    width: 4,
    top: 15,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group73: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip63: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill58: {
    position: "absolute",
    height: 8,
    width: 27,
    top: 30,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip63Stack: {
    width: 81,
    height: 89
  },
  group103: {
    position: "absolute",
    top: 32,
    left: 2,
    height: 92,
    width: 26
  },
  clip93: {
    position: "absolute",
    height: 92,
    width: 26,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill819: {
    position: "absolute",
    height: 92,
    width: 26,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip93Stack: {
    width: 26,
    height: 92
  },
  fill118: {
    position: "absolute",
    height: 18,
    width: 21,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill1310: {
    position: "absolute",
    height: 28,
    width: 4,
    top: 1,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill159: {
    position: "absolute",
    height: 17,
    width: 7,
    top: 17,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill177: {
    position: "absolute",
    height: 11,
    width: 5,
    top: 17,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill195: {
    position: "absolute",
    height: 30,
    width: 9,
    top: 0,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill215: {
    position: "absolute",
    height: 17,
    width: 7,
    top: 18,
    left: 24,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill235: {
    position: "absolute",
    height: 11,
    width: 4,
    top: 18,
    left: 24,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill255: {
    position: "absolute",
    height: 20,
    width: 6,
    top: 0,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill275: {
    position: "absolute",
    height: 6,
    width: 5,
    top: 1,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill294: {
    position: "absolute",
    height: 6,
    width: 5,
    top: 0,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke313: {
    position: "absolute",
    height: 7,
    width: 24,
    top: 47,
    left: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke333: {
    position: "absolute",
    height: 8,
    width: 25,
    top: 52,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill125Stack: {
    width: 32,
    height: 124
  },
  day81: {
    position: "absolute",
    top: 39,
    left: 16,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy311: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x8: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle19Stack: {
    flex: 1,
    marginLeft: 1
  },
  style18Row: {
    height: 51,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 7,
    marginRight: 11
  },
  style14: {
    height: 51,
    width: 59
  },
  rectangle17: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character8: {
    height: 22,
    width: 25,
    marginTop: 9,
    marginLeft: 16
  },
  fill74: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill94: {
    position: "absolute",
    height: 17,
    width: 17,
    top: 1,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path15: {
    position: "absolute",
    height: 3,
    width: 14,
    top: 9,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill138: {
    position: "absolute",
    height: 1,
    width: 4,
    top: 11,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle18: {
    position: "absolute",
    top: 11,
    left: 8,
    height: 2,
    width: 2,
    borderRadius: 1,
    backgroundColor: "rgba(38,50,56,1)"
  },
  rectangleCopy14: {
    position: "absolute",
    top: 11,
    left: 16,
    height: 2,
    width: 2,
    borderRadius: 1,
    backgroundColor: "rgba(38,50,56,1)"
  },
  fill139: {
    position: "absolute",
    height: 16,
    width: 33,
    top: 1,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill158: {
    position: "absolute",
    height: 7,
    width: 10,
    top: 14,
    left: 53,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path16: {
    position: "absolute",
    height: 4,
    width: 3,
    top: 3,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke19: {
    position: "absolute",
    height: 3,
    width: 2,
    top: 16,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke21: {
    position: "absolute",
    height: 3,
    width: 2,
    top: 16,
    left: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke23: {
    position: "absolute",
    height: 1,
    width: 6,
    top: 17,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill124Stack: {
    top: 0,
    left: 0,
    width: 21,
    height: 22,
    position: "absolute"
  },
  fill412: {
    position: "absolute",
    height: 11,
    width: 6,
    top: 0,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill124StackStack: {
    width: 25,
    height: 22
  },
  day9: {
    position: "absolute",
    top: 39,
    left: 17,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy310: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x7: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle17Stack: {
    flex: 1,
    marginRight: 1
  },
  style13: {
    height: 51,
    width: 59,
    marginLeft: 7
  },
  rectangle16: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character7: {
    height: 24,
    width: 22,
    marginTop: 6,
    marginLeft: 17
  },
  fill123: {
    position: "absolute",
    height: 17,
    width: 38,
    top: 3,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill818: {
    position: "absolute",
    height: 21,
    width: 11,
    top: 0,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill176: {
    position: "absolute",
    height: 15,
    width: 41,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill194: {
    position: "absolute",
    height: 1,
    width: 4,
    top: 13,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill214: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 13,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill234: {
    position: "absolute",
    height: 1,
    width: 4,
    top: 17,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill254: {
    position: "absolute",
    height: 1,
    width: 7,
    top: 19,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill274: {
    position: "absolute",
    height: 1,
    width: 4,
    top: 21,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill123Stack: {
    top: 0,
    left: 7,
    width: 15,
    height: 24,
    position: "absolute"
  },
  fill37: {
    position: "absolute",
    height: 38,
    width: 37,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill57: {
    position: "absolute",
    height: 21,
    width: 11,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill117: {
    position: "absolute",
    height: 17,
    width: 38,
    top: 3,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill137: {
    position: "absolute",
    height: 30,
    width: 33,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill157: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 13,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill37Stack: {
    top: 0,
    left: 0,
    width: 11,
    height: 24,
    position: "absolute"
  },
  fill123StackStack: {
    width: 22,
    height: 24
  },
  day10: {
    position: "absolute",
    top: 39,
    left: 14,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy39: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x6: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle16Stack: {
    flex: 1,
    marginLeft: 1
  },
  style12: {
    height: 51,
    width: 59,
    marginLeft: 7
  },
  rectangle15: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character6: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 66,
    width: 57,
    transform: [
      {
        rotate: "38.00deg"
      }
    ]
  },
  fill122: {
    position: "absolute",
    height: 3,
    width: 6,
    top: 25,
    left: 11,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill36: {
    position: "absolute",
    height: 4,
    width: 3,
    top: 12,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill56: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill73: {
    position: "absolute",
    height: 19,
    width: 21,
    top: 0,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill93: {
    position: "absolute",
    height: 43,
    width: 38,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill116: {
    position: "absolute",
    height: 38,
    width: 34,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill146: {
    position: "absolute",
    height: 17,
    width: 7,
    top: 2,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill164: {
    position: "absolute",
    height: 15,
    width: 41,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill187: {
    position: "absolute",
    height: 17,
    width: 18,
    top: 2,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill209: {
    position: "absolute",
    height: 20,
    width: 18,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill226: {
    position: "absolute",
    height: 15,
    width: 18,
    top: 10,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill246: {
    position: "absolute",
    height: 5,
    width: 15,
    top: 20,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke261: {
    position: "absolute",
    height: 2,
    width: 3,
    top: 18,
    left: 35,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke283: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 17,
    left: 30,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke304: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 21,
    left: 34,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke324: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 30,
    left: 42,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke343: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 44,
    left: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke363: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 35,
    left: 45,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke383: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 32,
    left: 46,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke403: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 26,
    left: 38,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke423: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 34,
    left: 40,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke443: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 44,
    left: 42,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke463: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 39,
    left: 44,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke483: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 24,
    left: 32,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke503: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 22,
    left: 28,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke523: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 31,
    left: 37,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke543: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 37,
    left: 36,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke563: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 27,
    left: 34,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke583: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 40,
    left: 39,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke603: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 32,
    left: 33,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke623: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 42,
    left: 36,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke643: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 28,
    left: 30,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke663: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 22,
    left: 38,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke683: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 27,
    left: 42,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke703: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 40,
    left: 48,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke723: {
    position: "absolute",
    height: 3,
    width: 6,
    top: 22,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke741: {
    position: "absolute",
    height: 3,
    width: 5,
    top: 18,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill122Stack: {
    width: 57,
    height: 66
  },
  day11: {
    position: "absolute",
    top: 21,
    left: 22,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  character6Stack: {
    width: 57,
    height: 66,
    marginTop: 13,
    marginLeft: -5
  },
  rectangleCopy38: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x5: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle15Stack: {
    flex: 1,
    marginLeft: 1
  },
  style11: {
    height: 51,
    width: 59,
    marginLeft: 8
  },
  rectangle14: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character5: {
    height: 19,
    width: 22,
    marginTop: 11,
    marginLeft: 17
  },
  group36: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 18,
    width: 22
  },
  clip26: {
    position: "absolute",
    height: 18,
    width: 22,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill121: {
    position: "absolute",
    height: 39,
    width: 11,
    top: 4,
    left: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip26Stack: {
    width: 22,
    height: 18
  },
  fill411: {
    position: "absolute",
    height: 15,
    width: 18,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill614: {
    position: "absolute",
    height: 14,
    width: 17,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill817: {
    position: "absolute",
    height: 11,
    width: 15,
    top: 2,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group36Stack: {
    width: 22,
    height: 18
  },
  day12: {
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 16
  },
  rectangleCopy37: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x4: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle14Stack: {
    flex: 1,
    marginLeft: 1
  },
  style14Row: {
    height: 51,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 8,
    marginRight: 11
  },
  style10: {
    height: 51,
    width: 59
  },
  rectangle13: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character4: {
    height: 24,
    width: 25,
    marginTop: 6,
    marginLeft: 15
  },
  fill120: {
    position: "absolute",
    height: 23,
    width: 25,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill410: {
    position: "absolute",
    height: 9,
    width: 12,
    top: 10,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill613: {
    position: "absolute",
    height: 6,
    width: 9,
    top: 12,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill816: {
    position: "absolute",
    height: 9,
    width: 7,
    top: 7,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill106: {
    position: "absolute",
    height: 7,
    width: 5,
    top: 9,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill145: {
    position: "absolute",
    height: 8,
    width: 10,
    top: 12,
    left: 11,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill163: {
    position: "absolute",
    height: 3,
    width: 2,
    top: 10,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill186: {
    position: "absolute",
    height: 1,
    width: 3,
    top: 13,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill208: {
    position: "absolute",
    height: 5,
    width: 5,
    top: 13,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill225: {
    position: "absolute",
    height: 4,
    width: 9,
    top: 17,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill245: {
    position: "absolute",
    height: 4,
    width: 7,
    top: 18,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill264: {
    position: "absolute",
    height: 4,
    width: 3,
    top: 14,
    left: 16,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill282: {
    position: "absolute",
    height: 2,
    width: 6,
    top: 18,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill301: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 19,
    left: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill321: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 19,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill341: {
    position: "absolute",
    height: 0,
    width: 0,
    top: 9,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill361: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 7,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill381: {
    position: "absolute",
    height: 2,
    width: 3,
    top: 9,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill401: {
    position: "absolute",
    height: 1,
    width: 2,
    top: 13,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill421: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 4,
    left: 21,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill442: {
    position: "absolute",
    height: 7,
    width: 10,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill461: {
    position: "absolute",
    height: 9,
    width: 4,
    top: 0,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill502: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 0,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill521: {
    position: "absolute",
    height: 4,
    width: 3,
    top: 1,
    left: 16,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill541: {
    position: "absolute",
    height: 2,
    width: 7,
    top: 5,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill562: {
    position: "absolute",
    height: 7,
    width: 22,
    top: 0,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill581: {
    position: "absolute",
    height: 5,
    width: 19,
    top: 18,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill120Stack: {
    width: 25,
    height: 23
  },
  day5: {
    position: "absolute",
    top: 39,
    left: 16,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy36: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x3: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle13Stack: {
    flex: 1,
    marginLeft: 1
  },
  style9: {
    height: 51,
    width: 59,
    marginLeft: 8
  },
  rectangle12: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character3: {
    height: 19,
    width: 22,
    marginTop: 11,
    marginLeft: 18
  },
  fill49: {
    position: "absolute",
    height: 15,
    width: 18,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill612: {
    position: "absolute",
    height: 14,
    width: 17,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill815: {
    position: "absolute",
    height: 11,
    width: 15,
    top: 2,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill119Stack: {
    width: 22,
    height: 18
  },
  day6: {
    position: "absolute",
    top: 39,
    left: 16,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy35: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x2: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle12Stack: {
    flex: 1,
    marginLeft: 1
  },
  style8: {
    height: 51,
    width: 60,
    marginLeft: 7
  },
  rectangle11: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 4,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character2: {
    height: 19,
    width: 22,
    marginTop: 11,
    marginLeft: 17
  },
  path14: {
    position: "absolute",
    height: 10,
    width: 13,
    top: 2,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill611: {
    position: "absolute",
    height: 9,
    width: 16,
    top: 9,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill814: {
    position: "absolute",
    height: 9,
    width: 10,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill105: {
    position: "absolute",
    height: 38,
    width: 34,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill136: {
    position: "absolute",
    height: 9,
    width: 10,
    top: 9,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill156: {
    position: "absolute",
    height: 9,
    width: 10,
    top: 9,
    left: 11,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill185: {
    position: "absolute",
    height: 3,
    width: 3,
    top: 3,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill207: {
    position: "absolute",
    height: 1,
    width: 2,
    top: 6,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill118Stack: {
    width: 21,
    height: 18
  },
  day7: {
    position: "absolute",
    top: 39,
    left: 16,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy13: {
    position: "absolute",
    top: 0,
    left: 40,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x1: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 6
  },
  rectangle11Stack: {
    flex: 1,
    marginLeft: 1
  },
  style7: {
    height: 51,
    width: 59,
    marginLeft: 7
  },
  rectangle10: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 3,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(239,241,247,1)"
  },
  character1: {
    height: 124,
    width: 31,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    marginTop: -38,
    marginLeft: -52
  },
  fill35: {
    position: "absolute",
    height: 16,
    width: 10,
    top: 0,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group72: {
    position: "absolute",
    top: 38,
    left: 5,
    height: 86,
    width: 24
  },
  clip62: {
    position: "absolute",
    height: 86,
    width: 24,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill55: {
    position: "absolute",
    height: 86,
    width: 24,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip62Stack: {
    width: 24,
    height: 86
  },
  group102: {
    position: "absolute",
    top: 32,
    left: 2,
    height: 92,
    width: 26
  },
  clip92: {
    position: "absolute",
    height: 92,
    width: 26,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill813: {
    position: "absolute",
    height: 92,
    width: 26,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip92Stack: {
    width: 26,
    height: 92
  },
  fill115: {
    position: "absolute",
    height: 17,
    width: 38,
    top: 3,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill135: {
    position: "absolute",
    height: 28,
    width: 4,
    top: 1,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill155: {
    position: "absolute",
    height: 17,
    width: 7,
    top: 17,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill175: {
    position: "absolute",
    height: 11,
    width: 5,
    top: 17,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill193: {
    position: "absolute",
    height: 30,
    width: 9,
    top: 0,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill213: {
    position: "absolute",
    height: 17,
    width: 7,
    top: 18,
    left: 24,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill233: {
    position: "absolute",
    height: 11,
    width: 4,
    top: 18,
    left: 24,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill253: {
    position: "absolute",
    height: 20,
    width: 6,
    top: 0,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill273: {
    position: "absolute",
    height: 6,
    width: 5,
    top: 1,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill293: {
    position: "absolute",
    height: 6,
    width: 5,
    top: 0,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke312: {
    position: "absolute",
    height: 7,
    width: 24,
    top: 47,
    left: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke332: {
    position: "absolute",
    height: 8,
    width: 25,
    top: 52,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill117Stack: {
    width: 32,
    height: 124
  },
  day8: {
    position: "absolute",
    top: 39,
    left: 16,
    backgroundColor: "transparent",
    color: "rgba(92,92,92,1)",
    fontSize: 8,
    fontFamily: "rubik-700"
  },
  rectangleCopy34: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 17,
    width: 19,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  x: {
    backgroundColor: "transparent",
    color: "rgba(211,212,214,1)",
    fontSize: 8,
    fontFamily: "rubik-700",
    marginTop: 4,
    marginLeft: 5
  },
  rectangle10Stack: {
    flex: 1,
    marginLeft: 1
  },
  style10Row: {
    height: 51,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 7,
    marginRight: 11
  },
  group27Stack: {
    flex: 1
  },
  gameCardStack: {
    top: 0,
    left: 0,
    width: 360,
    height: 740,
    position: "absolute"
  },
  topBar: {
    position: "absolute",
    top: 37,
    left: 23,
    height: 38,
    width: 314,
    flexDirection: "row"
  },
  player1: {
    height: 38,
    width: 107,
    flexDirection: "row"
  },
  character: {
    height: 38,
    width: 35
  },
  group35: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 38,
    width: 35
  },
  clip25: {
    position: "absolute",
    height: 38,
    width: 34,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip25Stack: {
    width: 34,
    height: 38
  },
  fill48: {
    position: "absolute",
    height: 2,
    width: 5,
    top: 2,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill610: {
    position: "absolute",
    height: 10,
    width: 12,
    top: 19,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill812: {
    position: "absolute",
    height: 15,
    width: 10,
    top: 12,
    left: 25,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill104: {
    position: "absolute",
    height: 11,
    width: 7,
    top: 14,
    left: 26,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill144: {
    position: "absolute",
    height: 5,
    width: 3,
    top: 19,
    left: 28,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill162: {
    position: "absolute",
    height: 6,
    width: 11,
    top: 19,
    left: 38,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill184: {
    position: "absolute",
    height: 8,
    width: 22,
    top: 7,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill206: {
    position: "absolute",
    height: 8,
    width: 6,
    top: 21,
    left: 21,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill224: {
    position: "absolute",
    height: 7,
    width: 13,
    top: 28,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill244: {
    position: "absolute",
    height: 6,
    width: 10,
    top: 29,
    left: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill263: {
    position: "absolute",
    height: 6,
    width: 5,
    top: 22,
    left: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill281: {
    position: "absolute",
    height: 4,
    width: 8,
    top: 30,
    left: 21,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill30: {
    position: "absolute",
    height: 2,
    width: 1,
    top: 31,
    left: 24,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill32: {
    position: "absolute",
    height: 101,
    width: 93,
    top: 71,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill34: {
    position: "absolute",
    height: 81,
    width: 75,
    top: 56,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill40: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 20,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill42: {
    position: "absolute",
    height: 108,
    width: 100,
    top: 15,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill441: {
    position: "absolute",
    height: 11,
    width: 14,
    top: 5,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill46: {
    position: "absolute",
    height: 86,
    width: 80,
    top: 12,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill501: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 0,
    left: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill52: {
    position: "absolute",
    height: 302,
    width: 77,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill54: {
    position: "absolute",
    height: 241,
    width: 62,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill561: {
    position: "absolute",
    height: 11,
    width: 31,
    top: 0,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group35Stack: {
    width: 35,
    height: 38
  },
  player11: {
    backgroundColor: "transparent",
    color: "rgba(74,100,149,1)",
    fontSize: 16,
    fontFamily: "rubik-700",
    marginLeft: 10,
    marginTop: 11
  },
  characterRow: {
    height: 38,
    flexDirection: "row",
    flex: 1
  },
  status3: {
    height: 32,
    width: 103,
    marginLeft: 33,
    marginTop: 4
  },
  rectangleCopy9: {
    height: 32,
    width: 103,
    borderWidth: 1,
    borderColor: "rgba(238,240,246,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  beginner2: {
    backgroundColor: "transparent",
    color: "rgba(160,97,255,1)",
    fontSize: 13,
    fontFamily: "rubik-700",
    marginTop: 2
  },
  crystal: {
    height: 17,
    width: 18,
    marginLeft: 6
  },
  group34: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 17,
    width: 18
  },
  clip24: {
    position: "absolute",
    height: 17,
    width: 18,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip24Stack: {
    width: 18,
    height: 17
  },
  path12: {
    position: "absolute",
    height: 9,
    width: 11,
    top: 2,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill69: {
    position: "absolute",
    height: 8,
    width: 14,
    top: 9,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill811: {
    position: "absolute",
    height: 8,
    width: 9,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group121: {
    position: "absolute",
    top: 0,
    left: 9,
    height: 8,
    width: 9
  },
  clip111: {
    position: "absolute",
    height: 8,
    width: 9,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill103: {
    position: "absolute",
    height: 26,
    width: 28,
    top: 1,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip111Stack: {
    width: 9,
    height: 8
  },
  fill134: {
    position: "absolute",
    height: 8,
    width: 9,
    top: 9,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group171: {
    position: "absolute",
    top: 8,
    left: 9,
    height: 9,
    width: 9
  },
  clip161: {
    position: "absolute",
    height: 8,
    width: 9,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill154: {
    position: "absolute",
    height: 14,
    width: 13,
    top: 15,
    left: 40,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip161Stack: {
    width: 9,
    height: 8
  },
  fill183: {
    position: "absolute",
    height: 2,
    width: 3,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill205: {
    position: "absolute",
    height: 1,
    width: 1,
    top: 6,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group34Stack: {
    width: 18,
    height: 17
  },
  beginner2Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 12,
    marginTop: 7
  },
  coins: {
    height: 32,
    width: 63,
    marginLeft: 8,
    marginTop: 4
  },
  rectangleCopy27: {
    height: 32,
    width: 63,
    borderWidth: 1,
    borderColor: "rgba(238,240,246,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  style6: {
    backgroundColor: "transparent",
    color: "rgba(252,189,17,1)",
    fontSize: 13,
    fontFamily: "rubik-700",
    marginTop: 2
  },
  coin4: {
    height: 17,
    width: 18,
    marginLeft: 7
  },
  group33: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 17,
    width: 18
  },
  clip23: {
    position: "absolute",
    height: 17,
    width: 18,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill114: {
    position: "absolute",
    height: 85,
    width: 26,
    top: 4,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip23Stack: {
    width: 18,
    height: 17
  },
  fill47: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill68: {
    position: "absolute",
    height: 13,
    width: 14,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill810: {
    position: "absolute",
    height: 10,
    width: 13,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group33Stack: {
    width: 18,
    height: 17
  },
  style6Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 12,
    marginTop: 7
  },
  player1Row: {
    height: 38,
    flexDirection: "row",
    flex: 1
  },
  navigationBar: {
    position: "absolute",
    top: 652,
    left: 0,
    height: 88,
    width: 360
  },
  rectangle5: {
    height: 88,
    width: 360,
    backgroundColor: "rgba(239,241,247,1)",
    flexDirection: "row"
  },
  playIcon: {
    height: 46,
    width: 96
  },
  rectangle7: {
    height: 46,
    width: 96,
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  path17Copy4: {
    height: 13,
    width: 31,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    marginTop: 17,
    marginLeft: 35
  },
  menuIcon: {
    height: 24,
    width: 31,
    marginLeft: 46,
    marginTop: 10
  },
  rectangle6: {
    height: 5,
    width: 25,
    borderRadius: 2.8,
    backgroundColor: "rgba(134,146,170,1)",
    marginLeft: 3
  },
  rectangleCopy: {
    height: 5,
    width: 31,
    borderRadius: 2.8,
    backgroundColor: "rgba(134,146,170,1)",
    marginTop: 4
  },
  rectangleCopy4: {
    height: 5,
    width: 25,
    borderRadius: 2.8,
    backgroundColor: "rgba(134,146,170,1)",
    marginTop: 5,
    marginLeft: 3
  },
  storeIcon: {
    height: 26,
    width: 34,
    marginLeft: 76,
    marginTop: 10
  },
  combinedShape: {
    height: 11,
    width: 33,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path13: {
    height: 11,
    width: 28,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 3,
    marginLeft: 3
  },
  playIconRow: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 54,
    marginLeft: 23,
    marginTop: 16
  },
  gameCardStackStack: {
    width: 360,
    height: 740
  },
  pagination: {
    height: 9,
    width: 86,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 137
  },
  rectangle: {
    height: 9,
    width: 10,
    borderRadius: 5,
    backgroundColor: "rgba(241,169,75,1)"
  },
  rectangleCopy5: {
    height: 5,
    width: 6,
    borderRadius: 5,
    backgroundColor: "rgba(197,207,223,1)",
    marginLeft: 13,
    marginTop: 2
  },
  rectangleCopy6: {
    height: 5,
    width: 6,
    borderRadius: 5,
    backgroundColor: "rgba(197,207,223,1)",
    marginLeft: 13,
    marginTop: 2
  },
  rectangleCopy7: {
    height: 5,
    width: 6,
    borderRadius: 5,
    backgroundColor: "rgba(197,207,223,1)",
    marginLeft: 13,
    marginTop: 2
  },
  rectangleCopy8: {
    height: 5,
    width: 6,
    borderRadius: 5,
    backgroundColor: "rgba(197,207,223,1)",
    marginLeft: 14,
    marginTop: 2
  },
  rectangleRow: {
    height: 9,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  trainYourSkills: {
    position: "absolute",
    top: 518,
    left: 147,
    height: 214,
    width: 400
  },
  trainYourSkills1: {
    backgroundColor: "transparent",
    color: "rgba(74,100,149,1)",
    fontSize: 26,
    fontFamily: "rubik-500"
  },
  beginner: {
    height: 170,
    width: 126
  },
  card1: {
    position: "absolute",
    top: 10,
    left: 0,
    height: 160,
    width: 126,
    shadowColor: "rgba(176,176,176,0.2)",
    shadowOffset: {
      height: 32,
      width: 0
    },
    shadowRadius: 64,
    shadowOpacity: 1
  },
  previewBackground: {
    height: 160,
    width: 126
  },
  rectangle3: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(45,37,153,1)",
    flex: 1
  },
  group2: {
    height: 870,
    width: 231,
    marginTop: -372,
    marginLeft: -62
  },
  femaleHand1: {
    height: 435,
    width: 100,
    transform: [
      {
        rotate: "174.00deg"
      }
    ],
    marginTop: 5,
    marginLeft: 24
  },
  fill15: {
    position: "absolute",
    height: 51,
    width: 19,
    top: 3,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group7: {
    position: "absolute",
    top: 133,
    left: 16,
    height: 302,
    width: 77
  },
  clip6: {
    position: "absolute",
    height: 302,
    width: 77,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip6Stack: {
    width: 77,
    height: 302
  },
  group10: {
    position: "absolute",
    top: 113,
    left: 6,
    height: 321,
    width: 82
  },
  clip9: {
    position: "absolute",
    height: 321,
    width: 82,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill83: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip9Stack: {
    width: 82,
    height: 321
  },
  fill112: {
    position: "absolute",
    height: 59,
    width: 29,
    top: 64,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill151: {
    position: "absolute",
    height: 58,
    width: 22,
    top: 58,
    left: 59,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill172: {
    position: "absolute",
    height: 8,
    width: 22,
    top: 7,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill191: {
    position: "absolute",
    height: 106,
    width: 29,
    top: 1,
    left: 38,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill211: {
    position: "absolute",
    height: 58,
    width: 22,
    top: 64,
    left: 78,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill231: {
    position: "absolute",
    height: 38,
    width: 13,
    top: 64,
    left: 78,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill251: {
    position: "absolute",
    height: 72,
    width: 19,
    top: 1,
    left: 40,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill271: {
    position: "absolute",
    height: 21,
    width: 16,
    top: 5,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill291: {
    position: "absolute",
    height: 21,
    width: 15,
    top: 0,
    left: 48,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke31: {
    position: "absolute",
    height: 25,
    width: 77,
    top: 164,
    left: 25,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke33: {
    position: "absolute",
    height: 27,
    width: 78,
    top: 181,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill15Stack: {
    width: 102,
    height: 435
  },
  maleHand: {
    height: 402,
    width: 107,
    transform: [
      {
        rotate: "-7.00deg"
      }
    ],
    marginTop: 23,
    marginLeft: 99
  },
  group3: {
    position: "absolute",
    top: 25,
    left: 0,
    height: 78,
    width: 39
  },
  clip2: {
    position: "absolute",
    height: 78,
    width: 39,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill14: {
    position: "absolute",
    height: 62,
    width: 50,
    top: 269,
    left: 85,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip2Stack: {
    width: 39,
    height: 78
  },
  fill62: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill82: {
    position: "absolute",
    height: 380,
    width: 87,
    top: 22,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill10: {
    position: "absolute",
    height: 60,
    width: 23,
    top: 5,
    left: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill12: {
    position: "absolute",
    height: 287,
    width: 102,
    top: 0,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group16: {
    position: "absolute",
    top: 0,
    left: 41,
    height: 62,
    width: 24
  },
  clip15: {
    position: "absolute",
    height: 62,
    width: 23,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill141: {
    position: "absolute",
    height: 15,
    width: 12,
    top: 15,
    left: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip15Stack: {
    width: 23,
    height: 62
  },
  group19: {
    position: "absolute",
    top: 0,
    left: 41,
    height: 51,
    width: 14
  },
  clip18: {
    position: "absolute",
    height: 51,
    width: 14,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill171: {
    position: "absolute",
    height: 51,
    width: 14,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip18Stack: {
    width: 14,
    height: 51
  },
  fill201: {
    position: "absolute",
    height: 61,
    width: 23,
    top: 2,
    left: 63,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill221: {
    position: "absolute",
    height: 51,
    width: 14,
    top: 2,
    left: 63,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill241: {
    position: "absolute",
    height: 61,
    width: 23,
    top: 7,
    left: 83,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill261: {
    position: "absolute",
    height: 51,
    width: 14,
    top: 7,
    left: 83,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke28: {
    position: "absolute",
    height: 9,
    width: 8,
    top: 123,
    left: 72,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke301: {
    position: "absolute",
    height: 10,
    width: 5,
    top: 113,
    left: 50,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke321: {
    position: "absolute",
    height: 11,
    width: 5,
    top: 133,
    left: 60,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke34: {
    position: "absolute",
    height: 11,
    width: 5,
    top: 112,
    left: 81,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke36: {
    position: "absolute",
    height: 11,
    width: 5,
    top: 182,
    left: 73,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke38: {
    position: "absolute",
    height: 11,
    width: 5,
    top: 247,
    left: 67,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke40: {
    position: "absolute",
    height: 10,
    width: 6,
    top: 207,
    left: 76,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke42: {
    position: "absolute",
    height: 11,
    width: 5,
    top: 194,
    left: 86,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke44: {
    position: "absolute",
    height: 10,
    width: 5,
    top: 158,
    left: 65,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke46: {
    position: "absolute",
    height: 10,
    width: 5,
    top: 195,
    left: 59,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke48: {
    position: "absolute",
    height: 10,
    width: 5,
    top: 239,
    left: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke50: {
    position: "absolute",
    height: 11,
    width: 4,
    top: 221,
    left: 65,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke52: {
    position: "absolute",
    height: 9,
    width: 8,
    top: 142,
    left: 44,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke54: {
    position: "absolute",
    height: 9,
    width: 8,
    top: 131,
    left: 34,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke56: {
    position: "absolute",
    height: 10,
    width: 6,
    top: 177,
    left: 48,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke58: {
    position: "absolute",
    height: 10,
    width: 7,
    top: 200,
    left: 42,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke60: {
    position: "absolute",
    height: 9,
    width: 8,
    top: 158,
    left: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke62: {
    position: "absolute",
    height: 9,
    width: 8,
    top: 219,
    left: 44,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke64: {
    position: "absolute",
    height: 9,
    width: 8,
    top: 223,
    left: 28,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke66: {
    position: "absolute",
    height: 7,
    width: 10,
    top: 159,
    left: 30,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke68: {
    position: "absolute",
    height: 10,
    width: 7,
    top: 144,
    left: 78,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke70: {
    position: "absolute",
    height: 10,
    width: 7,
    top: 169,
    left: 80,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke72: {
    position: "absolute",
    height: 10,
    width: 7,
    top: 230,
    left: 80,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group3Stack: {
    width: 107,
    height: 402
  },
  play2: {
    position: "absolute",
    top: 61,
    left: 39,
    height: 46,
    width: 48,
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rectangleCopy32: {
    height: 46,
    width: 48,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  path17Copy2: {
    height: 11,
    width: 27,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    marginTop: 19,
    marginLeft: 11
  },
  entry4: {
    position: "absolute",
    top: 128,
    left: 23,
    height: 25,
    width: 81
  },
  rectangleCopy24: {
    height: 23,
    width: 80,
    borderWidth: 0.9,
    borderColor: "rgba(238,240,246,1)",
    borderRadius: 22.5,
    backgroundColor: "rgba(246,247,251,1)",
    flexDirection: "row",
    marginTop: 1
  },
  entry5: {
    backgroundColor: "transparent",
    color: "rgba(252,189,17,1)",
    fontSize: 10,
    fontFamily: "rubik-700",
    marginTop: 2
  },
  style2: {
    backgroundColor: "transparent",
    color: "rgba(252,189,17,1)",
    fontSize: 12,
    fontFamily: "rubik-700",
    marginLeft: 2,
    marginTop: 1
  },
  coin2: {
    height: 15,
    width: 17,
    marginLeft: 8
  },
  fill16: {
    position: "absolute",
    height: 9,
    width: 30,
    top: 300,
    left: 55,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill43: {
    position: "absolute",
    height: 13,
    width: 14,
    top: 1,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill63: {
    position: "absolute",
    height: 12,
    width: 13,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill84: {
    position: "absolute",
    height: 9,
    width: 11,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill16Stack: {
    width: 16,
    height: 15
  },
  entry5Row: {
    height: 15,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 12,
    marginTop: 4
  },
  status2: {
    position: "absolute",
    top: 0,
    left: 22,
    height: 26,
    width: 81
  },
  rectangleCopy25: {
    height: 26,
    width: 81,
    borderWidth: 2,
    borderColor: "rgba(238,240,246,1)",
    borderRadius: 25,
    backgroundColor: "rgba(161,105,224,1)"
  },
  beginner1: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    fontFamily: "rubik-700",
    marginTop: 5,
    marginLeft: 12
  },
  card1Stack: {
    width: 126,
    height: 170
  },
  amator: {
    height: 170,
    width: 126,
    marginLeft: 11
  },
  menuTypeCopy1: {
    position: "absolute",
    top: 10,
    left: 0,
    height: 160,
    width: 126,
    shadowColor: "rgba(176,176,176,0.2)",
    shadowOffset: {
      height: 32,
      width: 0
    },
    shadowRadius: 64,
    shadowOpacity: 1
  },
  rectangle2: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(251,195,153,1)",
    flex: 1
  },
  femaleHand: {
    height: 331,
    width: 134,
    marginTop: -194,
    marginLeft: -12
  },
  fill31: {
    position: "absolute",
    height: 51,
    width: 19,
    top: 3,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill51: {
    position: "absolute",
    height: 41,
    width: 73,
    top: 270,
    left: 44,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill71: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill91: {
    position: "absolute",
    height: 58,
    width: 19,
    top: 237,
    left: 61,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group13: {
    position: "absolute",
    top: 269,
    left: 47,
    height: 62,
    width: 88
  },
  clip12: {
    position: "absolute",
    height: 62,
    width: 88,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill111: {
    position: "absolute",
    height: 211,
    width: 223,
    top: 67,
    left: 53,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip12Stack: {
    width: 88,
    height: 62
  },
  fill20: {
    position: "absolute",
    height: 65,
    width: 89,
    top: 251,
    left: 45,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill22: {
    position: "absolute",
    height: 44,
    width: 85,
    top: 224,
    left: 38,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill24: {
    position: "absolute",
    height: 18,
    width: 59,
    top: 224,
    left: 64,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill26: {
    position: "absolute",
    height: 19,
    width: 19,
    top: 229,
    left: 104,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill28: {
    position: "absolute",
    height: 17,
    width: 13,
    top: 251,
    left: 121,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke30: {
    position: "absolute",
    height: 26,
    width: 72,
    top: 214,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke32: {
    position: "absolute",
    height: 28,
    width: 73,
    top: 194,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill12Stack: {
    width: 135,
    height: 331,
    marginLeft: -1
  },
  entry2: {
    position: "absolute",
    top: 128,
    left: 19,
    height: 25,
    width: 88
  },
  rectangleCopy22: {
    height: 23,
    width: 87,
    borderWidth: 0.9,
    borderColor: "rgba(238,240,246,1)",
    borderRadius: 22.5,
    backgroundColor: "rgba(246,247,251,1)",
    flexDirection: "row",
    marginTop: 1
  },
  entry3: {
    backgroundColor: "transparent",
    color: "rgba(252,189,17,1)",
    fontSize: 10,
    fontFamily: "rubik-700",
    marginTop: 2
  },
  style1: {
    backgroundColor: "transparent",
    color: "rgba(252,189,17,1)",
    fontSize: 12,
    fontFamily: "rubik-700",
    marginLeft: 2,
    marginTop: 1
  },
  coin1: {
    height: 15,
    width: 17,
    marginLeft: 7
  },
  fill13: {
    position: "absolute",
    height: 51,
    width: 19,
    top: 3,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill41: {
    position: "absolute",
    height: 17,
    width: 29,
    top: 0,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill61: {
    position: "absolute",
    height: 12,
    width: 13,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill81: {
    position: "absolute",
    height: 9,
    width: 11,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill13Stack: {
    width: 16,
    height: 15
  },
  entry3Row: {
    height: 15,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 12,
    marginTop: 4
  },
  play1: {
    position: "absolute",
    top: 61,
    left: 38,
    height: 46,
    width: 48,
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rectangleCopy31: {
    height: 46,
    width: 48,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  path17Copy1: {
    height: 11,
    width: 27,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    marginTop: 19,
    marginLeft: 11
  },
  status1: {
    position: "absolute",
    top: 0,
    left: 23,
    height: 26,
    width: 80
  },
  rectangleCopy23: {
    height: 26,
    width: 80,
    borderWidth: 2,
    borderColor: "rgba(238,240,246,1)",
    borderRadius: 25,
    backgroundColor: "rgba(247,206,72,1)"
  },
  amator1: {
    backgroundColor: "transparent",
    color: "rgba(74,100,149,1)",
    fontSize: 13,
    fontFamily: "rubik-700",
    marginTop: 5,
    marginLeft: 16
  },
  menuTypeCopy1Stack: {
    width: 126,
    height: 170
  },
  advace: {
    height: 170,
    width: 126,
    marginLeft: 12
  },
  menuTypeCopy: {
    position: "absolute",
    top: 10,
    left: 0,
    height: 160,
    width: 126,
    shadowColor: "rgba(176,176,176,0.2)",
    shadowOffset: {
      height: 32,
      width: 0
    },
    shadowRadius: 64,
    shadowOpacity: 1
  },
  card: {
    height: 160,
    width: 126
  },
  rectangle1: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(236,96,81,1)",
    flex: 1
  },
  group187: {
    height: 218,
    width: 189,
    marginLeft: -35
  },
  group43: {
    position: "absolute",
    top: 39,
    left: 0,
    height: 177,
    width: 181
  },
  fill3: {
    position: "absolute",
    height: 18,
    width: 7,
    top: 31,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill5: {
    position: "absolute",
    height: 8,
    width: 7,
    top: 31,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill3Stack: {
    width: 37,
    height: 49,
    marginTop: 47
  },
  fill7: {
    position: "absolute",
    height: 55,
    width: 30,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill9: {
    position: "absolute",
    height: 42,
    width: 23,
    top: 13,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill11: {
    position: "absolute",
    height: 15,
    width: 16,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill21: {
    position: "absolute",
    height: 42,
    width: 17,
    top: 1,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill23: {
    position: "absolute",
    height: 42,
    width: 17,
    top: 1,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill25: {
    position: "absolute",
    height: 16,
    width: 10,
    top: 0,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill27: {
    position: "absolute",
    height: 16,
    width: 10,
    top: 0,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill29: {
    position: "absolute",
    height: 42,
    width: 23,
    top: 13,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill7Stack: {
    width: 30,
    height: 55,
    marginLeft: 18
  },
  fill3StackRow: {
    height: 96,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 73,
    marginRight: 23
  },
  fill1: {
    height: 15,
    width: 180,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 65
  },
  group92: {
    position: "absolute",
    top: 11,
    left: 61,
    height: 90,
    width: 82
  },
  group46: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip45: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip45Stack: {
    width: 81,
    height: 89
  },
  group49: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip48: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip48Stack: {
    width: 81,
    height: 89
  },
  group52: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip51: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill50: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip51Stack: {
    width: 81,
    height: 89
  },
  group55: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip54: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip54Stack: {
    width: 81,
    height: 89
  },
  group58: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip57: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip57Stack: {
    width: 81,
    height: 89
  },
  group61: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip60: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip60Stack: {
    width: 81,
    height: 89
  },
  group64: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  group67: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip66: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip66Stack: {
    width: 81,
    height: 89
  },
  group70: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip69: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip69Stack: {
    width: 81,
    height: 89
  },
  clip72: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip72Stack: {
    width: 81,
    height: 89
  },
  group76: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip75: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip75Stack: {
    width: 81,
    height: 89
  },
  group79: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip78: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path1: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip78Stack: {
    width: 81,
    height: 89
  },
  group82: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip81: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill80: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip81Stack: {
    width: 81,
    height: 89
  },
  group85: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip84: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip84Stack: {
    width: 81,
    height: 89
  },
  group88: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip87: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip87Stack: {
    width: 81,
    height: 89
  },
  group91: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 90,
    width: 82
  },
  clip90: {
    position: "absolute",
    height: 89,
    width: 81,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill89: {
    position: "absolute",
    height: 304,
    width: 69,
    top: 17,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip90Stack: {
    width: 81,
    height: 89
  },
  group46Stack: {
    width: 82,
    height: 90
  },
  group186: {
    position: "absolute",
    top: 0,
    left: 18,
    height: 210,
    width: 171
  },
  path5: {
    position: "absolute",
    height: 16,
    width: 12,
    top: 15,
    left: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path6: {
    position: "absolute",
    height: 123,
    width: 149,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-30.00deg"
      }
    ]
  },
  fill137Stack: {
    width: 33,
    height: 31,
    marginTop: 22
  },
  fill99: {
    position: "absolute",
    height: 9,
    width: 20,
    top: 22,
    left: 21,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill99Stack: {
    width: 50,
    height: 32
  },
  fill99StackColumn: {
    width: 50,
    marginLeft: 1,
    marginBottom: 14
  },
  fill137StackRow: {
    height: 53,
    flexDirection: "row"
  },
  path2: {
    position: "absolute",
    height: 40,
    width: 20,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill127StackRow: {
    height: 52,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 3,
    marginRight: 11
  },
  fill137StackRowColumn: {
    width: 84,
    marginBottom: 7
  },
  group107: {
    position: "absolute",
    top: 0,
    left: 5,
    height: 39,
    width: 35
  },
  fill103Stack: {
    width: 34,
    height: 38,
    marginTop: 1
  },
  group112: {
    position: "absolute",
    top: 0,
    left: 5,
    height: 39,
    width: 35
  },
  fill108Stack: {
    width: 34,
    height: 38,
    marginTop: 1
  },
  fill93Stack: {
    top: 0,
    left: 0,
    width: 40,
    height: 43,
    position: "absolute"
  },
  path3: {
    position: "absolute",
    height: 42,
    width: 16,
    top: 32,
    left: 42,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group151: {
    position: "absolute",
    top: 0,
    left: 42,
    height: 33,
    width: 33
  },
  clip150: {
    position: "absolute",
    height: 32,
    width: 33,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill149: {
    position: "absolute",
    height: 32,
    width: 33,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip150Stack: {
    width: 33,
    height: 32
  },
  path7: {
    position: "absolute",
    height: 15,
    width: 13,
    top: 14,
    left: 40,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path8: {
    position: "absolute",
    height: 8,
    width: 10,
    top: 14,
    left: 52,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill93StackStack: {
    top: 0,
    left: 0,
    width: 85,
    height: 104,
    position: "absolute"
  },
  fill97: {
    position: "absolute",
    height: 4,
    width: 7,
    top: 44,
    left: 21,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill93StackStackStack: {
    width: 85,
    height: 104,
    marginTop: 10
  },
  fill137StackRowColumnRow: {
    height: 114,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 1,
    marginRight: 1
  },
  path4: {
    height: 8,
    width: 7,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-14.00deg"
      }
    ],
    marginTop: 13,
    marginLeft: 114
  },
  fill168: {
    position: "absolute",
    height: 11,
    width: 13,
    top: 20,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path9: {
    position: "absolute",
    height: 35,
    width: 18,
    top: 28,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill174: {
    position: "absolute",
    height: 41,
    width: 11,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill180: {
    position: "absolute",
    height: 11,
    width: 13,
    top: 21,
    left: 100,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path10: {
    position: "absolute",
    height: 35,
    width: 18,
    top: 30,
    left: 93,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path4Stack: {
    width: 113,
    height: 65,
    marginTop: 12,
    marginLeft: 14
  },
  fill164Stack: {
    width: 41,
    height: 15
  },
  fill176Stack: {
    width: 41,
    height: 15,
    marginLeft: 57,
    marginTop: 2
  },
  fill164StackRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 1,
    marginRight: 31
  },
  group43Stack: {
    width: 189,
    height: 216
  },
  entry: {
    position: "absolute",
    top: 128,
    left: 18,
    height: 25,
    width: 88
  },
  rectangleCopy2: {
    height: 23,
    width: 87,
    borderWidth: 0.9,
    borderColor: "rgba(238,240,246,1)",
    borderRadius: 22.5,
    backgroundColor: "rgba(246,247,251,1)",
    flexDirection: "row",
    marginTop: 1
  },
  entry1: {
    backgroundColor: "transparent",
    color: "rgba(252,189,17,1)",
    fontSize: 10,
    fontFamily: "rubik-700",
    marginTop: 2
  },
  style: {
    backgroundColor: "transparent",
    color: "rgba(252,189,17,1)",
    fontSize: 12,
    fontFamily: "rubik-700",
    marginLeft: 2,
    marginTop: 1
  },
  coin: {
    height: 15,
    width: 17,
    marginLeft: 7
  },
  fill4: {
    position: "absolute",
    height: 13,
    width: 14,
    top: 1,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill6: {
    position: "absolute",
    height: 12,
    width: 13,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill8: {
    position: "absolute",
    height: 9,
    width: 11,
    top: 2,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill11Stack: {
    width: 16,
    height: 15
  },
  entry1Row: {
    height: 15,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 12,
    marginTop: 4
  },
  play: {
    position: "absolute",
    top: 61,
    left: 38,
    height: 46,
    width: 48,
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rectangleCopy3: {
    height: 46,
    width: 48,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    borderWidth: 1,
    borderColor: "rgba(230,233,241,1)",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,1)"
  },
  path17Copy: {
    height: 11,
    width: 27,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    marginTop: 19,
    marginLeft: 11
  },
  status: {
    position: "absolute",
    top: 0,
    left: 23,
    height: 26,
    width: 81
  },
  rectangleCopy21: {
    height: 26,
    width: 81,
    borderWidth: 2,
    borderColor: "rgba(238,240,246,1)",
    borderRadius: 25,
    backgroundColor: "rgba(94,205,144,1)"
  },
  advance: {
    backgroundColor: "transparent",
    color: "rgba(74,100,149,1)",
    fontSize: 13,
    fontFamily: "rubik-700",
    marginTop: 5,
    marginLeft: 12
  },
  menuTypeCopyStack: {
    width: 126,
    height: 170
  },
  beginnerRow: {
    height: 170,
    flexDirection: "row",
    marginTop: 14,
    marginRight: -1
  },
  sparring: {
    position: "absolute",
    top: 102,
    left: 0,
    height: 211,
    width: 627
  },
  femaleHand2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 348,
    width: 80,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ]
  },
  group71: {
    position: "absolute",
    top: 106,
    left: 13,
    height: 241,
    width: 62
  },
  clip61: {
    position: "absolute",
    height: 241,
    width: 62,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip61Stack: {
    width: 62,
    height: 241
  },
  group101: {
    position: "absolute",
    top: 91,
    left: 5,
    height: 257,
    width: 66
  },
  clip91: {
    position: "absolute",
    height: 257,
    width: 65,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill88: {
    position: "absolute",
    height: 257,
    width: 65,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip91Stack: {
    width: 65,
    height: 257
  },
  fill133: {
    position: "absolute",
    height: 78,
    width: 9,
    top: 4,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill153: {
    position: "absolute",
    height: 46,
    width: 18,
    top: 46,
    left: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill173: {
    position: "absolute",
    height: 32,
    width: 12,
    top: 46,
    left: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill192: {
    position: "absolute",
    height: 85,
    width: 23,
    top: 0,
    left: 31,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill212: {
    position: "absolute",
    height: 46,
    width: 18,
    top: 51,
    left: 62,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill232: {
    position: "absolute",
    height: 30,
    width: 10,
    top: 51,
    left: 62,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill252: {
    position: "absolute",
    height: 57,
    width: 15,
    top: 0,
    left: 32,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill272: {
    position: "absolute",
    height: 17,
    width: 13,
    top: 4,
    left: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill292: {
    position: "absolute",
    height: 17,
    width: 12,
    top: 0,
    left: 39,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke311: {
    position: "absolute",
    height: 20,
    width: 62,
    top: 131,
    left: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke331: {
    position: "absolute",
    height: 21,
    width: 63,
    top: 144,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill112Stack: {
    width: 82,
    height: 348
  },
  blood: {
    position: "absolute",
    top: 86,
    left: 65,
    height: 179,
    width: 195
  },
  path4Copy: {
    position: "absolute",
    height: 5,
    width: 4,
    top: 90,
    left: 41,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-157.00deg"
      }
    ]
  },
  path6Stack: {
    width: 149,
    height: 123,
    marginTop: 7,
    marginLeft: 23
  },
  maleHand2: {
    position: "absolute",
    top: 8,
    left: 271,
    height: 321,
    width: 85,
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  group32: {
    position: "absolute",
    top: 20,
    left: 0,
    height: 62,
    width: 31
  },
  clip22: {
    position: "absolute",
    height: 62,
    width: 31,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip22Stack: {
    width: 31,
    height: 62
  },
  fill67: {
    position: "absolute",
    height: 256,
    width: 66,
    top: 65,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill102: {
    position: "absolute",
    height: 48,
    width: 19,
    top: 4,
    left: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group161: {
    position: "absolute",
    top: 0,
    left: 33,
    height: 50,
    width: 19
  },
  clip151: {
    position: "absolute",
    height: 49,
    width: 19,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill143: {
    position: "absolute",
    height: 49,
    width: 19,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip151Stack: {
    width: 19,
    height: 49
  },
  group191: {
    position: "absolute",
    top: 0,
    left: 33,
    height: 41,
    width: 11
  },
  clip181: {
    position: "absolute",
    height: 41,
    width: 11,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip181Stack: {
    width: 11,
    height: 41
  },
  fill204: {
    position: "absolute",
    height: 49,
    width: 19,
    top: 1,
    left: 50,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill223: {
    position: "absolute",
    height: 41,
    width: 11,
    top: 1,
    left: 50,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill243: {
    position: "absolute",
    height: 49,
    width: 19,
    top: 6,
    left: 66,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill262: {
    position: "absolute",
    height: 41,
    width: 11,
    top: 6,
    left: 66,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke282: {
    position: "absolute",
    height: 8,
    width: 6,
    top: 98,
    left: 57,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke303: {
    position: "absolute",
    height: 8,
    width: 4,
    top: 91,
    left: 40,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke323: {
    position: "absolute",
    height: 8,
    width: 4,
    top: 106,
    left: 48,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke342: {
    position: "absolute",
    height: 8,
    width: 4,
    top: 90,
    left: 65,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke362: {
    position: "absolute",
    height: 8,
    width: 4,
    top: 145,
    left: 58,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke382: {
    position: "absolute",
    height: 8,
    width: 4,
    top: 198,
    left: 54,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke402: {
    position: "absolute",
    height: 8,
    width: 5,
    top: 165,
    left: 61,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke422: {
    position: "absolute",
    height: 8,
    width: 4,
    top: 155,
    left: 69,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke442: {
    position: "absolute",
    height: 8,
    width: 4,
    top: 126,
    left: 52,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke462: {
    position: "absolute",
    height: 8,
    width: 4,
    top: 156,
    left: 47,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke482: {
    position: "absolute",
    height: 8,
    width: 4,
    top: 191,
    left: 38,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke502: {
    position: "absolute",
    height: 8,
    width: 3,
    top: 177,
    left: 52,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke522: {
    position: "absolute",
    height: 7,
    width: 6,
    top: 113,
    left: 35,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke542: {
    position: "absolute",
    height: 7,
    width: 6,
    top: 105,
    left: 27,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke562: {
    position: "absolute",
    height: 8,
    width: 5,
    top: 141,
    left: 38,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke582: {
    position: "absolute",
    height: 8,
    width: 6,
    top: 160,
    left: 33,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke602: {
    position: "absolute",
    height: 7,
    width: 6,
    top: 126,
    left: 38,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke622: {
    position: "absolute",
    height: 7,
    width: 6,
    top: 175,
    left: 35,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke642: {
    position: "absolute",
    height: 7,
    width: 6,
    top: 178,
    left: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke662: {
    position: "absolute",
    height: 6,
    width: 8,
    top: 127,
    left: 24,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke682: {
    position: "absolute",
    height: 8,
    width: 6,
    top: 116,
    left: 63,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke702: {
    position: "absolute",
    height: 8,
    width: 6,
    top: 135,
    left: 64,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke722: {
    position: "absolute",
    height: 8,
    width: 6,
    top: 184,
    left: 64,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group32Stack: {
    width: 85,
    height: 321
  },
  fill111Stack: {
    width: 356,
    height: 348,
    marginTop: -67,
    marginLeft: 144
  },
  backgroundStack: {
    width: 627,
    height: 886,
    marginLeft: -124
  }
});

export default DailyLogin1;
