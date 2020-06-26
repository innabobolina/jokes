import jokeReducer from './joke'
import { combineReducers } from 'redux'

export default combineReducers({ joke: jokeReducer })