
var redis = require("redis"),
    client = redis.createClient();
 
client.on("error", function (err) {
    console.log("Error " + err);
});

Tail = require('tail').Tail;
tail = new Tail("/var/log/system.log");

//var spawn = require('child_process').spawn;
//var filename = "/var/log/system.log";

//var tail = spawn("tail", ["-f", filename]);

tail.on("line", function (data) {
  //client.hset("nid", "log", data, redis.print);
  //console.log(data);
});
