import {GET_LEVER_SC6, GET_LEVER_SC6_SUCCESS,GET_LEVER_SC6_ERROR} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const getLeverSc6Reducer = (state = initState, action) => {

  switch (action.type) {
    case GET_LEVER_SC6:
      console.log('GET_LEVER_SC6');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case GET_LEVER_SC6_SUCCESS:
      console.log('GET_LEVER_SC6_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: '',
      };

    case GET_LEVER_SC6_ERROR:
      console.log('GET_LEVER_SC6_ERROR');
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
export default getLeverSc6Reducer;
