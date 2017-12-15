(function() {

    angular
        .module('dndApp')
        .service('CampaignData', campaignData);

    campaignData.$inject = ['$http'];

    function campaignData($http) {
        var getCampaignData = function() {
            return $http.get('/api/campaignData');
        }

        return {
            getCampaignData: getCampaignData
        };
    }
})();
