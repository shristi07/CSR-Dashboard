import React from "react";
import lazyComponentLoader from "../helper/lazyComponentLoader";

const Profile = React.lazy(() =>
  lazyComponentLoader(() => import("../components/ProfileDashboard/Profile"))
);
const Pahal = React.lazy(() =>
  lazyComponentLoader(() => import("../components/PahalDashboard/Pahal"))
);
const FAQs = React.lazy(() =>
  lazyComponentLoader(() => import("../components/FAQsDashboard/FAQs"))
);

export default [
  {
    exact: true,
    path: "/",
    component: Profile,
    name: "Home",
  },
  {
    exact: true,
    path: "/profile",
    component: Profile,
    name: "Profile",
  },
  {
    path: "/pahal",
    component: Pahal,
    name: "Pahal",
  },
  {
    path: "/FAQs",
    component: FAQs,
    name: "FAQs",
  },
];
