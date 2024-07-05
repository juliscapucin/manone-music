/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/header-menu/view.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

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
/******/ })()
;
//# sourceMappingURL=view.js.map