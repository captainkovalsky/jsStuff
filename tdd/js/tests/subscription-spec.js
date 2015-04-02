var ELEMENTS = {
    emailInput: element(by.model('subscription.email')),
    sendButton: element(by.id('subscribe-button'))
};

describe('[E2E] email subscription', function () {

    beforeEach(function () {
        browser.get('/');
    });

    it('should be input email', function () {
        expect(ELEMENTS.emailInput.isPresent()).toBe(true);
    });

    it('should be send button', function () {
        expect(ELEMENTS.sendButton.isPresent()).toBe(true);
    });

    it('email input should be empty', function () {
        expect(ELEMENTS.emailInput.getAttribute('value')).toBe('');
    });

    it('emailinput should not to be empty', function () {
        var text = 'victor.dzundza.dev@gmail.com';
        ELEMENTS.emailInput.sendKeys(text);
        expect(ELEMENTS.emailInput.getAttribute('value')).toBe(text);
    });

});