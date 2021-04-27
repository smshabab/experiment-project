import * as actionTypes from '../actions/actionTypes';

const initialState = {
    logged: false,
    isRegistered: false,
    displayDetails: false,
    displayListing: false,
    userDetailsPayload: {},
    userListingPayload: []
};


const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.AUTH_LOGIN:
            return {...state, logged: !state.logged}
        case actionTypes.SET_USER:
            return {...state, userDetailsPayload: action.userDetailsPayload, logged: true}
        case actionTypes.SET_DATA:
            return {...state, userListingPayload: action.userListingPayload}
        case 'ON_CLICK_DETAILS':
            return{
                ...state,
                displayDetails: true,
                displayListing: false
            }
        case 'ON_CLICK_LISTING':
            return{
                ...state,
                displayDetails: false,
                displayListing: true
            }
        case 'ON_CLICK_LOGOUT':
            return{
                ...state,
                logged: false
            }
        default:
            return state;
    }
};

export default rootReducer;