import gsap from "gsap";

class PageTransitionExit {
	constructor() {
		["load", "init", "addEvents", "removeEvents", "animateOnClick"].forEach(
			(fn) => (this[fn] = this[fn].bind(this)),
		);
		this.bodyElement = null;
		this.headerLinks = null;

		this.load();
	}

	async init() {
		this.bodyElement = document.querySelector("body");
		if (!this.bodyElement) {
			return;
		}

		// If the page is a single page, we need to animate the header links too
		if (this.bodyElement.classList.contains("single")) {
			this.headerLinks = document.querySelectorAll(".header-link");
		}
		this.transitionLinks = document.querySelectorAll(
			"[js-hook-transition-link]",
		);
		this.pageTransitionDiv = document.querySelector(
			"[js-hook-page-transition-exit]",
		);

		if (!this.pageTransitionDiv || !this.transitionLinks) {
			return;
		}

		gsap.set(this.pageTransitionDiv, {
			yPercent: 100,
		});

		this.addEvents();
	}

	addEvents() {
		this.transitionLinks.forEach((link) => {
			link.addEventListener("click", this.animateOnClick);
		});
		this.headerLinks &&
			this.headerLinks.forEach((link) => {
				link.addEventListener("click", this.animateOnClick);
			});
	}

	removeEvents() {
		this.transitionLinks.forEach((link) => {
			link.removeEventListener("click", this.animateOnClick);
		});

		this.headerLinks &&
			this.headerLinks.forEach((link) => {
				link.removeEventListener("click", this.animateOnClick);
			});
	}

	animateOnClick(e) {
		e.preventDefault();
		const href = e.target.closest("a").getAttribute("href");
		gsap.to(this.pageTransitionDiv, {
			yPercent: 0,
			duration: 0.3,
			ease: "linear",
			onComplete: () => {
				window.location = href;
			},
		});
	}

	load() {
		document.addEventListener("DOMContentLoaded", this.init);
	}
}

const pageTransitionExit = new PageTransitionExit();
