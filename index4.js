

const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";

// state
const initialState ={
    count : 0,
}

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