import {
  DELETE_EDUCATION,
  DELETE_EDUCATION_SUCCESS,
  DELETE_EDUCATION_ERROR,
  LOGOUT_DELETE_EDUCATION,
} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const deleteEducationReducer = (state = initState, action) => {
  switch (action.type) {
    case DELETE_EDUCATION:
      console.log('DELETE_EDUCATION');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case DELETE_EDUCATION_SUCCESS:
      console.log('DELETE_EDUCATION_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message:
          action.data.result_code === 1
            ? 'Cập nhật thông tin thành công'
            : 'Cập nhật không thành công',
      };

    case DELETE_EDUCATION_ERROR:
      console.log('DELETE_EDUCATION_ERROR');
      return {
        error: 'Lối sever',
        status: null,
        loading: false,
        data: null,
        message: 'Lối sever',
      };
    case LOGOUT_DELETE_EDUCATION:
      console.log('LOGOUT_DELETE_EDUCATION');
      return {
        initState,
      };
    default:
      return state;
  }
};
export default deleteEducationReducer;
