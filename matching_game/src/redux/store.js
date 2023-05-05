import { catFilter } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    catFilter
})

const store = configureStore({ reducer: rootReducer })

export default store