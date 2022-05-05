

import React from "react";
import {CSSTransition} from "react-transition-group";
import {NavLink} from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const AppSidebar = props => {
    const userData= {
        "enabled": true,
        "firstName": "Shristi",
        "fullName": "Shristi Katiyar",
        "hasApprovals": false,
        "id": 1877,
        "isAdmin": false,
        "isReportingManager": false,
        "lastName": "Katiyar",
        "middleName": null,
        "newerId": "4682",
        "profilePicUrl": "https://success-factor.s3.amazonaws.com/prod/profilePicFolder/408b47cd-af04-448f-9bcb-eea42ab4ae49_Shristi-Katiyar-Profile-Pitcure.jpeg",
        "reportingManagerName": "Mukund Mohan Chaturvedi",
        "username": "shristi.katiyar@tothenew.com",
        "vertical": null
      }
    const data = [
        {
            name: "Dashboard",
            icon: "faTachometer",
            link: "/",
          },
          {
            name: "My Profile",
            icon: "analytics",
            link: "/myProfile",
          },
          {
            name: "Pratimaas",
            icon: "analytics",
            link: "/pratimaas",
          },
          {
            name: "Paatra",
            icon: "analytics",
            link: "/paatra",
          },
        ]

  return <>
          {/* <CSSTransition
            in={true}
            timeout={500}
            classNames={"ani-sidebar"}
            mountOnEnter
          > */}
            <div className={`sidebar-menu-container `}>
              <div
                className={`sidebar-menu `}
              >
                  <div className="nav-header">
                      <img width="48" height="48" src={userData.profilePicUrl} />
                      <p className="user-name">{userData.fullName}</p>
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
     <FontAwesomeIcon icon={item.icon} />
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

