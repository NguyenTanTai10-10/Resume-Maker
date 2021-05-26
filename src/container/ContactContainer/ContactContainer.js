import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactComponent from '../../component/ContactComponent';
import { getCityAction } from '../../redux/actions/Action';





export class ContactContainer extends Component {
   render() {
      return <ContactComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      statusCity: state.getCityReducer.status,
      dataCity: state.getCityReducer.data,
      loadingCity: state.getCityReducer.loading,
      messageCity: state.getCityReducer.message,
      errorCity: state.getCityReducer.error,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getCityAction: (input) => dispatch(getCityAction(input)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);

