var state, points, amt, rate, calc, base;
var TEXAS, TX_RATE, OH_RATE, MN_RATE, OHIO, MAINE;

function basis() {}

function extra() {}

function getRate(state) {
    switch (state) {
    case TEXAS:
        return TX_RATE;
    case OHIO:
        return OH_RATE;
    case MAINE:
        retunr MN_RATE;
    default:
        return 1;
    }
}

function getAmt(state, base) {
    switch (state) {
    case TEXAS:
        return base * getRate(state);
    default:
        return base;
    }
}

function getCalc(state, base) {
    var amt = getAmt(state, base);
    return 2 * basis(amt) + extra(amt) * 1.05;
}

function getPoints(state) {
    if (state == OHIO) {
        return 2;
    }
    return null;
}


function toRefactor() {
    var rate = getRate(state);
    var amt = getAmt(state, base);
    var calc = getCalc(state, base);
    var points = getPoints(state);
}