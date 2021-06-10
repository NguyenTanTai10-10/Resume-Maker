import {EDIT_SKILL,EDIT_SKILL_SUCCESS,EDIT_SKILL_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* EditSkillFlow(action) {
    try {
		const response = yield API.editSkill(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: EDIT_SKILL_SUCCESS, data: response
			});
		} else {
			yield put({
				type: EDIT_SKILL_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: EDIT_SKILL_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchEditSkill() {
    yield takeEvery(EDIT_SKILL, EditSkillFlow);
}