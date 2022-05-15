import React, { useCallback, useEffect, useState } from "react";
import Breadcrumbs from "../../config/Breadcrumbs";
import { Link, Typography } from "@material-ui/core";
import VolunteerModal from "../Modals/VolunteerModal";
import DonateModal from "../Modals/DonateModal";
import FundraiserModal from "../Modals/FundraiserModal";
import TableWrapper from "../Table/TableWrapper";
import { OverlayTrigger,Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContributionRequest, fetchScore} from "../../Actions/ProfileActions";

const Profile = ({crumbs}) => {
  const [activeCardId, setActiveCardId] = useState(0);
  const [isDonateEdit, setIsDonationEdit] = useState(false);
  const [isVolunteerEdit, setIsVolunteerEdit] = useState(false);
  const [isFundraiserEdit, setIsFundraiserEdit] = useState(false);
  const [rowData, setRowData] = useState({});

  const{
    myContributions,
    profileCard,
    socialScore,
    userData

  }=useSelector((state) => ({
    ...state.profileReducer,
    userData: state.userReducer.userData,
  }));

  useEffect(()=>{
    dispatch(fetchScore());

  },[myContributions])
  
  const onEditClick = useCallback(
    (selectedRows) => {
      setRowData(selectedRows);
      {activeCardId===0?setIsDonationEdit(true):activeCardId===1?setIsVolunteerEdit(true):setIsFundraiserEdit(true)}
    },
    [setRowData,activeCardId,setIsDonationEdit,setIsFundraiserEdit,setIsVolunteerEdit]
  );

  const extractFormat = (value) => {
    let tempArr = [];
    value?.forEach(item=>{for (let i in item){tempArr.push(item[i])}})
    let format = [...new Set(tempArr)].toString();
    return format;

  };
  const dispatch= useDispatch();
  return (
    <>
      <div class=" profile-container">
        <div className="border-bottom card-align app-body-header">
          <div className="heading-container">
            <h2 className="heading">Dashboard</h2>
            <Breadcrumbs
                          breadcrumbs={crumbs}
                        />
          </div>
          <div className="contribution-container card-align">
            <VolunteerModal isEdit={isVolunteerEdit}
            rowData={rowData}
            onSumitSetActiveCard={()=>{setActiveCardId(1)}}
            onHideSetIsEdit={(val) => {
              setIsVolunteerEdit(val);
              setRowData({});
            }}/>
            <DonateModal isEdit={isDonateEdit}
            rowData={rowData}
            onSumitSetActiveCard={()=>{setActiveCardId(0)}}

            onHideSetIsEdit={(val) => {
              setIsDonationEdit(val);
              setRowData({});
            }}/>
            <FundraiserModal isEdit={isFundraiserEdit}
            rowData={rowData}
            onSumitSetActiveCard={()=>{setActiveCardId(2)}}

            onHideSetIsEdit={(val) => {
              setIsFundraiserEdit(val);
              setRowData({});
            }}/>
          </div>
        </div>
        <div className="app-body">
          <div className="my-profile">
            <div className="card-widget-basic profile-container card-align">
              <div className="pic-container">
                <img src="https://success-factor.s3.amazonaws.com/prod/profilePicFolder/408b47cd-af04-448f-9bcb-eea42ab4ae49_Shristi-Katiyar-Profile-Pitcure.jpeg" />
                <p className="bottom-data">{userData.fullName}</p>
              </div>
              <div className="card-container">
                {profileCard.map((card, index) => ( 

                  <div
                    onClick={() =>
                      setActiveCardId(card.id)}
                    style={
                      card.id === activeCardId
                        ? { backgroundColor: "#1AB394", color: "#fff" }
                        : {}
                    }
                    className="card-widget-basic profile-card "
                  >
                    <h6 className="key">{card.key}</h6>
                    <h6 className="value">{myContributions[card.id]?.data.length}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-widget-basic card-align score-container ">
              <div
                className={`star-image ${
                  socialScore > 5000
                    ? "gold-badge"
                    : 1000 < socialScore
                    ? "silver-badge"
                    : "bronze-badge"
                }`}
              ></div>
              <div className="score-info card-align ">
                  <h3 >Social Score</h3>
                  <h3 >{socialScore}</h3>
              </div>
            </div>
          </div>
          <div className="card-widget-basic contribution-status-container">
            <div className="card-widget-header">
              <h6>My Contributions</h6>
            </div>
            <div className="card-widget-body">
            <TableWrapper
            data={myContributions[activeCardId]?.data}
            headers={myContributions[activeCardId]?.headers}
            tableInterfaceMode={"table-without-borders"}
            overrideCellsData={{
              actions: (link, key, rowData) => 
              
                <div className="card-align action-container">
                    {rowData.status==="Pending"&&<>
                <OverlayTrigger
                              key="left"
                              placement="left"
                              overlay={
                                <Tooltip id="tooltip-auto">
                                  {"Delete"}
                                </Tooltip>
                              }>
                              <i onClick={()=>{
                                dispatch(deleteContributionRequest(rowData))}}  class="delete icon fa fa-trash"></i>
                            </OverlayTrigger>
                            <OverlayTrigger
                              key="right"
                              placement="right"
                              overlay={
                                <Tooltip id="tooltip-auto">
                                  {"Edit"}
                                </Tooltip>
                              }>
                               <i onClick={()=>onEditClick(rowData)}  class="edit icon  fa fa-edit"></i>
                            </OverlayTrigger></>}  
                </div>,
                volunteer_at:(link, key, rowData)=><span>{extractFormat(rowData.volunteer_at)}</span>,
                donation:(link, key, rowData)=><>
                {
                
    <span>{rowData.donation_category==="Charity Donation"?extractFormat(rowData.donation):rowData.donation}</span>
                }
                </>
              
            }}
          />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;