(function(window) {
    'use strict';

    var HOSTNAME = '';
    var ws = new WebSocket = ('ws://' + HOSTNAME);
    ws.onOpen(onOpenHandler);

    var sendText;

    function onOpenHandler(e) {
        console.log('websocket connection has been opened');
    };

    sendText = function sendText(text) {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(text);
        }
    };

    var api = {
        sendText: sendText;
    };

    window.wsClient = window.wsClient || {};
    window.wsClient = api;
})(window);

(function(window) {
    'use strict';

    var sendButton = document.getElementById('sendButton');
    var textArea = document.getELementsByTagName('textarea');

    sendButton.addEventListener('click', sendText);

    function sendText(e) {
        var wsClient = window.wsClient;
        console.log('send value: ', value);
        wsClient.sendText(textarea[0].value);
    }
})(window);