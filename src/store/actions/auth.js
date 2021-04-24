import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
  return{
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (authData) => {
  return{
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

export const authFail = (error) => {
  return{
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password)=>{
  return dispatch => {
    dispatch(authStart());
    axios.get('https://dummy-data-99218-default-rtdb.firebaseio.com/user-info.json')
            .then(response=>{
              
                let fetctRows = [];
                let varifyUser = false;
                let userIndex;
                for(let key in response.data){
                    fetctRows.push({
                        ...response.data[key],
                        id: key
                    })
                }
                for(let i=0; i<fetctRows.length; i++){
                    console.log();
                    if(fetctRows[i].email === email && fetctRows[i].password === password){
                        varifyUser = true;
                        userIndex = i;
                    }
                }
                if(varifyUser){
                    console.log(response);
                    dispatch(authSuccess(response));
                    // return{
                    //     ...state,
                    //     logged: true,
                    //     userDetailsPayload:{
                    //         firstName: fetctRows[userIndex].firstName,
                    //         lastName: fetctRows[userIndex].lastName,
                    //         email: fetctRows[userIndex].email,
                    //         password: fetctRows[userIndex].password
                    //     },
                    //     userListingPayload: fetctRows
                    // };
                }else{
                    console.log("Wrong email or password");
                    dispatch(authFail("Wrong email or password"));
                }
            })
            .catch(error=>{
                console.log("error"+error);
                dispatch(authFail(error));
            });
  };
};