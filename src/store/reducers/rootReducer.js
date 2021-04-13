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

    if(action.type === 'SUBMIT_ON_REGISTRATION'){

        axios.get('https://dummy-data-99218-default-rtdb.firebaseio.com/user-info.json')
            .then(response=>{
                let fetctRows = [];
                let checkEmail = true;
                for(let key in response.data){
                    fetctRows.push({
                        ...response.data[key],
                        id: key
                    })
                }
                for(let i=0; i<fetctRows.length; i++){
                    console.log();
                    if(fetctRows[i].email === action.payload.email){
                        checkEmail = false;
                    }
                }
                if(checkEmail){
                    axios.post('https://dummy-data-99218-default-rtdb.firebaseio.com/user-info.json', action.payload)
                        .then(response=>{
                            return {
                                ...state,
                                isRegistered: true
                            };
                        
                        })
                        .catch(error=>{
                            console.log("Data Upload Error"+error);
                        });
                }else{
                    console.log("Email already exsists.");
                }
                
            })
            .catch(error=>{
                console.log("error"+error);
            });
        
        
    }else if(action.type === 'SUBMIT_ON_LOGIN'){
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
                    if(fetctRows[i].email === action.payload.email && fetctRows[i].password === action.payload.password){
                        varifyUser = true;
                        userIndex = i;
                    }
                }
                if(varifyUser){
                    console.log("User can login");
                    return{
                        ...state,
                        logged: true,
                        userDetailsPayload:{
                            firstName: fetctRows[userIndex].firstName,
                            lastName: fetctRows[userIndex].lastName,
                            email: fetctRows[userIndex].email,
                            password: fetctRows[userIndex].password
                        },
                        userListingPayload: fetctRows
                    };
                }else{
                    console.log("Wrong email or password");
                }
            })
            .catch(error=>{
                console.log("error"+error);
            });
    }else if(action.type === 'ON_CLICK_DETAILS'){
        return{
            ...state,
            displayDetails: true,
            displayListing: false

        };
    }else if(action.type === 'ON_CLICK_LISTING'){
        return{
            ...state,
            displayDetails: false,
            displayListing: true

        };
    }
    return state;
};

export default rootReducer;