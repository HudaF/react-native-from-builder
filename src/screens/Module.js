import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";
import CupertinoButtonWarning1 from "../components/CupertinoButtonWarning1";

function Module(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.image8Stack}>
        <Image
          source={require("../assets/images/image_22.png")}
          resizeMode="contain"
          style={styles.image8}
        ></Image>
        <TouchableOpacity style={styles.button3}>
          <View style={styles.cupertinoButtonDangerStack}>
            <CupertinoButtonDanger
              style={styles.cupertinoButtonDanger}
            ></CupertinoButtonDanger>
            <Image
              source={require("../assets/images/coloring-01.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Text style={styles.coloring}>Coloring</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../assets/images/image_22.png")}
          resizeMode="contain"
          style={styles.image7}
        ></Image>
      </View>
      <View style={styles.image6Stack}>
        <Image
          source={require("../assets/images/image_22.png")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
        <Image
          source={require("../assets/images/image_22.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
        <View style={styles.rect}></View>
      </View>
      <TouchableOpacity style={styles.button2}>
        <View style={styles.cupertinoButtonSuccessStack}>
          <CupertinoButtonSuccess
            style={styles.cupertinoButtonSuccess}
          ></CupertinoButtonSuccess>
          <Image
            source={require("../assets/images/drawing-011.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.drawing}>Drawing</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Submdolue")}
        style={styles.button4}
      >
        <View style={styles.cupertinoButtonWarning1Stack}>
          <CupertinoButtonWarning1
            style={styles.cupertinoButtonWarning1}
          ></CupertinoButtonWarning1>
          <Text style={styles.urdu}>Urdu</Text>
          <Image
            source={require("../assets/images/alif_bay_urdu_module_orange-01.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image8: {
    top: 84,
    left: 190,
    width: 215,
    height: 207,
    position: "absolute"
  },
  button3: {
    top: 0,
    left: 61,
    width: 286,
    height: 98,
    position: "absolute"
  },
  cupertinoButtonDanger: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  image4: {
    top: 0,
    left: 0,
    width: 96,
    height: 96,
    position: "absolute"
  },
  coloring: {
    top: 23,
    position: "absolute",
    fontFamily: "Poppins-Bold",
    color: "rgba(1,45,138,1)",
    fontSize: 38,
    left: 93,
    width: 168,
    height: 58
  },
  cupertinoButtonDangerStack: {
    flex: 1
  },
  image7: {
    top: 84,
    left: 0,
    width: 215,
    height: 207,
    position: "absolute"
  },
  image8Stack: {
    width: 405,
    height: 292,
    marginTop: 428,
    marginLeft: -24
  },
  image6: {
    top: 0,
    left: 193,
    width: 215,
    height: 207,
    position: "absolute"
  },
  image5: {
    top: 0,
    left: 0,
    width: 215,
    height: 207,
    position: "absolute"
  },
  rect: {
    top: 48,
    left: 24,
    width: 360,
    height: 23,
    position: "absolute",
    backgroundColor: "rgba(240,105,82,1)"
  },
  image6Stack: {
    width: 408,
    height: 208,
    marginTop: -768,
    marginLeft: -24
  },
  button2: {
    width: 286,
    height: 98,
    marginTop: 139,
    marginLeft: 37
  },
  cupertinoButtonSuccess: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  image3: {
    top: 0,
    left: 3,
    width: 96,
    height: 96,
    position: "absolute"
  },
  drawing: {
    top: 20,
    position: "absolute",
    fontFamily: "Poppins-Bold",
    color: "rgba(11,128,110,1)",
    fontSize: 38,
    left: 100,
    width: 166,
    height: 58
  },
  cupertinoButtonSuccessStack: {
    flex: 1
  },
  button4: {
    width: 286,
    height: 139,
    marginTop: -237,
    marginLeft: 37
  },
  cupertinoButtonWarning1: {
    height: 98,
    position: "absolute",
    top: 2,
    left: 0,
    right: 0
  },
  urdu: {
    top: 24,
    position: "absolute",
    fontFamily: "Poppins-Bold",
    color: "rgba(243,117,66,1)",
    fontSize: 38,
    left: 118,
    right: 44,
    bottom: 0
  },
  image2: {
    top: 0,
    left: 3,
    width: 113,
    height: 113,
    position: "absolute"
  },
  cupertinoButtonWarning1Stack: {
    flex: 1
  }
});

export default Module;
