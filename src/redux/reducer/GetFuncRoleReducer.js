import {
    GET_FUNCTIONS_ROLE,
    GET_FUNCTIONS_ROLE_SUCCESS,
    GET_FUNCTIONS_ROLE_ERROR
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const getFuncRoleReducer = (state = initState, action) => {
    switch (action.type) {
      case GET_FUNCTIONS_ROLE:
        console.log('GET_FUNCTIONS_ROLE');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case GET_FUNCTIONS_ROLE_SUCCESS:
        console.log('GET_FUNCTIONS_ROLE_SUCCESS');
        return {
          // ...state,
          status: action.data.result_code,
          loading: false,
          data: action.data.result_data,
          error: null,
          message: '',
        };
  
      case GET_FUNCTIONS_ROLE_ERROR:
        console.log('GET_FUNCTIONS_ROLE_ERROR');
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
  export default getFuncRoleReducer;
  