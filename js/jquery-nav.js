$(document).ready(function(){

				$('#menuButton').click(function(e){
					e.preventDefault();
					$('.nav-menu').slideToggle(400);
					$('.menu-bars').toggleClass('fa-rotate-90');
				});
				$('.nav-menu a').click(function(){
					if($( window ).width() < 768){
						$('.nav-menu').slideToggle(400);
						$('.menu-bars').toggleClass('fa-rotate-90');
					}					
				});
				$( window ).resize(function() {
				   if($( window ).width() > 768){
				   		$('#displayMenu').attr('style','');	
				   		$('.menu-bars').removeClass('fa-rotate-90');
				   }
				});


				$( window ).scroll(function(){
					if($( window ).scrollTop() > 150){
						$('nav').addClass('fixed-nav');
					} else {
						 $('nav').removeClass('fixed-nav');
					}
				});
		});