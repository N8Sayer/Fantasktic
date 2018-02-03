import { ApplicationAction, NoneAction } from 'src/actions';
import userReducers, { IUserState } from './User/reducers';

export interface IFeaturesState {
	user: IUserState;
}

const initialState = {
	isLoggedIn: false,
	user: userReducers(undefined, new NoneAction())
};

const reducers = (state: IFeaturesState = initialState, action: ApplicationAction): IFeaturesState => {
	switch (action.type) {
		default:
			return {
				user: userReducers(state.user, action)
			};
	}
};
export default reducers;
