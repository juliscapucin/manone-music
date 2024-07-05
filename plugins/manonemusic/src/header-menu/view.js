import gsap from "gsap";

class HeaderMenu {
	constructor() {
		this.menuOverlay;
		this.burgerButton;
		this.buttonLines;
		this.buttonLinesContainer;
		this.linkList;
		this.isOpen = false;
		this.toggleMenu = this.toggleMenu.bind(this);

		this.load();
	}

	init() {
		this.menuOverlay = document.querySelector("[js-hook-menu-overlay]");
		this.burgerButton = document.querySelector("[js-hook-burger-button]");
		this.linkList = document.querySelector("[js-hook-link-list]");
		this.buttonLinesContainer = document.querySelector(
			"[js-hook-button-lines-container]",
		);
		this.buttonLines = this.burgerButton.querySelectorAll(
			"[js-hook-button-line]",
		);

		gsap.set([this.menuOverlay, this.linkList], { xPercent: 100 });
		gsap.set(this.buttonLines[1], { y: "8px" });

		this.addEventListeners();
	}

	addEventListeners() {
		this.burgerButton.addEventListener("click", this.toggleMenu);

		window.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && this.isOpen) {
				this.toggleMenu();
			}
		});
	}

	toggleMenu() {
		this.isOpen = !this.isOpen;
		const menuOffset = this.isOpen ? 0 : 100;
		const lineRotation = this.isOpen ? 45 : 0;
		const lineOffset = this.isOpen ? "0px" : "8px";
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

		gsap.to(this.buttonLines[0], {
			duration: 0.4,
			rotate: lineRotation,
			transformOrigin: "center center",
		});

		gsap.to(this.buttonLines[1], {
			duration: 0.4,
			rotate: -lineRotation,
			y: lineOffset,
			transformOrigin: "center center",
		});
	}

	removeEventListeners() {
		this.burgerButton.removeEventListener("click", this.toggleMenu);
	}

	load() {
		document.addEventListener("DOMContentLoaded", () => {
			window.innerWidth < 1024 && this.init();
		});
	}
}

const HeaderMenuInstance = new HeaderMenu();
