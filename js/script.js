// Burger transform effect
(function () {
	const burger = document.querySelector('.header__burger-wrap');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			burger.classList.add('header__burger-wrap_active');
		} else {
			burger.classList.remove('header__burger-wrap_active');
		}
	}
}())

// Burger switcher
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});

$(document).ready(function () {
	$('.header__link').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});

// Smooth scroll to links
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.click(function (event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});