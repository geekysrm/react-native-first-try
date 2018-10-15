import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Button
} from "react-native";

export default class App extends Component {
  state = { username: "", password: "", formData: "" };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  submit = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
      signedIn: true
    };
    this.setState({ formData: JSON.stringify(userData) });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Form demo</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username"
          onChangeText={val => this.onChangeText("username", val)}
          style={styles.input} //have to have style to be visible
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          onChangeText={val => this.onChangeText("password", val)}
          style={styles.input}
          secureTextEntry={true}
        />
        <Button onPress={this.submit} title="Submit" />
        <Text>{this.state.formData}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 8,
    margin: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#666"
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 14,
    flex: 1
  }
});
