import React from "react";
import Breadcrumbs from "../../config/Breadcrumbs";

const FAQs = ({ crumbs }) => {
  return (
    <>
      <div className="border-bottom card-align app-body-header">
        <div className="heading-container">
          <h2 className="heading">FAQs</h2>
          <Breadcrumbs breadcrumbs={crumbs} />
        </div>
      </div>

      <div className="faqs-container">
        <h2>Pahal</h2>
        <div className="faqs-container-inner">
          <div className="question-container">
            <ul>
              <li>
                <span>
                  What actions can I perform through the Pahal Dashboard?
                </span>
              </li>
              <li>
                <p>
                  The Pahal Dashboard is a platform for marking your
                  contributions under TTN's CSR initiave. You can contribute in
                  the following forms:
                  <br />
                  <br />
                  1. Donations: Newers can contribute either Monetory(any
                  amount) or Charity(any item) for our social engagements.
                  <br />
                  2. Volunteer: Newers can join hands with the PAHAL core team
                  to help in the ongoing CSR events.
                  <br />
                  3. Start Fundraiser: Newers can request a fundraiser which on
                  approval can get featured on the dashboard so that nore and
                  more newers can contribute to your cause.
                  <br />
                </p>
              </li>
            </ul>
          </div>
          <div className="question-container">
            <ul>
              <li>
                <span>What is social score and how it is calculated?</span>
              </li>
              <li>
                <p>
                  Social score is similar to REAP points gained specifically on
                  making contributions under PAHAL. Score is segragated
                  according to the type of contribution made as follows:
                  <br />
                  1.Monetory Donation - 100 INR = 1 Social Score Earned
                  <br />
                  2.Charity Donation - ___ Social Score Earned
                  <br />
                  3.Volunteer- __ Social Score Earned
                  <br />
                  4.Starting Fundraiser-__Social Score Earned"
                </p>
              </li>
            </ul>
          </div>

          <div className="question-container">
            <ul>
              <li>
                <span>How reap is related to social core?</span>
              </li>
              <li>
                <p>
                  The social score will be added to REAP point that can be
                  redeemed from newersworld.
                </p>
              </li>
            </ul>
          </div>
          <div className="question-container">
            <ul>
              <li>
                <span>What is the donation cycle</span>
              </li>
              <li>
                <p>
                  Every 18th of a month, donation request made by Newer will get
                  resolved as on 18th Financial team initiates the calculation
                  for the salary to be credited for current month.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
