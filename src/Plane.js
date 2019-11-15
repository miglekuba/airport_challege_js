'use strict';
this.MaxCapacity = 50;

function Plane () {}

Plane.prototype.land = function(airport) {

if (airport.planes === this.MaxCapacity) {
return "The airport is full";
}

else {airport.planes.push(this)};

};

Plane.prototype.takeOff = function(airport) {
    airport.planes.pop(this);
};


function Airport () {
    this.planes = []
};







