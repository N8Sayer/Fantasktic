import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  ListItem,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Content,
  Container
} from 'native-base';
import { WebBrowser } from 'expo';
// import * as firebase from 'firebase';
import { ApplicationState } from 'src/reducers';
import { connect, Dispatch } from 'react-redux';

const HomeScreen = ({
  isLoggedIn,
  userInfo
}: IHomeScreenProps & IHomeScreenActions) => {
  return (
    <Container>
      <Header>
        <Left>
          {isLoggedIn && (
            <Button>
              <Text>Charts</Text>
            </Button>
          )}
        </Left>
        <Body>
          {isLoggedIn ? (
            <Title>FanTasktic</Title>
          ) : (
            <Title>{userInfo.name}</Title>
          )}
        </Body>
        <Right>
          {isLoggedIn ? (
            <Button>
              <Text>Sign In</Text>
            </Button>
          ) : (
            <Button>
              <Text>Settings</Text>
            </Button>
          )}
        </Right>
      </Header>
      <Content />
    </Container>
  );
};

interface IHomeScreenFields {
  isLoggedIn: boolean;
  userInfo?: any;
}
const mapStatetoProps = (state: ApplicationState) => {
  return {
    isLoggedIn: true,
    userInfo: {
      name: 'Nate'
    }
  };
};

interface IHomeScreenActions {}
const mapDispatchToProps = (
  dispatch: Dispatch<ApplicationState>
): IHomeScreenActions => {
  return {};
};

type IHomeScreenProps = IHomeScreenFields & IHomeScreenActions;
export default connect(mapStatetoProps, mapDispatchToProps)(HomeScreen);
