import { takeLatest, call, put, all } from 'redux-saga/effects'
import { actions, types } from './index'
import axios from 'axios'

//watchers
function* getAccountInfoWatch() {
    yield takeLatest(types.GET_ACCOUNT_INFO, getAccountInfoWorker)
}

function* postAccountInfoWatch() {
    yield takeLatest(types.POST_ACCOUNT_INFO, postAccountInfoWorker)
}

function* getQRCodeWatch() {
    yield takeLatest(types.GET_QRCODE, getQRCodeWorker)
}

export function getAccountInfo(data) {
    return axios.get('/hunters/get_hunter', {
        params: data
    })
}

export function postAccountInfo(data) {
    return axios.post('/hunters/change_passwd', data)
}

export function getQRCode(data) {
    return axios.get('/public/get_user_qr',{
        params: data
    })
}



//workers
function* getAccountInfoWorker(action) {
    try {
        const response = yield call(getAccountInfo, action.payload)
        yield put(actions.updateAccountInfo(response.data))
    } catch (error) {
        console.log(error)
    }
}

function* postAccountInfoWorker(action) {
    try {
        const response = yield call(postAccountInfo, action.payload)
        yield put(actions.updatePostAccountInfo(response.data))
    } catch (error) {
        console.log(error)
    }
}

function* getQRCodeWorker(action) {
    try {
        const response = yield call(getQRCode, action.payload)
        yield put(actions.updateQRCode(response.data))
    } catch (error) {
        console.log(error)
    }
}




export const workers = {
    getQRCodeWorker,
    postAccountInfoWorker,
    getAccountInfoWorker
}

export default function* saga() {
    yield all([
        getAccountInfoWatch(),
        postAccountInfoWatch(),
        getQRCodeWatch()
    ])
}