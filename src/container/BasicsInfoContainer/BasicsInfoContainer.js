
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BasicInfoComponent from '../../component/BasicInfoComponent';
import { getIndustryAction,getLeverAction } from '../../redux/actions/Action';





export class BasicsInfoContainer extends Component {
   render() {
      return <BasicInfoComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
    // console.log("state.getIndustryReducer",state.getIndustryReducer);
   return {
    statusIndustry: state.getIndustryReducer.status,
    dataIndustry: state.getIndustryReducer.data,
    loadingIndustry: state.getIndustryReducer.loading,
    messageIndustry: state.getIndustryReducer.message,
    errorIndustry: state.getIndustryReducer.error,
    //===========================================
    statusLever: state.getLeverReducer.status,
    dataLever: state.getLeverReducer.data,
    loadingLever: state.getLeverReducer.loading,
    messageLever: state.getLeverReducer.message,
    errorLever: state.getLeverReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
   return {
    getIndustryAction: (input) => dispatch(getIndustryAction(input)),
    getLeverAction: (input) => dispatch(getLeverAction(input)),
    
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicsInfoContainer);
