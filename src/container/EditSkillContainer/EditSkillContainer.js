import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditSkillComponent from '../../component/EditSkillComponent';

import {getLeverSr6Action, editSkillAction,logoutSkillAction} from '../../redux/actions/Action';

export class EditSkillContainer extends Component {
  render() {
    return <EditSkillComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusLever: state.getLeverSc6Reducer.status,
    dataLever: state.getLeverSc6Reducer.data,
    loadingLever: state.getLeverSc6Reducer.loading,
    messageLever: state.getLeverSc6Reducer.message,
    errorLever: state.getLeverSc6Reducer.error,

    //====================================================
    statusEdit: state.editSkillReducer.status,
    dataEdit: state.editSkillReducer.data,
    loadingEdit: state.editSkillReducer.loading,
    messageEdit: state.editSkillReducer.message,
    errorEdit: state.editSkillReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLeverSr6Action: (input) => dispatch(getLeverSr6Action(input)),
    editSkillAction: (input) => dispatch(editSkillAction(input)),
    logoutSkillAction: (input) => dispatch(logoutSkillAction(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSkillContainer);
