//Actions
const GET_JOB_LIST = 'get_job_list'
const UPDATE_JOB_LIST = 'update_job_list'
const GET_JOB_INFO = 'get_job_info'
const UPDATE_JOB_INFO = 'update_job_info'
const GET_JOB_REQUIREMENT = 'get_job_requirement'
const UPDATE_JOB_REQUIREMENT = 'update_job_requirement'
const UPDATE_JOB_SELECTED = 'update_job_selected'
const POST_APPLY_JOB = 'post_apply_job'
const UPDATE_APPLY_JOB = 'update_apply_job'
const UPDATE_FROMID = 'update_from_id'


export const types = {
    GET_JOB_LIST,
    GET_JOB_INFO,
    GET_JOB_REQUIREMENT,
    UPDATE_JOB_SELECTED,
    POST_APPLY_JOB,
    UPDATE_APPLY_JOB,
    UPDATE_FROMID
}

//Action creators
const getJobList = payload => ({
    type: GET_JOB_LIST,
    payload
});

const updateJobList = data => ({
    type: UPDATE_JOB_LIST,
    data
});

const getJobInfo = payload => ({
    type: GET_JOB_INFO,
    payload
});

const updateJobInfo = data => ({
    type: UPDATE_JOB_INFO,
    data
});

const getJobRequirement = payload => ({
    type: GET_JOB_REQUIREMENT,
    payload
});

const updateJobRequirement = data => ({
    type: UPDATE_JOB_REQUIREMENT,
    data
});

const updateJobSelected = data => ({
    type: UPDATE_JOB_SELECTED,
    data
})

const postApplyJob = payload => ({
    type: POST_APPLY_JOB,
    payload
})

const updateApplyJob = data => ({
    type: UPDATE_APPLY_JOB,
    data
})

const updateFromID = data => ({
    type: UPDATE_FROMID,
    data
})

export const actions = {
    getJobList,
    getJobInfo,
    getJobRequirement,
    updateJobList,
    updateJobInfo,
    updateJobRequirement,
    updateJobSelected,
    postApplyJob,
    updateApplyJob,
    updateFromID
}

const initialState = {
    jobList: null,
    jobInfo: null,
    jobRequirement: null,
    jobSelected: null,
    jobApplyStatus: null,
    fromID: null
}
//Reducers
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_JOB_LIST: {
            return {
                ...state,
                jobList: action.data
            }
        }
        case UPDATE_JOB_INFO: {
            return {
                ...state,
                jobInfo: action.data
            }
        }
        case UPDATE_JOB_REQUIREMENT: {
            return {
                ...state,
                jobRequirement: action.data
            }
        }
        case UPDATE_JOB_SELECTED: {
            return {
                ...state,
                jobSelected: action.data
            }
        }
        case UPDATE_APPLY_JOB: {
            return {
                ...state,
                jobApplyStatus: action.data
            }
        }
        case UPDATE_FROMID: {
            return {
                ...state,
                fromID: action.data
            }
        }
        default:
            return state;
    }
}

export default reducer