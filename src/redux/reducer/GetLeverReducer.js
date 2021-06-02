import {GET_LEVER, GET_LEVER_SUCCESS,GET_LEVER_ERROR} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const getLeverReducer = (state = initState, action) => {

  switch (action.type) {
    case GET_LEVER:
      console.log('GET_LEVER');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case GET_LEVER_SUCCESS:
      console.log('GET_LEVER_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: '',
      };

    case GET_LEVER_ERROR:
      console.log('GET_LEVER_ERROR');
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
export default getLeverReducer;
