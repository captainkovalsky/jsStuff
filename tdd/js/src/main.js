// Create a new module
var testModule = angular.module('testModule', []);

function SubscriptionController($scope) {
    var subscription = {
        email: ''
    };

    $scope.subscription = subscription;
    $scope.notification = '';
}

testModule.controller('SubscriptionController', ['$scope', SubscriptionController]);