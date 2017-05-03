var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var middleWare = require('./middleWare');
/*app.get('/',function(req,res){
	res.send("Hello Express!");
});
*/
/*app.use(middleWare.requireAuthentication);*/
app.use(middleWare.logger);

app.get('/about',middleWare.requireAuthentication,function(req,res){
	res.send("About us!");
});

app.use(express.static(__dirname+"/public"));

app.listen(port,function(){
	console.log('Express Server Started');
	console.log('Running on the port: '+port)
});