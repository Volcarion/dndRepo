(function() {

    angular
        .module('dndApp')
        .service('Dice', dice);
                  //External        Internal
    dice.$inject = ['$http'];

    function dice($http) {
        var rollDice = function(number, type) {
            return $http.get('/api/diceapi' + '/' + number + '/' + type);
        };
        
        return {
            rollDice: rollDice,
        };
    }
})();