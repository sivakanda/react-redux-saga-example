import {fork} from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import { fetchAccountList } from '../api/api';
import * as types from '../constants/actionTypes';
import { takeLatest } from 'redux-saga';

//Worker Saga
export function* fetchAccountsData({url, filter}) {
    try {
        const loading = true, done = false;
        yield put({type: types.ITEMS_IS_LOADING, isLoading:loading});
        const accountItems = yield call(fetchAccountList, url, filter);
        yield [
            put({type: types.ITEMS_IS_LOADING, isLoading:done}),
            put({type: types.ITEMS_FETCH_DATA_SUCCESS, items:accountItems})
        ];
    }
    catch (error) {
        console.log("Error occured - " + error);
        yield put({ type: types.ITEMS_HAS_ERRORED, hasErrored:true});
    }
}

//Watcher Saga
export function* watchFetchAccountData() {
    yield* takeLatest(types.ITEMS_FETCH_DATA, fetchAccountsData);
}

//Root Saga
export default function* rootSaga() {
    yield fork(watchFetchAccountData);
}

