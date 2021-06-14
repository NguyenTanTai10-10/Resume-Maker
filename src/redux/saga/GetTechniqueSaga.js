import {GET_TECHNIQUE,GET_TECHNIQUE_SUCCESS,GET_TECHNIQUE_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* GetTechniqueFlow(action) {
    try {
		const response = yield API.getTechnique(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: GET_TECHNIQUE_SUCCESS, data: response
			});
		} else {
			yield put({
				type: GET_TECHNIQUE_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: GET_TECHNIQUE_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchGetTechnique() {
    yield takeEvery(GET_TECHNIQUE, GetTechniqueFlow);
}