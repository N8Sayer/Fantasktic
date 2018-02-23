import { ApplicationAction } from 'src/actions';
import { User } from 'src/models/User';
import { EUserActionTypes } from 'src/userData/actions';
// import { ESettingsMenuActionTypes } from 'src/screens/Settings/actions'; SET UP FOR FUTURE DEV
// import { EManageProfileActionsTypes } from 'src/Features/Settings/ManageProfile/actions';

export interface IUserState {
  currentUser: User | null;
}

const initialState = {
  currentUser: null
};

const reducers = (
  state: IUserState = initialState,
  action: ApplicationAction
): IUserState => {
  switch (action.type) {
    // case ESettingsMenuActionTypes.SETTINGS_SIGN_OUT:
    //   return {
    //     ...state,
    //     currentUser: null
    //   };
    // case EManageProfileActionsTypes.MANAGE_PROFILE_SUBMIT_SUCCESS:
    //   return {
    //     ...state,
    //     currentUser: action.payload
    //   };
    case EUserActionTypes.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
export default reducers;
