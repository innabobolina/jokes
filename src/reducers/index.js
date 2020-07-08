import jokeReducer from "./joke";
import {
    combineReducers
} from "redux";
import loadingReducer from "./loading";
import paginationReducer from './pagination'
import 'semantic-ui-css/semantic.min.css'
export default combineReducers({
    joke: jokeReducer,
    loading: loadingReducer,
    pagination: paginationReducer
});