
import { createAction } from "redux-actions";
import { profileTypes } from "../constants";
import axios from "axios";
import {toast} from "react-toastify";



const requestContribution = createAction(
  profileTypes.REQUEST_CONTRIBUTIONS_DATA,
);
const deleteRequest = createAction(
  profileTypes.DELETE_REQUEST,
);
const editRequest = createAction(
  profileTypes. EDIT_REQUEST,
);
export const sendEmail = () => async dispatch => {
  try {
    const {data} = await axios({
      method: "GET",
      url: `http://127.0.0.1:8000/email`,
    });
  } catch (e) {
    console.log("Error while sending Email", e);
  }
}
export const submitContributionRequest = (data, cb) => (dispatch) => {
        dispatch(requestContribution(data));
        dispatch(sendEmail());
        cb && cb();
        toast.success("Request Submitted || Social Score Earned");
  };
  export const deleteContributionRequest = (data) => (dispatch) => {
        dispatch(deleteRequest(data));
        // toast.success("Request Submitted || Social Score Earned");
  };
  export const editContributionRequest = (data) => (dispatch) => {
        dispatch(editRequest(data));
        dispatch(sendEmail());
        // toast.success("Request Submitted || Social Score Earned");
  };
export const updateContributionRequest = createAction(
  profileTypes.UPDATE_CONTRIBUTION_REQUEST_DATA

);
