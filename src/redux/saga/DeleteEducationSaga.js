import {DELETE_EDUCATION,DELETE_EDUCATION_SUCCESS,DELETE_EDUCATION_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* DeleteEducationFlow(action) {
    try {
		const response = yield API.DeleteEducation(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: DELETE_EDUCATION_SUCCESS, data: response
			});
		} else {
			yield put({
				type: DELETE_EDUCATION_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: DELETE_EDUCATION_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchDeleteEducation() {
    yield takeEvery(DELETE_EDUCATION, DeleteEducationFlow);
}