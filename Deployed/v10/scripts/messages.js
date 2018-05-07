// Make connection
var socket = io.connect("http://localhost:8080/");

// Query DOM
var message = document.getElementById("message"),
    handle = document.getElementById("handle"),
    btn = document.getElementById("send"),
    output = document.getElementById("output");

// Emit events
// Step 1 - Listen for click then send data to the server
btn.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

// Step 3 - Listen for events
socket.on("chat", function(data){
  output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});
