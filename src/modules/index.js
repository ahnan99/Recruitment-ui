import { combineReducers } from 'redux'
import jobsReducer from './jobs'
import applicationReducer from './application'
import resumeReducer from './resume'
import accountReducer from './account'
import myApplicationReducer from './myapplication'
import messageReducer from './message'
import referReduce from './refer'

const rootReducer = combineReducers({
    jobs: jobsReducer,
    application: applicationReducer,
    resume: resumeReducer,
    account: accountReducer,
    myApplication: myApplicationReducer,
    message: messageReducer,
    refer: referReduce
})

export default rootReducer