var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTML (html) {
  var reveseHTML = html.split("").reverse().join("");
  console.log(reveseHTML);

}

getHTML(requestOptions, printHTML);