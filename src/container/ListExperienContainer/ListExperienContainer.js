import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListExperienComponent from '../../component/ListExperienComponent';

import { infoUserAction ,deleteSkillAction,logoutDeleteSkillAction} from '../../redux/actions/Action';





export class ListExperienContainer extends Component {
   render() {
      return <ListExperienComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      statusUser: state.userInfoReducer.status,
      dataUser: state.userInfoReducer.data,
      loadingUser: state.userInfoReducer.loading,
      messageUser: state.userInfoReducer.message,
      errorUser: state.userInfoReducer.error,
      //=========================================
      statusDelete: state.deleteSkillReducer.status,
      dataDelete: state.deleteSkillReducer.data,
      loadingDelete: state.deleteSkillReducer.loading,
      messageDeleter: state.deleteSkillReducer.message,
      errorDelete: state.deleteSkillReducer.error,

   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      infoUserAction: (input) => dispatch(infoUserAction(input)),
      deleteSkillAction: (input) => dispatch(deleteSkillAction(input)),
      logoutDeleteSkillAction: (input) => dispatch(logoutDeleteSkillAction(input)),
      
      
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListExperienContainer);


