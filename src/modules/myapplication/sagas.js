import { takeLatest, call, put, all } from 'redux-saga/effects'
import { actions, types } from './index'
import axios from 'axios'

//watchers
function* getMyApplicationWatch() {
    yield takeLatest(types.GET_MY_APPLICATION, getMyApplicationWorker)
}

function* postApplicationCancelWatch() {
    yield takeLatest(types.POST_APPLICATION_CANCEL, postApplicationCacnelWorker)
}



export function getMyApplicationEndpoint(data) {
    return axios.get('/jobs/getApplyList', {
        params: data
    })
}

export function postApplicationCancelEndpoint(data) {
    return axios.post('/jobs/apply_cancel', data)
}




//workers
function* getMyApplicationWorker(action) {
    try {
        const response = yield call(getMyApplicationEndpoint, action.payload)
        yield put(actions.updateMyApplication(response.data))
    } catch (error) {
        console.log(error)
    }
}

function* postApplicationCacnelWorker(action) {
    try {
        const response = yield call(postApplicationCancelEndpoint, action.payload)
        yield put(actions.updatePostApplicationCancel(response.data))
    } catch (error) {
        console.log(error)
    }
}



export const workers = {
    postApplicationCacnelWorker,
    getMyApplicationWorker
}

export default function* saga() {
    yield all([
        getMyApplicationWatch(),
        postApplicationCancelWatch()
    ])
}