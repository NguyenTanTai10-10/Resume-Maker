import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditLanguageComponent from '../../component/EditLanguageComponent';

import {
  editLangAction,
  getEditlangAction,
  logoutEditLangAction,
} from '../../redux/actions/Action';

export class EditLanguageContainer extends Component {
  render() {
    return <EditLanguageComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusGetEdit: state.getEditLangReducer.status,
    dataLGetEdit: state.getEditLangReducer.data,
    loadingGetEdit: state.getEditLangReducer.loading,
    messageGetEdit: state.getEditLangReducer.message,
    errorGetEdit: state.getEditLangReducer.error,
    //  //=========================================
     statusEdit: state.editLangReducer.status,
    dataLEdit: state.editLangReducer.data,
    loadingEdit: state.editLangReducer.loading,
    messageEdit: state.editLangReducer.message,
    errorEdit: state.editLangReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEditlangAction: (input) => dispatch(getEditlangAction(input)),
    editLangAction: (input) => dispatch(editLangAction(input)),
    logoutEditLangAction: (input) => dispatch(logoutEditLangAction(input)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditLanguageContainer);
