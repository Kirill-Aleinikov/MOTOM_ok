$(window).on('load resize', function(){
	
	if ($(window).width() < 900) {
		$('.skroll-info:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	} else {
		$('.skroll-info.slick-initialized').slick("unslick");
	}
	
});
