//show alert saying "Hello World"
//alert("Hello World");

 //get IP address of web visitor
 $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
 function(json) {
 console.log(json.ip);
          });