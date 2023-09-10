import { configureStore } from "@reduxjs/toolkit";
import counerReducer from "../features/counter/counterSlice";

const store= configureStore({
        reducer : {
            counter: counerReducer,
        },
});

export default store;