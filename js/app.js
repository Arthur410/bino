$(document).ready(function (e) {
	 // burger

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


	$('.header-intro .col-12').slick({
		autoplay:true,
		autoplaySpeed:3000,
		draggable:false,
		pauseOnFocus:false,
		pauseOnHover:false,
		fade:true,
		appendArrows:('.header-intro')
	});

	$('.services .col-12.slider').slick ({
		arrow:true,
		vertical:true,
		draggable:true,
		autoplay:true,
		autoplaySpeed:3000,
		dots:true,
		pauseOnFocus:false,
		pauseOnHover:false,
	});

	const filter = $("[data-filter]");

	filter.on("click", function(e) {
		e.preventDefault();
		const cat = $(this).data('filter');

		if(cat == 'all' ) {
			$("[data-cat]").removeClass('hide')
		} else {
				$("[data-cat]").each(function() {
				const workCat = $(this).data('cat');

				if(workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			})
		}
	});

	$('.idea').slick({
		arrow:false,
		autoplay:true,
		autoplaySpeed:3000,
		dots:true,
		pauseOnFocus:false,
		pauseOnHover:false,
	});


});

$(function () {
	let header = $(".header-top");
	let intro = $(".header");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	 $(window).on("scroll resize", function () {

		
		checkScroll(scrollPos,introH);
	 });

	 function checkScroll(scrollPos, introH) {
	 	if($(window).scrollTop() > intro.innerHeight() ) {
	 		header.addClass("header-fixed");
	 	} else {
	 		header.removeClass("header-fixed");
	 	}
	 }
	 console.log(scrollPos);
});

