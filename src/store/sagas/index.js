import {takeEvery} from 'redux-saga/effects';
import {loginSaga} from './auth';
import * as actionTypes from '../actions/actionTypes';


export function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_LOGIN,loginSaga);
}