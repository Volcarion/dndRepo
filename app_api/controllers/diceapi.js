var request = require('request');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(JSON.parse(content));
    //res.json(content);
}

/* GET all API Key Values Values */
module.exports.rollDice = function(req, res)
{
    console.log("Retrieving Key Store Values");
    
    var number = req.params.number;
    var type = req.params.type;
    var diceurl = 'https://rolz.orgapi/?' + number + 'd' + type + ".json";
    
    request(diceurl, function(error, response, body){
        //console.log(body);
        sendJSONresponse(res, "200", body); 
    });

}