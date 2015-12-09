(function() {
   'use strict';

   angular.module('starter.services')
   .factory('HolidayDates', HolidayDates);

   function HolidayDates() {
      var holidayDates = {
         2015: {
            "newyearsday": "2015-11-22",
            "groundhogday": "2015-08-15",
            "otherday": "2015-08-20"
         },
         2016: {
            "newyearsday": "2016-11-22",
            "groundhogday": "2016-08-16",
            "otherday": "2016-08-20"
         },
         2017: {
            "newyearsday": "2017-11-02",
            "groundhogday": "2017-08-09",
            "otherday": "2017-08-12"
         }
      };

      return {
         getHolidayDatesForYear: getHolidayDatesForYear
      };

      function getHolidayDatesForYear(year) {
         return holidayDates[year];
      }
   }
})();
