import {createStore} from "redux";
import counterReducer from "./components/services/reducers/counterReducer";

const store =createStore(counterReducer);

export default store;