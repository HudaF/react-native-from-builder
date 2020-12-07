import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoHeaderWithSubTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.leftIconButton}>
        <Text style={styles.leftText}>All Files</Text>
      </TouchableOpacity>
      <View style={styles.textWrapper}></View>
      <TouchableOpacity style={styles.rightIconButton}></TouchableOpacity>
      <Icon name="home" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(3,48,140,1)"
  },
  leftIconButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "center",
    paddingLeft: 8,
    paddingRight: 8
  },
  leftText: {
    alignSelf: "center",
    fontSize: 17,
    color: "#007AFF"
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rightIconButton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingLeft: 8,
    paddingRight: 8
  },
  icon: {
    top: 16,
    left: 159,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  }
});

export default CupertinoHeaderWithSubTitle;
