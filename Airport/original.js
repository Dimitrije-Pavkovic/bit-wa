
 
      
    const Person = require ("./entities/person");
    const Seat = require ("./entities/seat");
    const Passenger = require ("./entities/passenger");
    const Flight = require ("./entities/flight");
    const Airport = require ("./entities/airport");

    const createFlight = require('./Controllers/createFlight');
    const createPassenger = require('./Controllers/createPassengers');

  
      try {
          var nikolaTesla = new Airport()
          var belgradeNY = createFlight("Belgrade - New York", "Oct 25 2017")
          var barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017")
          var passenger1 = createPassenger("John", "Snow", 1, "b")
          var passenger2 = createPassenger("Cersei", "Lannister", 2, "b")
          var passenger3 = createPassenger("Daenerys", "Targaryen", 14)
          var passenger4 = createPassenger("Tyrion", "Lannister")
          belgradeNY.addPassenger(passenger1)
          belgradeNY.addPassenger(passenger2)
          barcelonaBelgrade.addPassenger(passenger3)
          barcelonaBelgrade.addPassenger(passenger4)
          nikolaTesla.addFlight(belgradeNY)
          nikolaTesla.addFlight(barcelonaBelgrade)
          console.log(nikolaTesla.getData());
      } catch (error) {
          console.log('Error message:' + error.message);
      }

  
  
  
  
  /*const { print } = require('../module1')
  
  
  const doSomething = (data) => {
      print(data)
      console.log("doing something with " + data);
  }
  
  
  module.exports.doSomething = doSomething;
  
  */
  
  /*
  const print = (message) => log(message, new Date())
  
  const log = (message, timestamp) =>
     console.log(`${timestamp.toString()}: ${message}`)
  
  module.exports = { print, log }
  */