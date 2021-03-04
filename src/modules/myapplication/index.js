//Actions
const GET_MY_APPLICATION = 'get_my_application'
const UPDATE_MY_APPLICATION = 'update_my_application'
const POST_APPLICATION_CANCEL = 'post_application_cancel'
const UPDATE_POST_APPLICATION_CANCEL = 'update_post_application_cancel'

export const types = {
    GET_MY_APPLICATION,
    UPDATE_MY_APPLICATION,
    POST_APPLICATION_CANCEL,
    UPDATE_POST_APPLICATION_CANCEL
}

//Action creators
const getMyApplication = payload => ({
    type: GET_MY_APPLICATION,
    payload
})


const updateMyApplication = data => ({
    type: UPDATE_MY_APPLICATION,
    data
});

const postApplicationCancel = payload => ({
    type: POST_APPLICATION_CANCEL,
    payload
})

const updatePostApplicationCancel = data => ({
    type: UPDATE_POST_APPLICATION_CANCEL,
    data
})



export const actions = {
    getMyApplication,
    updateMyApplication,
    postApplicationCancel,
    updatePostApplicationCancel
}

const initialState = {
    myApplication: null,
    postApplicationCancel: null
}
//Reducers
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_MY_APPLICATION: {
            return {
                ...state,
                myApplication: action.data
            }
        }
        case UPDATE_POST_APPLICATION_CANCEL: {
            return {
                ...state,
                postApplicationCancel: action.data
            }
        }
        default:
            return state;
    }
}

export default reducer