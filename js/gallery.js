document.addEventListener("DOMContentLoaded", () => {
	const grid = document.querySelector(".gallery-grid");

	for (var i = 1; i < 12; i++) {
		const img = document.createElement("img");
		img.src = `/assets/gallery/gi${i}.jpeg`;
		img.alt = `Gallery image ${i}`;
		img.loading = "lazy";
		grid.appendChild(img);
	}
			
	const images = document.querySelectorAll(".gallery-grid img");

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
