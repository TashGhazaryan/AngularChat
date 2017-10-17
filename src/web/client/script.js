$(document).ready(function(){

	var senderNickname;
	var ws;
	$("#connect").click(function () {
		senderNickname= prompt("Enter you nickname");
		$("#message").show();
		 ws = new WebSocket("ws://localhost:8080/ws");

		 ws.onopen = function () {
			 console.info("Opened " + senderNickname);
		 };

		 ws.onerror = function (p1) {
			 console.info("On Error " + senderNickname);
		 };
		ws.onmessage = function (evt)
		{
			var received_msg = evt.data;
			console.info("Message is received...");
			console.log(received_msg)
		};
	});


	$("#send").click(function(){
		var msg =$("#message").val();
		var message = {
			"senderNickname":senderNickname,
			"message":msg
		};

		ws.send(JSON.stringify(message));
		console.info("Message is sent");

	});
});