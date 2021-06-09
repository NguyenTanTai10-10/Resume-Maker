import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditEducationComponent from '../../component/EditEducationComponent';

import {
  getQualitificationrAction,
  getFunctionRoleAction,
  editEducationAction,
  logoutEditEduAction
} from '../../redux/actions/Action';

export class EditEducationContainer extends Component {
  render() {
    return <EditEducationComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusQua: state.getQualitificationUserReducer.status,
    dataQua: state.getQualitificationUserReducer.data,
    loadingQua: state.getQualitificationUserReducer.loading,
    messageQua: state.getQualitificationUserReducer.message,
    errorQua: state.getQualitificationUserReducer.error,
   //====================================================
   statusFunc: state.getFuncRoleReducer.status,
    dataFunc: state.getFuncRoleReducer.data,
    loadingFunc: state.getFuncRoleReducer.loading,
    messageFunc: state.getFuncRoleReducer.message,
    errorFunc: state.getFuncRoleReducer.error,
    //====================================================
   statusEditEdu: state.editEducationReducer.status,
   dataEditEdu: state.editEducationReducer.data,
   loadingEditEdu: state.editEducationReducer.loading,
   messageEditEdu: state.editEducationReducer.message,
   errorEditEdu: state.editEducationReducer.error,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQualitificationrAction: (input) =>
      dispatch(getQualitificationrAction(input)),
    getFunctionRoleAction: (input) => dispatch(getFunctionRoleAction(input)),
    editEducationAction: (input) => dispatch(editEducationAction(input)),
    logoutEditEduAction: (input) => dispatch(logoutEditEduAction(input)),
    
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEducationContainer);
