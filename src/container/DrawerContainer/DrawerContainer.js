import React, {Component} from 'react';
import {connect} from 'react-redux';
import DrawerComponent from '../../component/drawer/DrawerComponent';
import {infoUserAction,logoutAction,logoutExportPdfAction} from '../../redux/actions/Action';

export class DrawerContainer extends Component {
  render() {
    return <DrawerComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusUser: state.userInfoReducer.status,
    dataUser: state.userInfoReducer.data,
    loadingUser: state.userInfoReducer.loading,
    messageUser: state.userInfoReducer.message,
    errorUser: state.userInfoReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    infoUserAction: (input) => dispatch(infoUserAction(input)),
    logoutAction: () => dispatch(logoutAction()),
    logoutExportPdfAction: () => dispatch(logoutExportPdfAction()),
   
    // logoutInfoUserAction:()
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
