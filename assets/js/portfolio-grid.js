document.addEventListener("DOMContentLoaded", () => {
	const INITIAL_VISIBLE_COUNT = 6;
	const BATCH_SIZE = 4;

	const grid = document.querySelector(".portfolio-grid");
	const loadMoreButton = document.getElementById("loadMorePortfolio");
	const sentinel = document.getElementById("portfolioSentinel");

	if (!grid || !loadMoreButton || !sentinel) {
		return;
	}

	const items = Array.from(grid.querySelectorAll(".grid-item"));
	let visibleCount = Math.min(INITIAL_VISIBLE_COUNT, items.length);

	const syncVisibility = () => {
		items.forEach((item, index) => {
			const shouldShow = index < visibleCount;
			item.classList.toggle("is-hidden", !shouldShow);
			item.setAttribute("aria-hidden", shouldShow ? "false" : "true");
		});

		const hasMore = visibleCount < items.length;
		loadMoreButton.classList.toggle("is-hidden", !hasMore);
		sentinel.classList.toggle("is-hidden", !hasMore);
	};

	const revealNextBatch = () => {
		if (visibleCount >= items.length) {
			return;
		}

		visibleCount = Math.min(visibleCount + BATCH_SIZE, items.length);
		syncVisibility();
	};

	loadMoreButton.addEventListener("click", revealNextBatch);

	if ("IntersectionObserver" in window) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						revealNextBatch();
					}
				});
			},
			{
				root: null,
				rootMargin: "300px 0px",
				threshold: 0
			}
		);

		observer.observe(sentinel);
	}

	syncVisibility();
});
