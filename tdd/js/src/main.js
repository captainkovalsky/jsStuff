// Create a new module
var testModule = angular.module('testModule', []);

function SubscriptionController($scope) {
    var subscription = {
        email: ''
    };

    $scope.subscription = subscription;
}

testModule.controller('SubscriptionController', ['$scope', SubscriptionController]);