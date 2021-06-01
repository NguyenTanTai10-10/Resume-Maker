import React, { Component } from 'react';
import { connect } from 'react-redux';
import BasicInfoComponent from '../../component/BasicInfoComponent';





export class BasicInfoContainer extends Component {
   render() {
      return <BasicInfoComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      // status: state.loginReducer.status,
      // data: state.loginReducer.data,
      // loading: state.loginReducer.loading,
      // message: state.loginReducer.message,
      // error: state.loginReducer.error,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      // loginAction: (username, password) => dispatch(loginAction(username, password)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoContainer);


