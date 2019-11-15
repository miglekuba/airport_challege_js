//unit test for a Plane

describe ('Plane', function() {
    var plane;
    beforeEach(function(){
        plane = new Plane();
    });

    it('can land at the airport', function() {
        expect(plane.land).not.toBeUndefined()
    });
});