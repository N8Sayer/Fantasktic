import { Dispatch } from 'redux';
import { ApplicationState } from 'src/reducers';
import { User } from 'src/Models/User';

export enum EUserActionTypes {
  GET_USER_INFO_START = 'USER.GETINFO.START',
  GET_USER_INFO_FAILURE = 'USER.GETINFO.FAILURE',
  GET_USER_INFO_SUCCESS = 'USER.GETINFO.SUCCESS'
}

export class getUserInfo {
  constructor() {
    return async (dispatch: Dispatch<ApplicationState>) => {
      dispatch(new getUserInfoStart());
      try {
        const response = await fetchUserInfoFromAPI();
        const body = await response.json();
        if (body) {
          dispatch(new getUserInfoSuccess(body));
        } else {
          throw new Error();
        }
      } catch (e) {
        dispatch(new getUserInfoFailure());
      }
    };
  }
}

const fetchUserInfoFromAPI = () => {
  return fetch(
    'https://dev.skylink.sunshine.us.com/Skylink/Services/SkylinkV2/MyUser'
  );
};

class getUserInfoStart {
  readonly type = EUserActionTypes.GET_USER_INFO_START;
}

class getUserInfoFailure {
  readonly type = EUserActionTypes.GET_USER_INFO_FAILURE;
}

class getUserInfoSuccess {
  readonly type = EUserActionTypes.GET_USER_INFO_SUCCESS;
  constructor(public payload: User) {}
}

type actions = getUserInfoStart | getUserInfoFailure | getUserInfoSuccess;
export default actions;
