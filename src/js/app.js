import * as flsFunction from "./modules/functions.js";
import smoothScrolling from "./modules/smoothScrolling.js";
// plugins from npm
import VanillaTilt from 'vanilla-tilt';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	const fliterCards = document.querySelectorAll('.project-box__card'),
		all = document.querySelector('.all'),
		html = document.querySelector('.html-btn'),
		games = document.querySelector('.games-btn'),
		scene3d = document.querySelector('.scenes3d-btn'),
		react = document.querySelector('.react-btn');

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
	const showCardsGames = () => {
		hideCards();
		fliterCards.forEach(e => {
			if (e.classList.contains('games')) {
				e.classList.add('show')
				e.classList.remove('hide')
			}
		})
	}
	const showCardsScene3d = () => {
		hideCards();
		fliterCards.forEach(e => {
			if (e.classList.contains('scenes3d')) {
				e.classList.add('show')
				e.classList.remove('hide')
			}
		})
	}
	showCards();
	all.addEventListener('click', showCards)
	react.addEventListener('click', showCardsReact)
	html.addEventListener('click', showCardsHtml)
	games.addEventListener('click', showCardsGames)
	scene3d.addEventListener('click', showCardsScene3d)

	// my modules
	smoothScrolling();

	// VanillaTilt
	const card = document.querySelectorAll(".js-card");

	VanillaTilt.init(card, {
		max: 10,
		speed: 100,
		perspective: 1000,
		transition: true,
	});
	// if (window.innerWidth >= 768) {
	// }

	// for create webP dublicate
	flsFunction.isWebp();

});


