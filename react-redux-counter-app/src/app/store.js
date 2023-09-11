import { configureStore } from "@reduxjs/toolkit";
import counerReducer from "../features/counter/counterSlice";
import  postReducer from "../features/posts/postSlice";
const store= configureStore({
        reducer : {
            counter: counerReducer,
            posts: postReducer,
        },
});

export default store;