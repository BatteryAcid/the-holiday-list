angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope, Services, Popover) {
   $scope.rows = Services.getHolidaysForYear(2015);
   $scope.open = function(row) {
      Popover.open(Services.getDetails(row));
   };
   $scope.dividerFunction = function(key) {
      var month = key.slice(5, 7);
      return month;
   };
})
.controller('ChatsCtrl', function($scope, Services, Popover) {
   $scope.rows = Services.getHolidaysForYear(2016);
   $scope.open = function(row) {
      Popover.open(Services.getDetails(row));
   };
   $scope.dividerFunction = function(key) {
      var month = key.slice(5, 7);
      return month;
   };
})
.controller('AccountCtrl', function($scope, Services, Popover) {
   $scope.rows = Services.getHolidaysForYear(2017);
   $scope.open = function(row) {
      Popover.open(Services.getDetails(row));
   };
   $scope.dividerFunction = function(key) {
      var month = key.slice(5, 7);
      return month;
   };
});
// To listen for when this page is active (for example, to refresh data),
// listen for the $ionicView.enter event:
//$scope.$on('$ionicView.enter', function(e) {
//});
