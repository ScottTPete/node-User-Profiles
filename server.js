var express = require('express'),
	bodyParser = require('body-parser'),
	session = require('express-session'), //creates persistent sessions in the app.
	cors = require('cors'),
	config = require('./server/config'),
	profileCtrl = require('./server/controllers/profileCtrl'),
	userCtrl = require('./server/controllers/userCtrl'),
	app = express();
	

app.use(bodyParser.json());


//whitelists only a specific origin.
var corsOptions = {
	origin: 'http://localhost:' + port
}

app.use(cors(corsOptions)); //allows cross origin requests on all endpoints

app.use(session({secret: config.sessionSecret}));

app.use(express.static(__dirname + '/publc'));



console.log('scott')

app.post('/api/login', userCtrl.login); 

app.get('/api/profiles', profileCtrl.getFriends);
























//SET UP PORT//
var port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log('Listening on port ' + port);
})