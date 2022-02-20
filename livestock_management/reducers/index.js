import { combineReducers } from "redux";
import user from './user'
import userData from './userData'
import livestock from './livestock'

export default combineReducers({
    user,
    userData,
    livestock
})