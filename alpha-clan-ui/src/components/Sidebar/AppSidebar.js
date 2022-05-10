import React from "react";
import { NavLink } from "react-router-dom";

const AppSidebar = ({ userData, style }) => {
  const data = [
    {
      name: "My Profile",
      icon: "fa-user",
      link: "/profile",
    },
    {
      name: "Pahal",
      icon: "fa-gift",
      link: "/pahal",
    },
    {
      name: "FAQs",
      icon: "fa-book",
      link: "/FAQs",
    },
  ];

  return (
    <>
      <div className={`sidebar-menu-container `}>
        <div className={`sidebar-menu `}>
          <div className="nav-header">
            <img width="50" height="50" src={userData?.profilePicUrl} />
            <p className="user-name">{userData?.fullName}</p>
          </div>
          <ul className="sidebar-menu-list">
            {data.map((item) => (
              <li>
                <NavLink
                  id={item.id}
                  to={{
                    pathname: `${item.link}`,
                  }}
                  exact={true}
                  activeClassName={"active"}
                  className={"menu"}
                >
                  <i class={`icon fa ${item.icon}`}></i>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;
