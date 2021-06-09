import {
  INSERT_EDUCATION,
  INSERT_EDUCATION_SUCCESS,
  INSERT_EDUCATION_ERROR,
  LOGOUT_INSERT_EDUCATION,
} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const insertEducationReducer = (state = initState, action) => {
  switch (action.type) {
    case INSERT_EDUCATION:
      console.log('INSERT_EDUCATION');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case INSERT_EDUCATION_SUCCESS:
      console.log('INSERT_EDUCATION_SUCCESS');
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

    case INSERT_EDUCATION_ERROR:
      console.log('INSERT_EDUCATION_ERROR');
      return {
        error: 'Lối sever',
        status: null,
        loading: false,
        data: null,
        message: 'Lối sever',
      };
    case LOGOUT_INSERT_EDUCATION:
      console.log('LOGOUT_INSERT_EDUCATION');
      return {
        initState,
      };

    default:
      return state;
  }
};
export default insertEducationReducer;
