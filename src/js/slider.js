import Swiper, { EffectFade, Mousewheel, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", () => {
	const sliders = document.querySelectorAll("[data-swiper]");
	sliders.forEach(slider => {
		const swiperContainer = "[data-swiper]";
		const prevButton = slider.querySelector("[data-slider-prev]");
		const nextButton = slider.querySelector("[data-slider-next]");

		const swiper = new Swiper(swiperContainer, {
			modules: [Navigation],
			slidesPerView: "auto",
			spaceBetween: 15,
			navigation: {
				nextEl: nextButton,
				prevEl: prevButton,
				disabledClass: "slider-toolbox__button--disabled"
			},
			breakpoints: {
				768: {
					slidesPerView: 4,
					spaceBetween: 30
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 15
				}
			}
		});
	});
	const swiperThumbnails = new Swiper("[data-swiper-thumbs]", {
		modules: [Navigation, Thumbs, Mousewheel],
		slidesPerView: 4,
		spaceBetween: 20,
		watchSlidesProgress: true,
		direction: "vertical",
		mousewheel: {
			sensitivity: 20
		},
		navigation: {
			nextEl: ".swiper-button-thumb--next",
			prevEl: ".swiper-button-thumb--prev",
			disabledClass: "swiper-button-thumb--disabled"
		}
	});

	const swiper = new Swiper("[data-swiper-picture]", {
		modules: [Thumbs, EffectFade],
		slidesPerView: 1,
		effect: "fade",
		thumbs: {
			swiper: swiperThumbnails
		}
	});

	// const swiper = new Swiper(".mySwiper", {
	//   spaceBetween: 10,
	//   slidesPerView: 4,
	//   freeMode: true,
	//   watchSlidesProgress: true
	// });
	// const swiper2 = new Swiper(".mySwiper2", {
	//   modules: [Navigation, Thumbs],
	//   spaceBetween: 10,
	//   zoom: true,
	//   navigation: {
	//     nextEl: ".swiper-button-next",
	//     prevEl: ".swiper-button-prev"
	//   },
	//   thumbs: {
	//     swiper: swiper
	//   }
	// });
});
