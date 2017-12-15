(function () {

  angular.module('dndApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("D&D Repository");
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/search/', {
        templateUrl: '/search/search.view.html',
        controller: 'searchCtrl',
        controllerAs: 'vm'
      })
      .when('/character/', {
        templateUrl: '/character/character.view.html',
        controller: 'characterCtrl',
        controllerAs: 'vm'
      })
      .when('/campaign/', {
        templateUrl: '/campaign/campaign.view.html',
        controller: 'campaignCtrl',
        controllerAs: 'vm'
      })    
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('dndApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();