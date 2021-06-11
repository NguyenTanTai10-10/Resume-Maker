import {GET_EDIT_LANGUAGE,GET_EDIT_LANGUAGE_SUCCESS,GET_EDIT_LANGUAGE_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* GetEditLangFlow(action) {
    try {
		const response = yield API.GetEditLang(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: GET_EDIT_LANGUAGE_SUCCESS, data: response
			});
		} else {
			yield put({
				type: GET_EDIT_LANGUAGE_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: GET_EDIT_LANGUAGE_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchGetEditLang() {
    yield takeEvery(GET_EDIT_LANGUAGE, GetEditLangFlow);
}