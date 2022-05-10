import React from "react";
import { useSelector } from "react-redux";
import AppBody from "../Body/AppBody";
import AppFooter from "../Footer/Footer";
import AppHeader from "../Header/AppHeader";
import AppSidebar from "../Sidebar/AppSidebar";

const MainContainer = (props) => {
  const { userData, showSidebar } = useSelector((state) => ({
    ...state.userReducer,
  }));

  return (
    <>
      {false ? (
        <></>
      ) : (
        <>
          <div className="panel-container">
            <div className={`left-panel ${!showSidebar ? "collapse" : ""}`}>
              <AppSidebar userData={userData} />
            </div>
            <div className="right-panel">
              <AppHeader />

              <AppBody userData={userData} />
              <AppFooter />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainContainer;
