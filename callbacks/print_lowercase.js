var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printHTML (html) {
  var allLower = html.toLowerCase();
  console.log(allLower);
}

getHTML(requestOptions, printHTML);