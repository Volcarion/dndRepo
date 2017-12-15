var express = require('express');
var router = express.Router();
var ctrlCharacterData    = require('../controllers/character');
var ctrlCampaignData     = require('../controllers/campaign');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dungeons and Dragons' });
});
*/
router.get('/characterdata/:characterClass/:gender', ctrlCharacterData.characterDataReadOne);
router.get('/characterdata', ctrlCharacterData.characterDataReadAll);

router.get('/campaigndata/:difficulty', ctrlCampaignData.campaignDataReadOne);
router.get('/campaigndata', ctrlCampaignData.campaignDataReadAll);


module.exports = router;
