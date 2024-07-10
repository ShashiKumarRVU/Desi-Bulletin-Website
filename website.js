function displayMessage() {

  var userInput = document.getElementById("subscriptionInput").value;


  var messageElement = document.getElementById("message");

  messageElement.innerHTML = "You will get a Notification message of the news : " + userInput;
}


document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('popup').style.display = 'flex';
});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}