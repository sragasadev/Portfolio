import { useState, useEffect } from "react";

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const updatePosition = () => {
		setScrollPosition(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", updatePosition);

		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	return scrollPosition;
};

export default useScrollPosition;
