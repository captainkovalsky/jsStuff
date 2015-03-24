/*** ACTIVE RECORD ***/
(function () {
    'use strict';


    function Object() {}

    function DataTransport(type) {
        this.type = type;
    }

    DataTransport.prototype.SEND_TYPE = {
        JSON: undefined,
        XML: undefined,
        BINARY: undefined
    };

    DataTransport.prototype.sendJson = function (toSendJson) {
        console.log('send json: ', toSendJson);
    }


    DataTransport.prototype.sendXml = function (toSendXml) {
        console.log('send xml: ', toSendXml);
    }

    DataTransport.prototype.send = function (object) {
        //detect type and choice best method for sending data
        switch (this.type) {
        case this.SEND_TYPE.JSON:
            this.sendJson(JSON.stringify(object));
            break;
        case this.SEND_TYPE.XML:
            this.sendXML(xmlData); //todo: Who should provide xml data?
        default:
            new Error('Unknown data type.');
        }
    }


    Object.prototype.save = function (dataTransport) {
        dataTransport.send(this);
    }; //interface ??

    var one = new Object(); //abstract example
    one.save(dataTranport);



})();