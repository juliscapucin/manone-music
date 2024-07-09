import gsap from "gsap"

class PageTransitionExit {
	constructor() {
		;["load", "init", "addEvents", "removeEvents", "animate"].forEach(
			(fn) => (this[fn] = this[fn].bind(this))
		)
		this.init()
	}

	async init() {
		await this.load()
		console.log("Hello from PageTransitionExit")
		this.elements = document.querySelectorAll("[js-hook-transition-link]")
		this.addEvents()
	}

	addEvents() {
		// window.addEventListener("load", this.animate)
	}

	removeEvents() {
		window.removeEventListener("load", this.animate)
	}

	animate() {
		gsap.to(this.elements, {
			rotation: 180,
			duration: 2,
			ease: "bounce.out",
		})

		console.log("window loaded")
	}

	load() {
		document.addEventListener("DOMContentLoaded", this.init)
	}
}

export default PageTransitionExit
