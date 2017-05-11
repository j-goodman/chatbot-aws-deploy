var bot = {};

bot.queryTries = {};
bot.listeningFor = null;

bot.answerQuery = function (data) {
  addBubble('got', "Is the kind of thing you're looking for?");
  if (this.queryTries[data.query] === undefined) {
    this.queryTries[data.query] = 0;
  }
  addImageBubble('got', data.items[this.queryTries[data.query]].largeImage, data.items[this.queryTries[data.query]].productUrl);
  console.log(data.items[this.queryTries[data.query]]);
  addBubble('got', data.items[this.queryTries[data.query]].name);
  this.listenFor({
    'yes': function () {
      addBubble('got', "Great! Here's the link to buy it right now:");
      addLinkBubble('got', data.items[this.queryTries[data.query]].productUrl, data.items[this.queryTries[data.query]].name);
    }.bind(this),
    'no': function () {
      this.queryTries[data.query] += 1;
      addBubble('got', "Okay, what about this?");
      setTimeout(function () {
        this.answerQuery(data);
      }.bind(this), 600);
    }.bind(this),
    'good': 'yes',
    'y': 'yes',
    'keep looking': 'no',
    'n': 'no',
  });
};

bot.reportError = function () {
  addBubble('got', 'Sorry, there was an error with your query...');
};

bot.listenFor = function (object) {
  this.listeningFor = object;
};
