import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from '../../component/home/Home';
import {infoUserAction,exportPdfAction,logoutExportPdfAction} from '../../redux/actions/Action';

export class HomeContainer extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = (state) => {
   // console.log('====================================');
   // console.log('state.userInfoReducer',state.exportPdfReducer);
   // console.log('====================================');
  return {
    statusUser: state.userInfoReducer.status,
    dataUser: state.userInfoReducer.data,
    loadingUser: state.userInfoReducer.loading,
    messageUser: state.userInfoReducer.message,
    errorUser: state.userInfoReducer.error,
    //========================================
    statusPdf: state.exportPdfReducer.status,
    dataPdf: state.exportPdfReducer.data,
    loadingPdf: state.exportPdfReducer.loading,
    messagePdf: state.exportPdfReducer.message,
    errorPdf: state.exportPdfReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    infoUserAction: (input) => dispatch(infoUserAction(input)),
    exportPdfAction: (input) => dispatch(exportPdfAction(input)),
    logoutExportPdfAction: () => dispatch(logoutExportPdfAction()),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
