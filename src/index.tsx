import * as React from 'react';
import * as Expo from 'expo';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { Root } from 'native-base';
import { StyleProvider, Container } from 'native-base';
import { store } from './configureStore';
import { RootNavigator } from './screens';
import * as firebase from 'firebase';
//@ts-ignore
import getTheme from './theme/components';
console.disableYellowBox = true;

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAAiUqVc0ydck82EQ6nshEPyYTrBpu6nxE',
	authDomain: 'fantasktic-ce4c5.firebaseapp.com',
	databaseURL: 'https://fantasktic-ce4c5.firebaseio.com/',
	storageBucket: 'gs://fantasktic-ce4c5.appspot.com/'
};
firebase.initializeApp(firebaseConfig);

interface IAppProps {}
interface IAppState {
	fontLoaded: boolean;
}
export default class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = { fontLoaded: false };
	}

	async componentWillMount() {
		await Expo.Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
		});

		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			this.state.fontLoaded && (
				<Root>
					<Provider store={store}>
						<StyleProvider style={getTheme()}>
							<View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
								<RootNavigator />
							</View>
						</StyleProvider>
					</Provider>
				</Root>
			)
		);
	}
}
