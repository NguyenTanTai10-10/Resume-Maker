import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListLanguageComponent from '../../component/ListLanguageComponent';


import { infoUserAction ,logoutDeleteLangAction, deleteLangAction} from '../../redux/actions/Action';





export class ListLanguageContainer extends Component {
   render() {
      return <ListLanguageComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   console.log('====================================');
   console.log(state.editLangReducer);
   console.log('====================================');
   return {
      statusUser: state.userInfoReducer.status,
      dataUser: state.userInfoReducer.data,
      loadingUser: state.userInfoReducer.loading,
      messageUser: state.userInfoReducer.message,
      errorUser: state.userInfoReducer.error,
      //=========================================
      statusDelete: state.deleteLangReducer.status,
      dataDelete: state.deleteLangReducer.data,
      loadingDelete: state.deleteLangReducer.loading,
      messageDeleter: state.deleteLangReducer.message,
      errorDelete: state.deleteLangReducer.error,

   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      infoUserAction: (input) => dispatch(infoUserAction(input)),
      deleteLangAction: (input) => dispatch(deleteLangAction(input)),
      logoutDeleteLangAction: (input) => dispatch(logoutDeleteLangAction(input)),


      
      
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListLanguageContainer);


