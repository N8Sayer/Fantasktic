import AppNavigator from './screens';
import { NavigationState } from 'react-navigation';
import { combineReducers, Reducer } from 'redux';
import { ApplicationAction, NoneAction } from './actions';
import StandardActions from './screens/actions';
import actionsReducers, { IActionsState } from 'src/screens/reducers';

export interface ApplicationState {
  actions: IActionsState;
}

const initialState: ApplicationState = {
  actions: actionsReducers(undefined, new NoneAction())
};

const reducers = (
  state: ApplicationState = initialState,
  action: ApplicationAction
): ApplicationState => {
  return {
    actions: actionsReducers(state.actions, action)
  };
};
export default reducers;
