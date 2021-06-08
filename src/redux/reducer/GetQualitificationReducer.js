import {
  GET_QUALITIFICATIONS,
  GET_QUALITIFICATIONS_SUCCESS,
  GET_QUALITIFICATIONS_ERROR,
} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const getQualitificationUserReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_QUALITIFICATIONS:
      console.log('GET_QUALITIFICATIONS');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case GET_QUALITIFICATIONS_SUCCESS:
      console.log('GET_QUALITIFICATIONS_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: '',
      };

    case GET_QUALITIFICATIONS_ERROR:
      console.log('GET_QUALITIFICATIONS_ERROR');
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
export default getQualitificationUserReducer;
