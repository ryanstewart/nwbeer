/* Author:

*/

/*global $, document, window, console, Camera, navigator */


function onSuccess(imageData) {
	'use strict';


    var image = document.getElementById('image');
    image.src = imageData;
    
	document.getElementById('takephoto').className = 'animate';
	document.getElementById('photodetail').className = 'animate';
	
    // image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(error) {
    'use strict';
    console.log(error.code);
}

function getCamera() {
    'use strict';
    
	var options = {
		quality: 50,
		destinationType : Camera.DestinationType.FILE_URI,
		allowEdit: true
	};

	navigator.camera.getPicture(onSuccess, onFail, options);
}

function onDeviceReady() {
    'use strict';
    navigator.alert("PG ready");
    
    var $cameradiv = $("<div id='camera-button'>");
    $cameradiv.addClass("iconButton");
    $cameradiv.append("Send Beer Photo");
    $cameradiv.on("click", function (e) {
        getCamera();
    });
    
    $("#mainpage").append($cameradiv);
}

document.addEventListener("deviceready", onDeviceReady, false);

$(document).ready(function () {
    'use strict';
    
    var viewportWidth = $(window).width(),
        viewportHeight = $("#viewport").height();
    
    $("#viewport").width(viewportWidth);
    $("#content").width(viewportWidth * 7);
    //$("#content").height(viewportHeight);

    $("#content").children().each(function () {
        $(this).width(viewportWidth);
    });
    
    //console.log(viewportWidth);
    
    $(".beer-list").on("click", function (e) {
        $("#content").css("left", -viewportWidth * 2);
    });

    $(".the-mountainbeers").on("click", function (e) {
        $("#content").css("left", -viewportWidth * 6);
    });
    
});


