import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

function CupertinoHeaderWithBackground(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Go Back")}
        style={styles.button}
      >
        <TouchableOpacity style={styles.leftIconButton}>
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.leftIcon}
          ></IoniconsIcon>
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.urdu}>
          URDU
        </Text>
      </View>
      <View style={styles.rightWrapper}></View>
      <FeatherIcon name="menu" style={styles.icon}></FeatherIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(255,191,8,1)",
    paddingRight: 8,
    paddingLeft: 8
  },
  button: {
    flex: 0.32,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#FFFFFF",
    fontSize: 32
  },
  leftText: {
    alignSelf: "center",
    fontSize: 15,
    paddingLeft: 5,
    color: "#FFFFFF",
    fontFamily: "poppins-regular"
  },
  textWrapper: {
    flex: 0.36,
    alignItems: "center",
    justifyContent: "center"
  },
  urdu: {
    fontSize: 25,
    fontFamily: "poppins-regular",
    lineHeight: 30,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  rightWrapper: {
    flex: 0.32,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  icon: {
    top: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    right: 14
  }
});

export default CupertinoHeaderWithBackground;
