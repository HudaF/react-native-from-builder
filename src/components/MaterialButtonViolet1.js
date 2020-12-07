import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function MaterialButtonViolet1(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(177,234,253,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default MaterialButtonViolet1;
