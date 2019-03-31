var openingMessage = new SpeechSynthesisUtterance(
  `Click 'Text To Speech' to go to my LinkedIn profile`
);
window.speechSynthesis.speak(openingMessage);

function talk(e) {
  e.preventDefault();
  var textArea = document.getElementById('textArea').value;
  var msg = new SpeechSynthesisUtterance(`${textArea}`);
  window.speechSynthesis.speak(msg);
}
