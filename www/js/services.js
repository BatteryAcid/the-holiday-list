(function() {
   'use strict';

   angular.module('starter.services')
   .factory('Services', Services);

   Services.$inject = ['Holidays', 'HolidayDates'];
   
   function Services(Holidays, HolidayDates) {

      var currentYearList = ["2015", "2016", "2017"];
      var currentHolidays = {};
      var currentDetailsId = {};

      return {
         getCurrentYearList: getCurrentYearList,
         getDetails: getDetails, 
         getHolidaysForYear: getHolidaysForYear,
         getCurrentDetails: getCurrentDetails
      };

      function getCurrentYearList() {
         return currentYearList;
      }

      function getHolidaysForYear(year) {
         var theDatesToUse = HolidayDates.getHolidayDatesForYear(year);
         currentHolidays = {};
         currentHolidays = angular.copy(Holidays.getHolidays());
         angular.forEach(currentHolidays, function(currentRow, key) {
            var currentDate = theDatesToUse[key];
            currentRow.date = currentDate;

         });
         return currentHolidays;
      }

      function getCurrentDetails() {
         return angular.copy(currentHolidays[currentDetailsId]);
      }

      function getDetails(itemId) {
         currentDetailsId = angular.copy(itemId);
         return currentHolidays[itemId];
      }
   }
})();
