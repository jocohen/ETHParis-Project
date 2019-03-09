const express = require('express');
const app = express();

app.use(express.static('client'));
app.use(express.static('build/contracts'));

app.get('/', function(req, res){
	res.sendFile(`${__dirname}/client/index.html`);
  });
app.get('*', function(req, res){
	res.status(404);
	res.send("404 Page not found");
});

app.listen(8000, function(){
	console.log("Running on port " + 8000 + "...");
});
