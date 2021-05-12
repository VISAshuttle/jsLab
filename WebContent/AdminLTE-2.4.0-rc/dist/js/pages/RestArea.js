function formatDate(date) {
    var d = new Date(date),
        year = d.getFullYear(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate();

    if (month.length < 2) 
        month = "0" + month;
    if (day.length < 2) 
        day = "0" + day;

    return year + month + day;
}

$(function () {
	var apiParams = {
		key: 1315651132,
		type: "json",
		sdate: formatDate(new Date()),
		stdHour: new Date().getHours(),
	};
	$.ajax({
		url: "http://data.ex.co.kr/openapi/restinfo/restWeatherList",
		type: "post",
		data: apiParams,
		dataType: "jsonp",
		success: function(result) {
			alert(result);
		},
		error: function(result) {
			alert(result.responseText);
		}
	});
	
/*	var getURL = "http://data.ex.co.kr/openapi/restinfo/restWeatherList";
	getURL += "?key=" + apiParams.key;
		"&type=", apiParams.type,
		"&sdate=", apiParams.sdate,
		"&stdHour=", apiParams.stdHour
	);
	$.ajax({
		url: getURL,
		type: "get",
		success: function(result) {
			alert('success');
		},
		error: function(result) {
			alert('error');
		}
	});*/
});