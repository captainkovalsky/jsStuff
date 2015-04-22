/**
 * Created by vdzundza on 22.04.15.
 */
describe( 'service with dependencies', function () {

    var service2;
    beforeEach( module( 'testModule' ) );

    beforeEach( inject( function ( _serviceDep2_ ) {
        service2 = _serviceDep2_;
    } ) );

    it( 'should call service2 method', function () {
       var service2Value = service2.doStuff();
        expect(service2Value.length ).toEqual(2);
    } );

    it('should start with A', function(){
        var service2Value = service2.doStuff();
        expect(service2Value[0]).toEqual('A'); //@todo: want to manage what dep1 returns 'A' or 'B' and test this behaviour
    });

    it( 'check test', function () {
        expect( 2 ).toBe( 2 );
    } );
} );