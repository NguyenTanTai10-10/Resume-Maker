import {EDIT_CIVI,EDIT_CIVI_SUCCESS,EDIT_CIVI_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* EditCiviFlow(action) {
    try {
		const response = yield API.EditCivi(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: EDIT_CIVI_SUCCESS, data: response
			});
		} else {
			yield put({
				type: EDIT_CIVI_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: EDIT_CIVI_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchEditCivi() {
    yield takeEvery(EDIT_CIVI, EditCiviFlow);
}