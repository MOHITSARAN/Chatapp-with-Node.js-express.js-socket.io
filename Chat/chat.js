var socket = io(); 
function submitfunction(){
  var from = $('#user').val();
  var message = $('#m').val();
  if(message != '') {
  socket.emit('chatMessage', from, message);
}
$('#m').val('').focus();
  return false;
}

socket.on('chatMessage', function(from, msg){
  var me = $('#user').val();
  var color = (from == me) ? 'green' : '#009afd';
  var from = (from == me) ? 'Me' : from;
  $('#messages').append('<li><b style="color:' + color + '">' + from + '</b>: ' + msg + '</li>');
});
  
$(document).ready(function(){
  $('.usernameInput').keydown(function (event) {
      if (event.which === 13) {
         $('#login').hide();
         $('#chat').show();
         var usernameInput = $('.usernameInput').val(); 
         $('#user').val(usernameInput); 
         socket.emit('chatMessage', '==>', '<b>' + usernameInput + '</b> has joined the Chat');
      }
  });
});