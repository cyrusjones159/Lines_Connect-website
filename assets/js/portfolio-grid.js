document.addEventListener("DOMContentLoaded", () => {
	const portfolioImages = Array.from(document.querySelectorAll(".portfolio-grid .grid-item"));

	if (!portfolioImages.length) {
		return;
	}

	const lightbox = document.createElement("div");
	lightbox.className = "portfolio-lightbox";
	lightbox.setAttribute("aria-hidden", "true");

	const lightboxImage = document.createElement("img");
	lightboxImage.className = "portfolio-lightbox-image";
	lightboxImage.alt = "";

	const closeButton = document.createElement("button");
	closeButton.type = "button";
	closeButton.className = "portfolio-lightbox-close";
	closeButton.setAttribute("aria-label", "Close fullscreen image");
	closeButton.textContent = "Close";

	lightbox.appendChild(lightboxImage);
	lightbox.appendChild(closeButton);
	document.body.appendChild(lightbox);

	let lastFocusedImage = null;

	const openLightbox = (image) => {
		lastFocusedImage = image;
		lightboxImage.src = image.currentSrc || image.src;
		lightboxImage.alt = image.alt || "Artwork";
		lightbox.classList.add("is-open");
		lightbox.setAttribute("aria-hidden", "false");
		document.body.style.overflow = "hidden";
		closeButton.focus();
	};

	const closeLightbox = () => {
		lightbox.classList.remove("is-open");
		lightbox.setAttribute("aria-hidden", "true");
		document.body.style.overflow = "";
		lightboxImage.removeAttribute("src");

		if (lastFocusedImage) {
			lastFocusedImage.focus();
		}
	};

	portfolioImages.forEach((image) => {
		image.tabIndex = 0;
		image.setAttribute("role", "button");
		image.setAttribute("aria-label", `Open fullscreen view for ${image.alt || "artwork"}`);

		image.addEventListener("click", () => openLightbox(image));
		image.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				openLightbox(image);
			}
		});
	});

	closeButton.addEventListener("click", closeLightbox);

	lightbox.addEventListener("click", (event) => {
		if (event.target === lightbox) {
			closeLightbox();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
			closeLightbox();
		}
	});
});

