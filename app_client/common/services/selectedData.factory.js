(function() {

  angular
    .module('dndApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedClass : '',
          selectedGender : '',
          selectedDifficulty : ''
      };
  }

})();