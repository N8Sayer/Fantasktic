import AppNavigator from './screens';
import { NavigationState } from 'react-navigation';
import { combineReducers, Reducer } from 'redux';
import { ApplicationAction, NoneAction } from './actions';

const navInitialState: NavigationState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home'),
  undefined
);

const navReducers = (
  state: NavigationState = navInitialState,
  action: ApplicationAction
): NavigationState => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

// TODO: Type entire store
export interface ApplicationState {
  navigator: NavigationState;
}

const initialState: ApplicationState = {
  navigator: navReducers(undefined, new NoneAction())
};

const reducers = (
  state: ApplicationState = initialState,
  action: ApplicationAction
): ApplicationState => {
  return {
    navigator: navReducers(state.navigator, action)
  };
};
export default reducers;
