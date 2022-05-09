
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
    //  {
    //    "donation_category": "Monetory Donation",
    //    "donation":"300",
    //    "requested_on": "19-04-2021",
    //    "status": "Complete",
    //    "social_score": 20,
    //    actions: "",
    // contribution_id:1
    //  },
    //  {
    //    "donation_category": "Monetory Donation",
    //    "donation":"300",
    //    "requested_on": "19-04-2021",
    //    "status": "Complete",
    //    "social_score": 20,
    //    actions: "",
    // contribution_id:2
    //  },
    //  {
    //    "donation_category": "Charity Donation",
    //    "donation":[{label:"Book",value:"Book"},{ value: 'Linen/Blankets', label: 'Linen/Blankets'}],
    //    "requested_on": "19-04-2021",
    //    "status": "Pending",
    //    "social_score": 20,
    //    actions: "",
    // contribution_id:3
    //  },
    //  {
    //    "donation_category": "Monetory Donation",
    //    "donation":"300",
    //    "requested_on": "19-04-2021",
    //    "status": "Complete",
    //    "social_score": 20,
    //    actions: "",
    // contribution_id:4
    //  }
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
    //  {
    //    "volunteer_at": [{label:"Tree Plantation Drive",value:"Tree Plantation Drive"}],

    //    "requested_on": "19-04-2021",
    //    "status": "Pending",
    //    "social_score": 20,
    //    actions: "",
    // contribution_id:5
    //  },
    //  {
    //    "volunteer_at": [{label:"Tree Plantation Drive",value:"Tree Plantation Drive"}],
    //    "requested_on": "19-04-2021",
    //    "status": "Complete",
    //    "social_score": 20,
    //    actions: "",
    // contribution_id:6
    //  },
    //  {
    //    "volunteer_at": [{label:"Blanket Distribution",value:"Blanket Distribution"}],
    //    "requested_on": "19-04-2021",
    //    "status": "Complete",
    //    "social_score": 20,
    //    actions: "",
    // contribution_id:7
    //  },
    //  {
    //    "volunteer_at": [{label:"Blanket Distribution",value:"Blanket Distribution"}],
    //    "requested_on": "19-04-2021",
    //    "status": "Pending",
    //    "social_score": 20,
    //    actions: "",
    // contribution_id:8
    //  }
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
    //  {
    //    "cause": "Medical Emergency",>
    // contribution_id:9,
    //    "funds_for":"Vishnu",>
    //    "relation":"Family",>
    //    "fund_aim":30000,>
    //    "requested_on": "19-04-2021",>
    //    "status": "Pending",>
    //    "social_score": 50,>
    //    "comment":"We Lost Vishnu in a Car accident",>
    //    "actions": ""
    //  },
   ]
 }
],

profileCard:[
 { key: "Donations Made", id: 0 },
 { key: "Volunteered", id: 1 },
 { key: "Fundraiser Initiated", id: 2 },
]
};

export const profileReducer = handleActions(
	{
		[profileTypes.REQUEST_CONTRIBUTIONS_DATA]: (state, action) => ({
			...state,
			myContributions: [
        ...state.myContributions.map(item=>item.contribution_type_id === action.payload.contribution_type_id?{...item,data:[...item.data,action.payload]}:item)]
		}),
		[profileTypes.DELETE_REQUESTEQUEST]: (state, action) => ({
      ...state,
      myContributions: {
        ...state.myContributions.map(item=>item.contribution_type_id === action.payload.contributionTypeId?{...item,data:[item.data.filter(ele => ele.contribution_id !== action.payload.contributionId)]}:item)
        // data: state.myContributions.data.filter(checklist => checklist.id !== action.payload)
      }
      
      // state.myContributions[action.payload.contributionTypeId].data.filter(item => item.contribution_id !== action.payload.contributionId)
		}),
		[profileTypes.REQUEST_PROFILE_CARD_DATA]: (state, action) => ({
			...state,
			profileCard: initState.profileCard
		}),
	},
	{
		...initState
	}
);
