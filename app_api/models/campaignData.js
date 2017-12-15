var mongoose = require('mongoose');

var CampaignSchema = new mongoose.Schema({
    icao: String,
    runwayId: String,
    runwayLength: Number,
    runwayMagneticHeading: Number,
    runwayTrueHeading: Number
});

mongoose.model('CampaignData', CampaignSchema, 'CampaignData');