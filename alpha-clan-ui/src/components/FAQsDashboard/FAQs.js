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
        <h2>Kartavya</h2>
        <div className="faqs-container-inner">
          <div className="question-container">
            <ul>
              <li>
                <span>What actions can I perform through Kartavya?</span>
              </li>
              <li>
                <p>
                  Kartavya is a platform for marking your contributions under
                  organisation's CSR initiave.It will enable all Employees to be more
                  forthcoming towards their Social Responsibilities, towards
                  their "KARTAVYA". You can contribute in the following forms:
                  <br />
                  <br />
                  1. Donations: Employees can contribute either Monetory(any
                  amount) or Charity(any item) for our social engagements.
                  <br />
                  2. Volunteer: Employees can join hands with the PAHAL core team
                  to help in the ongoing CSR events.
                  <br />
                  3. Start Fundraiser: Employees can request a fundraiser which on
                  approval can get featured on the dashboard so that more and
                  more Employees can contribute to your cause.
                  <br />
                </p>
              </li>
            </ul>
          </div>
          <div className="question-container">
            <ul>
              <li>
                <span>What is a Social Badge and Social Score?</span>
              </li>
              <li>
                <p>
                  Social badge is a visible and validated indicator of active
                  participation of a Employee under PAHAL whereas Social Score
                  is a point that a Employee earns with
                  every contribution made through this Dashboard in the following manner:
                  <br />
                  1.Monetory Donation - 100 INR = 5 Social Score Points Earned
                  <br />
                  2.Charity Donation - 50 Social Score Points Earned
                  <br />
                  3.Volunteer- 100 Social Score Points Earned
                  <br />
                  4.Starting Fundraiser- 50 Social Score Points Earned
                </p>
              </li>
            </ul>
          </div>

          <div className="question-container">
            <ul>
              <li>
                <span>How Social Badge is related to Social Score?</span>
              </li>
              <li>
                <p>
                Social Badges are segragated according to the Employee's Social Score in the following manner:
                  <br />
                  1. Social Score &gt; 5000 - Gold Badge
                  <br />
                  2.Social Score &gt; 1000 - Silver Badge
                  <br />
                  3.Social Score &gt; 0 - Bronze Badge
                  <br />
                  Employees who manage to earn Gold Badge with their exceptional work will be recognised under Leaders Board
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
                  Every 18th of a month, donation request made by Employee will get
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
