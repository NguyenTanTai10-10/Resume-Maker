import {CHANGE_PASS,CHANGE_PASS_SUCCESS,CHANGE_PASS_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* ChangePassFlow(action) {
    try {
		const response = yield API.ChangePass(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: CHANGE_PASS_SUCCESS, data: response
			});
		} else {
			yield put({
				type: CHANGE_PASS_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: CHANGE_PASS_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchChangePass() {
    yield takeEvery(CHANGE_PASS, ChangePassFlow);
}