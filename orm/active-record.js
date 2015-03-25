/*** ACTIVE RECORD ***/
(function () {
    'use strict';


    function Object() {}


    DataTransport.prototype.SEND_TYPE = {
        JSON: undefined,
        XML: undefined,
        BINARY: undefined
    };

    function JsonDataTransport() {}

    function XmlDataTransport() {}


    JsonDataTransport.prototype.send = function (object) {
        console.log('send json ', JSON.stringify(object));
    }

    XmlDataTransport.prototype.xmlSerializer = function (object) {
        return "<object>xml fake</object>";
    }

    XmlDataTransport.prototype.send = function (object) {
        console.log('send xml ', this.xmlSerializer(object));
    }

    function dataTransportFactory(type) {
        switch (this.type) {
        case this.SEND_TYPE.JSON:
            return new JsonDataTransport();
        case this.SEND_TYPE.XML:
            return new XmlDataTransport();
        default:
            new Error('Unknown data type.');
        }
    }


    Object.prototype.save = function (dataTransport) {
        dataTransport.send(this);
    }; //interface ??

    var one = new Object();
    one.save(dataTransportFactory(DataTransport.SEND_TYPE.JSON));
    one.save(dataTransportFactory(DataTransport.SEND_TYPE.XML));

})();