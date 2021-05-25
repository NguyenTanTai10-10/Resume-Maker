import {LISTCV, LISTCV_SUCCESS, LISTCV_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* ListCVFlow(action) {
    try {
		const response = yield API.ListCV(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: LISTCV_SUCCESS, data: response
			});
		} else {
			yield put({
				type: LISTCV_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: LISTCV_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchListCV() {
    yield takeEvery(LISTCV, ListCVFlow);
}