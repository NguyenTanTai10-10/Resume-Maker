import {GETCITY, GETCITY_SUCCESS, GETCITY_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* GetCityFlow(action) {
    try {
		const response = yield API.GetCity(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: GETCITY_SUCCESS, data: response
			});
		} else {
			yield put({
				type: GETCITY_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: GETCITY_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchGetCity() {
    yield takeEvery(GETCITY, GetCityFlow);
}