import React, { useCallback, useState } from "react";
import Breadcrumbs from "../../config/Breadcrumbs";

const Pahal = ({ crumbs }) => {
  return (
    <>
      <div class=" Pahal-container">
        <div className="border-bottom card-align app-body-header">
          <div className="heading-container">
            <h2 className="heading">Pahal</h2>
            <Breadcrumbs breadcrumbs={crumbs} />
          </div>
        </div>
        {true&&<div className="donation-drive-container card-align">
          {["abc","bdc","sxx"].map(drive=><div className="card-widget-basic drive"><h3>{drive}</h3></div>)}
          </div>}
        {true&&<div className="volunteery-events-container card-align">
        {[].map(drive=><div className="card-widget-basic event"></div>)}
          </div>}
        {true&&<div className="featured-fundraiser-container card-align">
        {[].map(drive=><div className="card-widget-basic fundraiser"></div>)}
          </div>}
      </div>
    </>
  );
};

export default Pahal;
