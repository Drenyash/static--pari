import axios from "axios";

(function addFavorite() {
	document.addEventListener("DOMContentLoaded", () => {
		const cards = document.querySelectorAll(".card");
		const url = "/api/";

		cards.forEach(card => {
			const favoriteButton = card.querySelector(".favourite");
			const id = "123";
			const data = new FormData;

			favoriteButton.addEventListener("click", function() {
				this.classList.toggle("active");
				data.append("id", id);
				sendData(data);
			});
		});

		const sendData = (data) => {
			axios.post(url, data)
				.then(response => console.log(response))
				.catch(e => console.error(e));
		};
	});
})();
