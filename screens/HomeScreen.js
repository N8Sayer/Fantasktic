import React from "react";
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ListItem, Header, Left, Body, Right, Title, Button} from "native-base";
import {WebBrowser} from "expo";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      byteCounter: 0,
      authorized: false
    };
  }

  static navigationOptions = {
    header: null
  };

  renderItem(item) {
    return <ListItem item={item} onPress={() => {}} />;
  }

  render() {
    const {authorized, byteCounter} = this.state;
    console.log(this.state.byteCounter);
    return (
      <View>
        <Header>
          <Left>
            <Text>Left</Text>
          </Left>
          <Body>
            <Title>FanTasktic</Title>
          </Body>
          <Right>
            <Text>Right</Text>
          </Right>
        </Header>
        <Text>{this.state.byteCounter}</Text>
        <Button
          style={{padding: 10}}
          onPress={() => {
            byteCounter >= 10 ? this.setState({authorized: true}) : null;
            this.setState({byteCounter: byteCounter + 1});
          }}>
          <Text>Click Me!</Text>
        </Button>
        {authorized && <Text>You're logged in!</Text>}
      </View>
    );
  }
}
