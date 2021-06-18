import React, {Component} from 'react';
import {connect} from 'react-redux';
import BasicInfoComponent from '../../component/BasicInfoComponent';
import {
  getIndustryAction,
  getLeverAction,
  getCityAction,
  editCiviAction,
  infoUserAction,
  editInfoUserAction,
  logoutEditCiviAction
  
} from '../../redux/actions/Action';

export class BasicsInfoContainer extends Component {
  render() {
    return <BasicInfoComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  console.log(state.editCiviReducer);

  return {
    statusIndustry: state.getIndustryReducer.status,
    dataIndustrys: state.getIndustryReducer.data,
    loadingIndustry: state.getIndustryReducer.loading,
    messageIndustry: state.getIndustryReducer.message,
    errorIndustry: state.getIndustryReducer.error,
    //===========================================
    statusLever: state.getLeverReducer.status,
    dataLever: state.getLeverReducer.data,
    loadingLever: state.getLeverReducer.loading,
    messageLever: state.getLeverReducer.message,
    errorLever: state.getLeverReducer.error,
    //========================================
    statusCity: state.getCityReducer.status,
    dataCity: state.getCityReducer.data,
    loadingCity: state.getCityReducer.loading,
    messageCity: state.getCityReducer.message,
    errorCity: state.getCityReducer.error,
    //========================================
    statusEditCv: state.editCiviReducer.status,
    dataEditCv: state.editCiviReducer.data,
    loadingEditCv: state.editCiviReducer.loading,
    messageEditCv: state.editCiviReducer.message,
    errorEditCv: state.editCiviReducer.error,
    //======================================
    statusUser: state.userInfoReducer.status,
    dataUser: state.userInfoReducer.data,
    loadingUser: state.userInfoReducer.loading,
    messageUser: state.userInfoReducer.message,
    errorUser: state.userInfoReducer.error,
   
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIndustryAction: (input) => dispatch(getIndustryAction(input)),
    getLeverAction: (input) => dispatch(getLeverAction(input)),
    getCityAction: (input) => dispatch(getCityAction(input)),
    editCiviAction: (input) => dispatch(editCiviAction(input)),
    infoUserAction: (input) => dispatch(infoUserAction(input)),
    editInfoUserAction: (input) => dispatch(editInfoUserAction(input)),
    logoutEditCiviAction: (input) => dispatch(logoutEditCiviAction(input)),
    
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicsInfoContainer);
