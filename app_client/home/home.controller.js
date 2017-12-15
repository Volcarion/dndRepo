(function() {

  angular
    .module('dndApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', `SelectedData`];

  function homeCtrl($scope, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);
    
    vm.content = "Dungeons & Dragons Character Repository";
    
    vm.selectedClass = "";
    vm.selectedGender = "";
    vm.selectedDifficulty = "";
    
    //check selected Departure
    if(SelectedData.selectedClass !== null){
      vm.selectedClass = SelectedData.selectedClass;
    }
    
    //check selected Arrival
    if(SelectedData.selectedGender !== null){
      vm.selectedGender = SelectedData.selectedGender;
    }
    
    //check selected weight
    if(SelectedData.selectedDifficulty !== null){
      vm.selectedDifficulty = SelectedData.selectedDifficulty;
    }      
  }

})();
