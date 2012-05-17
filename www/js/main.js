/* Author:

*/

/*global $, document, window, console, Camera, navigator */

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


