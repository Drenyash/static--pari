import noUiSlider from "nouislider/dist/nouislider";

document.addEventListener("DOMContentLoaded", () => {
	const range = document.querySelectorAll("[data-range-slider]");
	const minPrice = document.querySelector("[data-minprice]");
	const maxPrice = document.querySelector("[data-maxprice]");
	const snapValues = [
		minPrice,
		maxPrice
	];

	if (!range) return
	range.forEach(range => {
		const createSlider = () => {
			noUiSlider.create(range, {
				start: [500, 55500],
				connect: [false, true, false],
				range: {
					"min": [500],
					"max": [55500]
				}
			});
		};

		createSlider();

		const updateSlider = () => {
			range.noUiSlider.on("update", (values, handle) => {
				snapValues[handle].value = Math.floor(values[handle]);
			});
			snapValues[0].addEventListener("change", (evt) => {
				range.noUiSlider.set([snapValues[0].value, null]);
			});
			snapValues[1].addEventListener("change", () => {
				range.noUiSlider.set([null, snapValues[1].value]);
			});
		};

		updateSlider();
	})
});
