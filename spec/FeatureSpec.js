'use strict';

describe ("Plane Landing", () => {
    let plane;
    let airport;

beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
    });

it('lands the plane at the airport', () => {
    plane.land(airport)
    expect(airport.planes).toContain(plane);
    });
}); 

