const {createStore, applyMiddleware}= require("redux");
const { default: todosReducer } = require("./components/services/reducers/todosReducer");
const thunk = require("redux-thunk").default;

const store = createStore(todosReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
});

export default store;