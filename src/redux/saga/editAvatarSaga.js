import {EDIT_AVATAR,EDIT_AVATAR_SUCCESS,EDIT_AVATAR_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* EditAvatarFlow(action) {
    try {
		const response = yield API.EditAvatar(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: EDIT_AVATAR_SUCCESS, data: response
			});
		} else {
			yield put({
				type: EDIT_AVATAR_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: EDIT_AVATAR_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchEditAvatar() {
    yield takeEvery(EDIT_AVATAR, EditAvatarFlow);
}