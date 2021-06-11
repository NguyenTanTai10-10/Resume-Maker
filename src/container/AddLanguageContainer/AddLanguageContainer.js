import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddLanguageComponent from '../../component/AddLanguageComponent';

import {
  addLanguageAction,
  insertLangAction,
  logoutInsertLangAction
} from '../../redux/actions/Action';

export class AddLanguageContainer extends Component {
  render() {
    return <AddLanguageComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusAdd: state.addLanguageReducer.status,
    dataLAdd: state.addLanguageReducer.data,
    loadingAdd: state.addLanguageReducer.loading,
    messageAdd: state.addLanguageReducer.message,
    errorAdd: state.addLanguageReducer.error,
     //=========================================
     statusInsert: state.insertLanguageReducer.status,
    dataLInsertd: state.insertLanguageReducer.data,
    loadingInsert: state.insertLanguageReducer.loading,
    messageInsert: state.insertLanguageReducer.message,
    errorInsert: state.insertLanguageReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLanguageAction: (input) => dispatch(addLanguageAction(input)),
    insertLangAction: (input) => dispatch(insertLangAction(input)),
    logoutInsertLangAction: (input) => dispatch(logoutInsertLangAction(input)),
    
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddLanguageContainer);
