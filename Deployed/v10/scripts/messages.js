// Make connection
var socket = io.connect("http://localhost:8080/");

// Query DOM
var message = document.getElementById("message"),
    handle = document.getElementById("handle"),
    // btn = document.getElementById("send"),
    output = document.getElementById("output"),
    chatInput = document.querySelector(".chat-input");

// Emit events
// Step 1 - Listen for the enter key then send data to the server
message.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    socket.emit("chat", {
      message: message.value,
      handle: handle.value
    });
  }
});

// Step 3 - Listen for events
socket.on("chat", function(data){
  // Scroll increment
  var isScrolledToBottom = chatWindow.scrollHeight - chatWindow.clientHeight <= chatWindow.scrollTop + 1;
  // Chat output
  output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
  // Scroll to the bottom if condition is true
  if(isScrolledToBottom) {
    chatWindow.scrollTop = chatWindow.scrollHeight - chatWindow.clientHeight;
  }
});
