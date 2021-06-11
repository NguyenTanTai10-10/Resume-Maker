import {INSERT_LANGUAGE,INSERT_LANGUAGE_SUCCESS,INSERT_LANGUAGE_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* InsertLanguageFlow(action) {
    try {
		const response = yield API.InsertLanguage(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: INSERT_LANGUAGE_SUCCESS, data: response
			});
		} else {
			yield put({
				type: INSERT_LANGUAGE_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: INSERT_LANGUAGE_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchInsertLanguage() {
    yield takeEvery(INSERT_LANGUAGE, InsertLanguageFlow);
}