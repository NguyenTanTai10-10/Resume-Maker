import {INFO_USER,INFO_USER_SUCCESS,INFO_USER_ERROR} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const infoUserReducer = (state = initState, action) => {
  // console.log('action===', action);
  switch (action.type) {
    case INFO_USER:
      console.log('INFO_USER');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case INFO_USER_SUCCESS:
      console.log('INFO_USER_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: '',
      };

    case INFO_USER_ERROR:
      console.log('INFO_USER_ERROR');
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
export default infoUserReducer;
