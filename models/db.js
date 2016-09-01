var chalk = require('chalk');
var mongoose = require( 'mongoose' );


var dbURI = 'mongodb://rajeshUser:rajeshUser@ds147905.mlab.com:47905/rajeshcloud';
//var dbURI =  'mongodb://edu:edu@ds015879.mlab.com:15879/edurekadb';
console.log("Establishing connection to the DB");

//   ****** CONNECTIONS
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log(chalk.yellow('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error', function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

// ***** *******  *  *****   Schema defs
var userSchema = new mongoose.Schema({
  username: {type: String, unique:true},
  email: {type: String, unique:true},
  password: String
}, {collection: 'usersCollection'});

var techSchema = new mongoose.Schema({
  tech: {type: String, unique:true},
  description: {type: String}
}, {collection: 'Tech'});

// register the User model
mongoose.model( 'UserModel', userSchema);
mongoose.model( 'TechModel', techSchema);

