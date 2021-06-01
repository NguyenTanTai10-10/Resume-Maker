import {EDIT_INFO_USER,EDITAVATAR_SUCCESS,EDITAVATAR_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* EditInfoUser(action) {
    try {
		const response = yield API.EditInfoUser(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: EDITAVATAR_SUCCESS, data: response
			});
		} else {
			yield put({
				type: EDITAVATAR_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: EDITAVATAR_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchEditInfoUser() {
    yield takeEvery(EDIT_INFO_USER, EditInfoUser);
}