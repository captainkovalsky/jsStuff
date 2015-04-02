var ELEMENTS = { //@todo: ELEMENTS should be renamed and use appropriate name
    emailInput: element(by.model('subscription.email')),
    sendButton: element(by.id('subscribe-button')),

    notificationBlock: element(by.id('notification'))
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

    it('email should be empty', function () {
        expect(ELEMENTS.emailInput.getAttribute('value')).toBe('');
    });

    it('email should not to be empty', function () {
        var text = 'victor.dzundza.dev@gmail.com';
        ELEMENTS.emailInput.sendKeys(text);
        expect(ELEMENTS.emailInput.getAttribute('value')).toBe(text);
    });

    it('email should be empty after subscribe click', function () {
        ELEMENTS.emailInput.sendKeys('text');
        ELEMENTS.sendButton.click();
        expect(ELEMENTS.emailInput.getAttribute('value')).toBe('');
    });

    it('notification should be empty', function () {
        expect(ELEMENTS.notificationBlock.getText()).toBe('');
    });

});