const filterPopupWindow = document.querySelector("#filter-popup-window");
const filterPopup = document.querySelector("#filter-popup");
const filterPopupToggleBtn = document.querySelector("#pizzas__filter-btn");
const closePopupBtns = document.querySelectorAll(".popup__close-btn");

function showPopup(popupWindow, hideClassName) {
	window.addEventListener("click", hidePopupByClickOnOverlay);
	window.addEventListener("keydown", hidePopupByClickOnEsc);
	popupWindow.classList.remove(hideClassName);
}

function hidePopup(popupWindow, hideClassName) {
	window.removeEventListener("click", hidePopupByClickOnOverlay);
	window.removeEventListener("keydown", hidePopupByClickOnEsc);
	popupWindow.classList.add(hideClassName);
}

function hidePopupByClickOnOverlay(e) {
	if (e.target.className == "popup-window") {
		hidePopup(e.target, "popup-window--hidden");
		hidePopup(e.target.querySelector(".popup"), "popup--hidden");
	}
}

function hidePopupByClickOnEsc(e) {
	if (e.key == "Escape") {
		document
			.querySelectorAll(".popup-window")
			.forEach((popupWindow) => hidePopup(popupWindow, "popup-window--hidden"));
		document
			.querySelectorAll(".popup")
			.forEach((popupWindow) => hidePopup(popupWindow, "popup--hidden"));
	}
}

filterPopupToggleBtn.addEventListener("click", () => {
	showPopup(filterPopupWindow, "popup-window--hidden");
	showPopup(filterPopup, "popup--hidden");
});

closePopupBtns.forEach((btn) =>
	btn.addEventListener("click", (e) => {
		hidePopup(e.target.closest(".popup-window"), "popup-window--hidden");
		hidePopup(e.target.closest(".popup"), "popup--hidden");
	})
);
