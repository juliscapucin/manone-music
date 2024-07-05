import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
	const menuOverlay = document.querySelector("[js-hook-menu-overlay]");
	const burgerButton = document.querySelector("[js-hook-burger-button]");
	const closeButton = document.querySelector("[js-hook-close-button]");

	console.log(menuOverlay, burgerButton, closeButton);

	burgerButton.addEventListener("click", () => {
		headerMenu.classList.add("header-menu--open");
	});

	closeButton.addEventListener("click", () => {
		headerMenu.classList.remove("header-menu--open");
	});
});
