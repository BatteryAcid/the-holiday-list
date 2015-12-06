(function() {
   'use strict';

   angular.module('starter.services', [])
   .factory('Services', services);
   
   function services() {

      //variables
      var dates = {
         2015: {
            "bruceday": 11122015,
            "myday": 08152015
         },
         2016: {
            "bruceday": 11122016,
            "myday": 08152016
         },
         2017: {
         "bruceday": 11122017,
            "myday": 08152017
         }
      };

      var rows = {
         "bruceday": {
            "name": "bruce",
            "desc": "a desc"
         },
         "myday": {
           "name": "my",
           "desc": "a desc"
         }
      };

      var currentRows = {};
      var currentDetailsId = {};

      return {
         getSeparator: getSeparator,
         getDetails: getDetails, 
         getRows: getRows,
         getCurrentDetails: getCurrentDetails
      };

      function getRows(date) {
         var theDatesToUse = dates[date];
         currentRows = {};
         currentRows = angular.copy(rows);
         angular.forEach(currentRows, function(currentRow, key) {
            var currentDate = theDatesToUse[key];
            currentRow.date = currentDate;

         });
         return currentRows;
      }

      function getCurrentDetails() {
         return angular.copy(currentRows[currentDetailsId]);
      }

      function getDetails(itemId) {
         currentDetailsId = angular.copy(itemId);
         return currentRows[itemId];
      }

      function getSeparator() {
         var localDates = [];
         angular.forEach(dates, function(key, date) {
            localDates.push(date);
         })
         return localDates;
      }
   }
   
})();
