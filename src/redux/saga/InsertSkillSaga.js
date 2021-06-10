import {INSERT_SKILL,INSERT_SKILL_SUCCESS,INSERT_SKILL_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* InsertSkillFlow(action) {
    try {
		const response = yield API.insertSkill(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: INSERT_SKILL_SUCCESS, data: response
			});
		} else {
			yield put({
				type: INSERT_SKILL_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: INSERT_SKILL_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchInsertSkill() {
    yield takeEvery(INSERT_SKILL, InsertSkillFlow);
}