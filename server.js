var express = require('express');
var app = express();
var ari ={
"name" : "Ari Mileikowsky",
"vacation" : {
	"places": ["18.2500, 66.5000","31.0000, 35.0000","39.0000, 22.0000"]
	}
}

app.get('/', function(req, res){
  res.send({ name: ari });
});

var port = process.env.PORT || 5000;
app.listen(port);
