import { useEffect, useCallback } from "react";

const useActiveLink = () => {
	const sections = document.querySelectorAll("section[id]");

	const useCheckActive = useCallback(() => {
		const ycoord = window.scrollY;

		sections.forEach((current) => {
			const sectionHeight = current.offsetHeight;
			const sectionTop = current.offsetTop - 1;
			const sectionID = current.getAttribute("id");

			if (ycoord >= sectionTop && ycoord <= sectionTop + sectionHeight - 1) {
				document.querySelector("#desktopNav a[href*=" + sectionID + "]").classList.add("active");
				document.querySelector("#desktopNav a[href*=" + sectionID + "]").classList.remove("hover");
			} else {
				document.querySelector("#desktopNav a[href*=" + sectionID + "]").classList.remove("active");
				document.querySelector("#desktopNav a[href*=" + sectionID + "]").classList.add("hover");
			}
		});
	}, [sections]);

	useEffect(() => {
		window.addEventListener("scroll", useCheckActive);

		return () => window.removeEventListener("scroll", useCheckActive);
	}, [useCheckActive]);

	return;
};

export default useActiveLink;
