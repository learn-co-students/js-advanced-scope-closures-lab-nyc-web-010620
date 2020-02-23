// Calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will take two strings 
// as arguments and returns a message stating whether the trip is in range. If foo = produceDrivingRange(10), then foo('12th', '15th') 
// would return "within range by 7" and foo('12th', '30th') would return "8 blocks out of range". 
const produceDrivingRange = function(blockRange) {
   return function(pickup, destination) {
      const tripRange = (parseInt(destination)) - (parseInt(pickup)); 
         if (tripRange <= blockRange) {
            return `within range by ${blockRange - tripRange}`; 
         }; 
         if (tripRange > blockRange) {
            return `${tripRange - blockRange} blocks out of range`; 
         };  
   }; 
}; 

// Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent 
// tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
const produceTipCalculator = function(tipAmount) {
   return function(fare) {
      return fare * tipAmount; 
   };
}; 

// Returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. 
// The rest of the code base does not have access to driverId.
function createDriver() {
   let driverId = 0; 
   // return the class
   return class {
      constructor(name) {
         this.name = name 
         this.id = ++driverId
      };
   };
}; 