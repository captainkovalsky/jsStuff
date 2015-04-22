/**
 * Created by vdzundza on 22.04.15.
 */
var testModule = angular.module( 'testModule' );

testModule.service( 'serviceDep1', function serviceDepOne() {
    this.getSomething = function ( value ) {

        if ( value >= 0 ) {
            return 'A';
        } else {
            return 'B';
        }
    };
} );

testModule.service( 'serviceDep2', [
    'serviceDep1', function serviceDepSecond( serviceOne ) {
        this.doStuff = function ( value ) {
            var serviceOneStuff = serviceOne.getSomething( value );
            return 'Do my stuff and do ' + serviceOneStuff + ' serviceOne stuff';
        };
    }
] );




