import React, {Suspense, useCallback, useEffect, useState} from "react";
import AppBody from "../Body/AppBody";
import AppHeader from "../Header/AppHeader";
import AppSidebar from "../Sidebar/AppSidebar";


// const AppBody = React.lazy(() => lazyComponentLoader(() => import( "../Body/AppBody")));

const MainContainer = props => {
  // const [sidebarExpand, setSidebarExpand] = useState(true);
//   const [showResponsiveSidebar, setShowResponseSidebar] = useState(false);
//   const [isUserTourEnabled, setIsUserTourEnabled] = useState(false);

//   const {
//     getUserInfoLoader,
//     userInfo,
//     getProjectDetailsLoader,
//     sidebarExpand,
//     forceSidebarClose,
//     isNewUser,
//     selectedProjectId,
//   } = useSelector(state => ({
//     ...state.userReducer
//   }));
//   const dispatch = useDispatch();

//   useEffect(
//     () => {
//       if (!getUserInfoLoader && !getProjectDetailsLoader) {
//         setTimeout(
//           () => {
//             setIsUserTourEnabled(isNewUser);
//           },
//           500
//         );
//       }
//     },
//     [getProjectDetailsLoader, isNewUser, getUserInfoLoader, setIsUserTourEnabled]
//   );

//   /*useEffect(
//     () => {
//       if (Object.keys(userInfo).length) {
//         const projectId = queryString.parse(props.history.location.search).project
//         if (!projectId) {
//           toast.error("no project")
//         }
//       }
//     },
//     [userInfo, props.history]
//   )*/
//   useEffect(
//     () => {
//       setShowResponseSidebar(forceSidebarClose);
//       dispatch(updateSidebarExpand(false))
//     },
//     [forceSidebarClose, updateSidebarExpand, setShowResponseSidebar]
//   );
//   useEffect(
//     () => {
//       // set({page: props.history.location.pathname + props.history.location.search});
//       const title = routes.find(route => route.path === props.history.location.pathname)?.name
//       // set({title})
//       // pageView(props.history.location.pathname + props.history.location.search)
//       window.gtag("page_view", props.history.location.pathname + props.history.location.search);
//       window.gtag("set", "page_title", title);
//       window.gtag("config", "page_title", title);
//       window.gtag('event', "screen_view", {screen_name: title});
//     },
//     [props.history.location.pathname, props.history.location.search]
//   );

//   const selectProjectId = useCallback(
//     (user) => {
//       const {default_project: projectId, projects} = user;
//       const queryProjectId = queryString.parse(props.history.location.search).project;
//       if (!projects.length) {
//         props.history.push("/addProject");
//         toast.warn("Please add a project!")
//         return;
//       }
//       if ((!queryProjectId || queryProjectId === "undefined")&& projects.length) {
//         config.selectedProjectId = projectId ? projectId : projects[0]?.project_id
//         props.history.push({search: `project=${projectId ? projectId : projects[0]?.project_id}`})
//       }
//     },
//     [props.history]
//   );

//   const handleHamburgerToggle = useCallback(
//     () => {
//       dispatch(updateSidebarExpand(!sidebarExpand))
//     },
//     [updateSidebarExpand, sidebarExpand]
//   );
//   const updateDimensions = useCallback(
//     () => {
//       if (window.innerWidth < 1200) dispatch(updateSidebarExpand(false))
//       // else dispatch(updateSidebarExpand(true))
//     },
//     [updateSidebarExpand]
//   );

//   useEffect(
//     () => {
//       const onUpdateScreenSize = () => {
//         if (window.innerWidth <= 864) {
//           dispatch(updateSidebarExpand(false))
//           setShowResponseSidebar(true);
//         } else if (!forceSidebarClose) {
//           dispatch(updateSidebarExpand(false));
//           setShowResponseSidebar(false);
//         }
//       };
//       if (window.innerWidth <= 864) {
//         if (!showResponsiveSidebar) setShowResponseSidebar(true);
//       }
//       window.addEventListener("resize", onUpdateScreenSize);
//       window.addEventListener("load", onUpdateScreenSize);
//       return () => {
//         window.removeEventListener("resize", onUpdateScreenSize);
//         window.removeEventListener("load", onUpdateScreenSize);

//       };
//     }, [window.innerWidth, updateSidebarExpand, setShowResponseSidebar, forceSidebarClose, showResponsiveSidebar]
//   );

//   useEffect(
//     () => {
//       let isAuth = getCookie("auth_token");
//       dispatch(getUserInfo(isAuth, selectProjectId))
//     },
//     [selectProjectId, updateDimensions]
//   );
//   useEffect(
//     () => {
//       dispatch(updateProjectDetails({}));
//       if (selectedProjectId && !getUserInfoLoader)
//         dispatch(getProjectDetails(selectedProjectId))
//     },
//     [selectedProjectId, getUserInfoLoader]
//   );

  return <>
    {/* <UserTour
      isUserTourEnabled={isUserTourEnabled}
    /> */}
    {
      false ?
        <></> : <>
          <div className="panel-container">
            <div
              className={
                true
                  ? "left-panel"
                  : "left-panel sidebar-collapse"
              }
            >
              <AppSidebar
              />
            </div>
            <div
              className={
                true
                  ? "right-panel"
                  : "right-panel sidebar-collapse"
              }
            >
              <AppHeader
                // handleClick={handleHamburgerToggle}
              />

                <AppBody/>
            </div>


          </div>
        </>
    }
  </>;
}

export default MainContainer;
