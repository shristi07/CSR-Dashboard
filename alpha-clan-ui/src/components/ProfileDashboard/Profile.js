import React, { useCallback, useState } from "react";
import Breadcrumbs from "../../config/Breadcrumbs";
import { Link, Typography } from "@material-ui/core";
import VolunteerModal from "./VolunteerModal";
import DonateModal from "./DonateModal";
import FundraiserModal from "./FundraiserModal";
import TableWrapper from "../Table/TableWrapper";
import { OverlayTrigger,Tooltip } from "react-bootstrap";

const Profile = ({crumbs}) => {
  const [activeCardId, setActiveCardId] = useState(0);
  const [isDonateEdit, setIsDonationEdit] = useState(false);
  const [isVolunteerEdit, setIsVolunteerEdit] = useState(false);
  const [isFundraiserEdit, setIsFundraiserEdit] = useState(false);
  const [rowData, setRowData] = useState({});
  
  const onEditClick = useCallback(
    (selectedRows) => {
      setRowData(selectedRows);
      {activeCardId===0?setIsDonationEdit(true):activeCardId===1?setIsVolunteerEdit(true):setIsFundraiserEdit(true)}
      console.log("entering",activeCardId,isDonateEdit,isVolunteerEdit,isFundraiserEdit); 
    },
    [setRowData,activeCardId,setIsDonationEdit,setIsFundraiserEdit,setIsVolunteerEdit]
  );
  console.log("crum",crumbs);
  const socialScore = 230;
  const myContributions=[{
    "contribution_id":0,
    "headers": [
      {
        "Header": "Donation Category",
        "accessor": "donation_category"
      },
      {
        "Header": "Donation Made",
        "accessor": "donation"
      },
      {
        "Header": "Requested On",
        "accessor": "requested_on"
      },
      {
        "Header": "Request Status",
        "accessor": "status"
      },
      {
        "Header": "Social Score",
        "accessor": "social_score"
      },
      {
        "Header": "Actions",
        "accessor": "actions"
      }
    ],
    "data": [
      {
        "donation_category": "Monetory Donation",
        "donation":"300",
        "requested_on": "19-04-2021",
        "status": "Complete",
        "social_score": 20,
        actions: ""
      },
      {
        "donation_category": "Monetory Donation",
        "donation":"300",
        "requested_on": "19-04-2021",
        "status": "Complete",
        "social_score": 20,
        actions: ""
      },
      {
        "donation_category": "Charity Donation",
        "donation":[{label:"Book",value:"Book"},{ value: 'Linen/Blankets', label: 'Linen/Blankets'}],
        "requested_on": "19-04-2021",
        "status": "Pending",
        "social_score": 20,
        actions: ""
      },
      {
        "donation_category": "Monetory Donation",
        "donation":"300",
        "requested_on": "19-04-2021",
        "status": "Complete",
        "social_score": 20,
        actions: ""
      }
    ]
  },
  {
    "contribution_id":1,
    "headers": [
      {
        "Header": "Volunteer At",
        "accessor": "volunteer_at"
      },
      {
        "Header": "Requested On",
        "accessor": "requested_on"
      },
      {
        "Header": "Request Status",
        "accessor": "status"
      },
      {
        "Header": "Social Score",
        "accessor": "social_score"
      },
      {
        "Header": "Actions",
        "accessor": "actions"
      }
    ],
    "data": [
      {
        "volunteer_at": [{label:"Tree Plantation Drive",value:"Tree Plantation Drive"}],

        "requested_on": "19-04-2021",
        "status": "Pending",
        "social_score": 20,
        actions: ""
      },
      {
        "volunteer_at": [{label:"Tree Plantation Drive",value:"Tree Plantation Drive"}],
        "requested_on": "19-04-2021",
        "status": "Complete",
        "social_score": 20,
        actions: ""
      },
      {
        "volunteer_at": [{label:"Blanket Distribution",value:"Blanket Distribution"}],
        "requested_on": "19-04-2021",
        "status": "Complete",
        "social_score": 20,
        actions: ""
      },
      {
        "volunteer_at": [{label:"Blanket Distribution",value:"Blanket Distribution"}],
        "requested_on": "19-04-2021",
        "status": "Pending",
        "social_score": 20,
        actions: ""
      }
    ]
  },
  {
    "contribution_id":2,
    "headers": [
      {
        "Header": "Cause",
        "accessor": "cause"
      },
      {
        "Header": "Funds For",
        "accessor": "name"
      },
      {
        "Header": "Relation",
        "accessor": "relation"
      },
      {
        "Header": "Fund Aim",
        "accessor": "fund_aim"
      },
      {
        "Header": "Requested On",
        "accessor": "requested_on"
      },
      {
        "Header": "Request Status",
        "accessor": "status"
      },
      {
        "Header": "Social Score",
        "accessor": "social_score"
      },
      {
        "Header": "Comment",
        "accessor": "comment"
      },
      {
        "Header": "Actions",
        "accessor": "actions"
      }
    ],
    "data": [
      {
        "cause": "Medical Emergency",
        "name":"Vishnu",
        "relation":"Family",
        "fund_aim":30000,
        "requested_on": "19-04-2021",
        "status": "Pending",
        "social_score": 50,
        "comment":"We Lost Vishnu in a Car accident",
        "actions": ""
      },
    ]
  }
]
  const badgeType = (value) => {
    switch (value) {
      case true:
        return "gold-bagde";
      case value > 100:
        return "silver-bagde";
      case value > 0:
        return "bronze-bagde";

      default:
        break;
    }
  };
  const extractFormat = (value) => {
    let tempArr = [];
    value?.forEach(item=>{for (let i in item){tempArr.push(item[i])}})
    let format = [...new Set(tempArr)].toString();
    return format;

  };

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
            onHideSetIsEdit={(val) => {
              setIsVolunteerEdit(val);
              setRowData({});
            }}/>
            <DonateModal isEdit={isDonateEdit}
            rowData={rowData}
            onHideSetIsEdit={(val) => {
              setIsDonationEdit(val);
              setRowData({});
            }}/>
            <FundraiserModal isEdit={isFundraiserEdit}
            rowData={rowData}
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
              </div>
              <div className="card-container">
                {[
                  { key: "Donations Made", value: "4", id: 0 },
                  { key: "Volunteered", value: "4", id: 1 },
                  { key: "Fundraiser Initiated", value: "1", id: 2 },
                ].map((card, index) => (
                  <div
                    onClick={() => setActiveCardId(card.id)}
                    style={
                      index === activeCardId
                        ? { backgroundColor: "#1AB394", color: "#fff" }
                        : {}
                    }
                    className="card-widget-basic profile-card "
                  >
                    <h6 className="key">{card.key}</h6>
                    <h6 className="value">{card.value}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-widget-basic card-align score-container ">
              <div
                className={`star-image ${
                  socialScore > 300
                    ? "gold-badge"
                    : 300 < socialScore > 100
                    ? "silver-badge"
                    : "silver-badge"
                }`}
              ></div>
              <div className="score-info card-align ">
                <div className="card-align information">
                  <h6 className="key">Social Score</h6>
                  <h6 className="value">{socialScore}</h6>
                </div>
                <div className="card-align information">
                  <h6 className="key">REAP Points</h6>
                  <h6 className="value">250</h6>
                </div>

                <a
                  href="https://newersworld.tothenew.com/reap/merchandise"
                  class="button redeem btn submit-button"
                >
                  <i class="icon fa fa-gift"></i>Redeem
                </a>
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
                              <i  class="delete icon fa fa-trash"></i>
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
