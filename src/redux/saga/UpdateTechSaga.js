import {UPDATE_TECHNIQUE,UPDATE_TECHNIQUE_SUCCESS,UPDATE_TECHNIQUE_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* UpdateTechFlow(action) {
    try {
		const response = yield API.updateTech(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: UPDATE_TECHNIQUE_SUCCESS, data: response
			});
		} else {
			yield put({
				type: UPDATE_TECHNIQUE_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: UPDATE_TECHNIQUE_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchUpdateTech() {
    yield takeEvery(UPDATE_TECHNIQUE, UpdateTechFlow);
}