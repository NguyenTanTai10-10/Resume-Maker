import {
    EXPORT_PDF,
    EXPORT_PDF_SUCCESS,
    EXPORT_PDF_ERROR
  } from '../actions/Action';
  const initState = {
    status: null,
    data: null,
    loading: false,
    message: null,
    error: null,
  };
  const exportPdfReducer = (state = initState, action) => {
    //   console.log('action===',action);
    switch (action.type) {
      case EXPORT_PDF:
        console.log('EXPORT_PDF');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case EXPORT_PDF_SUCCESS:
        console.log('EXPORT_PDF_SUCCESS');
        return {
          // ...state,
          status: action.data.resultCode,
          loading: false,
          data: action.data,
          error: null,
          message:''
        };
  
      case EXPORT_PDF_ERROR:
        console.log('EXPORT_PDF_ERROR');
        return {
          // ...state,
          status: null,
          loading: false,
          data: null,
  
          error: 'Lối sever',
        };
    //   case LOGOUT_EDIT_SKILL:
    //     console.log('LOGOUT_EDIT_SKILL');
    //     return {
    //       initState,
    //     };
      default:
        return state;
    }
  };
  export default exportPdfReducer;
  