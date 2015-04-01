var state, points, amt, rate, calc, base;
var TEXAS, TX_RATE, OH_RATE, MN_RATE, OHIO, MAINE;

function basis() {}

function extra() {}

function toRefactor() {

    if (state === TEXAS) {
        rate = TX_RATE;
        amt = base * TX_RATE;
        calc = 2 * basis(amt) + extra(amt) * 1.05;
    } else
    if ((state === OHIO) || (state === MAINE)) {
        rate = (state === OHIO) ? OH_RATE : MN_RATE: amt = base * rate;
        calc = 2 * basis(amt) + extra(amt) * 1.05;
        if (state == OHIO) {
            points = 2;
        }
    } else {
        rate = 1;
        amt = base;
        calc = 2 * basis(amt) + extra(amt) * 1.05;
    }
}