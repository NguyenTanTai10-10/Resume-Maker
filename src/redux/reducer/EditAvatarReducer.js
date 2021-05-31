import {EDITAVATAR,EDITAVATAR_SUCCESS,EDITAVATAR_ERROR} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const editAvatarReducer = (state = initState, action) => {
  // console.log('action===', action);
  switch (action.type) {
    case EDITAVATAR:
      console.log('EDITAVATAR');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case EDITAVATAR_SUCCESS:
      console.log('EDITAVATAR_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: '',
      };

    case EDITAVATAR_ERROR:
      console.log('EDITAVATAR_ERROR');
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
export default editAvatarReducer;
