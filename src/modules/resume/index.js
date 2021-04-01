//Actions
const GET_RESUME = 'get_resume'
const UPDATE_RESUME = 'update_resume'
const GET_RESUME_DETAIL = 'get_resume_detail'
const UPDATE_RESUME_DETAIL = 'update_resume_detail'
const POST_RESUME_DETAIL = 'post_resume_detail'
const UPDATE_POST_RESUME_DETAIL = 'update_post_resume_detail'
const DELETE_RESUME_DETAIL = 'delete_resume_detail'
const UPDATE_DELETE_RESUME_DETAIL = 'update_delete_resume_detail'
const POST_RESUME = 'post_resume'
const UPDATE_POST_RESUME = 'update_post_resume'
const GET_EDUCATION_LIST = 'get_education_list'
const UPDATE_EDUCATION_LIST = 'update_education_list'
const GET_EMPLOYMENT_LIST = 'get_employment_list'
const UPDATE_EMPLOYMENT_LIST = 'update_employment_list'
const GET_SKILL_LEVEL = 'get_skill_level'
const UPDATE_SKILL_LEVEL = 'update_skill_level'


export const types = {
    GET_RESUME,
    UPDATE_RESUME,
    GET_RESUME_DETAIL,
    UPDATE_RESUME_DETAIL,
    POST_RESUME_DETAIL,
    DELETE_RESUME_DETAIL,
    UPDATE_POST_RESUME_DETAIL,
    UPDATE_DELETE_RESUME_DETAIL,
    POST_RESUME,
    UPDATE_POST_RESUME,
    GET_EDUCATION_LIST,
    UPDATE_EDUCATION_LIST,
    GET_EMPLOYMENT_LIST,
    UPDATE_EMPLOYMENT_LIST,
    GET_SKILL_LEVEL,
    UPDATE_SKILL_LEVEL
}

//Action creators
const getResume = payload => ({
    type: GET_RESUME,
    payload
});

const updateResume = data => ({
    type: UPDATE_RESUME,
    data
});

const getResumeDetail = payload => ({
    type: GET_RESUME_DETAIL,
    payload
});

const updateResumeDetail = data => ({
    type: UPDATE_RESUME_DETAIL,
    data
});

const postResumeDetail = payload => ({
    type: POST_RESUME_DETAIL,
    payload
});

const updatePostResumeDetail = data => ({
    type: UPDATE_POST_RESUME_DETAIL,
    data
});

const deleteResumeDetail = payload => ({
    type: DELETE_RESUME_DETAIL,
    payload
})

const updateDeleteResumeDetail = data => ({
    type: UPDATE_DELETE_RESUME_DETAIL,
    data
})

const postUpdateResume = payload => ({
    type: POST_RESUME,
    payload
})

const updatePostResume = data => ({
    type: UPDATE_POST_RESUME,
    data
})

const getEmploymentList = payload => ({
    type: GET_EMPLOYMENT_LIST,
    payload
});


const updateEmploymentList = data =>({
    type: UPDATE_EMPLOYMENT_LIST,
    data
})

const getEducationList = payload => ({
    type: GET_EDUCATION_LIST,
    payload
});


const updateEducationList = data =>({
    type: UPDATE_EDUCATION_LIST,
    data
})

const getSkillLevel = payload => ({
    type: GET_SKILL_LEVEL,
    payload
});

const updateSkillLevel = data =>({
    type: UPDATE_SKILL_LEVEL,
    data
})

export const actions = {
    getResume,
    updateResume,
    getResumeDetail,
    updateResumeDetail,
    postResumeDetail,
    updatePostResumeDetail,
    deleteResumeDetail,
    updateDeleteResumeDetail,
    postUpdateResume,
    updatePostResume,
    getEmploymentList,
    updateEmploymentList,
    getEducationList,
    updateEducationList,
    getSkillLevel,
    updateSkillLevel

}

const initialState = {
    resume: null,
    resumeDetail: null,
    postResume: null,
    postResumeDetail: null,
    deleteResumeDetail: null,
    employmentList: null,
    educationList: null,
    skillLevel: null
}
//Reducers
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_RESUME: {
            return {
                ...state,
                resume: action.data
            }
        }
        case UPDATE_RESUME_DETAIL: {
            return {
                ...state,
                resumeDetail: action.data
            }
        }
        case UPDATE_POST_RESUME_DETAIL: {
            return {
                ...state,
                postResumeDetail: action.data
            }
        }
        case UPDATE_DELETE_RESUME_DETAIL: {
            return {
                ...state,
                deleteResumeDetail: action.data
            }
        }
        case UPDATE_POST_RESUME: {
            return {
                ...state,
                postResume: action.data
            }
        }
        case UPDATE_EMPLOYMENT_LIST: {
            return {
                ...state,
                employmentList: action.data
            }
        }
        case UPDATE_EDUCATION_LIST: {
            return {
                ...state,
                educationList: action.data
            }
        }
        case UPDATE_SKILL_LEVEL: {
            return {
                ...state,
                skillLevel: action.data
            }
        }
        default:
            return state;
    }
}

export default reducer