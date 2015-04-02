exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['simple-spec.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],

    directConnect: true
};