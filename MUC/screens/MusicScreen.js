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

export default MusicScreen = props => {
  const [music, onChange] = React.useState("");
  const [showWeb, onGoPress] = React.useState(false);
  const [uriString, onChangeUriString] = React.useState(
    "https://www.youtube.com/results?search_query="
  );
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
            placeholder="what song?"
            value={music}
          />
          <TouchableOpacity
            onPress={() =>
              onPressGo(onGoPress, music, uriString, onChangeUriString)
            }
          >
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
                uri: uriString
              }}
            />
          </View>
        )}
      </View>
    </>
  );
};

const onPressGo = (onGoPress, music, uriString, onChangeUriString) => {
  onGoPress(true);
  Keyboard.dismiss();
  const words = music.split(" ");
  changeURI(words, uriString, onChangeUriString);
};

const changeURI = (musicArr, uriString, onChangeUriString) => {
  let newUri = uriString;
  for (let i = 0; i < musicArr.length - 1; i++) {
    newUri = newUri + "+" + musicArr[i];
  }
  newUri = newUri + "+" + musicArr[musicArr.length - 1];
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
    marginLeft: 20
  },
  goButton: {
    backgroundColor: "#E5E5E5",
    padding: 10,
    borderRadius: 20,
    marginLeft: 10
  }
});
