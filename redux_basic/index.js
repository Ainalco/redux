const {createStore}= require("redux");

//define constants
const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";


// state
const initialCounterState ={
    count : 0,
}

//action-Object-type,playload
//Increment Counter
const incrementCounter = () =>{
    return {
        type:INCREMENT,
    };
};

const decrementCounter=()=>{
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

//create Store

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
});

//dispatch action 
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());