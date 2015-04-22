/**
 * Created by vdzundza on 22.04.15.
 */
describe( 'service with dependencies', function () {

    var service2;
    var getSomethingSpy;
    var mockServiceDep1 = {
        getSomething: function () {
            return 'C';
        }
    };

    beforeEach( module( 'testModule' ) );

    beforeEach( module( function ( $provide ) {
        $provide.value( 'serviceDep1', mockServiceDep1 );
    } ) );

    beforeEach( inject( function ( _serviceDep2_ ) {
        service2 = _serviceDep2_;
    } ) );


    it( 'should call service2 method', function () {
        var service2Value = service2.doStuff();
        expect( service2Value.length ).toEqual( 2 );
    } );

    it( 'should start with A', function () {
        var service2Value = service2.doStuff();
        expect( service2Value[ 0 ] ).toEqual( 'C' ); //@todo: want to manage what dep1 returns 'A' or 'B' and test this behaviour
    } );

    it( 'check test', function () {
        expect( 2 ).toBe( 2 );
    } );
} );