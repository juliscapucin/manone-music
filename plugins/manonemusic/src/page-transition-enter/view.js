import gsap from "gsap";

class PageTransitionEnter {
	constructor() {
		["load", "init", "animateOnLoad"].forEach(
			(fn) => (this[fn] = this[fn].bind(this)),
		);
		this.load();
	}

	async init() {
		console.log("Hello from PageTransitionEnter");

		this.pageTransitionDiv = document.querySelector(
			"[js-hook-page-transition-enter]",
		);

		if (!this.pageTransitionDiv) {
			return;
		}

		this.animateOnLoad();
	}

	animateOnLoad() {
		gsap.to(this.pageTransitionDiv, {
			yPercent: -100,
			duration: 0.3,
			ease: "linear",
		});
	}

	load() {
		document.addEventListener("DOMContentLoaded", this.init);
	}
}

const pageTransitionEnter = new PageTransitionEnter();
