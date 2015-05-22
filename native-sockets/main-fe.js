(function(window) {
    'use strict';
    if (!window.WebSocket) {
        alert('no webscoket');
        return;
    }
    var ws = new WebSocket("ws://127.0.0.1:8082");
    console.log(ws);
    ws.onopen = onOpenHandler;

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
        sendText: sendText
    };

    window.wsClient = window.wsClient || {};
    window.wsClient = api;
})(window);

(function(window) {
    'use strict';

    var sendButton = document.getElementById('sendButton');
    var textArea = document.getElementsByTagName('textarea');
    console.log('text area', textArea);
    sendButton.addEventListener('click', sendText);

    function sendText(e) {
        var wsClient = window.wsClient;
        var value = textArea[0].value;
        console.log('send value: ', value);
        wsClient.sendText(value);
    }
})(window);