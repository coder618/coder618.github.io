"use strict";
$(document).ready(function() {
	console.log("Welcome From Coder618");
	skill_animation = true;
	itteration = 1;
	greetings_arr = [
		"Bonjour",
		"Hola",
		"مرحبا",
		"你好",
		"こんにちは",
		"cześć",
		"Hello",
	];

	function change_banner_height() {
		var windowHeight = $(window).outerHeight();
		$(".banner").css("min-height", windowHeight);
	}

	change_banner_height();
	$(window).on("orientationchange", function() {
		change_banner_height();
	});

	particlesJS("animated-banner", {
		particles: {
			number: {
				value: 50,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: "#ffffff",
			},
			shape: {
				type: "circle",
			},
			opacity: {
				value: 0,
				random: false,
			},
			size: {
				value: 2,
				random: false,
				anim: {
					enable: false,
				},
			},
			line_linked: {
				enable: true,
				opacity: 0.2,
			},
			move: {
				enable: true,
				speed: 1,
				direction: "none",
				random: true,
				straight: false,
				out_mode: "out",
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "bubble",
				},
				onclick: {
					enable: false,
				},
				resize: true,
			},
			modes: {
				bubble: {
					distance: 200,
					size: 2,
					duration: 2,
					opacity: 1,
					speed: 3,
				},
			},
		},
		retina_detect: true,
	});

	function change_greetings() {
		setInterval(function() {
			$(".gretting").html(
				"<span>" + greetings_arr[itteration] + "</span>",
			);
			itteration == greetings_arr.length - 1
				? (itteration = 0)
				: itteration++;
		}, 2500);
	}
	change_greetings();

	function do_skill_animation() {
		$(".skill-each-item").each(function() {
			$(this)
				.find(".skill-status")
				.animate(
					{
						width: $(this).attr("data-percent"),
					},
					2000,
				);
		});
		skill_animation = false;
	}

	$(document).on("scroll", function() {
		var current_position = $(this).scrollTop();

		if (current_position > 1000 && skill_animation) {
			do_skill_animation();
		}
	});

	//Scroll
	$(".scroll-down-btn").on("click", function(event) {
		event.preventDefault();

		$("html, body").animate(
			{
				scrollTop: $($.attr(this, "href")).offset().top,
			},
			500,
		);
	});

	console.log("got it");
	/** Portfolio Switcher */
	$("ul.portfolio_sort_list a").on("click", function(e) {
		e.preventDefault();
		$("ul.portfolio_sort_list a").removeClass("active");

		// get the cat from link
		var cat = $(this).attr("href");

		// remove active class from all the div
		$("div.each-cat-wrapper").removeClass("active");

		// add active class in matched data-cat  div
		$(".each-cat-wrapper[data-cat='" + cat + "']").addClass("active");

		$(this).addClass("active");
	});
}); // Document ready
