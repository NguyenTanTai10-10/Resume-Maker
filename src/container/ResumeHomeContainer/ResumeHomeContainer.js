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
  // console.log("tate.infoUserReducer",state.infoUserReducer);
  return {
    // statusUser: state.infoUserReducer.status,
    // dataUser: state.infoUserReducer.data,
    // loadingUser: state.infoUserReducer.loading,
    // messageUser: state.infoUserReducer.message,
    // errorUser: state.infoUserReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // infoUserAction: (input) => dispatch(infoUserAction(input)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResumeHomeContainer);
