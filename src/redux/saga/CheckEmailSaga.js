import {CHECKEMAIL,CHECKEMAIL_SUCCESS,CHECKEMAIL_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* CheckEmailFlow(action) {
    try {
		const response = yield API.CheckEmail(action.input);
		console.log('response - updateCheckListApi:==== ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: CHECKEMAIL_SUCCESS, data: response
			});
		} else {
			yield put({
				type: CHECKEMAIL_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: CHECKEMAIL_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchCheckEmail() {
    yield takeEvery(CHECKEMAIL, CheckEmailFlow);
}