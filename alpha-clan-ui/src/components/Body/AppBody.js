import React, { useState } from "react";
// import Breadcrumbs from "./Breadcrumbs";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link, Typography } from "@material-ui/core";
import VolunteerModal from "../Contribute/VolunteerModal";
import DonateModal from "../Contribute/DonateModal";
import FundraiserModal from "../Contribute/FundraiserModal";
import TableWrapper from "../Table/TableWrapper";

const AppBody = (props) => {
  const [activeCardId, setActiveCardId] = useState();
  const socialScore = 503;
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
  return (
    <>
      <div class=" app-body-container">
        <div className="border-bottom card-align app-body-header">
          <div className="heading-container">
            <h2 className="heading">Dashboard</h2>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Dashboard</Typography>
            </Breadcrumbs>
            {/* <Breadcrumbs/> */}
          </div>
          <div className="contribution-container card-align">
            <VolunteerModal />
            <DonateModal />
            <FundraiserModal />
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
                  { key: "Donated", value: "2300", id: 0 },
                  { key: "Volunteered", value: "4", id: 1 },
                  { key: "Fundraiser Initiated", value: "0", id: 2 },
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
                    : "bronze-badge"
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
                  <i class="fa fa-gift"></i>Redeem
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
                table={
                  {
                  headers : [
                    "Donation Category",
                    "Requested On",
                    "Request Status",
                    "Social Score",
                    "Comment",
                    "Actions",
                  ],
                  data : [
                    { category: "Donation", requested_on: "19-04-2021", status: "Approved", score_earned:20,comment:"", action:"" },
                    { category: "Donation", requested_on: "19-04-2021", status: "Approved", score_earned:20,comment:"", action:"" },
                    { category: "Donation", requested_on: "19-04-2021", status: "Approved", score_earned:20,comment:"", action:"" },
                    { category: "Donation", requested_on: "19-04-2021", status: "Approved", score_earned:20,comment:"", action:"" },
                  ]
                }
              }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBody;
