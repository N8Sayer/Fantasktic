import { ApplicationState } from 'src/reducers';

export const selectCurrentUser = (state: ApplicationState) =>
  state.actions.user.currentUser;

export const isUserLoggedIn = (state: ApplicationState) => {
  return selectCurrentUser(state) !== null;
};
