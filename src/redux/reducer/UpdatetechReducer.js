import {
  UPDATE_TECHNIQUE,
  UPDATE_TECHNIQUE_SUCCESS,
  UPDATE_TECHNIQUE_ERROR,
  LOGOUT_UPDATE_TECHNIQUE,
} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const updateTechReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_TECHNIQUE:
      console.log('UPDATE_TECHNIQUE');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case UPDATE_TECHNIQUE_SUCCESS:
      console.log('UPDATE_TECHNIQUE_SUCCESS');
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

    case UPDATE_TECHNIQUE_ERROR:
      console.log('UPDATE_TECHNIQUE_ERROR');
      return {
        error: 'Lối sever',
        status: null,
        loading: false,
        data: null,
        message: 'Lối sever',
      };
    case LOGOUT_UPDATE_TECHNIQUE:
      console.log('LOGOUT_UPDATE_TECHNIQUE');
      return {
        initState,
      };

    default:
      return state;
  }
};
export default updateTechReducer;
