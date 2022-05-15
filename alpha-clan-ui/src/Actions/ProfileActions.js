import { createAction } from "redux-actions";
import { profileTypes } from "../constants";
import axios from "axios";

const requestContribution = createAction(
  profileTypes.REQUEST_CONTRIBUTIONS_DATA
);
const deleteRequest = createAction(profileTypes.DELETE_REQUEST);
export const fetchScore = createAction(profileTypes.FETCH_SCORE);
export const sendEmail = () => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "GET",
      // url: `http://18.209.35.107:8000/email`,
      // url: `http://127.0.0.1:8000/email`,
    });
  } catch (e) {
    console.log("Error while sending Email", e);
  }
};
export const submitContributionRequest = (data, cb) => (dispatch) => {
  dispatch(requestContribution(data));
  dispatch(sendEmail());
  cb && cb();
};
export const deleteContributionRequest = (data) => (dispatch) => {
  dispatch(deleteRequest(data));
};
export const updateContributionRequest = createAction(
  profileTypes.UPDATE_CONTRIBUTION_REQUEST_DATA
);
