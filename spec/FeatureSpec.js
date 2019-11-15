'use strict';

describe('Feature Test:', function() {
  //declaring variables fo plane and airport 
    var plane;
    var airport;

// before each function new instances of plane and airport will be created
    beforeEach(function() {
        plane = new Plane();
        airport = new Airport();
    });

//first test 
it('planes can land at the airport', function () {
plane.land(airport);
expect(airport.planes()).toContain(plane);
});
});
