import gsap from "gsap";

class PageTransitionExit {
	constructor() {
		["load", "init", "addEvents", "removeEvents", "animateOnClick"].forEach(
			(fn) => (this[fn] = this[fn].bind(this)),
		);
		this.load();
	}

	async init() {
		console.log("Hello from PageTransitionExit");
		this.transitionLinks = document.querySelectorAll(
			"[js-hook-transition-link]",
		);
		this.pageTransitionDiv = document.querySelector(
			"[js-hook-page-transition-exit]",
		);

		if (!this.pageTransitionDiv) {
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
	}

	removeEvents() {
		this.transitionLinks.forEach((link) => {
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
