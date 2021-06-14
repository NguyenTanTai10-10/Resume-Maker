import {
    GET_TECHNIQUE,
    GET_TECHNIQUE_SUCCESS,
    GET_TECHNIQUE_ERROR
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const getTechniqueReducer = (state = initState, action) => {
    switch (action.type) {
      case GET_TECHNIQUE:
        console.log('GET_TECHNIQUE');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case GET_TECHNIQUE_SUCCESS:
        console.log('GET_TECHNIQUE_SUCCESS');
        return {
          // ...state,
          status: action.data.result_code,
          loading: false,
          data: action.data.result_data,
          error: null,
          message: '',
        };
  
      case GET_TECHNIQUE_ERROR:
        console.log('GET_TECHNIQUE_ERROR');
        return {
          // ...state,
          status: null,
          loading: false,
          data: null,
          message: 'Lối sever',
        };
  
      default:
        return state;
    }
  };
  export default getTechniqueReducer;
  