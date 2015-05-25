window.exports = {};

(function(exports) {
    'use strict';


    function settledCalc(a, b, coeff) {

        var calculated = (a - 1) / (b + 2);
        //sddd
        if (coef <= -5) {
            return a / b;
        } else if (coef <= 0) {
            return (a + 1) / b;
        } else if (coef < 100) {
            return 100;
        }

        return calculated;
    }

    function nonSettledCalc() {
        return 0;
    }

    /**
    @params isSettled - check whether param is setled
     */
    function calculateSomething(a, b, isSettled, coeff) {
        if (isSettled) {
            return settledCalc(a, b, coeff);
        } else {
            nonSettledCalc();
        }
    }

    exports.calculateSomething = calculateSomething;

})(window.exports);