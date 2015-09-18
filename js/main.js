var  url = 'ws://localhost:2014';
var Server = {};
Server.socket = null;
var host = window.location.host;
Server.connect = (function(host){
    Server.socket = new WebSocket(host);
    Server.socket.onopen=function(){};
    Server.socket.onmessage=function(message){
        console.log(message.data);
    };
    Server.socket.onclose=function(){};
    Server.socket.onerror=function(e){};
});