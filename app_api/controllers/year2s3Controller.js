var mongoose = require('mongoose');
var TeamData = mongoose.model('teamdata');

console.log("above controller");

module.exports.findTeam = function(req, res, next){
    
        var team = req.params.team;
        console.log("in controller");
        
        TeamData.find({"team": team},{_id:0}, function (err, teamdatas){
            if(err){
                console.log("Error in controller");
                return console.error(err);
                
            }else{
                console.log("right spot of controller");
                var output = "";
            teamdatas.forEach(function(teamdata){
           console.log(teamdata.player);
          output += "Player: " + teamdata.player + "<br>";
                });
            }
            res.render('index', {title: team, outputs: output})
            
        });
        
}