const initialState = {
    counter : 0
};


const rootReducer = (state = initialState, action) => {
    if(action.type === 'SUBMIT_ON_REGISTRATION'){
        console.log("Redux is working perfectly!");
    }
    return state;
};

export default rootReducer;