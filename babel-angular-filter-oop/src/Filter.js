'use strict';

class Filter{

  constructor(filterConfig){
    this.config = filterConfig;
  }

  passFilter(item) {
    console.log('pass abstract filter');

    return true;
  }
}

class DateFilter extends Filter{
  passFilter(item){
    console.log('pass date filter');

    return false;
  }
}

 class FilterFactory{

   constructor(){}

  createFilterByConfig(configObject){
    console.log('create filter by  ', configObject);

    return new Filter();
  }
}

export { FilterFactory }
