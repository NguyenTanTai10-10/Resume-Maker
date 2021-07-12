import React, {Component} from 'react';
import {connect} from 'react-redux';
import ForgetPasswordComponent from '../../component/ForgetPasswordComponent';

import {
  ForgetPassAction,
  logoutForgetPassAction,
} from '../../redux/actions/Action';

export class ForgetPasswordContainer extends Component {
  render() {
    return <ForgetPasswordComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {


  return {
      statusForgetPass: state.forgetPassReducer.status,
      dataForgetPass: state.forgetPassReducer.data,
      loadingForgetPass: state.forgetPassReducer.loading,
      messageForgetPass: state.forgetPassReducer.message,
      errorForgetPass: state.forgetPassReducer.error,
    //=============
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ForgetPassAction:(input)=>dispatch(ForgetPassAction(input)),
    logoutForgetPassAction:()=>dispatch(logoutForgetPassAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgetPasswordContainer);
