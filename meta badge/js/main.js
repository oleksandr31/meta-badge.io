$(document).ready(function () {


	$(window).scroll(function () {
		if ($(window).scrollTop() >= 50) {
			$('header').addClass('fixed');

		}
		else {
			$('header').removeClass('fixed');

		}
	});


	$('.header-nav').on('click', 'a', function (event) {
		event.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top }, 1000);
	});

	$(".header-nav ul li a").click(function () {
		$(".header-nav ul li a").removeClass("active");
		$(this).addClass("active")
	})

	$("#menuToggle").click(function () {
		$(".mobil-meny").toggleClass('active');
		$("body").toggleClass('fixed')
	});



	$('.slider').slick({
		dots: false,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	let element = $('.progres-bar');
	$count = 0;
	$(window).scroll(function () {
		let scroll = $(window).scrollTop() + $(window).height();
		let offset = element.offset().top;
		if (scroll > offset && $count == 0) {

			$('.progres-bar').addClass('active')
			$count = 1;

		}
	})




	$('.footer-nav').on('click', 'a', function (event) {
		event.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top }, 1000);
	});



})