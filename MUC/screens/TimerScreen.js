import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default TimerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Timer Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
