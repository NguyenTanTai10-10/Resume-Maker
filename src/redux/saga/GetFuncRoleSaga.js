import {GET_FUNCTIONS_ROLE,GET_FUNCTIONS_ROLE_SUCCESS,GET_FUNCTIONS_ROLE_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* GetFuncRoleFlow(action) {
    try {
		const response = yield API.GetFunctionRole(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: GET_FUNCTIONS_ROLE_SUCCESS, data: response
			});
		} else {
			yield put({
				type: GET_FUNCTIONS_ROLE_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: GET_FUNCTIONS_ROLE_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchGetFuncRole() {
    yield takeEvery(GET_FUNCTIONS_ROLE, GetFuncRoleFlow);
}