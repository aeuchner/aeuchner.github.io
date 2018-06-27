var skill;

//Ideally want to get player data directly from API, issues with cross cite
//scripting. Trying Sheets+Firebase to get around for now
function GetOverall(player){
	$.ajax({
  crossOrigin: true,
  url: 'http://services.runescape.com/m=hiscore/index_lite.ws?player=Ystin',
  success: function(data) {
	console.log(data);
  }
});
}

function TestReturn(){
	// GetOverallFB(function(overall){console.log(overall + ' callback?')});
	//GetHSFB(function(skills){$('#skilltest').html(skills.Attack)});
	//SetText('skilltest', 'Magic');
	GetPlayerHS('Ystin', function(skills){$('#skilltest').html(skills.Attack)});
}

//Callback for input player
function GetPlayerHS(player, callback){
	var skills;
	firebase.database().ref('/Players/'+player+'/HighScores/').once('value', function(snap){
		skills = snap.val();
		callback(skills);
	});
}

//Firebase callback, returns all skills
//Example usage vv
//GetOverallFB(function(skills){console.log(skills.Overall)});
function GetHSFB(callback){
	var skills;
	firebase.database().ref('/Players/Ystin/HighScores/').once('value', function(snap){
		skills = snap.val();
		callback(skills);
	});
}

//trying to set fields by ID and skill, not sure if useful yet
function SetText(id, skill){
	GetHSFB(function(skills){$('#'+id).html(skills[skill])});
}

function logHS(player){
	console.log(player);
}
