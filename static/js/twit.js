var twit = require('twit');

var twit = new Twit({
	consumer_key: "uy1NiWjEl5YIqXF35IdzJQ",
	consumer_secret: "YBKK1OeiXWDrZxWFgyPVoQ0z1Tw0jawYb4MVnLiv4",
	access_token: "579315505-BMoDefgtbpqiIcOOEGOoKLPekHt6BVFD2MrywQgp",
	access_token_secret: "y6ejrqTGQdEpOSbTvj1MhIenu84Ns9VjmLrc6pythgp8T"
});

$(document).ready(function() {
	$('#search').click(function(e) {

		var result = [];
		var doc = document.getElementyById("contet");
		doc.innerHtml += ("hello")
		twit.get('statuses/home_timeline', {screen_name: 'tyleriguchi', count: 10}, function(err, reply) {
			for (var i = 0; i < reply.length; i++ ) {
				doc.innerHtml += (reply[i]["text"]);
			}
			console.log(result);
		});
	});
});