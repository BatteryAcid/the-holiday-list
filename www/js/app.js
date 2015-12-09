angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic.ion.autoListDivider'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
    url: '/tab',
    templateUrl: 'templates/tabs.html', 
    controller: function($scope, Services, Popover) {
      $scope.years = Services.getCurrentYearList();
      $scope.rows = Services.getHolidaysForYear($scope.years[1]);
      
      $scope.changeYear = function(year) {
        $scope.rows = Services.getHolidaysForYear(year);
      };

      $scope.open = function(row) {
        Popover.open(Services.getDetails(row));
      };
    }
  });
  $urlRouterProvider.otherwise('/tab');

});

//declare services module
angular.module('starter.services', []);

