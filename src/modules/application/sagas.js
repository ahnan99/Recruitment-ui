import { takeLatest, call, put, all } from 'redux-saga/effects'
import { actions, types } from './index'
import axios from 'axios'

//watchers
function* loginWatch() {
    yield takeLatest(types.REQUEST_LOGIN, userLoginWorker)
}

function* registerWatch() {
    yield takeLatest(types.REQUEST_REGISTER, userRegisterWorker)
}

function* getUserInfoWatch() {
    yield takeLatest(types.GET_USER_INFO, getUserInfoWorker)
}

function* postUserInfoWatch() {
    yield takeLatest(types.POST_USER_INFO, postUserInfoWorker)
}

function* logoutWatch() {
    yield takeLatest(types.REQUEST_LOGOUT, userLogoutWorker)
}

function* confirmLoginWatch() {
    yield takeLatest(types.CONFIRM_LOGIN, confirmLoginWorker)
}

export function userLoginEndpoint(data) {
    return axios.post('/hunters/login', data)
}

export function userRegisterEndpoint(data) {
    return axios.post('/hunters/new_hunter', data)
}

export function confirmLoginEndpoint() {
    return axios.post('/knock_door')
}

export function getUserInfoEndpoint(data) {
    return axios.get('/students/get_student', {
        params: data
    })
}

export function postUserInfoEndpoint(data) {
    return axios.post('/students/new_student', data)
}

export function userLogoutEndpoint() {
    return axios.get('/hunters/logout')
}



//workers
function* userLoginWorker(action) {
    try {
        const response = yield call(userLoginEndpoint, action.payload)
        yield put(actions.userLogin(response.data))
    } catch (error) {
        yield put(actions.userLoginError(error))
    }
}

function* userRegisterWorker(action) {
    try {
        const response = yield call(userRegisterEndpoint, action.payload)
        yield put(actions.userRegister(response.data))
    } catch (error) {
        yield put(actions.userRegisterError(error))
    }
}

function* getUserInfoWorker(action) {
    try {
        const response = yield call(getUserInfoEndpoint, action.payload)
        yield put(actions.updateUserInfo(response.data))
    } catch (error) {
        console.log(error)
    }
}


function* postUserInfoWorker(action) {
    try {
        const response = yield call(postUserInfoEndpoint, action.payload)
        yield put(actions.updatePostUserInfo(response.data))
    } catch (error) {
        console.log(error)
    }
}

function* userLogoutWorker() {
    try {
        const response = yield call(userLogoutEndpoint)
        yield put(actions.userLogout(response.data))
    } catch (error) {
        console.log(error)
    }
}

function* confirmLoginWorker() {
    try {
        const response = yield call(confirmLoginEndpoint)
        yield put(actions.updateConfirmLogin(response.data))
    } catch (error) {
        yield console.log(error)
    }
}


export const workers = {
    userLoginWorker,
    userRegisterWorker,
    getUserInfoWorker,
    postUserInfoWorker,
    userLogoutWorker,
    confirmLoginWorker
}

export default function* saga() {
    yield all([
        loginWatch(),
        registerWatch(),
        getUserInfoWatch(),
        postUserInfoWatch(),
        logoutWatch(),
        confirmLoginWatch()
    ])
}