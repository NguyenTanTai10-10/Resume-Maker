import {EDIT_INFO_USER,EDIT_INFO_USER_SUCCESS,EDIT_INFO_USER_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* EditInfoUserFlow(action) {
    try {
		const response = yield API.EditInfoUser(action.input);

		if (response !== null && response !== undefined) {
			yield put({ type: EDIT_INFO_USER_SUCCESS, data: response
			});
		} else {
			yield put({
				type: EDIT_INFO_USER_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: EDIT_INFO_USER_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchEditInfoUser() {
    yield takeEvery(EDIT_INFO_USER, EditInfoUserFlow);
}