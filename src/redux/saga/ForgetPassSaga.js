import {FORGET_PASS,FORGET_PASS_SUCCESS,FORGET_PASS_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* FogetPassFlow(action) {
    try {
		const response = yield API.ForgetPass(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: FORGET_PASS_SUCCESS, data: response
			});
		} else {
			yield put({
				type: FORGET_PASS_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: FORGET_PASS_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchFogetPass() {
    yield takeEvery(FORGET_PASS, FogetPassFlow);
}