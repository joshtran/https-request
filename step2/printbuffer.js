var https = require("https");

  function getAndPrintHTML () {

  // https://sytantris.github.io/http-examples/step2.html
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  // initial empty buffer to store response chunks
  var buffer = "";

  https.get(requestOptions, function (response) {

    response.setEncoding("utf8");

    response.on("data", function(data) {

      // this is where we append each data chunk to our buffer
      buffer += data.toString();
      console.log("Adding chunk to buffer\n");
      console.log(data.toString());
    });

    response.on("end", function (){
      console.log(buffer);
    });

  });



}

getAndPrintHTML();

