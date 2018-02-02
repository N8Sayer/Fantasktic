import { Dispatch } from 'react-redux';
import { ApplicationState } from 'src/reducers';
import { Toast } from 'native-base';

export enum EResetPasswordActionTypes {
  RESET_PASSWORD_SUBMIT_START = 'HOME.RESETPASSWORD.SUBMIT.START',
  RESET_PASSWORD_SUBMIT_FAILURE = 'HOME.RESETPASSWORD.SUBMIT.FAILURE',
  RESET_PASSWORD_SUBMIT_SUCCESS = 'HOME.RESETPASSWORD.SUBMIT.SUCCESS'
}

export class resetPasswordSubmit {
  constructor(email: string) {
    return async (dispatch: Dispatch<ApplicationState>) => {
      dispatch(new ResetPasswordStart());
      try {
        // TODO: Implement this once api is fixed;
        //const response = fetch()
        throw new Error();
      } catch (e) {
        dispatch(new ResetPasswordFailure());
        Toast.show({
          text: 'Reset password failed! Please call Sunshine support.',
          position: 'bottom'
        });
      }
    };
  }
}

class ResetPasswordStart {
  readonly type = EResetPasswordActionTypes.RESET_PASSWORD_SUBMIT_START;
}

class ResetPasswordFailure {
  readonly type = EResetPasswordActionTypes.RESET_PASSWORD_SUBMIT_FAILURE;
}

class ResetPasswordSuccess {
  readonly type = EResetPasswordActionTypes.RESET_PASSWORD_SUBMIT_SUCCESS;
}

type actions = ResetPasswordFailure | ResetPasswordStart | ResetPasswordSuccess;
export default actions;
