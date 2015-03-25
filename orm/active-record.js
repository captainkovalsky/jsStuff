// Code goes here

/*** ACTIVE RECORD ***/
(function () {
    'use strict';

    function ActiveRecord(type) {
        this.dataTransport = dataTransportFactory(type);
    }

    function DataTransport() {}

    DataTransport.SEND_TYPE = {
        JSON: 1,
        XML: 2,
        BINARY: 3
    };

    function JsonDataTransport() {}

    function XmlDataTransport() {}

    JsonDataTransport.prototype.send = function (object) {
        console.log('send json ', JSON.stringify(object));
    };

    XmlDataTransport.prototype.xmlSerializer = function (object) {
        return "<object>xml fake</object>";
    };

    XmlDataTransport.prototype.send = function (object) {
        console.log('send xml ', this.xmlSerializer(object));
    };

    function dataTransportFactory(type) {
        switch (type) {
        case DataTransport.SEND_TYPE.JSON:
            return new JsonDataTransport();
        case DataTransport.SEND_TYPE.XML:
            return new XmlDataTransport();
        default:
            new Error('Unknown data type.');
        }
    }


    ActiveRecord.prototype.save = function () {
        this.dataTransport.send(this);
    }; //interface ??


    var user = {
        name: 'John',
        age: 23
    };

    var JsonActiveRecord = new ActiveRecord(DataTransport.SEND_TYPE.JSON)

    user.save = JsonActiveRecord.save;
    user.dataTransport = JsonActiveRecord.dataTransport; //dataTransport will be sent also, first issue

    user.save();





})();