import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResumeHomeComponent from '../../component/ResumeHomeComponent';

import { infoUserAction} from "../../redux/actions/Action"

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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     infoUserAction: (input) => dispatch(infoUserAction(input)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResumeHomeContainer);
