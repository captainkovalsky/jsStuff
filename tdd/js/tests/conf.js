exports.config = {
    allScriptsTimeout: 110000,
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['**/*.js'],

    multiCapabilities: [{
        browserName: 'chrome'
    }],

    baseUrl: 'http://127.0.0.1:8080',

    directConnect: true
};