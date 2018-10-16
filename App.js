import React, { Component } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Text,
  CameraRoll,
  Button,
  PermissionsAndroid,
  Platform,
  Image
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  state = { photos: [] };

  checkPlatform = async () => {
    if (Platform.OS === "ios") {
      this.getPhotos();
    }
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: "Alert",
            message: "This app would like to access your camera roll."
          }
        );
        console.log("granted: ", granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this.getPhotos();
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  getPhotos = async () => {
    try {
      const data = await CameraRoll.getPhotos({
        first: 10,
        assetType: "All"
      });
      console.log("data: ", data);
      this.setState({ photos: data.edges });
    } catch (err) {
      console.log("error:", err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Camera Roll Demo</Text>
        <Button onPress={this.checkPlatform} title="Get Photos" />
        <ScrollView>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {this.state.photos.map((image, index) => (
              <Image
                source={{
                  uri: image.node.image.uri
                }}
                style={{
                  width: width / 2,
                  height: width / 2
                }}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    flex: 1
  }
});
