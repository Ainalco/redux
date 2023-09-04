
//define constants
const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
const ADD_USER="add_User";

// state
const initialCounterState ={
    count : 0
}

const initialUsersState ={
    users : [{name:"Ainal Haque"}],
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

const addUser=()=>{
    return {
        type:ADD_USER,
        payload:{name:"Kamal"}
    };
};



//Decrement Counter
