import { takeLatest, call, put, all } from 'redux-saga/effects'
import { actions, types } from './index'
import axios from 'axios'

//watchers
function* getPosterListWatch() {
    yield takeLatest(types.GET_POSTER_LIST, getPosterListWorker)
}

function* getPosterWatch() {
    yield takeLatest(types.GET_POSTER, getPosterWorker)
}

function* getMyReferralsWatch() {
    yield takeLatest(types.GET_MY_REFERRALS, getMyReferralsWorker)
}

function* getReferralsCountWatch() {
    yield takeLatest(types.GET_REFERRALS_COUNT, getReferralsCountWorker)
}



export function getPosterList(data) {
    return axios.get('/hunters/get_poster_list', {
        params: data
    })
}

export function getPoster(data) {
    return axios.get('/outfiles/generate_poster', {
        params: data
    })
}

export function getMyReferrals(data) {
    return axios.get('/hunters/get_my_referrals_list', {
        params: data
    })
}

export function getReferralsCount(data) {
    return axios.get('/hunters/get_my_referrals_count', {
        params: data
    })
}



//workers
function* getPosterListWorker(action) {
    try {
        const response = yield call(getPosterList, action.payload)
        yield put(actions.updatePosterList(response.data))
    } catch (error) {
        console.log(error)
    }
}

function* getPosterWorker(action) {
    try {
        const response = yield call(getPoster, action.payload)
        yield put(actions.updatePoster(response.data))
    } catch (error) {
        console.log(error)
    }
}

function* getMyReferralsWorker(action) {
    try {
        const response = yield call(getMyReferrals, action.payload)
        yield put(actions.updateMyReferrals(response.data))
    } catch (error) {
        console.log(error)
    }
}

function* getReferralsCountWorker(action) {
    try {
        const response = yield call(getReferralsCount, action.payload)
        yield put(actions.updateReferralsCount(response.data))
    } catch (error) {
        console.log(error)
    }
}


export const workers = {
    getPosterListWorker,
    getPosterWorker,
    getMyReferralsWorker,
    getReferralsCountWorker
}

export default function* saga() {
    yield all([
        getPosterListWatch(),
        getPosterWatch(),
        getMyReferralsWatch(),
        getReferralsCountWatch()
    ])
}