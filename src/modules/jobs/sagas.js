import { takeLatest, all, call, put } from 'redux-saga/effects'
import { actions, types } from '../jobs'
import axios from 'axios'

//watchers
function* jobListWatch() {
    yield takeLatest(types.GET_JOB_LIST, loadJobListWorker)
}

function* jobInfoWatch() {
    yield takeLatest(types.GET_JOB_INFO, loadJobInfoWorker)
}

function* jobRequirementWatch() {
    yield takeLatest(types.GET_JOB_REQUIREMENT, loadJobRequirementWorker)
}

function* jobApplyWatch() {
    yield takeLatest(types.POST_APPLY_JOB, applyJobWorker)
}

export function getJobList(data) {
    return axios.get('/jobs/getJobList', {
        params: data
    })
}

export function getJobInfo(data) {
    return axios.get('/jobs/getJobInfo', {
        params: data
    })
}

export function getJobRequirement(data) {
    return axios.get('/jobs/getJobRequire', {
        params: data
    })
}

export function applyJobEndpoint(data) {
    return axios.post('/jobs/apply_job', data)
}


//workers
function* loadJobListWorker(action) {
    try {
        const response = yield call(getJobList, action.payload)
        yield put(actions.updateJobList(response.data))
    } catch (error) {
        yield console.log(error)
    }
}

function* loadJobInfoWorker(action) {
    try {
        const response = yield call(getJobInfo, action.payload)
        yield put(actions.updateJobInfo(response.data))
    } catch (error) {
        yield console.log(error)
    }
}

function* loadJobRequirementWorker(action) {
    try {
        const response = yield call(getJobRequirement, action.payload)
        yield put(actions.updateJobRequirement(response.data))
    } catch (error) {
        yield console.log(error)
    }
}

function* applyJobWorker(action) {
    try {
        const response = yield call(applyJobEndpoint, action.payload)
        yield put(actions.updateApplyJob(response.data))
    } catch (error) {
        yield console.log(error)
    }
}

export const workers = {
    loadJobListWorker,
    loadJobInfoWorker,
    loadJobRequirementWorker,
    applyJobWorker
}

export default function* saga() {
    yield all([jobListWatch(),jobInfoWatch(),jobRequirementWatch(),jobApplyWatch()])
}