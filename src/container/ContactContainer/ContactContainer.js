import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContactComponent from '../../component/ContactComponent';
import {
  getCityAction,
  checkEmailAction,
  registerAction,
  logoutCheckMailAction,
  logoutRegisterlAction,
  editAvatarAction,
  editCiviAction
} from '../../redux/actions/Action';

export class ContactContainer extends Component {
  render() {
    return <ContactComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusCity: state.getCityReducer.status,
    dataCity: state.getCityReducer.data,
    loadingCity: state.getCityReducer.loading,
    messageCity: state.getCityReducer.message,
    errorCity: state.getCityReducer.error,
    //=====================================
    statusEmail: state.checkEmailReducer.status,
    dataEmail: state.checkEmailReducer.data,
    loadingEmail: state.checkEmailReducer.loading,
    messageEmail: state.checkEmailReducer.message,
    errorEmail: state.checkEmailReducer.error,
    //======================================
    statusRegister: state.registerReducer.status,
    dataRegister: state.registerReducer.data,
    loadingRegister: state.registerReducer.loading,
    messageRegister: state.registerReducer.message,
    errorRegister: state.registerReducer.error,
    //======================================
    statusAvt: state.editAvatarReducer.status,
    dataAvt: state.editAvatarReducer.data,
    loadingAvtr: state.editAvatarReducer.loading,
    messageAvt: state.editAvatarReducer.message,
    errorAvt: state.editAvatarReducer.error,
    //=======================================
    statusEditCv: state.editCiviReducer.status,
    dataEditCv: state.editCiviReducer.data,
    loadingEditCv: state.editCiviReducer.loading,
    messageEditCv: state.editCiviReducer.message,
    errorEditCv: state.editCiviReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCityAction: (input) => dispatch(getCityAction(input)),
    checkEmailAction: (input) => dispatch(checkEmailAction(input)),
    registerAction: (input) => dispatch(registerAction(input)),
    logoutCheckMailAction: (input) => dispatch(logoutCheckMailAction(input)),
    logoutRegisterlAction: (input) => dispatch(logoutRegisterlAction(input)),
    editAvatarAction: (input) => dispatch(editAvatarAction(input)),
    editCiviAction: (input) => dispatch(editCiviAction(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
