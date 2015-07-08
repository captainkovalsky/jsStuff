'use strict';

class MainController {
    constructor($scope) {
      console.log('scope is ', $scope);
        this.init();
    }

    init(){
        console.log('init controller');
    }
}

MainController.$inject = ['$scope'];

export { MainController }
