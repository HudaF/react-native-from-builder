import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/Aangan_final_logo-01.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Svg viewBox="0 0 192 192" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(74,144,226,1)"
            strokeWidth={2}
            cx={96}
            cy={96}
            rx={95}
            ry={95}
          ></Ellipse>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(98,227,198,1)"
  },
  image: {
    top: 0,
    width: 200,
    height: 200,
    position: "absolute",
    left: 0
  },
  ellipse: {
    top: 10,
    width: 192,
    height: 192,
    position: "absolute",
    left: 4
  },
  imageStack: {
    width: 200,
    height: 202,
    marginTop: 50,
    marginLeft: 80
  }
});

export default Untitled;
