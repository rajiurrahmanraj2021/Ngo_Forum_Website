//Menu Fixed start
$('.top_btn').click(function () {

	$('html,body').animate({

		scrollTop: 0

	}, 1000);

});

var $nav = $('.header').offset().top;

$(window).scroll(function () {

	$scrolling = $(this).scrollTop();

	if ($scrolling >= $nav) {

		$('.header').addClass('fixedmenu');

	} else {
		$('.header').removeClass('fixedmenu');

	}

	//Top Button
	if ($scrolling >= 500) {

		$('.top_btn').fadeIn();

	} else {

		$('.top_btn').fadeOut();

	}

});
//Menu Fixed End



//MixIt Up Start
var mixer = mixitup('.filter_cls');
//MixIt Up End


//Gallery start
	$(document).ready(function () {
		$('.venobox').venobox({
			framewidth: '500px',
			frameheight: '400px',
		});
	});
	//Gallery end
