import {
  EDIT_EDUCATION,
  EDIT_EDUCATION_SUCCESS,
  EDIT_EDUCATION_ERROR,
  LOGOUT_EDIT_EDUCATION,
} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const editEducationReducer = (state = initState, action) => {
  switch (action.type) {
    case EDIT_EDUCATION:
      console.log('EDIT_EDUCATION');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case EDIT_EDUCATION_SUCCESS:
      console.log('EDIT_EDUCATION_SUCCESS');
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

    case EDIT_EDUCATION_ERROR:
      console.log('EDIT_EDUCATION_ERROR');
      return {
        error: 'Lối sever',
        status: null,
        loading: false,
        data: null,
        message: 'Lối sever',
      };
    case LOGOUT_EDIT_EDUCATION:
      console.log('LOGOUT_EDIT_EDUCATION');
      return {
        initState,
      };

    default:
      return state;
  }
};
export default editEducationReducer;
