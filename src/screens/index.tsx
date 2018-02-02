import React, { Component } from 'react';
import HomeScreen from './Home';
import ChartsScreen from './Charts';
import SettingsScreen from './Settings';
import SignInScreen from './SignIn';
import {
  NavigationRouteConfigMap,
  TabNavigatorConfig,
  TabNavigator
} from 'react-navigation';

const routes: NavigationRouteConfigMap = {
  Home: {
    screen: HomeScreen
  }
  // SignIn: {
  //   screen: SignInScreen
  // },
  // Charts: {
  //   screen: ChartsScreen
  // },
  // Settings: {
  //   screen: SettingsScreen
  // }
};

const routeConfig: TabNavigatorConfig = {
  initialRouteName: 'Home'
};

const DefaultNavigator = TabNavigator(routes, routeConfig);
export default DefaultNavigator;

export class RootNavigator extends Component {
  render() {
    return <DefaultNavigator />;
  }

  // componentDidMount() {
  //   this._notificationSubscription = this._registerForPushNotifications();
  // }

  // componentWillUnmount() {
  //   this._notificationSubscription && this._notificationSubscription.remove();
  // }

  // _registerForPushNotifications() {
  // Send our push token over to our backend so we can receive notifications
  // You can comment the following line out if you want to stop receiving
  // a notification every time you open the app. Check out the source
  // for this function in api/registerForPushNotificationsAsync.js
  // registerForPushNotificationsAsync();

  // Watch for incoming notifications
  //   this._notificationSubscription = Notifications.addListener(
  //     this._handleNotification
  //   );
  // }

  // _handleNotification = ({ origin, data }) => {
  //   console.log(
  //     `Push notification ${origin} with data: ${JSON.stringify(data)}`
  //   );
  // };
}

// contentComponent: Tabs,
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     animationEnabled: false,
//     swipeEnabled: true
