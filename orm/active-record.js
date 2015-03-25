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

    //todo: methods send[Json|Xml] should be replaced by one send, 
    // and must be added two DataTransport types - JsonDataTransport, XmlDataTransport
    DataTransport.prototype.sendJson = function (toSendJson) { //
        console.log('send json: ', toSendJson);
    }


    DataTransport.prototype.sendXml = function (toSendXml) {
        console.log('send xml: ', toSendXml);
    }

    DataTransport.prototype.send = function (object) {
        //detect type and choice best method for sending data
        switch (this.type) { //todo:anti-pattern,  switch('if-else') should be replaced, polymorphism appreciated
        case this.SEND_TYPE.JSON:
            this.sendJson(JSON.stringify(object));
            break;
        case this.SEND_TYPE.XML:
            this.sendXML(xmlSerializer(object)); //move responsibility of providing xml data to function 
        default:
            new Error('Unknown data type.');
        }
    }


    Object.prototype.save = function (dataTransport) {
        dataTransport.send(this);
    }; //interface ??

    var one = new Object(); //abstract example
    one.save(dataTranport); //maybe object should itself set dataTransport and type of data which will be sent?

    //helpers

    function xmlSerializer(object) {
        return "<object>xml fake</object>"; //it is not correct xml, just for working
    }

})();