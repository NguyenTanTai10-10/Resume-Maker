import {INSERT_EDUCATION,INSERT_EDUCATION_SUCCESS,INSERT_EDUCATION_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* InsertEducationFlow(action) {
    try {
		const response = yield API.insertEducation(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: INSERT_EDUCATION_SUCCESS, data: response
			});
		} else {
			yield put({
				type: INSERT_EDUCATION_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: INSERT_EDUCATION_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchInsertEducation() {
    yield takeEvery(INSERT_EDUCATION, InsertEducationFlow);
}