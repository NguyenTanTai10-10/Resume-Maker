import React, {Component} from 'react';
import {connect} from 'react-redux';
import PDFShowComponent from '../../component/PDFShowComponent';
import {exportPdfAction,logoutExportPdfAction} from '../../redux/actions/Action';

export class PDFShowContainer extends Component {
  render() {
    return <PDFShowComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    statusPdf: state.exportPdfReducer.status,
    dataPdf: state.exportPdfReducer.data,
    loadingPdf: state.exportPdfReducer.loading,
    messagePdf: state.exportPdfReducer.message,
    errorPdf: state.exportPdfReducer.error,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    exportPdfAction: (input) => dispatch(exportPdfAction(input)),
    logoutExportPdfAction: () => dispatch(logoutExportPdfAction()),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PDFShowContainer);


