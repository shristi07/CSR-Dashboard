
import { createAction } from "redux-actions";
import { profileTypes } from "../constants";
// import { toast } from "react-toastify";

console.log("reaching");

const requestContribution = createAction(
  profileTypes.REQUEST_CONTRIBUTIONS_DATA,
);
const deleteRequest = createAction(
  profileTypes.DELETE_REQUEST,
);
export const submitContributionRequest = (data, cb) => (dispatch) => {
    console.log(data,'test');
        dispatch(requestContribution(data));
        cb && cb();
        // toast.success("Request Submitted || Social Score Earned");
  };
  export const deleteContributionRequest = (contributionId,contributionTypeId) => (dispatch) => {
      console.log("contributionId,contributionTypeId",contributionId,contributionTypeId);
        dispatch(deleteRequest({contributionId,contributionTypeId}));
        // toast.success("Request Submitted || Social Score Earned");
  };
export const updateContributionRequest = createAction(
  profileTypes.UPDATE_CONTRIBUTION_REQUEST_DATA

);
