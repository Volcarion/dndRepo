(function() {

  angular
    .module('dndApp')
    .controller('characterCtrl', characterCtrl);

  characterCtrl.$inject = ['$scope', 'CharacterData', 'SelectedData'];

  function characterCtrl($scope, CharacterData, SelectedData) {

    console.log(window.location);    
    
    
    var vm = this;
    vm.content = "Character Sheet Information";
    vm.selectedClass = "";
    vm.selectedGender = "";
    
    //check selected Class
    if(SelectedData.selectedClass !== null){
      vm.selectedClass = SelectedData.selectedClass;
    }
    
    //check selected Gender
    if(SelectedData.selectedGender !== null){
      vm.selectedGender = SelectedData.selectedGender;
    }
    
    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getSpecificCharacterData = function() {
      CharacterData.getSpecificCharacterData(vm.selectedClass.characterClass, vm.selectedGender.gender)
        .then(function(response) {
          vm.character = response.data;
          console.log(response);
        })
        .catch(function(e) {
          console.log(e);
        });
    }
    
    //call services
    vm.getSpecificCharacterData();


  }

})();