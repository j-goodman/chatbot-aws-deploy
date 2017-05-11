onload = function () {
  var inputField;
  inputField = document.getElementsByClassName('input-field')[0];
  chatWindow = document.getElementsByClassName('chat-window')[0];
  inputField.onfocus = function () {
    document.onkeydown = function (event) {
      if (event.keyCode === 13) {
        if (!chatWindow.className.includes('open')) {
          chatWindow.classList.add('open');
        }
        submit();
      }
    };
  };
  inputField.onblur = function () {
    document.onkeydown = null;
  };
};

var submit = function () {
  var input;
  var string;
  input = document.getElementsByClassName('input-field')[0];
  if (!input.value) { return false; }
  string = input.value.toLowerCase();
  if (bot.listeningFor && bot.listeningFor[string]) {
    addBubble('sent', input.value);
    if (typeof bot.listeningFor[string] === 'function') {
      bot.listeningFor[string]();
    } else {
      bot.listeningFor[bot.listeningFor[string]]();
    }

  bot.listeningFor = null;
  } else {
    sendRequest(input.value);
  }
  input.value = '';
  input.placeholder = '';
};

var sendRequest = function (input) {
  var url;
  addBubble('sent', input);
  url = 'https://api.walmartlabs.com/v1/search?apiKey=239x6m4yyb2qd5mubnnz68z4&query=' + input;
  $.ajax(url, {
    crossDomain: true,
    success: function (data) {
      var i;
      console.log('Success.');
      bot.answerQuery(data);
    },
    error: function () {
      console.log('Failure.');
      bot.reportError();
    },
  });
};
