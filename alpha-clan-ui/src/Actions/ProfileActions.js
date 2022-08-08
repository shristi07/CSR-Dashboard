import { createAction } from "redux-actions";
import { profileTypes } from "../constants";
import axios from "axios";

const updateUserContributions = createAction(
  profileTypes.UPDATE_USER_CONTRIBUTIONS
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
export const fetchUserContributions = () => async dispatch => {
  try {
    const {data} = await axios({
      method: "GET",
      url: "http://localhost:5000/contributions",
    });
    dispatch(updateUserContributions(data));
  } catch (e) {
    console.log("Error while fetching User Volunteerings ", e)
  }
}

export const submitContributionRequest = (req, cb) => async dispatch => {
  try {
    const {data} = await axios({
      method: "POST",
      url: "http://localhost:5000/contributions",
      data:req,
      params: {contributionTypeId:req.contribution_type_id}
    });
    cb && cb();
  } catch (e) {
    console.log('Error', e);
  }
}

export const deleteContributionRequest = (data) => (dispatch) => {
  dispatch(deleteRequest(data));
};

