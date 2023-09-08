//async action -api calling
//api url - https://jsonplaceholder.typicode.com/todos
//middleware -redux-thunk
//axios api
const {default:axios}=require("axios");
const {createStore, applyMiddleware}= require("redux");
const thunk = require("redux-thunk").default;
//constant
const GET_TODOS_REQUEST="GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS="GET_TODOS_SUCCESS";
const GET_TODOS_FAILS="GET_TODOS_FAILS";
const API_URL= "https://jsonplaceholder.typicode.com/todos";

//state
const initialTodosState= {
    todos: [],
    isLoading : false,
    error : null,
};

//action
const getTodosRequest = () =>{
    return {
            type: GET_TODOS_REQUEST,
    };
};

const getTodosSuccess = (todos) =>{
    return {
            type: GET_TODOS_SUCCESS,
            payload: todos,
    };
};

const getTodosFails = (error) =>{
    return {
            type: GET_TODOS_FAILS,
            payload: error,
    };
};

//reducer
const todosReducer = (state=initialTodosState,action)=>{
    switch (action.type){
            case GET_TODOS_REQUEST:
                return {
                    ...state,
                    isLoading:true,
                };
            
            case GET_TODOS_SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                    todos: action.payload
                };
            case GET_TODOS_FAILS:
                return {
                    ...state,
                    isLoading:false,
                    error: action.payload
                };

                default:
                    return state;
    }
};


//async action
const fetchData = () =>{
    return (dispatch)=>{
            dispatch(getTodosRequest());
            axios
            .get(API_URL)
            .then(res =>{                
                const todos = res.data;
                const titles = todos.map(todo =>todo.title);
                //console.log(title);
                dispatch (getTodosSuccess(titles));
            })
            .catch((error)=>{
                const errorMessage=(error.message);
                dispatch (getTodosFails(errorMessage));
            });
    };
};

//store

const store = createStore(todosReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(fetchData());