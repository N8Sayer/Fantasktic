import React, { Component } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ListItem, Header, Left, Body, Right, Title, Button, Content, Container, Form, Input, Item, Label } from 'native-base';
import { WebBrowser } from 'expo';
// import * as firebase from 'firebase'; Calling duplicate currently
import { ApplicationState } from 'src/reducers';
import { connect, Dispatch } from 'react-redux';

class SignInScreen extends Component<ISignInScreenProps & ISignInScreenActions> {
	constructor(props: ISignInScreenProps & ISignInScreenActions) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}

	render() {
		const { username, password } = this.state;
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
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input value={username} onChangeText={value => this.setState({ username: value })} />
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input value={password} onChangeText={value => this.setState({ password: value })} />
						</Item>
						<Button rounded>
							<Text>Sign In</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}

interface ISignInScreenActions {
	logInUser: (username: string, password: string) => void;
}
const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): ISignInScreenActions => {
	return {
		logInUser: () => {}
	};
};

type ISignInScreenProps = ISignInScreenFields & ISignInScreenActions;
export default connect(null, mapDispatchToProps)(SignInScreen);
