$(document).ready(function (e) {
	$('.burger').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('burger-active');
		$('.nav').toggleClass('show');
	});

	$('.header-intro, .features, .history, .services, .works, .study, .testimonials, .pricing, .team, .integration, .blog, .contacts, .start, .footer').on('click', function() {
		$('.nav').removeClass('show');
		$('.burger').removeClass('burger-active')
	});

	$('.anchor').click (function (){
		var element = $(this).attr('href');
		$('html, body').animate({
			'scrollTop':1070
		}, 1000);

	});

	$(".nav a").mPageScroll2id();


});