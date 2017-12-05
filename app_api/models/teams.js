var mongoose = require('mongoose');

var teamDataSchema = new mongoose.Schema({
    team: String,
    player: String,
    kills: Number,
    deaths: Number,
    rounds: Number
});
console.log("Schema and crap");
mongoose.model('teamdata', teamDataSchema, 'teamdata');