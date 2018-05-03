// Initialize variables and selectors
var socket = io.connect();
var $messageForm = $("#messageForm");
var $message = $("#message");
var $chat = $("#chat");

var $messageArea = $("#messageArea");
var $userFormArea = $("#userFormArea");
var $userForm = $("#userForm");
var $users = $("#users");
var $username = $("#username");

$(function() {

  // Send message on submit
  $messageForm.submit(function(e) {
    e.preventDefault();
    socket.emit("send message", $message.val());
    $message.val("");
  });

  // Render new message to the client
  socket.on("new message", function(data) {
    $chat.prepend('<div class="well"><strong>' + data.user + '</strong>' + ": " + data.msg + '</div>');
  });

  // User form active if user is not specified
  $userForm.submit(function(e) {
    e.preventDefault();
    socket.emit("new user", $username.val(), function(data) {
      if (data) {
        $userFormArea.hide();
        $messageArea.show();
      }
    });
    $username.val("");
  });

  // Get a list of online users
  socket.on("get users", function(data) {
    var html = '';
    for (i =0; i < data.length; i++) {
      html += '<li class="list-group-item">' + data[i] + '</li>';
    }
    $users.html(html);
  });
});
