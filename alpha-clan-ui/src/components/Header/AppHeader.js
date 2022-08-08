import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarState } from "../../Actions/userActions";
import { getCookie } from "../../helper";

const AppHeader = (props) => {
  const { showSidebar } = useSelector((state) => ({
    showSidebar: state.userReducer.showSidebar,
  }));
  const logoutAction=() => {
    let isAuth = getCookie("auth_token");
    if (isAuth) {
      document.cookie =
        "auth_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    }
    window.location.href = "/";
};
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
        <div onClick={logoutAction} class="logout-icon">
          <a>
            <i class="fa fa-sign-out"></i> Log out
          </a>
        </div>
      </nav>
    </>
  );
};

export default AppHeader;
