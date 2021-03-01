import {combineReducers} from 'redux'
import jobsReducer from './jobs'
import applicationReducer from './application'
import resumeReducer from './resume'
import accountReducer from './account'

const rootReducer = combineReducers({
    jobs: jobsReducer,
    application: applicationReducer,
    resume: resumeReducer,
    account: accountReducer
})

export default rootReducer