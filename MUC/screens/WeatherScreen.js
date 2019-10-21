import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { WeatherWidget } from "react-native-weather";

export default TimerScreen = props => {
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Text style={styles.backButton}>{"<"}Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <WeatherWidget
          api={"cca00a3a20324409923099cd3bd8d09e"}
          lat={"33.7490"}
          lng={"-84.3880"}
          location={"Atlanta"}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backButton: {
    marginTop: 40,
    marginLeft: 20
  }
});
