var mongoose = require('mongoose');
var CharacterData = mongoose.model('CharacterData');

var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
};

module.exports.characterDataReadAll = function(req, res)
{
  console.log("Finding all Character Data Records", req);
  
  CharacterData
    .find({})
    .exec(function(err, characterData){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(characterData);
      sendJSONresponse(res, 200, characterData);
    });
};

module.exports.characterDataReadOne = function(req, res) {
    console.log('Finding Character Data Record', req.params);
    if (req.params && req.params.characterClass && req.params.gender) {
        CharacterData
            .find({
                characterClass: req.params.characterClass,
                gender: req.params.gender
            })
            .exec(function(err, characterData) {
                if (!characterData) {
                    sendJSONresponse(res, 404, {
                        "message": "class or gender value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(characterData);
                sendJSONresponse(res, 200, characterData);
            });
    }
    else {
        console.log('No class or gender value specified');
        sendJSONresponse(res, 404, {
            "message": "No class or gender value in request"
        });
    }
};