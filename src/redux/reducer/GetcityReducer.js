import {GETCITY, GETCITY_SUCCESS, GETCITY_ERROR,} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const getCityReducer = (state = initState, action) => {
  // console.log('action===', action);
  switch (action.type) {
    case GETCITY:
      console.log('GETCITY');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case GETCITY_SUCCESS:
      console.log('GETCITY_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: '',
      };

    case GETCITY_ERROR:
      console.log('GETCITY_ERROR');
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
export default getCityReducer;
