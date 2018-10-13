import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

export default class App extends Component {
  state = { people: [], refreshing: false, page: 1 };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ refreshing: true });
    try {
      const data = await fetch(
        `https://swapi.co/api/people?page=${this.state.page}`
      );
      const json = await data.json(); //converts above promise to json
      this.setState({
        people: json.results,
        page: this.state.page + 1,
        refreshing: false
      });
    } catch (err) {
      console.log("error fetching data");
    }
  };
  renderItem = ({ item }) => {
    return (
      <View
        style={{ padding: 15, borderBottomColor: "#ddd", borderBottomWidth: 1 }}
      >
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
        <Text style={{ color: "rgba(0,0,0,.4)" }}>Gender: {item.gender}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>People:</Text>
        <FlatList
          onRefresh={this.fetchData}
          refreshing={this.state.refreshing}
          data={this.state.people}
          keyExtractor={item => item.name}
          renderItem={
            this.renderItem //extracts keys for the list
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
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
