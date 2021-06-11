import {ADD_LANGUAGE,ADD_LANGUAGE_SUCCESS,ADD_LANGUAGE_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* AddLanguageFlow(action) {
    try {
		const response = yield API.AddLanguage(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: ADD_LANGUAGE_SUCCESS, data: response
			});
		} else {
			yield put({
				type: ADD_LANGUAGE_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: ADD_LANGUAGE_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchAddLanguage() {
    yield takeEvery(ADD_LANGUAGE, AddLanguageFlow);
}