
import { createAction } from "redux-actions";
import {  userDataTypes } from "../constants";

export const sidebarState = createAction(userDataTypes.TOGGLE_SIDEBAR_STATE)


