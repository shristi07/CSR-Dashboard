import {combineReducers} from "redux";
import dashboardReducer from "../Reducers/DashboardReducer";
// import {cardDetailsReducer} from "../Reducers/cardDetailsReducer";

const rootReducer = combineReducers({
  dashboardData: dashboardReducer,
//   cardDetailsReducer,
});
export default rootReducer;
