import {combineReducers} from 'redux'
import jobsReducer from './jobs'
import applicationReducer from './application'

const rootReducer = combineReducers({
    jobs: jobsReducer,
    application: applicationReducer
})

export default rootReducer