
import { createAction } from "redux-actions";
import {  userDataTypes } from "../constants";
// import { toast } from "react-toastify";

export const sidebarState = createAction(userDataTypes.TOGGLE_SIDEBAR_STATE)


