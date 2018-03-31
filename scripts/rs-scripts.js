function GetOverall(player){
	var urlString = "http://services.runescape.com/m=hiscore/index_lite.ws?player=Ystin";
	var req = new XMLHttpRequest();
	req.open('GET', urlString, false);
	req.send(null);
	if(req.status == 200){
		console.log(req.responseText);
	}
}