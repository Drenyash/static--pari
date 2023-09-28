(function selectName() {
	document.addEventListener("DOMContentLoaded", () => {
		const openSelectBtn = document.querySelector("[data-open-select]");
		const customSelect = document.querySelector("[data-select-name]");
		const selectContainer = document.querySelector("[data-select-container]");

		if (!openSelectBtn || !customSelect || !selectContainer) return;
		const dropdown = customSelect.querySelector("[data-select-dropdown]");
		const dropdownItems = dropdown.querySelectorAll(".select-name__item");
		const inputName = document.querySelector("[data-name]");
		const inputNumber = document.querySelector("[data-number]");

		openSelectBtn.addEventListener("click", function() {
			this.classList.toggle("active");
			if (!this.classList.contains("active")) {
				customSelect.classList.remove("active");
				fillInputs();
			}
			selectContainer.classList.toggle("active");
		});

		customSelect.addEventListener("click", function() {
			this.classList.toggle("active");
		});

		dropdown.addEventListener("click", evt => {
			evt.stopPropagation();
		});

		dropdownItems.forEach((element) => {
			const name = element.querySelector(".select-name__name");
			const number = element.querySelector(".select-name__number");

			element.addEventListener("click", () => {
				customSelect.classList.remove("active");
				fillInputs(name, number);
			});
		});

		const fillInputs = (name, number) => {
			if (!name && !number) {
				inputName.value = "";
				inputNumber.value = "";
			} else {
				inputName.value = name.textContent;
				inputNumber.value = number.textContent;
			}
		};
	});
})();
