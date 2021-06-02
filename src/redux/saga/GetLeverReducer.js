import {GET_LEVER,GET_LEVER_SUCCESS,GET_LEVER_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* GetLeverFlow(action) {
    try {
		const response = yield API.GetLever(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: GET_LEVER_SUCCESS, data: response
			});
		} else {
			yield put({
				type: GET_LEVER_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: GET_LEVER_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchGetLever() {
    yield takeEvery(GET_LEVER, GetLeverFlow);
}