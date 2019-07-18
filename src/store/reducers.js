import { combineReducers } from 'redux';

import layout from '../components/Layout/LayoutState';
import login from '../pages/login/LoginState';
import dashboard from '../pages/dashboard/DashboardState';

export default combineReducers({
  layout,
  login,
  dashboard
});