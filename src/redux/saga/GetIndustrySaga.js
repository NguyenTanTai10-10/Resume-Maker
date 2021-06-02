import {GET_INDUSTRY,GET_INDUSTRY_SUCCESS,GET_INDUSTRY_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* GetIndustryFlow(action) {
    try {
		const response = yield API.GetIndustry(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: GET_INDUSTRY_SUCCESS, data: response
			});
		} else {
			yield put({
				type: GET_INDUSTRY_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: GET_INDUSTRY_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchGetIndustry() {
    yield takeEvery(GET_INDUSTRY, GetIndustryFlow);
}