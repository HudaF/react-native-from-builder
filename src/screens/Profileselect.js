import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import CupertinoHeaderWithAddButton from "../components/CupertinoHeaderWithAddButton";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";

function Profileselect(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Module")}
        style={styles.button2}
      >
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}>
            <Text style={styles.chunnu}>Chunnu</Text>
          </View>
          <Image
            source={require("../assets/images/23737608-removebg-preview.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Module")}
        style={styles.button}
      >
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.hudaFeroz}>Huda Feroz</Text>
          </View>
          <Image
            source={require("../assets/images/avatar_girl-removebg-preview1.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
      </TouchableOpacity>
      <View style={styles.rect}></View>
      <CupertinoHeaderWithAddButton
        style={styles.cupertinoHeaderWithAddButton}
      ></CupertinoHeaderWithAddButton>
      <View style={styles.group}>
        <View style={styles.rect4Stack}>
          <View style={styles.rect4}>
            <Text style={styles.addProfile}>Add Profile</Text>
          </View>
          <Svg viewBox="0 0 66.25 66.25" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(237,199,140,1)"
              cx={33}
              cy={33}
              rx={33}
              ry={33}
            ></Ellipse>
          </Svg>
          <Icon name="reddit" style={styles.icon}></Icon>
        </View>
      </View>
      <Text style={styles.selectYourProfile}>Select Your Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button2: {
    width: 280,
    height: 126,
    marginTop: 280,
    marginLeft: 40
  },
  rect3: {
    top: 46,
    width: 280,
    height: 80,
    position: "absolute",
    backgroundColor: "rgba(177,234,253,1)",
    borderRadius: 20,
    left: 0
  },
  chunnu: {
    fontFamily: "Poppins-Bold",
    color: "rgba(3,48,140,1)",
    fontSize: 32,
    marginTop: 31,
    marginLeft: 73
  },
  image1: {
    top: 0,
    left: 94,
    width: 92,
    height: 92,
    position: "absolute"
  },
  rect3Stack: {
    width: 280,
    height: 126
  },
  button: {
    width: 280,
    height: 124,
    marginTop: -258,
    marginLeft: 40
  },
  rect2: {
    top: 44,
    width: 280,
    height: 80,
    position: "absolute",
    backgroundColor: "rgba(177,234,253,1)",
    borderRadius: 20,
    left: 0
  },
  hudaFeroz: {
    fontFamily: "Poppins-Bold",
    color: "rgba(3,48,140,1)",
    fontSize: 32,
    marginTop: 31,
    marginLeft: 50
  },
  image: {
    top: 0,
    left: 96,
    width: 88,
    height: 88,
    position: "absolute"
  },
  rect2Stack: {
    width: 280,
    height: 124
  },
  rect: {
    width: 360,
    height: 23,
    backgroundColor: "rgba(255,241,222,1)",
    marginTop: -272
  },
  cupertinoHeaderWithAddButton: {
    height: 44,
    width: 360
  },
  group: {
    width: 280,
    height: 115,
    marginTop: 358,
    marginLeft: 40
  },
  rect4: {
    top: 36,
    width: 280,
    height: 80,
    position: "absolute",
    backgroundColor: "rgba(177,234,253,1)",
    borderRadius: 20,
    left: 0
  },
  addProfile: {
    fontFamily: "Poppins-Bold",
    color: "rgba(3,48,140,1)",
    fontSize: 32,
    marginTop: 29,
    marginLeft: 51
  },
  ellipse: {
    top: 0,
    width: 66,
    height: 66,
    position: "absolute",
    left: 107
  },
  icon: {
    top: 11,
    position: "absolute",
    color: "rgba(3,48,140,1)",
    fontSize: 46,
    left: 117
  },
  rect4Stack: {
    width: 280,
    height: 116
  },
  selectYourProfile: {
    fontFamily: "Poppins-Bold",
    color: "rgba(3,48,140,1)",
    fontSize: 32,
    marginTop: -440,
    marginLeft: 32,
    marginRight: 32
  }
});

export default Profileselect;
