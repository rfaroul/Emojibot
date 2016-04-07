var emoji = require("emojilib").lib; //requiring from npm

var lookup = {};
for (var key in emoji) {
  emoji[key].keywords.forEach(function(keyword) {
    if (!lookup[keyword]) lookup[keyword] = [];
    lookup[keyword].push(key);
  });
};

//you only get one module.exports per file but it can be an object that has multiple objects
module.exports = function(str) {
  if (str.match(/\s/)) return str;
  var s = str.toLowerCase();
  if (emoji[s] && emoji[s].keywords.indexOf("flag") == -1) return emoji[s].char;
  if (lookup[s]) {
    var possibilities = lookup[s];
    var index = Math.floor(Math.random() * possibilities.length);
    var name = possibilities[index];
    return emoji[name].char;
  }
  return str;
};