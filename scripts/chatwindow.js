var addBubble = function (origin, text) {
  var bubble;
  var chatWindow;
  chatWindow = document.getElementsByClassName('chat-window')[0];
  bubble = document.createElement('DIV');
  bubble.className = 'sending-bubble ';
  setTimeout(function () {
    this.bubble.className = this.bubble.className.replace('sending', 'chat');
    this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
  }.bind({bubble: bubble, chatWindow: chatWindow}), 100);
  bubble.className += origin === 'sent' ? 'sent' : 'got';
  bubble.innerText = text;
  chatWindow.appendChild(bubble);
};

var addImageBubble = function (origin, url, linkUrl) {
  var bubble;
  var chatWindow;
  var image;
  chatWindow = document.getElementsByClassName('chat-window')[0];
  bubble = document.createElement('DIV');
  bubble.className = 'sending-bubble ';
  setTimeout(function () {
    this.bubble.className = this.bubble.className.replace('sending', 'chat');
    this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
  }.bind({bubble: bubble, chatWindow: chatWindow}), 100);
  bubble.className += origin === 'sent' ? 'sent' : 'got';
  image = document.createElement('IMG');
  if (linkUrl) {
    image.style.cursor = 'pointer';
    image.onclick = function () {
      var newTab;
      newTab = window.open(linkUrl, '_blank');
    };
  }
  image.src = url;
  bubble.appendChild(image);
  chatWindow.appendChild(bubble);
};

var addLinkBubble = function (origin, url, text) {
  var bubble;
  var chatWindow;
  var image;
  if (!text) { text = url; }
  chatWindow = document.getElementsByClassName('chat-window')[0];
  bubble = document.createElement('DIV');
  bubble.className = 'sending-bubble ';
  setTimeout(function () {
    this.bubble.className = this.bubble.className.replace('sending', 'chat');
    this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
  }.bind({bubble: bubble, chatWindow: chatWindow}), 100);
  bubble.className += origin === 'sent' ? 'sent' : 'got';
  link = document.createElement('A');
  link.href = url;
  link.innerText = text;
  link.target = '_blank';
  bubble.appendChild(link);
  chatWindow.appendChild(bubble);
};
