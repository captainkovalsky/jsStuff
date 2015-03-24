/*** ACTIVE RECORD ***/


function Object() {}

function DataTransport(type) {
    this.type = type;
}

DataTransport.prototype.SEND_TYPE = {
    JSON: 0,
    BINARY: 1
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


Object.prototype.save = function (dataTransport) {}; //interface ??

var one = new Object(); //abstract example
one.save(dataTranport);