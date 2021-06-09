import {EDIT_EDUCATION,EDIT_EDUCATION_SUCCESS,EDIT_EDUCATION_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* EditEducationFlow(action) {
    try {
		const response = yield API.editEducation(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: EDIT_EDUCATION_SUCCESS, data: response
			});
		} else {
			yield put({
				type: EDIT_EDUCATION_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: EDIT_EDUCATION_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchEditEducation() {
    yield takeEvery(EDIT_EDUCATION, EditEducationFlow);
}