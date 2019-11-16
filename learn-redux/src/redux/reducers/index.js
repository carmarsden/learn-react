import { combineReducers } from 'redux';
import counters from "./counters";
import color from "./color";

export default combineReducers({ counters, color });