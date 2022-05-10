

import React from "react";
import { NavLink } from "react-router-dom";

const AppSidebar = ({ userData, style }) => {
  const data = [

    {
      name: "My Profile",
      icon: "analytics",
      link: "/profile",
    },
    {
      name: "Pahal",
      icon: "analytics",
      link: "/pahal",
    },
    {
      name: "? FAQs",
      icon: "analytics",
      link: "/FAQs",
    },
  ]

  return <>
    <div className={style}>
      <div className={`left-panel sidebar-menu-container `}>
        <div
          className={`sidebar-menu `}
        >
          <div className="nav-header">
            <img width="48" height="48" src={userData?.profilePicUrl} />
            <p className="user-name">{userData?.fullName}</p>
          </div>
          <ul className="sidebar-menu-list">
            {data.map(item => <li>
              <NavLink
                id={item.id}
                to={{
                  pathname: `${item.link}`,
                }}
                exact={true}
                activeClassName={"active"}
                style={{ position: "relative" }}
              >
                <span >{item.name}</span>
              </NavLink>
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default AppSidebar;

