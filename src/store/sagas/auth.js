import { put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios';
import * as actions from '../actions/auth';


const authUserAsync = async () => {
    return axios.get('https://dummy-data-99218-default-rtdb.firebaseio.com/user-info.json')
        .then((response) => ({ response }))
        .catch((error) => ({error}));        
}

const uploadUserAsync = async (payload) => {
    axios.post('https://dummy-data-99218-default-rtdb.firebaseio.com/user-info.json', payload)
        .then(response=>({response}))
        .catch(error=>({error}));
};

function* authUser({ payload }) {
    const {email, password} = yield payload;

    const {response} = yield call(authUserAsync);

    yield console.log(response);

    if(response) {
        let fetctRows = [];
        let userDetailsPayload ={};
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
                userDetailsPayload = {
                    firstName: fetctRows[userIndex].firstName,
                    lastName: fetctRows[userIndex].lastName,
                    email: fetctRows[userIndex].email,
                    password: fetctRows[userIndex].password
                }
            }
        }

        if(varifyUser)
        {
            yield put(actions.setUser(userDetailsPayload))
        }
    }
}

function* uploadUser({payload}){
    yield call(uploadUserAsync, payload);
}


function* fetchData(action) {
    const {response, error} = yield call(authUserAsync);

    if(response) {
        yield put(actions.setData(response.data));
    }
    else {
        console.log(error);
    }
}


function* mySaga() {
    yield takeLatest("AUTH_USER", authUser);
    yield takeLatest("FETCH_DATA", fetchData);
    yield takeLatest("SUBMIT_ON_REGISTRATION", uploadUser);
}

export default mySaga;