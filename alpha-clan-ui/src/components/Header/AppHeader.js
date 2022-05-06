

import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AppHeader = props => {

  return <>
    <nav class="  border-bottom card-align app-header-container">
        <div class="hamburger-icon">
        <i class="fa fa-bars"></i>
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

