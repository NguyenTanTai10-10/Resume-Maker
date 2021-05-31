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
   // console.log(state.infoUserReducer);
   return {
      statusUser: state.infoUserReducer.status,
      dataUser: state.infoUserReducer.data,
      loadingUser: state.infoUserReducer.loading,
      messageUser: state.infoUserReducer.message,
      errorUser: state.infoUserReducer.error,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      infoUserAction: (input) => dispatch(infoUserAction(input)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);


