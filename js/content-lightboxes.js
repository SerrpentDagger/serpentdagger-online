document.addEventListener("DOMContentLoaded", () => {
	// Lightbox to each img
	const images = document.querySelectorAll(".content-section img");

	images.forEach(img => {
		img.addEventListener("click", () => {
			const overlay = document.createElement("div");
			overlay.className = "image-overlay";
			overlay.innerHTML = `
				<div class="overlay-content">
					<img src="${img.src}" alt="${img.alt}">
				</div>
			`;
			document.body.appendChild(overlay);

			overlay.addEventListener("click", () => overlay.remove());
		});
	});
});
