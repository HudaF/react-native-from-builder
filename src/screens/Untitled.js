import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <View style={styles.stackFiller}></View>
        <View style={styles.cupertinoButtonWarning1Stack}>
          <CupertinoButtonWarning
            style={styles.cupertinoButtonWarning1}
          ></CupertinoButtonWarning>
          <Text style={styles.wordIdentify1}>Word Identify</Text>
          <Image
            source={require("../assets/images/word_identify_submodule-01.png")}
            resizeMode="cover"
            style={styles.image1}
          ></Image>
          <Text style={styles.flashcardsForWords1}>Flashcards for words</Text>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.group3}>
          <View style={styles.stackFiller}></View>
          <View style={styles.cupertinoButtonWarning2Stack}>
            <CupertinoButtonWarning
              style={styles.cupertinoButtonWarning2}
            ></CupertinoButtonWarning>
            <Text style={styles.objectIdentify1}>Object Identify</Text>
            <Image
              source={require("../assets/images/object_identify_submodule_270-01.png")}
              resizeMode="cover"
              style={styles.image2}
            ></Image>
            <Text style={styles.letterTracing1}>Flashcards for objects</Text>
          </View>
        </View>
      </View>
      <View style={styles.group4}>
        <View style={styles.stackFiller}></View>
        <View style={styles.cupertinoButtonWarning3Stack}>
          <CupertinoButtonWarning
            style={styles.cupertinoButtonWarning3}
          ></CupertinoButtonWarning>
          <Text style={styles.wordTracing1}>Word Tracing</Text>
          <Image
            source={require("../assets/images/angan_submodule_thick-012.png")}
            resizeMode="cover"
            style={styles.image3}
          ></Image>
          <Text style={styles.letterTracing2}>Lets learn word writing</Text>
        </View>
      </View>
      <View style={styles.group5}>
        <View style={styles.stackFiller}></View>
        <View style={styles.cupertinoButtonWarning4Stack}>
          <CupertinoButtonWarning
            style={styles.cupertinoButtonWarning4}
          ></CupertinoButtonWarning>
          <Text style={styles.letterTracing3}>Letter Tracing</Text>
          <Image
            source={require("../assets/images/alif_bay_jeem_submodule_thick-01.png")}
            resizeMode="cover"
            style={styles.image4}
          ></Image>
          <Text style={styles.letterTracing4}>Lets learn letter writing</Text>
        </View>
      </View>
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(208,242,170,1)"
  },
  group1: {
    width: 270,
    height: 78,
    marginTop: 419,
    marginLeft: 44
  },
  stackFiller: {
    flex: 1
  },
  cupertinoButtonWarning1: {
    position: "absolute",
    height: 75,
    bottom: 3,
    left: 0,
    right: 0
  },
  wordIdentify1: {
    position: "absolute",
    fontFamily: "Poppins-SemiBold",
    color: "rgba(74,74,74,1)",
    fontSize: 24,
    left: 78,
    bottom: 32
  },
  image1: {
    left: 1,
    width: 74,
    height: 75,
    position: "absolute",
    bottom: 0
  },
  flashcardsForWords1: {
    left: 78,
    position: "absolute",
    fontFamily: "Poppins-Light",
    color: "rgba(74,74,74,1)",
    fontSize: 15,
    bottom: 13
  },
  cupertinoButtonWarning1Stack: {
    height: 78
  },
  group2: {
    width: 270,
    height: 78,
    marginTop: -175,
    marginLeft: 45
  },
  group3: {
    width: 270,
    height: 78
  },
  cupertinoButtonWarning2: {
    position: "absolute",
    height: 75,
    bottom: 3,
    left: 0,
    right: 0
  },
  objectIdentify1: {
    position: "absolute",
    fontFamily: "Poppins-SemiBold",
    color: "rgba(74,74,74,1)",
    fontSize: 24,
    left: 78,
    bottom: 32
  },
  image2: {
    left: 1,
    width: 74,
    height: 75,
    position: "absolute",
    bottom: 0
  },
  letterTracing1: {
    left: 78,
    position: "absolute",
    fontFamily: "Poppins-Light",
    color: "rgba(74,74,74,1)",
    fontSize: 15,
    bottom: 13
  },
  cupertinoButtonWarning2Stack: {
    height: 78
  },
  group4: {
    width: 270,
    height: 81,
    marginTop: -182,
    marginLeft: 45
  },
  cupertinoButtonWarning3: {
    position: "absolute",
    height: 75,
    bottom: 0,
    left: 0,
    right: 0
  },
  wordTracing1: {
    position: "absolute",
    fontFamily: "Poppins-SemiBold",
    color: "rgba(74,74,74,1)",
    fontSize: 24,
    left: 78,
    bottom: 29
  },
  image3: {
    left: 3,
    width: 80,
    height: 79,
    position: "absolute",
    bottom: 2
  },
  letterTracing2: {
    left: 78,
    position: "absolute",
    fontFamily: "Poppins-Light",
    color: "rgba(74,74,74,1)",
    fontSize: 15,
    bottom: 9
  },
  cupertinoButtonWarning3Stack: {
    height: 81
  },
  group5: {
    width: 278,
    height: 90,
    marginTop: -180,
    marginLeft: 37
  },
  cupertinoButtonWarning4: {
    position: "absolute",
    width: 270,
    height: 75,
    bottom: 9,
    left: 8
  },
  letterTracing3: {
    position: "absolute",
    fontFamily: "Poppins-SemiBold",
    color: "rgba(74,74,74,1)",
    fontSize: 24,
    left: 86,
    bottom: 36
  },
  image4: {
    left: 0,
    width: 90,
    height: 90,
    position: "absolute",
    bottom: 0
  },
  letterTracing4: {
    left: 86,
    position: "absolute",
    fontFamily: "Poppins-Light",
    color: "rgba(74,74,74,1)",
    fontSize: 15,
    bottom: 17
  },
  cupertinoButtonWarning4Stack: {
    width: 278,
    height: 90
  },
  cupertinoHeaderWithBackground1: {
    height: 44,
    marginTop: -186,
    marginLeft: -1
  }
});

export default Untitled;
