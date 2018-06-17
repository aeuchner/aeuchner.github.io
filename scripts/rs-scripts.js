function GetOverall(player){
	$.ajax({
		url: 'http://services.runescape.com/m=hiscore/index_lite.ws?player=Ystin',
		headers: {'Access-Control-Allow-Origin': "*"},
		// dataType: "jsonp",
		success: function(result){
			console.log(result);
		}
	});
}
