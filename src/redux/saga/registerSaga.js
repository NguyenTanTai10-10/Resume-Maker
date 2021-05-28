import {REGISTER,REGISTER_SUCCESS,REGISTER_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* RegisterFlow(action) {
    try {
		const response = yield API.Register(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: REGISTER_SUCCESS, data: response
			});
		} else {
			yield put({
				type: REGISTER_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: REGISTER_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchRegister() {
    yield takeEvery(REGISTER, RegisterFlow);
}