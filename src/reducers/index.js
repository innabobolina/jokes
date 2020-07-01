import jokeReducer from "./joke";
import { combineReducers } from "redux";
import loadingReducer from "./loading";
export default combineReducers({ joke: jokeReducer, loading: loadingReducer });