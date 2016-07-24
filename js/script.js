/*Nina Kong*/
$(document).ready(function(){
	var windowHeight = $( window ).height();
	$("#Content").height(windowHeight);

    $("#Content").css({"color": "#fff", "padding": "5em"}); 

    $("#Content a:first").css("color", "#b37aa5"); 

    $("#Content a:last").css("color", "#eba96d"); 

    $("#Content a:even").css("padding-left", "10px"); 

    $("#Content a:odd").css("padding-left", "10px"); 

    $("#Content .github:first").css("color", "#b26c34"); 

    $("#Content .linkedin:even").css("color", "#e4b7bf"); 

    $("#Content a:gt(3)").css("font-size", "2.5em");

    $("#Content a:not(a:eq(4))").css("font-size", "2.5em");

    $("#Content a:eq(3)").css("color", "#5278a5");

});
