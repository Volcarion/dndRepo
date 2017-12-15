var mongoose = require('mongoose');
var CampaignData = mongoose.model('CampaignData');

var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
};

module.exports.campaignDataReadAll = function(req, res)
{
  console.log("Finding all Campaign Data Records", req);
  
  CampaignData
    .find({})
    .exec(function(err, campaignData){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(campaignData);
      sendJSONresponse(res, 200, campaignData);
    });
};

module.exports.campaignDataReadOne = function(req, res) {
    console.log('Finding Campaign Data Record', req.params);
    if (req.params && req.params.difficulty) {
        CampaignData
            .find({
                difficulty: req.params.difficulty
            })
            .exec(function(err, campaignData) {
                if (!campaignData) {
                    sendJSONresponse(res, 404, {
                        "message": "difficulty value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(campaignData);
                sendJSONresponse(res, 200, campaignData);
            });
    }
    else {
        console.log('No difficulty value specified');
        sendJSONresponse(res, 404, {
            "message": "No difficulty value in request"
        });
    }
};