import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarState } from "../../Actions/userActions";

const AppHeader = (props) => {
  const { showSidebar } = useSelector((state) => ({
    showSidebar: state.userReducer.showSidebar,
  }));
  const dispatch = useDispatch();
  return (
    <>
      <nav class="  border-bottom card-align app-header-container">
        <div
          onClick={() => dispatch(sidebarState(!showSidebar))}
          class="hamburger-icon"
        >
          <i class="fa fa-bars"></i>
        </div>
        <div class="logout-icon">
          <a href="">
            <i class="fa fa-sign-out"></i> Log out
          </a>
        </div>
      </nav>
    </>
  );
};

export default AppHeader;
