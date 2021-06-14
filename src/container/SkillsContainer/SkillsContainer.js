import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillsComponent from '../../component/SkillsComponent';
import { getTechniqueAction } from '../../redux/actions/Action';





export class SkillsContainer extends Component {
   render() {
      return <SkillsComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      statusTech: state.getTechniqueReducer.status,
      dataTech: state.getTechniqueReducer.data,
      loadingTech: state.getTechniqueReducer.loading,
      messageTech: state.getTechniqueReducer.message,
      errorTech: state.getTechniqueReducer.error,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getTechniqueAction: (input) => dispatch(getTechniqueAction(input)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);





