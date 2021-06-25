import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChangPassComponent from '../../component/ChangPassComponent';

import {  changePassAction,logoutChangPassAction } from '../../redux/actions/Action';




export class ChangePassContainer extends Component {
   render() {
      return <ChangPassComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   console.log('state.loginReducer1',state.changePassReducer);
  
   return {
      statusChangePass: state.changePassReducer.status,
      dataChangePass: state.changePassReducer.data,
      loadingChangePass: state.changePassReducer.loading,
      messageChangePass: state.changePassReducer.message,
      errorChangePass: state.changePassReducer.error,

      //=============

  
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      changePassAction:(input)=>dispatch(changePassAction(input)),
      logoutChangPassAction:()=>dispatch(logoutChangPassAction()),
      
    
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassContainer);




