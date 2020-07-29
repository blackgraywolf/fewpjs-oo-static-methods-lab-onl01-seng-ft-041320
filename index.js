class Formatter {
<<<<<<< HEAD
  static capitalize(str) {
    var r = /\b\w/gi

    return str.replace(r,(match) => match.toUpperCase())
  }
  static sanitize(str) {
    var r = /[$@!#^*({]/gi

    return str.replace(r,'')
  }
  static titleize(str) {
    let array = str.split(' ')
    let badArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArray = []
   
    let upcasearray = array.map(word => {
      if ( word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from') {
        newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
        else {
          newArray.push(word)
        }
    })
    return newArray.join(' ').charAt(0).toUpperCase() + newArray.join(' ').slice(1)
  }
=======
  let store = { drivers: [], passengers: [], trips: []};
let driverId = 0

class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id;
      }.bind(this)
    );
  }
  passengers(){
    return this.trips().map(
      function(trip){
        return trip.passenger();
      }.bind(this)
    );
  }
}

let passengerId = 0

class Passenger{
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.passengerId === this.id;
    }.bind(this)
  );
}

  drivers(){
    return this.trips().map(
      function(trip){
        return trip.driver();
      }.bind(this)
    );
  }
}

let tripId = 0

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    store.trips.push(this);
  }

  passenger(){
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }
  driver(){
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );
  }
}
>>>>>>> c1ea1ce0a828e05ff07c5f3776d6ae99e4ea346a
}