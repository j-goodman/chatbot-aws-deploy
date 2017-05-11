function startDictation() {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(event) {
      document.getElementsByClassName('input-field')[0].value = event.results[0][0].transcript;
      recognition.stop();
      document.getElementsByClassName('ask-button')[0].submit();
    };

    recognition.onerror = function(event) {
      recognition.stop();
    };

  }
}
