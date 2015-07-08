'use strict';

class MainController {
    constructor($scope, FilterFactory) {
      console.log('filter factory ', FilterFactory);

        this.FilterFactory = FilterFactory;
        this.init();
    }

    init(){
        console.log('init controller');
        this.FilterFactory.createFilterByConfig({
          test: 1,
          funcFilter(){
            console.log('test function in filter');
          }
        });
    }
}

MainController.$inject = ['$scope', 'FilterFactory'];

export { MainController }
