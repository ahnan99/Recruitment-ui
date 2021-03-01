import { all, fork } from 'redux-saga/effects'
import jobsSaga from './jobs/sagas'
import applicationSaga from './application/sagas'
import resumeSaga from './resume/sagas'
import accountSaga from './account/sagas'

const sagas = [
    jobsSaga,
    applicationSaga,
    resumeSaga,
    accountSaga
]

function* rootSaga(){
    yield all(sagas.map(saga => fork(saga)))
}

export default rootSaga;