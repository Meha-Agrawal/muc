import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default HomeScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Weather")}>
          <Text style={styles.button}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Timer")}>
          <Text style={styles.button}>Timer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.button}>Traffic</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Music</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.button}>Latest News</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Other</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 45,
    marginTop: 45
  },
  button: {
    backgroundColor: "#E5E5E5",
    minWidth: 120,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 25,
    marginLeft: 25,
    textAlign: "center",
    borderRadius: 20
  }
});
