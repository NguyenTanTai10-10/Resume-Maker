import {GET_INDUSTRY,GET_INDUSTRY_SUCCESS,GET_INDUSTRY_ERROR} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const getIndustryReducer = (state = initState, action) => {

  switch (action.type) {
    case GET_INDUSTRY:
      console.log('GET_INDUSTRY');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case GET_INDUSTRY_SUCCESS:
      console.log('GET_INDUSTRY_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: '',
      };

    case GET_INDUSTRY_ERROR:
      console.log('GET_INDUSTRY_ERROR');
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
export default getIndustryReducer;
