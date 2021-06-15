import React, {Component} from 'react';
import {connect} from 'react-redux';
import SkillsComponent from '../../component/SkillsComponent';
import {
  getTechniqueAction,
  infoUserAction,
  updateTechAction,
  logoutUpdateTechAction
} from '../../redux/actions/Action';

export class SkillsContainer extends Component {
  render() {
    return <SkillsComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusTech: state.getTechniqueReducer.status,
    dataTech: state.getTechniqueReducer.data,
    loadingTech: state.getTechniqueReducer.loading,
    messageTech: state.getTechniqueReducer.message,
    errorTech: state.getTechniqueReducer.error,
    //======================================
    statusUser: state.userInfoReducer.status,
    dataUser: state.userInfoReducer.data,
    loadingUser: state.userInfoReducer.loading,
    messageUser: state.userInfoReducer.message,
    errorUser: state.userInfoReducer.error,
    //======================================
    statusUpTech: state.updateTechReducer.status,
    dataUpTech: state.updateTechReducer.data,
    loadingUpTech: state.updateTechReducer.loading,
    messageUpTech: state.updateTechReducer.message,
    errorUpTech: state.updateTechReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTechniqueAction: (input) => dispatch(getTechniqueAction(input)),
    infoUserAction: (input) => dispatch(infoUserAction(input)),
    updateTechAction: (input) => dispatch(updateTechAction(input)),
    logoutUpdateTechAction: (input) => dispatch(logoutUpdateTechAction(input)),

    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);
