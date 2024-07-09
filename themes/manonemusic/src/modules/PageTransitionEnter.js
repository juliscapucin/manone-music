import gsap from "gsap"

class PageTransition {
	constructor() {
		// ;["addEvents", "removeEvents", "animate"].forEach(
		// 	(fn) => (this[fn] = this[fn].bind(this))
		// )

		this.pageTransitionDiv = null
		this.addEvents = this.addEvents.bind(this)
		this.init = this.init.bind(this)
		this.load()
	}

	init() {
		console.log("Hello from PageTransitionEnter")
		this.pageTransitionDiv = document.querySelector(
			"[js-hook-page-transition-div]"
		)
		this.addEvents()
	}

	addEvents() {
		window.addEventListener("load", this.animate)
	}

	removeEvents() {
		window.removeEventListener("load", this.animate)
	}

	animate = () => {
		console.log(this.pageTransitionDiv)
		gsap.to(this.pageTransitionDiv, {
			yPercent: -100,
			duration: 1,
			ease: "linear",
		})
	}

	load() {
		document.addEventListener("DOMContentLoaded", this.init)
	}
}

export default PageTransition
