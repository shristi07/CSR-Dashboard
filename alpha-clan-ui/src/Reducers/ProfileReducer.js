// import config from "../config/config";
import {handleActions} from "redux-actions";
import {profileTypes} from "../constants";

const initState = {
  socialScore : null,
  myVolunteering:[],
  myContributions:[
    // {
//    "contribution_type_id":0,
//    "headers": [
//      {
//        "Header": "Donation Category",
//        "accessor": "donation_category"
//      },
//      {
//        "Header": "Donation Made",
//        "accessor": "donation"
//      },
//      {
//        "Header": "Requested On",
//        "accessor": "requested_on"
//      },
//      {
//        "Header": "Request Status",
//        "accessor": "status"
//      },
//      {
//        "Header": "Earned Score",
//        "accessor": "social_score"
//      },
//      {
//        "Header": "Actions",
//        "accessor": "actions"
//      }
//    ],
//    "data": [{
//     actions: "",
//     contribution_id: 10,
//     contribution_type_id: 0,
//     donation: "2000",
//     donation_category: "Monetory Donation",
//     frequency: "Once",
//     requested_on: "05-15-2022 ",
//     social_score: 100,
//     status: "Pending"
//    },
//    {
//     actions: "",
//     contribution_id: 8,
//     contribution_type_id: 0,
//     donation: [{value: 'Books', label: 'Books'},
//     {value: 'Furniture', label: 'Furniture'}],
//     donation_category: "Charity Donation",
//     frequency: undefined,
//     requested_on: "05-15-2022 ",
//     social_score: 50,
//     status: "Complete"
//    }
//    ]
//  },
//  {
//    "contribution_type_id":1,
//    "headers": [
//      {
//        "Header": "Volunteer At",
//        "accessor": "volunteer_at"
//      },
//      {
//        "Header": "date",
//        "accessor": "date"
//      },
//      {
//        "Header": "Requested On",
//        "accessor": "requested_on"
//      },
//      {
//        "Header": "Request Status",
//        "accessor": "status"
//      },
//      {
//        "Header": "Earned Score",
//        "accessor": "social_score"
//      },
//      {
//        "Header": "Actions",
//        "accessor": "actions"
//      }
//    ],
//    "data": [{
//     actions: "",
//     contribution_id: 5,
//     contribution_type_id: 1,
//     date: "07-05-2022",
//     requested_on: "05-15-2022",
//     social_score: 100,
//     status: "Complete",
//     volunteer_at: [{
//     label: "Tree Plantation Drive",
//     value: "Tree Plantation Drive"}]
//    }]
//  },
//  {
//    "contribution_type_id":2,
//    "headers": [
//      {
//        "Header": "Cause",
//        "accessor": "cause"
//      },
//      {
//        "Header": "Funds For",
//        "accessor": "funds_for"
//      },
//      {
//        "Header": "Relation",
//        "accessor": "relation"
//      },
//      {
//        "Header": "Fund Aim",
//        "accessor": "fund_aim"
//      },
//      {
//        "Header": "Requested On",
//        "accessor": "requested_on"
//      },
//      {
//        "Header": "Request Status",
//        "accessor": "status"
//      },
//      {
//        "Header": "Earned Score",
//        "accessor": "social_score"
//      },
//      {
//        "Header": "Comment",
//        "accessor": "comment"
//      },
//      {
//        "Header": "Actions",
//        "accessor": "actions"
//      }
//    ],
//    "data": [{
//     actions: "",
//     cause: "Medical Emergency",
//     comment: "Everyday while driving to office, I notice kids from a slum nearby willing to go to school. i want to initiate a fundraiser to support these less fortunates.",
//     contribution_id: 8,
//     contribution_type_id: 2,
//     ends: "2022-05-31",
//     fund_aim: "50000",
//     funds_for: "Children from a Slum Nearby",
//     relation: "Other",
//     requested_on: "05-15-2022",
//     social_score: 50,
//     status: "Complete"
//    }
//    ]
//  }
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
        ...state.myContributions.map((item) =>
          item.contribution_type_id === action.payload.contribution_type_id
            ? { ...item, data: [...item.data, action.payload] }
            : item
        ),
      ],
    }),
    [profileTypes.DELETE_REQUEST]: (state, action) => {
      let returnedData = [];
      let filteredObj = state.myContributions.filter(
        (item) =>
          item.contribution_type_id === action.payload.contribution_type_id
      );

      let ind = filteredObj[0].data.findIndex(
        (item) => item.contribution_id === action.payload.contribution_id
      );

      if (ind !== -1) {
        filteredObj[0].data.splice(ind, 1);
      }

      returnedData = [
        ...state.myContributions.filter(
          (item) =>
            item.contribution_type_id !== action.payload.contribution_type_id
        ),
        ...filteredObj,
      ];
      return { ...state, myContributions: [...returnedData] };
    },
    [profileTypes.FETCH_SCORE]: (state, action) => {
      let tempScore = [];
      state.myContributions.forEach((item) =>
        item.data.forEach(
          (ele) => ele.status === "Complete" && tempScore.push(ele.social_score)
        )
      );
      let score = tempScore.reduce((a, b) => a + b, 0);
      return { ...state, socialScore: score };
    },
    [profileTypes.REQUEST_PROFILE_CARD_DATA]: (state, action) => ({
      ...state,
      profileCard: initState.profileCard,
    }),
    [profileTypes.UPDATE_USER_CONTRIBUTIONS]: (state, action) => ({
      ...state,
      myContributions: [...action.payload],
    }),
  },
  {
    ...initState,
  }
);