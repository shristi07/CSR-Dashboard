
// import config from "../config/config";
import {handleActions} from "redux-actions";
import {DashboardTypes} from "../constants";

const initState = {};

export default handleActions(
  {
//     [DashboardTypes.TOGGLE_FETCH_PROWLER_DATA_LOADER]: (state, action) => ({
//       ...state,
//       fetchProwlerDataLoader: action.payload
//     }),
//     [DashboardTypes.UPDATE_PROWLER_DATA]: (state, action) => ({
//       ...state,
//       prowlerData: action.payload
//     }),
//     [DashboardTypes.TOGGLE_FETCH_SCOUT_DATA_LOADER]: (state, action) => ({
//       ...state,
//       fetchScoutDataLoader: action.payload
//     }),
//     [DashboardTypes.UPDATE_SCOUT_DATA]: (state, action) => ({
//       ...state,
//       scoutData: action.payload
//     }),
//     [DashboardTypes.TOGGLE_DOWNLOAD_REPORT_LOADER]: (state, action) => {
//       const report = action.payload.loader ?
//         [...state.downloadReportLoader.report, action.payload.report] :
//         [...state.downloadReportLoader.report.filter(report => report !== action.payload.report)];
//       return ({
//         ...state,
//         downloadReportLoader: {
//           ...action.payload,
//           report,
//           loader: !!report.length
//         }
//       });
//     },
//     [DashboardTypes.TOGGLE_GET_REPORT_LOADER]: (state, action) => ({
//       ...state,
//       getReportLoader: action.payload
//     }),
//     [DashboardTypes.TOGGLE_DELETE_SECURITY_REPORT_LOADER]: (state, action) => ({
//       ...state,
//       deleteSecurityReportLoader: action.payload
//     }),
//     [DashboardTypes.UPDATE_DELETED_SECURITY_REPORT]: (state, action) => {
//       const {reportId, reportType} = action.payload;
//       if (reportType === "prowler") {
//         return {
//           ...state,
//           prowlerData: {...state.prowlerData, data: state.prowlerData.data.filter(data => +data.id !== +reportId)}
//         }
//       } else if (reportType === "scout") {
//         return {
//           ...state,
//           scoutData: {...state.scoutData, data: state.scoutData.data.filter(data => +data.id !== +reportId)}
//         }
//       } else {
//         return {
//           ...state,
//           prowlerData: {...state.prowlerData, data: state.prowlerData.data.filter(data => +data.id !== +reportId)}
//         }
//       }
//     },
//     [DashboardTypes.TOGGLE_FETCH_SECURITY_REPORTS_LOADER]: (state, action) => ({
//       ...state,
//       fetchSecurityReportsLoader: action.payload
//     }),
//     [DashboardTypes.INIT_SECURITY_REPORTS]: (state, action) => ({
//       ...state,
//       securityReports: action.payload
//     }),
//     [DashboardTypes.INIT_SECURITY_REPORT_CSV]: (state, action) => ({
//       ...state,
//       securityReportCSV: action.payload
//     }),
//     [DashboardTypes.TOGGLE_FETCH_SECURITY_REPORT_CSV_LOADER]: (state, action) => ({
//       ...state,
//       fetchSecurityReportCSVLoader: action.payload
//     }),
//     [DashboardTypes.INIT_SECURITY_REPORTS_DATA]: (state, action) => ({...initState})
//   },
//   initState
// )
// import {handleActions} from "redux-actions";
// import {DashboardTypes} from "../constants";

// const initState = {
//   prowlerData: {},
//   // prowlerData: {...prowlerMockData},
//   scoutData: {},
//   // scoutData: {...scoutMockData},
//   fetchProwlerDataLoader: true,
//   fetchScoutDataLoader: true,
//   downloadReportLoader: {loader: false, report: ""},
//   getReportLoader: false,
//   deleteSecurityReportLoader: {loader: false, report: ""},
//   fetchSecurityReportsLoader: true,
//   securityReports: {},
//   securityReportCSV: {},
//   fetchSecurityReportCSVLoader: true
// };

// export default handleActions(
//   {
//     [DashboardTypes.TOGGLE_FETCH_PROWLER_DATA_LOADER]: (state, action) => ({
//       ...state,
//       fetchProwlerDataLoader: action.payload
//     }),
//     [DashboardTypes.UPDATE_PROWLER_DATA]: (state, action) => ({
//       ...state,
//       prowlerData: action.payload
//     }),
//     [DashboardTypes.TOGGLE_FETCH_SCOUT_DATA_LOADER]: (state, action) => ({
//       ...state,
//       fetchScoutDataLoader: action.payload
//     }),
//     [DashboardTypes.UPDATE_SCOUT_DATA]: (state, action) => ({
//       ...state,
//       scoutData: action.payload
//     }),
//     [DashboardTypes.TOGGLE_DOWNLOAD_REPORT_LOADER]: (state, action) => {
//       const report = action.payload.loader ?
//         [...state.downloadReportLoader.report, action.payload.report] :
//         [...state.downloadReportLoader.report.filter(report => report !== action.payload.report)];
//       return ({
//         ...state,
//         downloadReportLoader: {
//           ...action.payload,
//           report,
//           loader: !!report.length
//         }
//       });
//     },
//     [DashboardTypes.TOGGLE_GET_REPORT_LOADER]: (state, action) => ({
//       ...state,
//       getReportLoader: action.payload
//     }),
//     [DashboardTypes.TOGGLE_DELETE_SECURITY_REPORT_LOADER]: (state, action) => ({
//       ...state,
//       deleteSecurityReportLoader: action.payload
//     }),
//     [DashboardTypes.UPDATE_DELETED_SECURITY_REPORT]: (state, action) => {
//       const {reportId, reportType} = action.payload;
//       if (reportType === "prowler") {
//         return {
//           ...state,
//           prowlerData: {...state.prowlerData, data: state.prowlerData.data.filter(data => +data.id !== +reportId)}
//         }
//       } else if (reportType === "scout") {
//         return {
//           ...state,
//           scoutData: {...state.scoutData, data: state.scoutData.data.filter(data => +data.id !== +reportId)}
//         }
//       } else {
//         return {
//           ...state,
//           prowlerData: {...state.prowlerData, data: state.prowlerData.data.filter(data => +data.id !== +reportId)}
//         }
//       }
//     },
//     [DashboardTypes.TOGGLE_FETCH_SECURITY_REPORTS_LOADER]: (state, action) => ({
//       ...state,
//       fetchSecurityReportsLoader: action.payload
//     }),
//     [DashboardTypes.INIT_SECURITY_REPORTS]: (state, action) => ({
//       ...state,
//       securityReports: action.payload
//     }),
//     [DashboardTypes.INIT_SECURITY_REPORT_CSV]: (state, action) => ({
//       ...state,
//       securityReportCSV: action.payload
//     }),
//     [DashboardTypes.TOGGLE_FETCH_SECURITY_REPORT_CSV_LOADER]: (state, action) => ({
//       ...state,
//       fetchSecurityReportCSVLoader: action.payload
//     }),
//     [DashboardTypes.INIT_SECURITY_REPORTS_DATA]: (state, action) => ({...initState})
  },
  initState
)
