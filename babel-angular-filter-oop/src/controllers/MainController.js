'use strict';

class MainController {
    constructor($scope, Filter) {
      console.log('filter factory ', Filter);

        this.Filter = Filter;
        this.init();
    }

    init(){
        console.log('init controller');
        var filterA = new this.Filter({
          funcFilter: object => {
            console.log('call filter in A ', object);
            return object.key > 1;

          }
        });

        var filterB = new this.Filter({

          funcFilter: object => {
            console.log('call filter in B ', object);
           return object.key < 100;
          }

        });

        let filters = [];

        filters.push(filterA);
        filters.push(filterB);

        let objects = [ {prop: 'Object 1', key: 1}, {prop: 'Object 2', key: 101}, {prop: 'Object 3', key: 50}, {prop:'Object 4', key: 600} ];

        let passAllFilters = object => filters.every( filter => filter.config.funcFilter(object) );

        let filtered = objects.filter( object => passAllFilters(object) );

        console.log('filtered ', filtered);

    }
}

MainController.$inject = ['$scope', 'Filter'];

export { MainController }
