import axios from "axios";

(function addFilter() {
	document.addEventListener("DOMContentLoaded", () => {
		const filter = document.querySelectorAll("[data-filter]");
		const filterMobile = document.querySelector(".filter-mobile");
		const openFilter = document.querySelector(".open-filter");
		if (!openFilter) return;
		const url = "/api/";

		openFilter.addEventListener("click", () => {
			filterMobile.classList.add("active");
			if (filterMobile.classList.contains("active")) document.querySelector("body").classList.add("fixed-size");
		});

		if (!filter) return;
		filter.forEach(filter => {
			const items = filter.querySelectorAll(".filter__item");
			items.forEach(item => {
				item.addEventListener("click", function() {
					this.classList.toggle("active");
				});
			});

			const getData = () => {
				const elements = [...filter.querySelectorAll("input")];
				const data = new FormData;
				const sizesArray = [];

				for (let i = 0; i < elements.length; i++) {
					if (elements[i].checked) {
						if (elements[i].name === "size") {
							sizesArray.push(elements[i].value);
						} else data.append(elements[i].name, elements[i].value);
					} else if (elements[i].type === "text" || elements[i].type === "number") {
						data.append(elements[i].name, elements[i].value);
					}
				}
				data.append("size", JSON.stringify(sizesArray));
				for (let pair of data.entries()) {
					console.log(pair[0] + ', ' + pair[1]);
				}
				return data;
			};

			const sendData = () => {
				axios.post(url, getData())
					.then(response => {
						console.log(response);
					})
					.catch(e => console.log(e));
			};

			filter.addEventListener("submit", (evt) => {
				evt.preventDefault();
				sendData();
				if (filterMobile.classList.contains("active")) {
					filterMobile.classList.remove("active");
					document.querySelector("body").classList.remove("fixed-size");
				}
			});
		});
	});
})();
