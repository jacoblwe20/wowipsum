var express = require('express'),
	app = express();

app.configure(function(){
  app.use(app.router);
});

function generateIpsum ( amount ) {
	var groups = [];
	for ( var i = 0; i < amount; i += 1 ) {
		var paragraph = "";
		for ( var x = 0; x < 20; x += 1) {
			var dword = doge[(Math.round(Math.random() * 3))],
				wword = words[(Math.round(Math.random() * words.length))];

				// for( var y = 0; y < Math.round(Math.random() * 20); y += 1 ){
				// 	paragraph += "\t";
				// }

				paragraph += " " + dword + " " + wword + ".";

		}
		groups.push(paragraph);
	}
	return groups;
}

var doge = [
		"wow",
		"such",
		"so",
		"very",
	],
 	words = [
 		"codeday",
 		"hax",
 		"donuts",
 		"sloths",
 		"go",
 		"web",
 		"projector",
 		"pizza",
 		"gmo apples",
 		"magik",
 		"gasp",
 		"omg",
 		"trayansaursus",
 		"apple piez"
 	];

 // console.log( generateIpsum( 3 ) );

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/paragraphs.json', function( req, res ){
	var payload = req.query,
		amount = payload.amount || 1,
		results = generateIpsum( +amount );

		res.json({
			paragraphs : results
		});
});

app.listen( 3000 );