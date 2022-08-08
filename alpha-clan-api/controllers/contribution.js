const {
  volunteer,
  donation,
  fundraiser,
  user,
} = require("../models/contribution");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "305195431701-rnsdu77n2ulnjodd5v8o1siq9r1rc0lk.apps.googleusercontent.com"
);

const getUserInfo = async (req,res)=>{ 
  try {
    user.findOne(req.query).exec(async(err,entity)=>{
        res.status(201).json(entity);
    })  
  } catch (error) {
    res.status(404).json({ message:"Error while fetching user details",error: error.message });
  }
}

const getUserContributions = async (req, res) => {
  try {
    const volunteerContributions = await volunteer.find();
    const donationContributions = await donation.find();
    const fundraiserContributions = await fundraiser.find();

    // let temp = volunteerContributions.map(item=>{item.})
    const userContributions = [
      {
        contribution_type_id: 0,
        headers: [
          {
            Header: "Donation Category",
            accessor: "donation_category",
          },
          {
            Header: "Donation Made",
            accessor: "donation",
          },
          {
            Header: "Requested On",
            accessor: "requested_on",
          },
          {
            Header: "Request Status",
            accessor: "status",
          },
          {
            Header: "Earned Score",
            accessor: "social_score",
          },
          {
            Header: "Actions",
            accessor: "actions",
          },
        ],
        data: donationContributions,
      },
      {
        contribution_type_id: 1,
        headers: [
          {
            Header: "Volunteer At",
            accessor: "volunteer_at",
          },
          {
            Header: "Date",
            accessor: "date",
          },
          {
            Header: "Requested On",
            accessor: "requested_on",
          },
          {
            Header: "Request Status",
            accessor: "status",
          },
          {
            Header: "Earned Score",
            accessor: "social_score",
          },
          {
            Header: "Actions",
            accessor: "actions",
          },
        ],
        data: volunteerContributions,
      },
      {
        contribution_type_id: 2,
        headers: [
          {
            Header: "Cause",
            accessor: "cause",
          },
          {
            Header: "Funds For",
            accessor: "funds_for",
          },
          {
            Header: "Relation",
            accessor: "relation",
          },
          {
            Header: "Fund Aim",
            accessor: "fund_aim",
          },
          {
            Header: "Requested On",
            accessor: "requested_on",
          },
          {
            Header: "Request Status",
            accessor: "status",
          },
          {
            Header: "Earned Score",
            accessor: "social_score",
          },
          {
            Header: "Comment",
            accessor: "comment",
          },
          {
            Header: "Actions",
            accessor: "actions",
          },
        ],
        data: fundraiserContributions,
      },
    ];

    res.status(200).json(userContributions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createContributionRequest = async (req, res) => {
  let newRequest;
  switch (req.query.contributionTypeId) {
    case "0":
      newRequest = new donation(req.body);
      break;
    case "1":
      newRequest = new volunteer(req.body);
      break;
    case "2":
      newRequest = new fundraiser(req.body);
      break;

    default:
      break;
  }
  try {
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { token } = req.body;
  let newRequest;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "305195431701-rnsdu77n2ulnjodd5v8o1siq9r1rc0lk.apps.googleusercontent.com",
    });
    const { name, email, picture, email_verified } = ticket.getPayload();
    if(email_verified){
      user.findOne({email}).exec(async(err,entity)=>{
        if (entity) {
          res.status(201).json(entity);
        } else {
          newRequest = new user({
            fullName: name,
            profilePicUrl: picture,
            username: email,
          });
          await newRequest.save();
          res.status(201).json(newRequest);
        }
      })

     
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getUserContributions,
  getUserInfo,
  createContributionRequest,
  createUser,
};
