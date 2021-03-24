//Actions
const GET_POSTER = 'get_poster'
const UPDATE_POSTER = 'update_poster'
const GET_POSTER_LIST = 'get_poster_list'
const UPDATE_POSTER_LIST = 'update_poster_list'
const GET_MY_REFERRALS = 'get_my_referrals'
const UPDATE_MY_REFERRALS = 'update_my_referrals'
const GET_REFERRALS_COUNT = 'get_referrals_count'
const UPDATE_REFERRALS_COUNT = 'update_referrals_count'

export const types = {
    GET_POSTER,
    UPDATE_POSTER,
    GET_POSTER_LIST,
    UPDATE_POSTER_LIST,
    GET_MY_REFERRALS,
    UPDATE_MY_REFERRALS,
    GET_REFERRALS_COUNT,
    UPDATE_REFERRALS_COUNT
}

//Action creators
const getPoster = payload => ({
    type: GET_POSTER,
    payload
})


const updatePoster = data => ({
    type: UPDATE_POSTER,
    data
});

const getPosterList = payload => ({
    type: GET_POSTER_LIST,
    payload
})

const updatePosterList = data => ({
    type: UPDATE_POSTER_LIST,
    data
})

const getMyReferrals = payload => ({
    type: GET_MY_REFERRALS,
    payload
})

const updateMyReferrals = data => ({
    type: UPDATE_MY_REFERRALS,
    data
})

const getReferralsCount = payload => ({
    type: GET_REFERRALS_COUNT,
    payload
})

const updateReferralsCount = data => ({
    type: UPDATE_REFERRALS_COUNT,
    data
})

export const actions = {
    getPoster,
    updatePoster,
    getPosterList,
    updatePosterList,
    getMyReferrals,
    updateMyReferrals,
    getReferralsCount,
    updateReferralsCount
}

const initialState = {
    poster: null,
    posterList: null,
    myReferrals: null,
    referralsCount: null
}
//Reducers
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_POSTER: {
            return {
                ...state,
                poster: action.data
            }
        }
        case UPDATE_POSTER_LIST: {
            return {
                ...state,
                posterList: action.data
            }
        }
        case UPDATE_REFERRALS_COUNT: {
            return {
                ...state,
                referralsCount: action.data
            }
        }
        case UPDATE_MY_REFERRALS: {
            return {
                ...state,
                myReferrals: action.data
            }
        }
        default:
            return state;
    }
}

export default reducer