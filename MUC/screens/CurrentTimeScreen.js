import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

export default CurrentTimeScreen = props => {
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Text style={styles.backButton}>{"<"}Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{ height: 600, width: 300, overflow: "hidden" }}>
          <WebView
            source={{ uri: "https://www.google.com/search?q=current+time" }}
          />
        </View>
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
