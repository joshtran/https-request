var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printHTML (html) {
  var allCaps = html.toUpperCase();
  console.log(allCaps);
}

getHTML(requestOptions, printHTML);