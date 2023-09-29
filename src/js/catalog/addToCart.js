import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
	(function addToCart() {
		const addCardBtn = document.querySelectorAll("[data-add-basket]");
		const alert = document.querySelector("[data-alert-basket]");
		if (!alert) return;
		const close = alert.querySelector("[data-close]");
		const cardDetail = document.querySelector(".product-card__detail");
		const id = "123";
		const url = "/api/";

		const getData = () => {
			const elements = [...cardDetail.querySelectorAll("input")];
			const data = new FormData;

			for (let i = 0; i < elements.length; i++) {
				if (elements[i].checked) {
					data.append("size", elements[i].value);
				} else if (elements[i].type === "number" || elements[i].type === "text") {
					data.append(elements[i].name, elements[i].value);
				}
			}
			data.append("id", id);
			return data;
		};

		const sendData = () => {
			axios.post(url, getData())
				.then(response => {
					// alert.classList.toggle("active");
					console.log(response);
				})
				.catch(e => console.error(e));
		};

		addCardBtn.forEach(button => {
			button.addEventListener("click", () => {
				alert.classList.toggle("active");
				sendData();
				if (alert.classList.contains("active")) {
					setTimeout(() => {
						alert.classList.remove("active");
					}, 2000);
				}
			});
		});

		close.addEventListener("click", () => {
			alert.classList.remove("active");
		});
	})();
});
