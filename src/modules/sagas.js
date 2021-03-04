import { all, fork } from 'redux-saga/effects'
import jobsSaga from './jobs/sagas'
import applicationSaga from './application/sagas'
import resumeSaga from './resume/sagas'
import accountSaga from './account/sagas'
import myApplicationSaga from './myapplication/sagas'
import messageSaga from './message/sagas'
import messageReducer from './message'

const sagas = [
    jobsSaga,
    applicationSaga,
    resumeSaga,
    accountSaga,
    myApplicationSaga,
    messageSaga,
    messageReducer
]

function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)))
}

export default rootSaga;