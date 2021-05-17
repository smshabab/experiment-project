import * as actionTypes from '../actions/actionTypes';

const initialState = {
    logged: false,
    isRegistered: false,
    displayDetails: false,
    displayListing: false,
    displayEditDetails: false,
    userDetailsPayload: {},
    userListingPayload: []
};


const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state, 
                userDetailsPayload: action.userDetailsPayload, 
                logged: true
            }
        case actionTypes.SET_DATA:
            return {
                ...state,
                userListingPayload: action.userListingPayload
            }
        case 'ON_CLICK_DETAILS':
            return{
                ...state,
                displayDetails: true,
                displayListing: false,
                displayEditDetails: false
            }
        case 'ON_CLICK_EDIT_DETAILS':
            return{
                ...state,
                displayDetails: false,
                displayListing: false,
                displayEditDetails: true
            }
        case 'ON_CLICK_LISTING':
            return{
                ...state,
                displayDetails: false,
                displayListing: true,
                displayEditDetails: false
            }
        case 'ON_CLICK_LOGOUT':
            return{
                ...state,
                logged: false
            }
        case actionTypes.SUBMIT_ON_REGISTRATION:
            return{
                ...state,
                isRegistered: true
            }
        case actionTypes.CHANGE_STATE_IS_REGISTERED:
            return{
                ...state,
                isRegistered: false
            }
        case actionTypes.UPDATE_USER_DETAILS:
            return{
                ...state,
                displayDetails: true,
                displayListing: false,
                displayEditDetails: false
            }
        default:
            return state;
    }
};

export default rootReducer;