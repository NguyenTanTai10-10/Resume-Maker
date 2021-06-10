import {GET_LEVER_SC6,GET_LEVER_SC6_SUCCESS,GET_LEVER_SC6_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* GetLeverSc6Flow(action) {
    try {
		const response = yield API.GetLeverSc6(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: GET_LEVER_SC6_SUCCESS, data: response
			});
		} else {
			yield put({
				type: GET_LEVER_SC6_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: GET_LEVER_SC6_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchGetLeverSc6() {
    yield takeEvery(GET_LEVER_SC6, GetLeverSc6Flow);
}