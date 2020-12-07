import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import CupertinoButtonWarning1 from "../components/CupertinoButtonWarning1";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";

function Module(props) {
  return (
    <View style={styles.container}>
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
        <Image
          source={require("../assets/images/image_22.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image8: {
    top: 92,
    left: 190,
    width: 215,
    height: 207,
    position: "absolute"
  },
  button3: {
    top: 0,
    left: 65,
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
    top: 92,
    left: 0,
    width: 215,
    height: 207,
    position: "absolute"
  },
  image8Stack: {
    width: 405,
    height: 300,
    marginTop: 425,
    marginLeft: -21
  },
  image6: {
    top: 0,
    left: 193,
    width: 215,
    height: 207,
    position: "absolute"
  },
  button4: {
    top: 200,
    left: 69,
    width: 286,
    height: 139,
    position: "absolute"
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
  },
  image5: {
    top: 0,
    left: 0,
    width: 215,
    height: 207,
    position: "absolute"
  },
  image6Stack: {
    width: 408,
    height: 339,
    marginTop: -768,
    marginLeft: -24
  },
  button2: {
    width: 286,
    height: 98,
    marginLeft: 45
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
  }
});

export default Module;
