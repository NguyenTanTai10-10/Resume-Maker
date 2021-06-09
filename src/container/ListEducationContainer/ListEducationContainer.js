import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListEducationComponent from '../../component/ListEducationComponent';
import { infoUserAction ,deleteEducationAction,logoutDeleteEduAction} from '../../redux/actions/Action';





export class ListEducationContainer extends Component {
   render() {
      return <ListEducationComponent {...this.props} />;
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
      statusDelete: state.deleteEducationReducer.status,
      dataDelete: state.deleteEducationReducer.data,
      loadingDelete: state.deleteEducationReducer.loading,
      messageDeleter: state.deleteEducationReducer.message,
      errorDelete: state.deleteEducationReducer.error,

   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      infoUserAction: (input) => dispatch(infoUserAction(input)),
      deleteEducationAction: (input) => dispatch(deleteEducationAction(input)),
      logoutDeleteEduAction: (input) => dispatch(logoutDeleteEduAction(input)),
      
      
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListEducationContainer);


