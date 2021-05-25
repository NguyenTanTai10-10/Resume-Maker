import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListCVComponent from '../../component/ListCVComponent';
import { listCvAction } from '../../redux/actions/Action';




export class ListCVContainer extends Component {
   render() {
      return <ListCVComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      status: state.listCVReducer.status,
      data: state.listCVReducer.data,
      loading: state.listCVReducer.loading,
      message: state.listCVReducer.message,
      error: state.listCVReducer.error,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      listCvAction: (input) => dispatch(listCvAction(input)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCVContainer);


