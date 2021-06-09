import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddEducationComponent from '../../component/AddEducationComponent';
import {
  getQualitificationrAction,
  getFunctionRoleAction,
  insertEducationAction,
  logoutInsertEduAction
} from '../../redux/actions/Action';

export class AddEducationContainer extends Component {
  render() {
    return <AddEducationComponent {...this.props} />;
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
   statusInsert: state.insertEducationReducer.status,
   dataInsert: state.insertEducationReducer.data,
   loadingInsert: state.insertEducationReducer.loading,
   messageInsert: state.insertEducationReducer.message,
   errorInsert: state.insertEducationReducer.error,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQualitificationrAction: (input) =>
      dispatch(getQualitificationrAction(input)),
    getFunctionRoleAction: (input) => dispatch(getFunctionRoleAction(input)),
    insertEducationAction: (input) => dispatch(insertEducationAction(input)),
    logoutInsertEduAction: (input) => dispatch(logoutInsertEduAction(input)),
    
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEducationContainer);
