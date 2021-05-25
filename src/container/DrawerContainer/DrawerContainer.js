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
};

const mapDispatchToProps = (dispatch) => {
    return {
      logoutAction: () => dispatch(logoutAction()),
    };
};

 export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);

