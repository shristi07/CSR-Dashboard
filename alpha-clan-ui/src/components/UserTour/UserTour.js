// import React, {useCallback, useEffect, useMemo, useState} from 'react';
// import PropTypes from 'prop-types';
// import Tour from "reactour";
// import {updateNewUserStatus} from "../../helper/localStorageHelper";

// const UserTour = ({
//                     isUserTourEnabled
//                   }) => {

//   const [isTourOpen, setIsTourOpen] = useState(false);

//   useEffect(
//     () => {
//       setIsTourOpen(isUserTourEnabled)
//     },
//     [isUserTourEnabled, setIsTourOpen]
//   );

//   const tourSteps = useMemo(
//     () => [
//       {
//         selector: "#resources-hierarchy",
//         content: "You can view the complete relationships between AWS resources"
//       },
//       {
//         selector: "#hawk-insights",
//         content: "You can visit HAWK Insights webpage."
//       },
//       {
//         selector: "#add-project",
//         content: "Add a project from here."
//       },
//       {
//         selector: "#time-interval",
//         content: "You can select multiple time intervals for data from this dropdown."
//       },
//       {
//         selector: "#select-project-dropdown",
//         content: "You can select your onboarded projects from this dropdown."
//       },
//       {
//         selector: "#administration-sidebar",
//         content: "You can manage user settings here."
//       },
//       {
//         selector: "#side-bar-user-menu",
//         content: "From here, you can logout from your account."
//       }
//     ],
//     []
//   );

//   const onTourSkip = useCallback(
//     () => {
//       setIsTourOpen(false);
//       updateNewUserStatus(false);
//     },
//     [setIsTourOpen, updateNewUserStatus]
//   );

//   return <>
//     <Tour
//       steps={tourSteps}
//       isOpen={isTourOpen}
//       onRequestClose={onTourSkip}
//       showNumber={false}
//       rounded={5}
//     />
//   </>
// };

// UserTour.propTypes = {
//   isUserTourEnabled: PropTypes.bool
// };
// UserTour.defaultProps = {
//   isUserTourEnabled: false
// }

// export default UserTour
