import {combineReducers} from "redux";
import {profileReducer} from "../Reducers/ProfileReducer";
import {pahalReducer} from "../Reducers/PahalReducer";
import {userReducer} from "../Reducers/UserReducer";

const rootReducer = combineReducers({
  profileReducer,
  pahalReducer,
  userReducer
});
export default rootReducer;
