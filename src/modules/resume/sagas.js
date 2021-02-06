import { takeLatest, all, call, put } from 'redux-saga/effects'
import { actions, types } from '../resume'
import axios from 'axios'

//watchers
function* getResumeWatch() {
    yield takeLatest(types.GET_RESUME, getResumeWorker)
}

function* getResumeDetailWatch() {
    yield takeLatest(types.GET_RESUME_DETAIL, getResumeDetialWorker)
}

function* getEmploymentListlWatch() {
    yield takeLatest(types.GET_EMPLOYMENT_LIST, getEmploymentListWorker)
}

function* getEducationListWatch() {
    yield takeLatest(types.GET_EDUCATION_LIST, getEducationListWorker)
}

function* postResumeDetailWatch() {
    yield takeLatest(types.POST_RESUME_DETAIL, postResumeDetailWorker)
}

function* deleteResumeDetailWatch() {
    yield takeLatest(types.DELETE_RESUME_DETAIL, deleteResumeDetailWorker)
}

function* postResumeWatch() {
    yield takeLatest(types.POST_RESUME, postResumeWorker)
}

export function getResume(data) {
    return axios.get('/hunters/get_resume', {
        params: data
    })
}

export function getResumeDetail(data) {
    return axios.get('/hunters/getResumeDetailList', {
        params: data
    })
}

export function getEmploymentList() {
    return axios.get('/public/getDicListByKind', {
        params: { kindID: "statusJob" }
    })
}


export function getEducationList() {
    return axios.get('/public/getDicListByKind', {
        params: { kindID: "education" }
    })
}


export function postResumeDetail(data) {
    return axios.post('/hunters/update_resume_detail', data)
}

export function deleteResumeDetail(data) {
    return axios.post('/hunters/del_resume_detail', data)
}

export function postResume(data) {
    return axios.post('/hunters/update_resume', data)
}


//workers
function* getResumeWorker(action) {
    try {
        const response = yield call(getResume, action.payload)
        yield put(actions.updateResume(response.data))
    } catch (error) {
        yield console.log(error)
    }
}

function* getResumeDetialWorker(action) {
    try {
        const response = yield call(getResumeDetail, action.payload)
        yield put(actions.updateResumeDetail(response.data))
    } catch (error) {
        yield console.log(error)
    }
}

function* getEducationListWorker(action) {
    try {
        const response = yield call(getEducationList, action.payload)
        yield put(actions.updateEducationList(response.data))
    } catch (error) {
        yield console.log(error)
    }
}

function* getEmploymentListWorker(action) {
    try {
        const response = yield call(getEmploymentList, action.payload)
        yield put(actions.updateEmploymentList(response.data))
    } catch (error) {
        yield console.log(error)
    }
}

function* postResumeWorker(action) {
    try {
        const response = yield call(postResume, action.payload)
        yield put(actions.updatePostResume(response.data))
    } catch (error) {
        yield console.log(error)
    }
}

function* postResumeDetailWorker(action) {
    try {
        const response = yield call(postResumeDetail, action.payload)
        yield put(actions.updatePostResumeDetail(response.data))
    } catch (error) {
        yield console.log(error)
    }
}

function* deleteResumeDetailWorker(action) {
    try {
        const response = yield call(deleteResumeDetail, action.payload)
        yield put(actions.updateDeleteResumeDetail(response.data))
    } catch (error) {
        yield console.log(error)
    }
}


export const workers = {
    getResumeWorker,
    getResumeDetialWorker,
    postResumeWorker,
    postResumeDetailWorker,
    deleteResumeDetailWorker
}

export default function* saga() {
    yield all([
        getResumeWatch(),
        postResumeWatch(),
        getResumeDetailWatch(),
        postResumeDetailWatch(),
        deleteResumeDetailWatch(),
        getEmploymentListlWatch(),
        getEducationListWatch()
    ])
}