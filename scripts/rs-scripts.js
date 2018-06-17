// function GetOverall(player){
// 	// $('#body').load('http://google.com');
// 	$.ajax({
// 		url: 'http://services.runescape.com/m=hiscore/index_lite.ws?player=Ystin',
// 		type: 'GET',
// 		// headers: {'Access-Control-Allow-Origin': "x-requested-with"},
// 		// dataType: "jsonp",
// 		// xhrFields: {cors:false},
//
// 		success: function(result){
// 			console.log(result);
// 		}
// 	});
// }

function GetOverall(player){
	$.ajax({
  crossOrigin: true,
  //proxy: "http://www.domain.com/path/proxy.php" -> to overide default proxy
  url: 'http://services.runescape.com/m=hiscore/index_lite.ws?player=Ystin',
  success: function(data) {
	console.log(data);
  }
});
}
