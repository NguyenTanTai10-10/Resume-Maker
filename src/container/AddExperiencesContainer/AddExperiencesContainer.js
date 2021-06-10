import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddExperiencesComponent from '../../component/AddExperiencesComponent';
import { getLeverSr6Action,insertSkillAction,logoutInsertSkillAction } from '../../redux/actions/Action';





export class AddExperiencesContainer extends Component {
   render() {
      return <AddExperiencesComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      statusLever: state.getLeverSc6Reducer.status,
      dataLever: state.getLeverSc6Reducer.data,
      loadingLever: state.getLeverSc6Reducer.loading,
      messageLever: state.getLeverSc6Reducer.message,
      errorLever: state.getLeverSc6Reducer.error,
      //=========================================
      statusInsert: state.insertSkillReducer.status,
      dataInsert: state.insertSkillReducer.data,
      loadingInsert: state.insertSkillReducer.loading,
      messageInsert: state.insertSkillReducer.message,
      errorInsert: state.insertSkillReducer.error,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getLeverSr6Action: (input) => dispatch(getLeverSr6Action(input)),
      insertSkillAction: (input) => dispatch(insertSkillAction(input)),
      logoutInsertSkillAction: (input) => dispatch(logoutInsertSkillAction(input)),
      
      
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExperiencesContainer);


