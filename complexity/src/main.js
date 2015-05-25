(function() {
    'use strict';

    /**
    @params isSettled - check whether param is setled
     */
    function calculateSomething(a, b, isSettled, coeff) {
        if (isSettled) {
            if (coef <= -5) {
                return a / b;
            } else if (coef <= 0) {
                return (a + 1) / b;
            } else if (coef < 100) {
                return 100;
            } else {
                return (a - 1) / (b + 2);
            }
        } else {
            return 0;
        }
    }

})();