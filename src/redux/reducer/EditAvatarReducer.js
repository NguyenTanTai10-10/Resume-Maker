import {EDIT_AVATAR,EDIT_AVATAR_SUCCESS,EDIT_AVATAR_ERROR} from '../actions/Action';
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
    case EDIT_AVATAR:
      console.log('EDIT_AVATAR');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case EDIT_AVATAR_SUCCESS:
      console.log('EDIT_AVATAR_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: '',
      };

    case EDIT_AVATAR_ERROR:
      console.log('EDIT_AVATAR_ERROR');
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
