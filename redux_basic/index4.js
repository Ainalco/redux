
const {createStore}= require("redux");

// const INCREMENT="INCREMENT";
// const DECREMENT="DECREMENT";
// const RESET="RESET";
// const INCREMENTACTION="INCREMENTACTION";
const ADD_USER="ADD_USER";
// state
const initialState ={
    users:["Ainal"],
    count : 1,
}


const addUser=(user)=>{
    return {
        type:ADD_USER,
        payload:user,
    };
};

// const incrementCounter = () =>{
//     return {
//         type:ADD_USER,
//     };
// };



// const decrementCounter=()=>{
//     return {
//         type:DECREMENT,
//     };
// };
// const resetCounter=()=>{
//     return {
//         type:RESET,
//     };
// };

// const incrementCounterAction=(value)=>{
//     return {
//         type:INCREMENTACTION,
//         payload:value
//     };
// };

// const counterReducer = (state=initialState, action)=>{
//     switch (action.type){
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
        
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1
//             }
//         case RESET:
//             return {
//                 ...state,
//                 count: 0
//             }

//         case INCREMENTACTION:
//             return {
//                 ...state,
//                 count: state.count + action.payload,
//             }

//         default:
//             state
//     }
// }

const userReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_USER:
            return {
                users:[...state.users,action.payload],
                count: state.count + 1,
            };  
       default:
            state
    }
}
//const store = createStore(counterReducer);
const store = createStore(userReducer);

store.subscribe(()=>{
    console.log(store.getState());
});

//dispatch action 
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
//store.dispatch(incrementCounterAction(5));

store.dispatch(addUser("Hasan"));
store.dispatch(addUser("Roya"));

