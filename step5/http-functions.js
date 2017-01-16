var https = require("https");

module.exports = function getHTML (options, callback) {

  // initial empty buffer to store response chunks
  var buffer = "";

  https.get(options, function (response) {

    response.setEncoding("utf8");

    response.on("data", function(data) {

      // this is where we append each data chunk to our buffer
      buffer += data.toString();
      console.log("Adding chunk to buffer\n");
    });

    response.on("end", function (){
      //invoke the callback
      callback(buffer);
    });

  });

};





