var express = require('express'),
	Twit = require('twit'),
	app = express();

var twit = new Twit({
	consumer_key: "uy1NiWjEl5YIqXF35IdzJQ",
	consumer_secret: "YBKK1OeiXWDrZxWFgyPVoQ0z1Tw0jawYb4MVnLiv4",
	access_token: "579315505-BMoDefgtbpqiIcOOEGOoKLPekHt6BVFD2MrywQgp",
	access_token_secret: "y6ejrqTGQdEpOSbTvj1MhIenu84Ns9VjmLrc6pythgp8T"
});

app.use('static', express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get("/", function(req, res) {
	var name = req.query.
	res.render('index.html');
});

var result = [];
twit.get('statuses/home_timeline', {screen_name: 'tyleriguchi', count: 10}, function(err, reply) {
	for (var i = 0; i < reply.length; i++ ) {
		result.push(reply[i]["text"]);
	}
	console.log(result);
});

app.listen(3000);
console.log("Server started");