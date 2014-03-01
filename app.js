var express = require('express'),
	Twit = require('twit'),
	ejs = require('ejs'),
	app = express();

var twit = new Twit({
	consumer_key: "uy1NiWjEl5YIqXF35IdzJQ",
	consumer_secret: "YBKK1OeiXWDrZxWFgyPVoQ0z1Tw0jawYb4MVnLiv4",
	access_token: "579315505-BMoDefgtbpqiIcOOEGOoKLPekHt6BVFD2MrywQgp",
	access_token_secret: "y6ejrqTGQdEpOSbTvj1MhIenu84Ns9VjmLrc6pythgp8T"
});

app.use('static', express.static(__dirname + '/static'));
app.use(express.bodyParser());

app.set('views', __dirname + '/views');
app.set('view options', {layout:false, root: __dirname + '/views'});
app.set('view engine', 'ejs');

// app.engine('html', require('').renderFile);

app.get("/", function(req, res) {
	// empty string hack
	res.render('index.ejs', {result: ""});
});

app.post('/', function(req, res) {
	var name = req.body.name;
	var result = [];
	var post = {};
	twit.get('statuses/home_timeline', {screen_name: 'tyleriguchi', count: 10}, function(err, reply) {
		for (var i = 0; i < reply.length; i++ ) {
			var post = {};
			post.text = reply[i].text;
			post.user = reply[i].user.name;
			post.created = reply[i].created_at;
			result.push(post);
		}
		res.render('index.ejs', {result: result});
	});
})

app.listen(3000);
console.log("Server started");