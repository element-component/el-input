var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'build'), {
  logger: function(message) {
    console.log('🚀 ' + message);
  }
}, function(err) {
  if (err) {
    console.error(err);
  }
  console.log('🚀 DONE!');
});
