import { Dispatch } from 'react-redux';
import { ApplicationState } from 'src/reducers';
import { Toast } from 'native-base';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
import { getUserInfo } from 'src/userData/actions';

export enum ESignInActionTypes {
  FORM_SUBMIT_START = 'SIGNIN.START',
  FORM_SUBMIT_FAILURE = 'SIGNIN.FAILURE',
  FORM_SUBMIT_SUCCESS = 'SIGNIN.SUCCESS'
}

export class signInSubmit {
  constructor(username: string, password: string) {
    return async (dispatch: Dispatch<ApplicationState>) => {
      dispatch(new signInSubmitStart());
      try {
        const response = await signIn(username, password);
        // const body = await response.json();
        if (response) {
          // If arbitrary success is returned
          dispatch(new signInSubmitSuccess());
          dispatch(NavigationActions.back());
          dispatch(new getUserInfo());
        } else {
          throw new Error();
        }
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
  firebase
    .auth()
    .signInWithEmailAndPassword(username, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log([errorCode, errorMessage]);
    });
  return 'Success';
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
