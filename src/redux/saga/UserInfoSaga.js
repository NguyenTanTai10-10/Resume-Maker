import {INFO_USER,INFO_USER_SUCCESS,INFO_USER_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* UserInfoFlow(action) {
    try {
		const response = yield API.InforUser(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: INFO_USER_SUCCESS, data: response
			});
		} else {
			yield put({
				type: INFO_USER_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: INFO_USER_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchUserInfo() {
    yield takeEvery(INFO_USER, UserInfoFlow);
}