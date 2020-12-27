import { createStore } from "redux";
import reducers from "./redusers";

const initialState = { 
    reservations: [], 
    totalPrice: 0 
};

const store = createStore(reducers, initialState);

export default store;