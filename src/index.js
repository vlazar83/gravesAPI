const cors = require('cors');

// defining the Express app
var express = require('express'),
  app = express(),
  port = 50001,
  mongoose = require('mongoose'),
//   dailyReadings = require('./models/grave'), //created model loading here
  bodyParser = require('body-parser');
// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
require('dotenv').config(); // Load the .env variables

// enabling CORS for all requests
app.use(cors());

const checkJwt = auth();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/graves'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/graves', checkJwt, requiredScopes('read:graves'), require('./routes/readGraves'));
app.use('/gravesUpdates', checkJwt, requiredScopes('modify:graves'), require('./routes/modifyGraves'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads);
  });
  
// starting the server
app.listen(port, () => {
    console.log('listening on port: ' + port);
});