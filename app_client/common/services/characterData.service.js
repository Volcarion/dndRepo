(function() {

    angular
        .module('dndApp')
        .service('CharacterData', characterData);

    characterData.$inject = ['$http'];

    function characterData($http) {
        var getCharacterData = function() {
            return $http.get('/api/characterData');
        }
        
        var getSpecificCharacterData = function(characterClass, gender) {
            return $http.get('/api/characterData/' + characterClass + "/" + gender);
        }

        return {
            getCharacterData: getCharacterData,
            getSpecificCharacterData: getSpecificCharacterData
        };
    }
})();
