

$(document).ready(function() {
	
	$('.items').hide();
	
	$("#one").click(function() {
        $("#itemone").fadeIn("fast");
    });
    
    $("#two").click(function() {
        $("#itemtwo").fadeIn("fast");
    });
    
	$("#three").click(function() {
        $("#itemthree").fadeIn("fast");
    });
    
    $("#four").click(function() {
        $("#itemfour").fadeIn("fast");
    });
    
    $("#five").click(function() {
        $("#itemfive").fadeIn("fast");
    });
    
	$("#six").click(function() {
        $("#itemsix").fadeIn("fast");
    });
    
    $("#seven").click(function() {
        $("#itemseven").fadeIn("fast");
    });
    
    $("#eight").click(function() {
        $("#itemeight").fadeIn("fast");
    });
    
    $('.all-secs').css( {'height': (  $(window).height() )  } );
	$('.all-secs').hide();
	$('#page1').show();
	$('body').on('click', '.all-secs', function() {
    // slide this section out of sight
    $(this).slideToggle();
    // show the next section - unless we are on the last section
    if ( $(this).attr("id") != "page3" ) {
    	$(this).next().slideToggle();
    } else {
        $('#page1').slideToggle();
    }
	});
    
});

var map = L.map('map').setView([47.916, 3.604], 5);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'abbymd.ob44e5nf',
    accessToken: 'pk.eyJ1IjoiYWJieW1kIiwiYSI6ImNpaDdhbzhhdjBuZmF1MWtpaG5vaHVxbW8ifQ.dNhHQI7VjaaXM7Wypf1qWQ'
}).addTo(map);
	

var marker = L.marker([51.507343, -0.127771]).addTo(map);
marker.bindPopup("<b>London, England</b><br><img src='images/London2.jpg'></br>").openPopup();

var marker = L.marker([48.857010, 2.351203]).addTo(map);
marker.bindPopup("<b>Paris, France</b><br><img src='images/NotreDame.jpg'></br>");


var marker = L.marker([43.769688, 11.256072]).addTo(map);
marker.bindPopup("<b>Florence, Italy</b><br><img src='images/Florence.jpg'></br>");


var marker = L.marker([52.370290, 4.894879]).addTo(map);
marker.bindPopup("<b>Amsterdam, The Netherlands</b><br><img src='images/Amsterdam.jpg'></br>");

var marker = L.marker([47.498266, 19.040385]).addTo(map);
marker.bindPopup("<b>Budapest, Hungary</b><br><img src='images/Budapest.jpg'></br>");

var marker = L.marker([48.207773, 16.373818]).addTo(map);
marker.bindPopup("<b>Vienna, Austria</b><br><img src='images/Vienna.jpg'></br>");
