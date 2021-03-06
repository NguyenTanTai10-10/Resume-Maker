import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../component/login/Login';
import {  loginAction,logoutAction } from '../../redux/actions/Action';




export class LoginContainer extends Component {
   render() {
      return <Login {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   // console.log('state.loginReducer1',state.loginReducer);
  
   return {
      status: state.loginReducer.status,
      data: state.loginReducer.data,
      loading: state.loginReducer.loading,
      message: state.loginReducer.message,
      error: state.loginReducer.error,

      //=============

  
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      logoutAction:()=>dispatch(logoutAction()),
      loginAction: (userType,email, password,registrationIds,FacebookId,GoogleId) => dispatch(loginAction(userType,email, password,registrationIds,FacebookId,GoogleId)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);






