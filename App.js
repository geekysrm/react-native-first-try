import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
const people = [
  { name: "Soumya", age: 23 },
  { name: "Ashish", age: 24 },
  { name: "Sambit", age: 25 }
];

export default class App extends Component {
  renderItems() {
    return people.map(this.renderItem);
  }

  renderItem = (person, index) => {
    return (
      <Text key={index} style={styles.text}>
        {person.name} is {person.age}
      </Text>
    );
  };
  render() {
    return <View style={styles.container}>{this.renderItems()}</View>;
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
  text: {
    fontSize: 22
  }
});
