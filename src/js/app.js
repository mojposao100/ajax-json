var handleNavbar = function(element){
	// treba dodati event na koji treba reagirati...a to je na body dodati event scroll
	$(window).scroll(function(){
		console.log($(window).scrollTop());
	
	if($(window).scrollTop() > 100){
		
	}else{}
	
	});
	
	
		
}

var App = function () { //ovdje varijabla drzi funkciju!! a u toj funkciji je više funkcija koje ona drži
    return {
        init: function (element) {
        handleNavbar(element);    
	}