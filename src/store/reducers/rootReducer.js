import axios from 'axios';

const initialState = {
    logged: false,
    isRegistered: false
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
        console.log("Login Working");
    }
    return state;
};

export default rootReducer;