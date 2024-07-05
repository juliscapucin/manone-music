import gsap from "gsap";

class HeaderMenu {
	constructor() {
		this.menuOverlay;
		this.burgerButton;
		this.closeButton;
		this.linkList;
		this.isOpen = false;
		this.toggleMenu = this.toggleMenu.bind(this);

		this.load();
	}

	init() {
		this.menuOverlay = document.querySelector("[js-hook-menu-overlay]");
		this.burgerButton = document.querySelector("[js-hook-burger-button]");
		this.linkList = document.querySelector("[js-hook-link-list]");
		this.closeButton = document.querySelector("[js-hook-close-button]");

		gsap.set([this.menuOverlay, this.linkList], { xPercent: 100 });
		this.closeButton.classList.add("hidden");

		this.addEventListeners();
	}

	addEventListeners() {
		this.burgerButton.addEventListener("click", this.toggleMenu);

		this.closeButton.addEventListener("click", this.toggleMenu);

		window.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && this.isOpen) {
				this.toggleMenu();
			}
		});
	}

	toggleMenu() {
		this.isOpen = !this.isOpen;
		const menuOffset = this.isOpen ? 0 : 100;
		const linkOffset = this.isOpen
			? { xPercent: 0, delay: 0.2 }
			: { xPercent: 100 };

		gsap.to(this.menuOverlay, { duration: 0.4, xPercent: menuOffset });
		gsap.to(this.linkList, {
			duration: 0.4,
			xPercent: linkOffset.xPercent,
			delay: linkOffset.delay || 0,
			ease: "power2.out",
		});

		this.closeButton.classList.toggle("hidden");
		this.burgerButton.classList.toggle("hidden");
	}

	removeEventListeners() {
		this.burgerButton.removeEventListener("click", this.toggleMenu);
		this.closeButton.removeEventListener("click", this.toggleMenu);
	}

	load() {
		document.addEventListener("DOMContentLoaded", () => {
			this.init();
		});
	}
}

const HeaderMenuInstance = new HeaderMenu();
