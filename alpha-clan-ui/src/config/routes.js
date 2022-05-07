import React from "react";
import lazyComponentLoader from "../helper/lazyComponentLoader";


const Profile = React.lazy(() => lazyComponentLoader(() => import ("../components/ProfileDashboard/Profile")));
const Pahal = React.lazy(() => lazyComponentLoader(() => import ("../components/PahalDashboard/Pahal")));
// const Paatra = React.lazy(() => lazyComponentLoader(() => import ("../components/Paatra/Paatra")));

//Dashboard routes has been changed to home but the file name, scss file name, action and reducer remains ths same.
// Metrics component's route has been renamed to dashbaord but other file remains the same.
// Please don't get confuse with the name everything remains the same, only route's name has been changed.

export default [
  {
    exact: true,
    path: "/",
    component: Profile,
    name: "Home"
  },
  {
    exact: true,
    path: "/profile",
    component: Profile,
    name: "Profile"
  },
  {
    path: "/pahal",
    component: Pahal,
    name: "Pahal"
  },
 
]
