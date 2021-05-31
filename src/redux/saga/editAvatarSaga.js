import {EDITAVATAR,EDITAVATAR_SUCCESS,EDITAVATAR_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* EditAvatarFlow(action) {
    try {
		const response = yield API.EditAvatar(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: EDITAVATAR_SUCCESS, data: response
			});
		} else {
			yield put({
				type: EDITAVATAR_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: EDITAVATAR_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchEditAvatar() {
    yield takeEvery(EDITAVATAR, EditAvatarFlow);
}