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
	//GetPlayerHS('Ystin', function(skills){$('#skilltest').html(skills.Attack)});

	GetPlayerHS('Ystin', function(skills){
			console.log(skills);
			$('#skilltest').html(JSON.stringify(skills))
		}
	);

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


function createDefTable(){
	var player = getPlayer();
	// $(XPTable).append("<div><span class=\"tblhead skill\">Skill</span> <span class=\"tblhead xp\">XP</span></div>");
	// $(XPTable).append("<div><span class=\"skill\">" + getPlayer() + "</span> <span class=\"xp\">XP</span></div>");

	//table head
	$(XPTable).append('<table class=\"xptable\">');
	$(XPTable).append('<tr> <th class=\"tblhead skill\">Skill</th> <th class=\"tblhead xp\">XP</th> </tr>');

	GetPlayerHS('Ystin', function(skills){
			//$('#skilltest').html(JSON.stringify(skills))
			//Fill out table
			buildDefTable(skills);

			$(XPTable).append('<table>');
		}
	);

	//table tail
	$(XPTable).append('<table>');
	//$(XPTable).html(tableresult);
}

//Stub function to get current player
function getPlayer(){
	// console.log("in getPlayer");
	return 'Ystin';
}

function buildDefTable(data){
	var res;
	//res += makeTblString("Overall", data.Overall);
	res += makeTblString("Attack", data.Attack);
	res += makeTblString("Defence", data.Defence);
	res += makeTblString("Strength", data.Strength);
	res += makeTblString("Constitution", data.Constitution);
	res += makeTblString("Ranged", data.Ranged);
	res += makeTblString("Prayer", data.Prayer);
	res += makeTblString("Magic", data.Magic);
	res += makeTblString("Cooking", data.Cooking);
	res += makeTblString("Woodcutting", data.Woodcutting);
	res += makeTblString("Fletching", data.Fletching);
	res += makeTblString("Fishing", data.Fishing);
	res += makeTblString("Firemaking", data.Firemaking);
	res += makeTblString("Crafting", data.Crafting);
	res += makeTblString("Smithing", data.Smithing);
	res += makeTblString("Mining", data.Mining);
	res += makeTblString("Herblore", data.Herblore);
	res += makeTblString("Agility", data.Agility);
	res += makeTblString("Thieving", data.Thieving);
	res += makeTblString("Slayer", data.Slayer);
	res += makeTblString("Farming", data.Farming);
	res += makeTblString("Runecrafting", data.Runecrafting);
	res += makeTblString("Hunter", data.Hunter);
	res += makeTblString("Construction", data.Construction);
	res += makeTblString("Summoning", data.Summoning);
	res += makeTblString("Dungeoneering", data.Dungeoneering);
	res += makeTblString("Divination", data.Divination);
	res += makeTblString("Invention", data.Invention);


	$(XPTable).append(res);
}

function makeTblString(skill, data){
	var res = '<tr> <td class=\"skill\">' + skill + '</td> <td class=\"xp\">' + data + '</td> </tr>';
	return res;
}
