import { Dispatch } from 'react-redux';
import { ApplicationState } from '../../reducers';
import { Toast } from 'native-base';
import { NavigationActions } from 'react-navigation';

export enum ESignInActionTypes {
  FORM_SUBMIT_START = 'HOME.SIGNIN.SUBMIT.START',
  FORM_SUBMIT_FAILURE = 'HOME.SIGNIN.SUBMIT.FAILURE',
  FORM_SUBMIT_SUCCESS = 'HOME.SIGNIN.SUBMIT.SUCCESS'
}

export class signInSubmit {
  constructor(username: string, password: string) {
    return async (dispatch: Dispatch<ApplicationState>) => {
      dispatch(new signInSubmitStart());
      try {
        const response = await signIn(username, password);
        const body = await response.json();
        // if responseJson not empty and status is 200 then dispatch this stuff
        //   dispatch(new signInSubmitSuccess());
        //   dispatch(NavigationActions.back());
        //   dispatch(new getUserInfo());
      } catch (e) {
        Toast.show({
          text: 'Incorrect username or password',
          position: 'bottom',
          buttonText: 'Ok'
        });
        dispatch(new signInSubmitFailure());
      }
    };
  }
}

const signIn = (username: string, password: string) => {
  // Sign in to Firebase
};

class signInSubmitStart {
  readonly type = ESignInActionTypes.FORM_SUBMIT_START;
}

class signInSubmitFailure {
  readonly type = ESignInActionTypes.FORM_SUBMIT_FAILURE;
}

class signInSubmitSuccess {
  readonly type = ESignInActionTypes.FORM_SUBMIT_SUCCESS;
}

type actions = signInSubmitStart | signInSubmitFailure | signInSubmitSuccess;

export default actions;
