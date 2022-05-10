import React, { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { sendEmail } from "../../Actions/ProfileActions";
import Breadcrumbs from "../../config/Breadcrumbs";
import DonateModal from "../Modals/DonateModal";

const Pahal = ({ crumbs }) => {
  const{
    donationData,
    volunteerData,
    fundraiserData

  }=useSelector((state) => ({
    ...state.pahalReducer,
    // newerData: state.userReducer.newerData,
  }));

const dispatch=  useDispatch();
  return (
    <>
      <div className="Pahal-container">
        <div className="border-bottom card-align app-body-header">
          <div className="heading-container">
            <h2 className="heading">Pahal</h2>
            <Breadcrumbs breadcrumbs={crumbs} />
          </div>
        </div>
        <div className="card-widget-body">
          
          <div className="volunteery-events-container">
            <h5 className="contribution-type" >Social Campaingn</h5>
            <div className="cards-group card-align">
              {volunteerData.map((event) => (
                <div className="card-widget-basic event">
                  <h6>{event?.title}</h6>
                  <div>{event?.summary}</div>
                  <div className="date">
                    {!event?.ends?`${event?.starts}`:`${event?.starts} - ${event?.ends}`}
                  </div>
                  <div>
                    <a className="mailto" href={`mailto:${event?.contact?.mail}`}>
                    <span>@{event?.contact?.name}</span>
                    </a>
                  </div>
                  <Button onClick={()=>{dispatch(sendEmail())}} className="button submit-button" variant="success" >
          Volunteer 
         <i class="star fa fa-star"></i>

        </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="donation-drive-container">
            <h5 className="contribution-type" >Donation Drive</h5>
            <div className="cards-group card-align">
              {donationData.map((drive) => (
                <div className="card-widget-basic drive">
                  <h6>{drive?.title}</h6>
                  <div>{drive?.summary}</div>
                  <div className="date">
                    {!drive?.ends?`Starts ${drive?.starts}`:`${drive?.starts}  -  ${drive?.ends}`}
                  </div>
                  <div>
                    <a className="mailto" href={`mailto:${drive?.contact?.mail}`}>
                    <span>@{drive?.contact?.name}</span>
                    </a>
                  </div>
                  <DonateModal  star={true} />
                </div>
              ))}
            </div>
          </div>
          <div className="featured-fundraiser-container">
            <h5 className="contribution-type" >Featured Fundraiser</h5>
            <div className="cards-group card-align">
              {fundraiserData.map((fundraiser) => (
                <div className="card-widget-basic fundraiser">
                   <h6>Extend help to {fundraiser?.funds_for}!</h6>
                     <div className="progress-bar"></div> 
                     <div className="details card-align">
                       <div className="goal">{fundraiser.fund_aim}</div><div className="raised">{fundraiser.collected}</div>
                       </div> 

                  <div>{fundraiser?.comment}</div> 
                  <div className="supporters">{fundraiser?.total_supporters}</div> 
                  <div className="ends">{fundraiser?.ends}</div> 
                  <div>
                    <a className="mailto" href={`mailto:${fundraiser?.contact?.mail}`}>
                    <span>@{fundraiser?.contact?.name}</span>
                    </a>
                  </div>
                  <DonateModal  star={true} fundraiser={true}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pahal;
