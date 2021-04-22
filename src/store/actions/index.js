import React from 'react';
import {requestLogin, loginSucceeded, loginFailed, signIn} from './auth';


export const logInUser = (user) => {
  return (dispatch) => {
    dispatch(requestLogin(user));
    return signIn(user)
      .then((res) => {
        dispatch(loginSucceeded(res))
        return res
      })
      .catch((err) =>{
        dispatch(loginFailed(user))
    });
  }
}