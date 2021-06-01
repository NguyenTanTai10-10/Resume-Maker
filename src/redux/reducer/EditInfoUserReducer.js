import {EDIT_INFO_USER,EDIT_INFO_USER_SUCCESS,EDIT_INFO_USER_ERROR} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const editInfoUserReducer = (state = initState, action) => {
  // console.log('action===', action);
  switch (action.type) {
    case EDIT_INFO_USER:
      console.log('EDIT_INFO_USER');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case EDIT_INFO_USER_SUCCESS:
      console.log('EDIT_INFO_USER_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: action.data.result_code===1?'Cập nhật thông tin thành công':'',
      };

    case EDIT_INFO_USER_ERROR:
      console.log('EDIT_INFO_USER_ERROR');
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
export default editInfoUserReducer;
