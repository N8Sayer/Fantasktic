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
import { selectCurrentUser } from 'src/userData/selectors';

const HomeScreen = ({
  isLoggedIn,
  userInfo
}: IHomeScreenProps & IHomeScreenActions) => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          {isLoggedIn ? (
            <Title>FanTasktic</Title>
          ) : (
            <Title>{userInfo.name}</Title>
          )}
        </Body>
        <Right />
      </Header>
      <Content style={{ flex: 1, margin: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignContent: 'center'
          }}
        >
          <Text style={{ flex: 1, alignSelf: 'center', color: 'black' }}>
            Welcome to FanTasktic! Please use the Sign In page to access the app
          </Text>
        </View>
      </Content>
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
    userInfo: selectCurrentUser(state)
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
