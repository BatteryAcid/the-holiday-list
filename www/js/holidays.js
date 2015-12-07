(function() {
   'use strict';

   angular.module('starter.services')
   .factory('Holidays', Holidays);

   function Holidays() {
      var holidays = {
         "newyearsday": {
            "name": "New Year's Day",
            "desc": "The first day of the year"
         },
         "groundhogday": {
           "name": "Groundhog Day",
           "desc": "A tradition to predict the length"
         },
         "otherday": {
           "name": "Groundhog Day",
           "desc": "A tradition to predict the length"
         }
      };

      return {
         getHolidays: getHolidays
      };

      function getHolidays() {
         return holidays;
      }
   }
})();
