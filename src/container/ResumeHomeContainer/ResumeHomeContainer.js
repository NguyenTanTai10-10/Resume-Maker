import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResumeHomeComponent from '../../component/ResumeHomeComponent';

import { infoUserAction,editCiviAction} from "../../redux/actions/Action"

export class ResumeHomeContainer extends Component {
  render() {
    return <ResumeHomeComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
   
  return {
     statusUser: state.userInfoReducer.status,
     dataUser: state.userInfoReducer.data,
     loadingUser: state.userInfoReducer.loading,
     messageUser: state.userInfoReducer.message,
     errorUser: state.userInfoReducer.error,
     //========================================
    statusEditCv: state.editCiviReducer.status,
    dataEditCv: state.editCiviReducer.data,
    loadingEditCv: state.editCiviReducer.loading,
    messageEditCv: state.editCiviReducer.message,
    errorEditCv: state.editCiviReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     infoUserAction: (input) => dispatch(infoUserAction(input)),
     editCiviAction: (input) => dispatch(editCiviAction(input)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResumeHomeContainer);
