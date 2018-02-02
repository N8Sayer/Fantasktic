import HomeActions from './Home/actions';
import ChartsActions from './Charts/actions';
import SignInActions from './SignIn/actions';
import SettingsActions from './Settings/actions';

type actions = HomeActions | ChartsActions | SignInActions | SettingsActions;
export default actions;
