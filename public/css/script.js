$(document).ready(function(){
	
	$('#submitweather').click(function(){
		
		var city = $("#city").val();
		if(city != ''){
			
			
			$.ajax({
				url:'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" +
				"&APPID=c10bb3bd22f90d636baa008b1529ee25",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = show(data);
					
					$("#show").html(widget);
					$("#city").val('');
				}
				
				
				
			});
			
		} else {
			$("#error").html('Filed cannot be empty');
		}
		
	});
	
});
  
  function show(data){

	 return  "<h3 style='font-size:40px; font-weight: bold ;' class='text-center'>Current Weather for " + data.name + ", " + data.sys.country +"</h3>" +
	          "<h3 > <strong>Weather</strong>: " +data.weather[0].main+"</h3>" +
	         "<h3> <strong>Description</strong>: " +data.weather[0].description +"</h3>" +
			  "<h3> <strong>Temperature</strong>: " +data.main.temp + "&deg;C</h3>" +
			  "<h3> <strong>Pressure</strong>: " +data.main.pressure + "hPa</h3>" +
			  "<h3> <strong>Humidity</strong>: " +data.main.humidity + "%</h3>" +
			  "<h3> <strong>Min-Temperature</strong>: " +data.main.temp_min + "&deg;C</h3>" +
			  "<h3> <strong>Max-Temperature</strong>: " +data.main.temp_max + "&deg;C</h3>" +
			  "<h3> <strong>Wind Speed</strong>: " +data.wind.speed + "m/s</h3>" +
			  "<h3> <strong>Wind Direction</strong>: " +data.wind.deg + "&deg;</h3>" ;

			 
  }
  
  
