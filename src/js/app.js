import * as flsFunction from "./modules/functions.js";
import smoothScrolling from "./modules/smoothScrolling.js";
// plugins from npm
import VanillaTilt from 'vanilla-tilt';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	const fliterCards = document.querySelectorAll('.project-box__card'),
		all = document.querySelector('.all'),
		html = document.querySelector('.html'),
		react = document.querySelector('.react');

	const hideCards = () => {
		fliterCards.forEach(e => {
			e.classList.add('hide')
			e.classList.remove('show')
		})
	}
	const showCards = () => {
		fliterCards.forEach(e => {
			e.classList.add('show')
			e.classList.remove('hide')
			setTimeout(() => e.classList.remove('show'), 1300)
		})
	}
	const showCardsReact = () => {
		hideCards();
		fliterCards.forEach(e => {
			if (e.classList.contains('react')) {
				e.classList.add('show')
				e.classList.remove('hide')
			}
		})
	}
	const showCardsHtml = () => {
		hideCards();
		fliterCards.forEach(e => {
			if (e.classList.contains('markup')) {
				e.classList.add('show')
				e.classList.remove('hide')
			}
		})
	}
	showCards();
	all.addEventListener('click', showCards)
	react.addEventListener('click', showCardsReact)
	html.addEventListener('click', showCardsHtml)

	// my modules
	smoothScrolling();

	// VanillaTilt
	const card = document.querySelectorAll(".js-card");

	if (window.innerWidth >= 768) {
		VanillaTilt.init(card, {
			max: 10,
			speed: 100,
			perspective: 1000,
			transition: true,
		});
	}

	// for create webP dublicate
	flsFunction.isWebp();

});


