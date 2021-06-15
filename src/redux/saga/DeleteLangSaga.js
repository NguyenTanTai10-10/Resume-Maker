import {DELETE_LANGUAGE,DELETE_LANGUAGE_SUCCESS,DELETE_LANGUAGE_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* DeleteLangFlow(action) {
    try {
		const response = yield API.DeleteLang(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: DELETE_LANGUAGE_SUCCESS, data: response
			});
		} else {
			yield put({
				type: DELETE_LANGUAGE_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: DELETE_LANGUAGE_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchDeleteLang() {
    yield takeEvery(DELETE_LANGUAGE, DeleteLangFlow);
}