(function() {
   'use strict';

   angular.module('starter.services')
   .factory('Popover', Popover);

   Popover.$inject = ['$ionicPopover', 'Services', '$rootScope'];
   
   function Popover($ionicPopover, Services, $rootScope) {

      //variables
      var vm = $rootScope.$new();
      var popover = undefined;
      vm.details = {};

      //view functions
      vm.setDetails = setDetails;

      //exposed functions
      return {
         open: open,
         close: close
      };

      //exposed functions
      function setDetails(year) {
         Services.getHolidaysForYear(year);
         vm.details = Services.getCurrentDetails()
      }

      function close() {
         vm.popover.hide();
      }

      function open(details) {
         vm.details = angular.copy(details);

         if (popover === undefined) {
            createPopover(function() {
               popover.show();
            });
         } else {
            popover.show();
         }
      }

      //private functions
      function createPopover(callback) {
         $ionicPopover.fromTemplateUrl('../templates/detail-popup.html', {
            scope: vm
         }).then(function(createdPopover) {
            popover = createdPopover;
            callback();
         });
      }
   }
   
})();
