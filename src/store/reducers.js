import { combineReducers } from 'redux';

import layout from '../components/Layout/LayoutState';
import login from '../pages/login/LoginState';
import home from '../pages/home/HomeState';
import newModel from '../pages/newModel/NewModelState';
import model from '../pages/model/ModelState';
import profile from '../pages/profile/ProfileState';

export default combineReducers({
  layout,
  login,
  home,
  newModel,
  model,
  profile
});