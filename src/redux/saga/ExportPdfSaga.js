import {EXPORT_PDF,EXPORT_PDF_SUCCESS,EXPORT_PDF_ERROR} from '../actions/Action';

import { call, takeEvery, put } from 'redux-saga/effects';
import { API } from '../api/API';


function* ExportPdfFlow(action) {
    try {
		const response = yield API.ExportPdf(action.input);
		// console.log('response - updateCheckListApi: ', response)

		if (response !== null && response !== undefined) {
			yield put({ type: EXPORT_PDF_SUCCESS, data: response
			});
		} else {
			yield put({
				type: EXPORT_PDF_ERROR,
				error: "Lỗi Sever"
			});
		}
	} catch (error) {
		yield put({
			type: EXPORT_PDF_ERROR,
			error: "Lỗi Sever"
		});
	}
}

export function* watchExportPdf() {
    yield takeEvery(EXPORT_PDF, ExportPdfFlow);
}