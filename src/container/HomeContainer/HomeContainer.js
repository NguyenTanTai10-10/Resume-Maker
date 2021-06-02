import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../component/home/Home';
import { infoUserAction} from "../../redux/actions/Action"




export class HomeContainer extends Component {
   render() {
      return <Home {...this.props} />;
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
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);


