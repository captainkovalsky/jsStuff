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
        selectionConfirmed = false;

        updateLocationList(val){
             if(!this.selectionConfirmed) {
                const addresses = typeAheadService.getAddressList();
                scope.locationsList = filterFilter(addresses, val);
            } else {
                scope.locationsList = {};
            }

            selectionConfirmed = false;
        }

        addrClick(element){
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

