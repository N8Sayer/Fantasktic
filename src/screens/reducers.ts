import { ApplicationAction, NoneAction } from 'src/actions';
import userReducers, { IUserState } from './User/reducers';
import signsReducers, { ISignsState } from './Signs/reducers';
import areasReducers, { IAreasState } from './Areas/reducers';

export interface IFeaturesState {
  user: IUserState;
  signs: ISignsState;
  areas: IAreasState;
}

const initialState = {
  user: userReducers(undefined, new NoneAction()),
  signs: signsReducers(undefined, new NoneAction()),
  areas: areasReducers(undefined, new NoneAction())
};

const reducers = (
  state: IFeaturesState = initialState,
  action: ApplicationAction
): IFeaturesState => {
  switch (action.type) {
    default:
      return {
        user: userReducers(state.user, action),
        signs: signsReducers(state.signs, action),
        areas: areasReducers(state.areas, action)
      };
  }
};
export default reducers;
