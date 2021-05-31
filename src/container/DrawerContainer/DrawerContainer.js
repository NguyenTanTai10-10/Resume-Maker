import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrawerComponent from '../../component/drawer/DrawerComponent';
import {logoutAction} from '../../redux/actions/Action'

export class DrawerContainer extends Component {
   render() {
      return <DrawerComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
   //          status: state.loginReducer.status,
   //          data: state.loginReducer.data,
   //          loading: state.loginReducer.loading,
   //          message: state.loginReducer.message,
   //          error: state.loginReducer.error,
         };
};

const mapDispatchToProps = (dispatch) => {
    return {
      logoutAction: () => dispatch(logoutAction()),
    };
};

 export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);

