const mongoose = require("mongoose");

const volunteerSchema = mongoose.Schema({
    volunteer_at: [{
        value:String,
        label:String,
    }],
    requested_on: String,
    status: String,
    social_score: Number,
    actions: String,
    date: String,
});
const donationSchema = mongoose.Schema({
    donation_category: String,
    donation:String || [{
        value:String,
        label:String,
    }],
    amount:String,
    requested_on: String,
    status: String,
    frequency:String,
    social_score: Number,
    actions: String,
});
const fundraiserSchema = mongoose.Schema({
    cause: String,
    funds_for: String,
    relation:String,
    fund_aim: String || Number,
    requested_on: String,
    comment: String,
    status: String,
    social_score: Number,
    actions: String,
    ends: String,
});
const userSchema = mongoose.Schema({
    fullName: String,
    profilePicUrl: String,
    username: String,
});

const volunteer = mongoose.model('volunteer',volunteerSchema);
const donation = mongoose.model('donation',donationSchema);
const fundraiser = mongoose.model('fundraiser',fundraiserSchema);
const user = mongoose.model('user',userSchema);

module.exports = {
    volunteer,
    donation,
    fundraiser,
    user
}