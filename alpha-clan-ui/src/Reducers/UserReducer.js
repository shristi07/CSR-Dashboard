
import {handleActions} from "redux-actions";
import {userDataTypes} from "../constants";

const initState = {
  userData:{
    "enabled": true,
    "firstName": "Shristi",
    "fullName": "Shristi Katiyar",
    "social_score":50,
    "hasApprovals": false,
    "id": 1877,
    "isAdmin": false,
    "isReportingManager": false,
    "lastName": "Katiyar",
    "middleName": null,
    "newerId": "4682",
    "profilePicUrl": "https://success-factor.s3.amazonaws.com/prod/profilePicFolder/408b47cd-af04-448f-9bcb-eea42ab4ae49_Shristi-Katiyar-Profile-Pitcure.jpeg",
    "reportingManagerName": "Mukund Mohan Chaturvedi",
    "username": "shristi.katiyar@tothenew.com",
    "vertical": null
  },
profileCard:[
 { key: "Donations Made", value: "4", id: 0 },
 { key: "Volunteered", value: "4", id: 1 },
 { key: "Fundraiser Initiated", value: "1", id: 2 },
],
faqData:[],
showSidebar:true
};

export const userReducer = handleActions(
	{
		[userDataTypes.REQUEST_USER_DATA]: (state, action) => ({
			...state,
			userData: initState.userData
		}),
		[userDataTypes.TOGGLE_SIDEBAR_STATE]: (state, action) => ({
			...state,
			showSidebar: action.payload
		}),
		[userDataTypes.REQUEST_PROFILE_CARD_DATA]: (state, action) => ({
			...state,
			profileCard: initState.profileCard
		}),
	},
	{
		...initState
	}
);
