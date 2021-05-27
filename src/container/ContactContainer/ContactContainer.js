import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactComponent from '../../component/ContactComponent';
import { getCityAction,checkEmailAction,registerAction } from '../../redux/actions/Action';





export class ContactContainer extends Component {
   render() {
      return <ContactComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   console.log(state.checkEmailReducer,);
   return {
      statusCity: state.getCityReducer.status,
      dataCity: state.getCityReducer.data,
      loadingCity: state.getCityReducer.loading,
      messageCity: state.getCityReducer.message,
      errorCity: state.getCityReducer.error,
      //=====================================
      statusEmail: state.checkEmailReducer.status,
      dataEmail: state.checkEmailReducer.data,
      loadingEmail: state.checkEmailReducer.loading,
      messageEmail: state.checkEmailReducer.message,
      errorEmail: state.checkEmailReducer.error,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getCityAction: (input) => dispatch(getCityAction(input)),
      checkEmailAction:(input)=>dispatch(checkEmailAction(input)),
      registerAction:(input)=>dispatch(registerAction(input)),


   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);

