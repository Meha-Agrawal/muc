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

export default GeneralSearch = props => {
  const [location, onChange] = React.useState("");
  const [showWeb, onGoPress] = React.useState(false);
  const [uriString, onChangeUriString] = React.useState(
    "https://www.google.com/search?q="
  );
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Text style={styles.backButton}>{"<"}back</Text>
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
            placeholder="search"
            value={location}
          />
          <TouchableOpacity
            onPress={() =>
              onPressGo(onGoPress, location, uriString, onChangeUriString)
            }
          >
            <Text style={styles.goButton}>Go</Text>
          </TouchableOpacity>
        </View>

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
              uri: uriString
            }}
          />
        </View>
      </View>
    </>
  );
};

const onPressGo = (onGoPress, place, uriString, onChangeUriString) => {
  onGoPress(true);
  Keyboard.dismiss();
  const words = place.split(" ");
  changeURI(words, uriString, onChangeUriString);
};

const changeURI = (placeArr, uriString, onChangeUriString) => {
  let newUri = uriString;
  for (let i = 0; i < placeArr.length - 1; i++) {
    newUri = newUri + "+" + placeArr[i];
  }
  newUri = newUri + "+" + placeArr[placeArr.length - 1];
  onChangeUriString(newUri);
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
    marginLeft: 20,
    backgroundColor: "#E5E5E5",
    maxWidth: 60,
    padding: 10,
    borderRadius: 20
  },
  goButton: {
    backgroundColor: "#E5E5E5",
    padding: 10,
    borderRadius: 20,
    marginLeft: 10
  }
});
