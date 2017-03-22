import React, { Component, Proptypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as UsersActions from '../actions/UsersActions';
import { UserList, AddUserInput } from '../components';

@connect(state => ({
  userlist: state.userlist
}))

export default class UserListApp extends Component {

  static propTypes = {
    userById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { userlist: { usersById }, dispatch } = this.props;
    const actions = bindActionCreators(UsersActions, dispatch);

    return (
      <div>
        <h1>UserList</h1>
        <AddUserInput AddUser={actions.addUser} />
        <UserList user={usersById} actions={actions} />
      </div>
    )
  }
}
