import {combineReducers} from 'redux'
import jobsReducer from './jobs'
import applicationReducer from './application'
import resumeReducer from './resume'

const rootReducer = combineReducers({
    jobs: jobsReducer,
    application: applicationReducer,
    resume: resumeReducer
})

export default rootReducer