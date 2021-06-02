import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResumeTitleComponent from '../../component/ResumeTitleComponent';
import { editCiviAction} from "../../redux/actions/Action"

export class ResumeTitleContainer extends Component {
  render() {
    return <ResumeTitleComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusEditCv: state.editCiviReducer.status,
    dataEditCv: state.editCiviReducer.data,
    loadingEditCv: state.editCiviReducer.loading,
    messageEditCv: state.editCiviReducer.message,
    errorEditCv: state.editCiviReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editCiviAction: (input) =>
      dispatch(editCiviAction(input)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResumeTitleContainer);
