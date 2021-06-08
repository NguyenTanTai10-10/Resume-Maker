import {GET_QUALITIFICATIONS,GET_QUALITIFICATIONS_SUCCESS,GET_QUALITIFICATIONS_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* GetQualitificationFlow(action) {
    try {
		const response = yield API.GetQualitification(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: GET_QUALITIFICATIONS_SUCCESS, data: response
			});
		} else {
			yield put({
				type: GET_QUALITIFICATIONS_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: GET_QUALITIFICATIONS_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchGetQualitification() {
    yield takeEvery(GET_QUALITIFICATIONS, GetQualitificationFlow);
}