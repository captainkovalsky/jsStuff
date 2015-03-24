/*** ACTIVE RECORD ***/
(function () {
    'use strict';


    function Object() {}

    function DataTransport(type) {
        this.type = type;
    }

    DataTransport.prototype.SEND_TYPE = {
        JSON: undefined,
        BINARY: undefined
    };

    DataTransport.prototype.sendJson = function (toSendJson) {
        console.log('send json: ', toSendJson);
    }

    DataTransport.prototype.send = function () {
        //detect type and choice best method for sending data
        switch (this.type) {
        case this.SEND_TYPE.JSON:
            this.sendJson(this.data);
            break;
        default:
            new Error('Unknown data type.');
        }
    }


    Object.prototype.save = function (dataTransport) {
        if (dataTransport.SEND_TYPE.JSON === dataTransport.type) {
            dataTransport.send(JSON.stringify(this));
        }
    }; //interface ??

    var one = new Object(); //abstract example
    one.save(dataTranport);



})();