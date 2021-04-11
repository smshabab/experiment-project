import axios from 'axios';

const initialState = {
    logged: false,
    isRegistered: false
};


const rootReducer = (state = initialState, action) => {
    if(action.type === 'SUBMIT_ON_REGISTRATION'){
        console.log("Redux is working perfectly!");
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
                for(let i=0; i<fetctRows.length(); i++){
                    console.log(fetctRows[i]);
                }
                if(checkEmail){
                    console.log("New Email");
                }else{
                    console.log("Old Email");
                }
                
            })
            .catch(error=>{
                console.log("error"+error);
            });
        // axios.post('https://dummy-data-99218-default-rtdb.firebaseio.com/user-info.json', action.payload)
        //     .then(response=>{
        //         return {
        //             ...state,
        //             isRegistered: true
        //         };
               
        //     })
        //     .catch(error=>{
        //         console.log("Data Upload Error"+error);
        //     });
        
    }
    return state;
};

export default rootReducer;