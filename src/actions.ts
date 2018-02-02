import { NavigationAction } from 'react-navigation';
import FeaturesActions from './screens/actions';
import { Dispatch } from 'react-redux';
import { ApplicationState } from './reducers';

export class NoneAction {
  readonly type = 'NONE';
}

class ThunkActionTemplate {
  constructor(...params: any[]) {
    return (dispatch: Dispatch<ApplicationState>): any => {};
  }
}

// Do not add Navigation or Form action to this union, they will break typings.
export type ApplicationAction = NoneAction | FeaturesActions;
export type ThunkActionType = ThunkActionTemplate;
