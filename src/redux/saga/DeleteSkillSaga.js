import {DELETE_SKILL,DELETE_SKILL_SUCCESS,DELETE_SKILL_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* DeleteSkillFlow(action) {
    try {
		const response = yield API.deleteSkill(action.input);
		console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: DELETE_SKILL_SUCCESS, data: response
			});
		} else {
			yield put({
				type: DELETE_SKILL_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: DELETE_SKILL_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchDeleteSkill() {
    yield takeEvery(DELETE_SKILL, DeleteSkillFlow);
}