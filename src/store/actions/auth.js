import * as actionTypes from './actionTypes';

export function loginSucceeded(user) {
    return {
      type: 'LOGIN_SUCCEEDED',
      user
    }
  }
  
  export function requestLogin(user) {
    return {
      type: 'LOGIN_REQUESTED',
      user
    }
  }
  
  export function loginFailed(user) {
    return {
      type: 'LOGIN_FAILED',
      user
    }
  }

  export function signIn(user){
    return{
      type: 'LOGIN',
      user
    }
  }