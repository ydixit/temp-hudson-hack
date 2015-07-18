(function () {

  'use strict';

  var angular, controller;

  angular = require('angular');


  /* App Module */

  // Controller definition:
  controller = function ($scope) {

    // Keep track of active store for entire app:
    $scope.activeStore = 'women';

    // Subscribe to navController changing the active store:
    $scope.$on('activeStore', function(event, store){
      $scope.activeStore = store;
    });

  };

  // Create angular app 'web-rookie'
  angular
    .module('web-sales-performance',
      [
        require('angular-route')
      ])
    .controller('appController', [
      '$scope', controller])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/salerank'});
    }]);

})();

