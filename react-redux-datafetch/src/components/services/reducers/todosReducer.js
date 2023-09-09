import { GET_TODOS_FAILS, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstant";

const initialState= {
    todos: [],
    isLoading : false,
    error : null,
};

const todosReducer = (state=initialState,action)=>{
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

export default todosReducer