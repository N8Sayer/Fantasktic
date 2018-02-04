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
  Container,
  Form,
  Input,
  Item,
  Label
} from 'native-base';
import { WebBrowser } from 'expo';
// import * as firebase from 'firebase'; Calling duplicate currently
import { ApplicationState } from 'src/reducers';
import { connect, Dispatch } from 'react-redux';
import SignInForm from './SignInForm';

const SignInScreen = (props: ISignInScreenProps) => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Sign In</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <SignInForm />
      </Content>
    </Container>
  );
};

interface ISignInScreenActions {}
const mapDispatchToProps = (
  dispatch: Dispatch<ApplicationState>
): ISignInScreenActions => {
  return {};
};

type ISignInScreenProps = ISignInScreenActions;
export default connect(null, mapDispatchToProps)(SignInScreen);
