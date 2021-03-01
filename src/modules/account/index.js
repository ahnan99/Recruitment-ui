//Actions
const GET_ACCOUNT_INFO = 'get_account_info'
const UPDATE_ACCOUNT_INFO = 'update_account_info'
const POST_ACCOUNT_INFO = 'post_account_info'
const UPDATE_POST_ACCOUNT_INFO = 'update_post_account_info'
const GET_QRCODE = 'get_QRCode'
const UPDATE_QRCODE = 'update_QRCode'

export const types = {
    GET_ACCOUNT_INFO,
    POST_ACCOUNT_INFO,
    UPDATE_POST_ACCOUNT_INFO,
    GET_QRCODE
}

//Action creators
const getAccountInfo = payload => ({
    type: GET_ACCOUNT_INFO,
    payload
})

const updateAccountInfo = response => ({
    type: UPDATE_ACCOUNT_INFO,
    response
})

const postAccountInfo = payload => ({
    type: POST_ACCOUNT_INFO,
    payload
});

const updatePostAccountInfo = response => ({
    type: UPDATE_POST_ACCOUNT_INFO,
    response
})

const getQRCode = payload => ({
    type: GET_QRCODE,
    payload
})

const updateQRCode = response => ({
    type: UPDATE_QRCODE,
    response
})

export const actions = {
    getAccountInfo,
    postAccountInfo,
    updatePostAccountInfo,
    getQRCode,
    updateAccountInfo,
    updateQRCode
}

const initialState = {
    accountInfo: null,
    postAccountInfo: null,
    qrCode: null
}
//Reducers
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_ACCOUNT_INFO: {
            return {
                ...state,
                accountInfo: action.response
            }
        }
        case UPDATE_POST_ACCOUNT_INFO: {
            return {
                ...state,
                postAccountInfo: action.response
            }
        }
        case UPDATE_QRCODE: {
            return {
                ...state,
                qrCode: action.response
            }
        }

        default:
            return state;
    }
}

export default reducer