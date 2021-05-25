import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../component/login/Login';
import { checkEmailAction, loginAction } from '../../redux/actions/Action';




export class LoginContainer extends Component {
   render() {
      return <Login {...this.props} />;
   }
}

// const mapStateToProps = (state) => {
//    console.log('checkEmailReducer==',state.checkEmailReducer);
  
//    return {
//       status: state.loginReducer.status,
//       data: state.loginReducer.data,
//       loading: state.loginReducer.loading,
//       message: state.loginReducer.message,
//       error: state.loginReducer.error,

//       //=============

//       statusEmail: state.checkEmailReducer.status,
//       dataEmail: state.checkEmailReducer.data,
//       loadingEmail: state.checkEmailReducer.loading,
//       messageEmail: state.checkEmailReducer.message,
//       errorEmail: state.checkEmailReducer.error,
//    };
// };

// const mapDispatchToProps = (dispatch) => {
//    return {
//       loginAction: (userType,email, password,registrationIds,FacebookId,GoogleId) => dispatch(loginAction(userType,email, password,registrationIds,FacebookId,GoogleId)),
//       checkEmailAction:(email)=>dispatch(checkEmailAction(email))
//    };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);


export default LoginContainer




