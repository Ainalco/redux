
//define constants
const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";


// state
const initialCounterState ={
    count : 0
}

//action-Object-type,playload
//Increment Counter
const incrementCounterAction=()=>{
    return {
        type:INCREMENT,
    };
};

const decrementCounterAction=()=>{
    return {
        type:DECREMENT,
    };
};

const counterReducer = (state=initialCounterState, action)=>{
    switch (action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            state
    }
}





//Decrement Counter
