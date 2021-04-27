import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

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
        case 'SUBMIT_ON_REGISTRATION':
            axios.post('https://dummy-data-99218-default-rtdb.firebaseio.com/user-info.json', action.payload)
            .then(response=>{
               console.log('data uploaded successfully');
                
            })
            .catch(error=>{
               
            });
            return{
                ...state,
                isRegistered: true
            }
        default:
            return state;
    }
};

export default rootReducer;