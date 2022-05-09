

import React from "react";
import {NavLink} from "react-router-dom";

const AppSidebar = ({userData}) => {
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
        ]

  return <>
          {/* <CSSTransition
            in={true}
            timeout={500}
            classNames={"ani-sidebar"}
            mountOnEnter
          > */}
            <div className={`left-panel sidebar-menu-container `}>
              <div
                className={`sidebar-menu `}
              >
                  <div className="nav-header">
                      <img width="48" height="48" src={userData?.profilePicUrl} />
                      <p className="user-name">{userData?.fullName}</p>
                  </div>
               <ul className="sidebar-menu-list">
                   {data.map(item=><li>
                    <NavLink
      id={item.id}
      to={{
        pathname: `${item.link}`,
        // search: `?project=${projectId}`
      }}
      exact={true}
      activeClassName={"active"}
    //   onClick={() => handleClick(name, link, external_link)}
    //   //className="sidebar-menu-link"
    //   className={`${
    //     window.location.pathname === link
    //       ? "sidebar-menu-link active"
    //       : "sidebar-menu-link"
    //   } ${disabled && "disabled"} ${hideVisibility && "hide-visibility"}`}
      style={{position: "relative"}}
    >
     {/* <FontAwesomeIcon icon={item.icon} /> */}
      <span >{item.name}</span>
    </NavLink>
                   </li>)}
               </ul>
              </div>
            </div>
          {/* </CSSTransition> */}
  </>
}

export default AppSidebar;

