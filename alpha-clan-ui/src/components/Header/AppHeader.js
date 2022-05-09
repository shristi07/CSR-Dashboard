

import React from "react";
import { useState } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AppHeader = props => {
  // const [style, setStyle] = useState("left-panel");
  const changeStyle = () => {
    console.log("you just clicked");
  
  if (props.style === "panel-container1") props.setStyle("panel-container");
      else props.setStyle("panel-container1");
  };
  return <>
    <nav class="  border-bottom card-align app-header-container">
        <div class="hamburger-icon">
          <i class="fa fa-bars" onClick={changeStyle}></i>
        </div>
        <div class="logout-icon">
                <a href="" >
                <i class="fa fa-sign-out"></i> Log out
                </a>
            
        </div>
    </nav>
  </>
}

export default AppHeader;

