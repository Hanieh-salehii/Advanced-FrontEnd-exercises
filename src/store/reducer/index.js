import { combineReducers } from "@reduxjs/toolkit";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
    roomList: roomReducer
    })
export default rootReducer;