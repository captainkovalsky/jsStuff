// Create a new module
function SubscriptionController($scope) {
    var subscription = {
        email: ''
    };

    this.subscribe = function () {
        $scope.notification = subscription.email + ' is subscribed.'; //@todo: must be change at all
        subscription.email = '';
    };

    $scope.subscription = subscription;
    $scope.notification = '';
}

testModule.controller('SubscriptionController', ['$scope', SubscriptionController]);