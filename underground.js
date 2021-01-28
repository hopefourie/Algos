var UndergroundSystem = function () {
  this.users = {
    //id:{station: station name, timeIn: time}
  };
  this.avgTimes = {
    //route:[]
  };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  if (!this.users[id]) {
    this.users[id] = { station: stationName, timeIn: t };
  } else {
    this.users[id].station = stationName;
    this.users[id].timeIn = t;
  }
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let route = this.users[id].station + stationName;
  if (Object.keys(this.avgTimes).includes(route)) {
    this.avgTimes[route].push(t - this.users[id].timeIn);
  } else {
    this.avgTimes[route] = [t - this.users[id].timeIn];
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  let route = startStation + endStation;
  let sum = this.avgTimes[route].reduce((el, sum) => {
    return sum + el;
  }, 0);
  return sum / this.avgTimes[route].length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
