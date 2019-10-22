import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";
import { WebView } from "react-native-webview";

export default DirectionsScreen = props => {
  const [location, onChange] = React.useState("");
  const [showWeb, onGoPress] = React.useState(false);
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Text style={styles.backButton}>{"<"}Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fullContainer}>
        <View style={styles.container}>
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 20,
              paddingLeft: 20,
              marginRight: 10
            }}
            onChangeText={text => onChange(text)}
            placeholder="where to?"
            value={location}
          />
          <TouchableOpacity onPress={() => onPressGo(onGoPress)}>
            <Text style={styles.goButton}>Go</Text>
          </TouchableOpacity>
        </View>
        {showWeb && (
          <View
            style={{
              marginTop: 10,
              height: 510,
              width: 300,
              overflow: "hidden"
            }}
          >
            <WebView
              source={{
                uri: "https://www.google.com/search?q=maps"
              }}
            />
          </View>
        )}
      </View>
    </>
  );
};

const onPressGo = onGoPress => {
  onGoPress(true);
  Keyboard.dismiss();
};

const styles = StyleSheet.create({
  fullContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  backButton: {
    marginTop: 40,
    marginLeft: 20
  },
  goButton: {
    backgroundColor: "#E5E5E5",
    padding: 10,
    borderRadius: 20,
    marginLeft: 10
  }
});
