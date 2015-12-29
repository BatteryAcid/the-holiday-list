(function() {
   'use strict';

   angular.module('starter.services')
   .factory('Holidays', Holidays);

   function Holidays() {
      var holidays = {
        "newYearsDay": {
          "name": "New Year's Day",
          "desc": "The first day of the year"
        },
        "martinLutherKingDay":{
          "name": "Martin Luther King Jr. Day",
          "desc": "Marks the birthday anniversary of Martin Luther King, Jr. as a celebration of the influential American civil rights leader."
        },
        "chineseNewYear":{
          "name": "Chinese New Year",
          "desc": "Also known as the Lunar New Year or the Spring Festival. It marks the first day of the New Year in the Chinese calendar."
        },
        "groundHogDay": {
          "name": "Groundhog Day",
          "desc": "A tradition to predict the length of winter based on whether or not the groundhog sees his shadow."
        },
        "lincolnsBirthday": {
          "name": "Lincoln's Birthday",
          "desc": "The birthday of Abraham Lincoln, one of the most popular presidents in United States history. It's also known as Abraham Lincoln’s Birthday, Abraham Lincoln Day or Lincoln Day."
        },
        "valentinesDay": {
          "name": "Valentine's Day",
          "desc": "A holiday to spend with that special someone and celebrate love and romance."
        },
        "presidentsDay": {
          "name": "Presidents' Day",
          "desc": "A holiday to celebrate the life and achievements of George Washington and other presidents."
        },
        "ashWednesday": {
          "name": "Ash Wednesday",
          "desc": "A Christian holiday that marks the first day of Lent."
        },
        "stDavidsDay": {
          "name": "St. David's Day",
          "desc": "A celebration of the patron saint of Wales. In the United Sates, it is officially recognized as the national day of the Welsh."
        },
        "purim": {
          "name": "Purim",
          "desc": "A celebration, written in the Book of Esther, that commemorates the deliverance of Jewish people from a plot of annihilation during the fourth century BCE. The holiday begins at sunset on the date listed."
        },
        "dayLightSavingBegins": {
          "name": "Daylight Saving Begins",
          "desc": "Time in the United States is set forward one hour at 2am on the date listed."
        },
        "holi":{
          "name": "Holi",
          "desc": "Also known as the festival of colors is an ancient Hindu religious festival."
        },
        "stPatricksDay": {
          "name": "St. Patrick's Day",
          "desc": "A celebration of the patron saint of Ireland. It largely celebrates Irish-American culture in the United States."
        },
        "springEquinox": {
          "name": "Spring Equinox",
          "desc": "On this day the Earth's tilt will be neither away nor towards the sun. Day and night will be roughly equal in length."
        },
        "palmSunday": {
          "name": "Palm Sunday",
          "desc": "A Christian holiday that celebrates Jesus' entry into Jerusalem just days before his crucifixion."
        },
        "passoverBegins": {
          "name": "Passover Begins",
          "desc": "A Jewish holiday commemorating the story if Exodus, where Israelites' were freed from slavery in ancient Egypt. The holiday begins at sunset on the date listed."
        },
        "goodFriday": {
          "name": "Good Friday",
          "desc": "A Christian holiday that commemorates Jesus Christ's crucifixion."
        },
        "easter": {
          "name": "Easter",
          "desc": "Christian celebrate Easter Sunday as the day Jesus Christ was resurrected after his crucifixion."
        },
        "taxDay": {
          "name": "Tax Day",
          "desc": "Marks the deadline for residents of the United States to file their taxes to the IRS."
        },
        "passoverEnds": {
          "name": "Passover Ends",
          "desc": "Marks the end of a Jewish holiday that celebrates the deliverance of Jewish people from slavery in Egypt."
        },
        "cincodeMayo": {
          "name": "Cinco de Mayo",
          "desc": "A celebration of Mexican-American culture and pride in the United States. Marks the anniversary of an unlikely victory over the French in 1862 in the fight for independence."
        },
        "mothersDay": {
          "name": "Mother's Day",
          "desc": "A holiday in the United States that celebrates and honors mothers and motherhood."
        },
        "ramadanBegins": {
          "name": "Ramadan Begins",
          "desc": "Also known as Ramadhan or Ramzan is the ninth month in the Islamic calendar. It is a period of prayer, fasting, charity-giving and self-accountability for Muslims. The holiday begins at sunset on the date listed. The actual date may vary depending on regional customs and moon observations."
        },
        "memorialDay": {
          "name": "Memorial Day",
          "desc": "A holiday that commemorates U.S. soldiers who have died in military service for the United States."
        },
        "flagDay": {
          "name": "Flag Day",
          "desc": "People across the United States celebrate Flag Day on June 14 each year to honor the United States flag and to commemorate the flag’s adoption."
        },
        "Father's Day": {
          "name": "Father's Day",
          "desc": "An American holiday that celebrates fatherhood and the influence they have in their child's life."
        },
        "summerSolstice": {
          "name": "Summer Solstice",
          "desc": "Marks the beginning of summer in the Northern Hemisphere and winter in the Southern Hemisphere. Also marks the longest day in the Northern Hemisphere and the shortest in the Southern Hemisphere."
        },
        "eidalFitr": {
          "name": "Eid al-Fitr",
          "desc": "Three days Islamic celebration starting on the first day of the month of Shawwal. It marks the end of the month long fast of Ramadan. The holiday begins at the sunset on the date listed. The actual date may vary depending on regional customs and moon observations."
        },
        "independenceDay": {
          "name": "Independence Day",
          "desc": "On this day in 1776, the United States published the Declaration of Independence, declaring its independence from Great Britain."
        },
        "rakhi":{
          "name": "Rakhi/Raksha Bandhan",
          "desc": "A Hindu festival that celebrates the love and duty between brothers and sisters."
        },
        "janmashtami":{
          "name": "Janmashtami",
          "desc": "An annual celebration of the birth of the Hindu deity Krishna."
        },
        "ganesh":{
          "name": "Ganesh Chaturthi",
          "desc": "The beginning of the ten days Hindu festival celebrated in honor of the elephant-headed God, Ganesha."
        },
        "eidalAdha": {
          "name": "Eid al-Adha",
          "desc": "A festival that commemorates Ibrahim's willingness to sacrifice his son to God. This festival marks the end of the Hajj pilgrimage to Mecca. The holiday begins at sunset on the date listed. The actual date may vary depending on regional customs and moon observations."
        },
        "laborDay": {
          "name": "Labor Day",
          "desc": "A holiday of rest that celebrates American workers and their achievements and contributions to the economy."
        },
        "patriotDay": {
          "name": "Patriot Day",
          "desc": "An annual observance to remember those who were injured or died during the terrorist attacks in the United States on September 11, 2001."
        },
        "roshHashanah": {
          "name": "Rosh Hashanah",
          "desc": "Celebrates the Jewish New Year which occurs on the first day of the month of Tishrei in the Jewish calendar. The holiday begins at sunset on the date listed."
        },
         "muharram": {
          "name": "Muharram/New Year",
          "desc": "Marks the start of the Islamic New Year. The holiday begins at sunset on the date listed. The actual date may vary depending on regional customs and moon observations."
        },
         "autumnEquinox": {
          "name": "Autumn Equinox",
          "desc": "On this day the Earth's tilt will be neither away nor towards the sun. Day and night will be roughly equal in length."
        },
        "yomKippur": {
          "name": "Yom Kippur",
          "desc": "A Jewish holiday traditionally seen as a day of atonement and repentance. The holiday begins at sunset on the date listed."
        },
        "dussehra":{
          "name": "Dussehra/Dasara",
          "desc": "A Hindu festival that celebrates the victory of good over evil."
        },
        "sukkotBegins": {
          "name": "Sukkot Begins",
          "desc": "A Jewish holiday that commemorates the period when Israelites stayed in booth or tabernacle structures after the Exodus from Egypt. The holiday begins at sunset on the date listed."
        },
        "columbusDay": {
          "name": "Columbus Day",
          "desc": "Celebrates Christopher Columbus' arrival to American continent in 1492."
        },
        "diwali": {
          "name": "Diwali",
          "desc": "Also known as 'The festival of lights' is an ancient Hindu festival celebrates the victory of light over darkness, knowledge over ignorance, good over evil, and hope over despair."
        },
        "halloween": {
          "name": "Halloween",
          "desc": "An annual holiday celebrated by costume parties, trick-or-treating, and haunted attractions."
        },
        "allSaintsDay": {
          "name": "All Saints' Day",
          "desc": "A day to celebrate and honor all Saints including those that may not have their own day of remembrance."
        },
        "dayLightSavingEnds": {
          "name": "Daylight Saving Ends",
          "desc": "Time in the United States is set back one hour at 2am on the date listed."
        },
        "veteransDay": {
          "name": "Veterans Day",
          "desc": "An American holiday honoring all of those who have served in United States Military."
        },
        "thanksGivingDay": {
          "name": "Thanksgiving Day",
          "desc": "A tradition originating with Pilgrims giving thanks to God over their harvest, is now held with friends and family to celebrate ones thanksgivings over a large meal."
        },
        "blackFriday": {
          "name": "Black Friday",
          "desc": "The day after Thanksgiving Day and the day before Cyber Monday in the United States."
        },
        "hanukkah": {
          "name": "Hanukkah",
          "desc": "The Jewish holiday celebrated for eight days and nights commemorates the re-dedication of the Temple in Jerusalem. The holiday begins at sunset on the date listed."
        },
        "winterSolstice": {
          "name": "Winter Solstice",
          "desc": "Marks the beginning of winter in the Northern Hemisphere and summer in the Southern Hemisphere. Also marks the shortest day in the Northern Hemisphere and the longest in the Southern Hemisphere."
        },
        "christmasEve": {
          "name": "Christmas Eve",
          "desc": "A Christian celebration on the eve of the birth of Jesus Christ."
        },
        "christmasDay": {
          "name": "Christmas Day",
          "desc": "A Christian holiday that celebrates the birth of Jesus Christ."
        },
        "kwanzaaBegins": {
          "name": "Kwanzaa Begins",
          "desc": "A week long celebration honoring African tradition and culture."
        },
        "newYearsEve": {
          "name": "New Year's Eve",
          "desc": "This day marks the end of the year."
        },
      };

      return {
         getHolidays: getHolidays
      };

      function getHolidays() {
         return holidays;
      }
   }
})();
