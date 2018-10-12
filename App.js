import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class App extends Component {
  onPress = () => {
    alert("Button pressed");
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={[styles.box, { backgroundColor: "red" }]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
    <View style={[styles.box, { backgroundColor: "blue" }]} /> */}
        <TouchableHighlight
          underlayColor="rgba(50,183,255,0.8)"
          onPress={this.onPress}
          style={styles.button}
        >
          <View style={styles.textContainer}>
            <Icon name="home" size={20} color="white" />
            <Text style={styles.text}>HOME</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //this is the most parent container, so fill the entire screen
    // don't have to write display:flex
    // flexDirection: "row", //primary axis -> row (y-axis)
    // justifyContent: "space-between", //layout items on primary axis
    // alignItems: "flex-end" //layout items on secondary axis
    justifyContent: "center"
    //alignItems: "center"
  },
  // box: {
  //   flex: 1, //fill up inside parent equally
  //   margin: 10
  // }
  button: {
    backgroundColor: "rgba(50,183,255,1)",
    borderRadius: 30,
    padding: 17,
    margin: 10
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    color: "white",
    fontSize: 18,
    marginLeft: 9
  }
});
