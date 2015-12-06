angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope, Services) {
   $scope.rows = Services.getRows(2015);
})
.controller('ChatsCtrl', function($scope, Services, Popover) {
   $scope.rows = Services.getRows(2016);
   $scope.open = function(row) {
      Popover.open(Services.getDetails(row));
   };
})
.controller('AccountCtrl', function($scope, Services) {
   $scope.rows = Services.getRows(2017);
});
// To listen for when this page is active (for example, to refresh data),
// listen for the $ionicView.enter event:
//$scope.$on('$ionicView.enter', function(e) {
//});
