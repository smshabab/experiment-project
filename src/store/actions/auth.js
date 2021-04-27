import * as actionTypes from './actionTypes';

export const onLogin = (email, password) => {
    return { type: actionTypes.AUTH_USER, payload: { email, password } };
  };

export const setUser = (userDetailsPayload) => {
    return { type: actionTypes.SET_USER, userDetailsPayload}
}

export const setData = (userListingPayload) => {
    return { type: actionTypes.SET_DATA, userListingPayload}
}