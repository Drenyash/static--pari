document.addEventListener("DOMContentLoaded", () => {
	const modal = document.querySelector("[data-modal]");
	if (!modal) return;
	const openModal = document.querySelector("[data-open-modal]");
	const closeModal = modal.querySelector("[data-close]");

	const activeModal = () => {
		modal.classList.toggle("active");
		if (modal.classList.contains("active")) document.querySelector("body").classList.add("fixed-size");
		else document.querySelector("body").classList.remove("fixed-size");
	};

	openModal.addEventListener("click", activeModal);
	closeModal.addEventListener("click", activeModal);
});
