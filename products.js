const {createStore, combineReducers}= require("redux");

//products constant
const GET_PRODUCTS="GET_PRODUCTS";
const ADD_PRODUCT="ADD_PRODUCT";

//cart constant
const GET_CARTITEMS="GET_CARTITEMS";
const ADD_CARTITEM="ADD_CARTITEM";

//product state
const initialProductState={
    products:["Suger","Salt"],
    numberofProducts:2,
};

//cart state
const initialCartState={
    cart:["Suger"],
    numberofProducts:1,
};

//products Action
const getProducts = () =>{
    return {
        type :GET_PRODUCTS,
    }
};

const addProduct = (product) =>{
    return {
        type :ADD_PRODUCT,
        payload: product,
    }
};

//Cart Action
const getCart = () =>{
    return {
        type :GET_CARTITEMS,
    }
};

const addCart = (product) =>{
    return {
        type :ADD_CARTITEM,
        payload: product,
    }
};


//product reducer
const productReducer =(state=initialProductState,action) =>{
    switch (action.type){
        case GET_PRODUCTS:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            {
                return {
                    products:[...state.products,action.payload],
                    numberofProducts: state.numberofProducts + 1,
                }
            }
        

        default:
            return state;
    }
};

//cart reducer
const cartReducer =(state=initialCartState,action) =>{
    switch (action.type){
        case GET_CARTITEMS:
            return {
                ...state,
            };
        case ADD_CARTITEM:
            {
                return {
                    cart:[...state.cart,action.payload],
                    numberofProducts: state.numberofProducts + 1,
                }
            };
        

        default:
            return state;
    }
};


//combine reducer
const rootReducer= combineReducers ({
    productR:productReducer,
    cartR: cartReducer
});

//store
const store = createStore(rootReducer);

store.subscribe(()=>{
    //console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Meet"));

store.dispatch(getCart());
store.dispatch(addCart("Pen"));