import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";
import CupertinoButtonWarning1 from "../components/CupertinoButtonWarning1";

function Module(props) {
  return (
    <View style={styles.container}>
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
      <View style={styles.button3Filler}>
        <View style={styles.button2Stack}>
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
        <Image
          source={require("../assets/images/image_21.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button3: {
    width: 286,
    height: 98,
    marginTop: 469,
    marginLeft: 41
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
  button2: {
    top: 139,
    left: 0,
    width: 286,
    height: 98,
    position: "absolute"
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
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 96
  },
  cupertinoButtonWarning1: {
    height: 98,
    position: "absolute",
    top: 2,
    left: 0,
    right: 0
  },
  urdu: {
    top: 26,
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
  },
  button2Stack: {
    top: 200,
    left: 37,
    position: "absolute",
    right: 37,
    bottom: 203
  },
  image: {
    top: -58,
    width: 410,
    position: "absolute",
    left: -50,
    bottom: 455
  },
  button3Filler: {
    flex: 1
  }
});

export default Module;
