import { ApplicationAction, NoneAction } from 'src/actions';
import userReducers, { IUserState } from 'src/userData/reducers';

export interface IActionsState {
  user: IUserState;
}

const initialState = {
  isLoggedIn: false,
  user: userReducers(undefined, new NoneAction())
};

const reducers = (
  state: IActionsState = initialState,
  action: ApplicationAction
): IActionsState => {
  switch (action.type) {
    default:
      return {
        user: userReducers(state.user, action)
      };
  }
};
export default reducers;
