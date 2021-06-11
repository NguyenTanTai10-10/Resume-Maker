import {EDIT_LANGUAGE,EDIT_LANGUAGE_SUCCESS,EDIT_LANGUAGE_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* EditLangFlow(action) {
    try {
		const response = yield API.EditLang(action.input);

		if (response !== null && response !== undefined) {
			yield put({ type: EDIT_LANGUAGE_SUCCESS, data: response
			});
		} else {
			yield put({
				type: EDIT_LANGUAGE_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: EDIT_LANGUAGE_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchEditLang() {
    yield takeEvery(EDIT_LANGUAGE, EditLangFlow);
}