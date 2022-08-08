
import { createAction } from "redux-actions";
import {  userDataTypes } from "../constants";
import axios from "axios";
import { getCookie } from "../helper";

export const sidebarState = createAction(userDataTypes.TOGGLE_SIDEBAR_STATE)
export const updateUser = createAction(
    userDataTypes.UPDATE_USER_DATA
  );

export const submitGloginData = (token,cb) => async dispatch => {
    try {
      const {data} = await axios({
        method: "POST",
        url: "http://localhost:5000/contributions/api/v1/auth/google",
        data:{token}
      });
      if (data) {
        console.log("entering 1");
        document.cookie = "auth_token=" + token;
        document.cookie = "email=" + data?.username;
        window.location="/profile"
        cb();
      } else {
        console.log("User not validated");
      }
    } catch (e) {
      console.log("Error while fetching User Volunteerings ", e)
    }
  }
  export const getUserInfo = () => async dispatch => {

    try {
      const {data} = await axios({
        method: "GET",
        url: "http://localhost:5000/contributions/me",
        params: {email:getCookie("email")}
      });
      dispatch(updateUser(data));
    } catch (e) {
      console.log("Error while fetching User Details ", e)
    }
  }