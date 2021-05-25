import {LISTCV, LISTCV_SUCCESS, LISTCV_ERROR,} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const listCVReducer = (state = initState, action) => {
  // console.log('action===', action);
  switch (action.type) {
    case LISTCV:
      console.log('LISTCV');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case LISTCV_SUCCESS:
      console.log('LISTCV_SUCCESS');
      return {
        // ...state,
        status: action.data.resultCode,
        loading: false,
        data: action.data.resultData,
        error: null,
        message: '',
      };

    case LISTCV_ERROR:
      console.log('LISTCV_ERROR');
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
export default listCVReducer;
