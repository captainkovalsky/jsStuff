var SubscribePage = function () {
    this.email = element(by.model('subscription.email'));
    this.sendButton = element(by.id('subscribe-button'));
    this.notificationBlock = element(by.id('notification'));

    this.setEmail = function (email) {
        this.email.clear();
        this.email.sendKeys(email);
    };

    this.subscribe = function () {
        this.sendButton.click();
    };

    this.goToRoot = function () {
        browser.get('/');
    };
}

describe('[E2E] email subscription', function () {
    var subscribePage = null;

    beforeEach(function () {
        subscribePage = new SubscribePage();
        subscribePage.goToRoot();
    });

    it('should be input email', function () {
        expect(subscribePage.email.isPresent()).toBe(true);
    });

    it('should be send button', function () {
        expect(subscribePage.sendButton.isPresent()).toBe(true);
    });

    it('email should be empty', function () {
        expect(subscribePage.email.getAttribute('value')).toBe('');
    });

    it('email should not to be empty', function () {
        var text = 'victor.dzundza.dev@gmail.com';
        subscribePage.setEmail(text);
        expect(subscribePage.email.getAttribute('value')).toBe(text);
    });

    it('email should be empty after subscribe click', function () {
        subscribePage.setEmail('text');
        subscribePage.subscribe();
        expect(subscribePage.email.getAttribute('value')).toBe('');
    });

    it('notification should be empty', function () {
        expect(subscribePage.notificationBlock.getText()).toBe('');
    });

    it('notification text should be in accordance with', function () {
        var email = 'victor.dzundza.dev@gmail.com';
        var text = email + ' is subscribed.'; //@todo: template should be used instead 

        subscribePage.setEmail(email);
        subscribePage.subscribe();
        expect(subscribePage.notificationBlock.getText()).toContain(text);
    });

});