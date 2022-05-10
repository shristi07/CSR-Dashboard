// import config from "../config/config";
import {handleActions} from "redux-actions";
import {profileTypes} from "../constants";

const initState = {
  socialScore : 230,
  myContributions:[{
   "contribution_type_id":0,
   "headers": [
     {
       "Header": "Donation Category",
       "accessor": "donation_category"
     },
     {
       "Header": "Donation Made",
       "accessor": "donation"
     },
     {
       "Header": "Requested On",
       "accessor": "requested_on"
     },
     {
       "Header": "Request Status",
       "accessor": "status"
     },
     {
       "Header": "Earned Score",
       "accessor": "social_score"
     },
     {
       "Header": "Actions",
       "accessor": "actions"
     }
   ],
   "data": [

   ]
 },
 {
   "contribution_type_id":1,
   "headers": [
     {
       "Header": "Volunteer At",
       "accessor": "volunteer_at"
     },
     {
       "Header": "date",
       "accessor": "date"
     },
     {
       "Header": "Requested On",
       "accessor": "requested_on"
     },
     {
       "Header": "Request Status",
       "accessor": "status"
     },
     {
       "Header": "Earned Score",
       "accessor": "social_score"
     },
     {
       "Header": "Actions",
       "accessor": "actions"
     }
   ],
   "data": [
   ]
 },
 {
   "contribution_type_id":2,
   "headers": [
     {
       "Header": "Cause",
       "accessor": "cause"
     },
     {
       "Header": "Funds For",
       "accessor": "funds_for"
     },
     {
       "Header": "Relation",
       "accessor": "relation"
     },
     {
       "Header": "Fund Aim",
       "accessor": "fund_aim"
     },
     {
       "Header": "Requested On",
       "accessor": "requested_on"
     },
     {
       "Header": "Request Status",
       "accessor": "status"
     },
     {
       "Header": "Earned Score",
       "accessor": "social_score"
     },
     {
       "Header": "Comment",
       "accessor": "comment"
     },
     {
       "Header": "Actions",
       "accessor": "actions"
     }
   ],
   "data": [

   ]
 }
],



profileCard:[
 { key: "Donations", id: 0 },
 { key: "Volunteer", id: 1 },
 { key: "Fundraiser", id: 2 },
]
};

export const profileReducer = handleActions(
	{
		[profileTypes.REQUEST_CONTRIBUTIONS_DATA]: (state, action) => ({
			...state,
			myContributions: [
        ...state.myContributions.map(item=>item.contribution_type_id === action.payload.contribution_type_id?{...item,data:[...item.data,action.payload]}:item)]
		}),
		[profileTypes.DELETE_REQUEST]: (state, action) => {
      let returnedData = [];
      console.log("action.payload",state.myContributions);
      let filteredObj = state.myContributions.filter(item => item.contribution_type_id === action.payload.contribution_type_id);
    
      let ind = filteredObj[0].data.findIndex(item => item.contribution_id === action.payload.contribution_id);
    
      if (ind !== -1) {
        filteredObj[0].data.splice(ind, 1);
      }
    
      returnedData = [...state.myContributions.filter(item => item.contribution_type_id !== action.payload.contribution_type_id), ...filteredObj];
    console.log("return",returnedData);
      return ({...state,
      myContributions:[...returnedData]
      })
    },
		[profileTypes.EDIT_REQUEST]: (state, action) => {

      },
		[profileTypes.REQUEST_PROFILE_CARD_DATA]: (state, action) => ({
			...state,
			profileCard: initState.profileCard
		}),
	},
	{
		...initState
	}
);