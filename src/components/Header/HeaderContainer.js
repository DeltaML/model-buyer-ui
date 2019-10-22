import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import HeaderView from './HeaderView';
import { signOut } from '../../pages/login/LoginState';
import { toggleSidebar } from '../Layout/LayoutState';

export default compose(
  connect(
    state => ({
      isSidebarOpened: state.layout.isSidebarOpened,
    }),
    { signOut, toggleSidebar },
  ),
  withState('mailMenu', 'setMailMenu', null),
  withState('isMailsUnread', 'setIsMailsUnread', true),
  withState('notificationsMenu', 'setNotificationsMenu', null),
  withState('isNotificationsUnread', 'setIsNotificationsUnread', true),
  withState('profileMenu', 'setProfileMenu', null),
  withState('isSearchOpen', 'setSearchOpen', false),
  withState('userName', 'setUserName', null),
  withHandlers({

    openNotificationsMenu: props => event => {
      props.setNotificationsMenu(event.currentTarget);
      props.setIsNotificationsUnread(false);
    },
    closeNotificationsMenu: props => () => {
      props.setNotificationsMenu(null);
    },

    openProfileMenu: props => event => {
      props.setProfileMenu(event.currentTarget);
    },
    closeProfileMenu: props => () => {
      props.setProfileMenu(null);
    },
    showProfilePage: props => () => {
      // TODO: redirigir a prof page
    },
    getUserName: props => () => {
      props.setUserName("John Bonachon")
    }
  })
)(HeaderView);