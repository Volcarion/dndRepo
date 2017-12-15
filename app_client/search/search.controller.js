(function() {

  angular
    .module('dndApp')
    .controller('searchCtrl', searchCtrl);

  searchCtrl.$inject = ['$scope', 'CharacterData', 'CampaignData', 'SelectedData'];

  function searchCtrl($scope, CharacterData, CampaignData, SelectedData) {

    console.log(window.location);    
    
    
    var vm = this;
    vm.content = "Search Characters";
    vm.selectedClass = "";
    vm.selectedGender = "";
    vm.selectedDifficulty = "";
    
    //check selected Class
    if(SelectedData.selectedClass !== null){
      vm.selectedClass = SelectedData.selectedClass;
    }
    
    //check selected Gender
    if(SelectedData.selectedGender !== null){
      vm.selectedGender = SelectedData.selectedGender;
    }
    
    //check selected Difficulty
    if(SelectedData.selectedDifficulty !== null){
      vm.selectedDifficulty = SelectedData.selectedDifficulty;
    }
    
    
    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getCharacterData = function() {
      CharacterData.getCharacterData()
        .then(function(response) {
          vm.characters = response.data;
          console.log(response);
        })
        .catch(function(e) {
          console.log(e);
        });
    }
    
    vm.getCampaignData = function() {
      CampaignData.getCampaignData()
        .then(function(response) {
          vm.campaigns = response.data;
          console.log(response);
        })
        .catch(function(e) {
          console.log(e);
        });
    }

    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    vm.clearSelectedData = function(){
      
      vm.selectedClass = null;
      vm.selectedGender = null;
      vm.selectedDifficulty = null;
    }
    
    //saved departure
    $scope.$watch(
      function(){
        return vm.selectedClass;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.characterClass !== oldValue.characterClass){
          SelectedData.selectedClass = newValue;
        } 
      }, 
      true
    );
    
    //saved arrival
    $scope.$watch(
      function(){
        return vm.selectedGender;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.gender !== oldValue.gender){
          SelectedData.selectedGender = newValue;
        } 
      }, 
      true
    );
    
    //saved weight
    $scope.$watch(
      function(){
        return vm.selectedDifficulty;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.Difficulty !== oldValue.Difficulty){
          SelectedData.selectedDifficulty = newValue;
        } 
      }, 
      true
    );    

    //call services
    vm.getCharacterData();
    vm.getCampaignData();


  }

})();
