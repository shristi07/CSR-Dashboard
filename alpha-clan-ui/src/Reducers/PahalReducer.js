import { handleActions } from "redux-actions";
import { pahalTypes } from "../constants";

const initState = {
  donationData: [
    {
      title: "Blood Donation",
      contact: { mail: "naman.goel@gmail.com", name: "Naman Goel" },
      summary:
        "Donating blood is a brief, selfless act of giving that truly, effectively and immediately help save lives.Be present in the Donation Camp in Office at 10:30 am in the given date",
      starts: "04-04-2022",
      ends: "7-04-2022",
    },
    {
      title: "Charity Donation",
      summary:
        "Join hands in meaningfully impacting lives at 'Naya Bans' by collection of Clothes for donation or supplying food to people affected by poverty.",
      contact: { mail: "naman.goel@gmail.com", name: "Naman Goel" },
      starts: "04-04-2022",
      ends: "7-04-2022",
    },
  ],

  volunteerData: [
    {
      title: "Teach Children",
      contact: { mail: "naman.goel@gmail.com", name: "Naman Goel" },
      summary:
        "A couple of our partners who support the education of underprivileged children are looking for volunteers to teach children. The medium of delivery could be Hindi or English and the mode of teaching will be online",
      volunteer_before: "04-04-2022",
      starts: "7-04-2022",
    },
    {
      title: "Tree Plantation Campaingn",
      summary:
        "Go-Green initiative under the aegis of PAHAL, conducting a tree plantation drive in association with Tender Heart, an NGO working on the provisions of social & educational opportunities for the underprivileged.",
      contact: { mail: "naman.goel@gmail.com", name: "Naman Goel" },
      volunteer_before: "04-04-2022",
      starts: "7-04-2022",
    },
    {
      title: "Old Age Home Visit",
      summary:
        "Team PAHAL along with Emplyees aiming to visit the 'Guru Vishram Vridh Ashram' and spend a few hours with around 110 elderly people. Join hands in chatting with them, indulging in some activities and sharing a few laughs.",
      contact: { mail: "naman.goel@gmail.com", name: "Naman Goel" },
      volunteer_before: "04-04-2022",
      starts: "7-04-2022",
    },
  ],
  fundraiserData: [
    {
      funds_for: "John Doe",
      comment:
        "We lost one of our colleagues, Jane Doe in March 2022 due to a cardiac arrest. While we cannot make up for the family's loss, we can still try to extend as much support as possible.To do so, we would encourage each Emplyee to contribute a portion of their monthly fixed salary",
      fund_aim: "3,00,000",
      collected: "1,90,00",
      total_supporters: "902",
      contact: { mail: "naman.goel@gmail.com", name: "Naman Goel" },
      ends: "09-12-2022",
    },
  ],
};

export const pahalReducer = handleActions(
  {
    [pahalTypes.REQUEST_DONATION_DATA]: (state, action) => ({
      ...state,
      donationData: initState.donationData,
    }),
    [pahalTypes.REQUEST_VOLUNTEER_DATA]: (state, action) => ({
      ...state,
      donationData: initState.volunteerData,
    }),
    [pahalTypes.REQUEST_FUNDRAISER_DATA]: (state, action) => ({
      ...state,
      donationData: initState.fundraiserData,
    }),
  },
  {
    ...initState,
  }
);
