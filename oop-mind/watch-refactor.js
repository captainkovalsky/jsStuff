    //BEFORE
    //directive post
function postLink(scope, element, attrs, ctrl, filterFilter, typeAheadService) {

    let selectionConfirmed = -1;

    scope.$watch('query', function updateLocationList(val){

        if(!selectionConfirmed) {
            const addresses = typeAheadService.getAddressList();
            scope.locationsList = filterFilter(addresses, val);
        } else {
            scope.locationsList = {};
        }

        selectionConfirmed = false;
    });

    scope.addrClick = function(elmnt){
        scope.query = elmnt.fullAddr;
        selectionConfirmed = true;
    };
}
postLink();

    //AFTER
function postLink(scope, element, attrs, ctrl, filterFilter, typeAheadService) {
    const Watcher = class Watcher {

        constructor(){
            this.selectionConfirmed = false;
        }
    
        updateLocationList(val){
             if(!this.selectionConfirmed) {
                const addresses = typeAheadService.getAddressList();
                scope.locationsList = filterFilter(addresses, val);
            } else {
                scope.locationsList = {};
            }

            this.selectionConfirmed = false;
        }

        addrClick(elmnt){
            scope.query = elmnt.fullAddr;
            selectionConfirmed = true;
        }
    }

    var typeheadWatcher = new Watcher();

    var watcherFn = function(){
        //first call will be fake
        watcherFn = typeheadWatcher.updateLocationList;
    };

    scope.$watch('query', watcherFn);
    scope.addrClick = typeheadWatcher.addrClick;
}
postLink();


//SECOND with augmented scope via setter
function postLink(scope, element, attrs, ctrl, filterFilter, typeAheadService) {
    const Watcher = class Watcher {
        constructor(scope){
            this.scope = scope;
            this.selectionConfirmed = false;
        }

        updateLocationList(val){
            let scope = this.scope;

            if(!this.selectionConfirmed) {
                const addresses = typeAheadService.getAddressList();
                scope.locationsList = filterFilter(addresses, val);
            } else {
                scope.locationsList = {};
            }

            this.selectionConfirmed = false;
        }

        addrClick(elmnt){
            this.scope.query = elmnt.fullAddr;
            this.selectionConfirmed = true;
        }

        initWatching(){
            let scope = this.scope;

             var watcherFn = function(){
                //first call will be fake
                watcherFn = this.updateLocationList;
                };
            
            scope.$watch('query', watcherFn);
            scope.addrClick = this.addrClick;
        }
    }

    var typeheadWatcher = new Watcher(scope);
    typeheadWatcher.initWatching();
}
postLink();

