import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PortfolioIcon from "../assets/portfolio_icon.png";
import "../App.css";

function Nav() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [visible, setVisible] = useState(true);
	const lastScrollTop = useRef(0);

	const handleClick = () => {
		setIsNavOpen(!isNavOpen);
	};

	const handleScroll = () => {
		const { pageYOffset } = window;
		if (pageYOffset > lastScrollTop.current) {
			// downward scroll
			setVisible(false);
			console.log("downward");
		} else if (pageYOffset < lastScrollTop.current) {
			// upward scroll
			setVisible(true);
			console.log("upward");
		}
		// horizontal scroll
		lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		console.log("listening....");

		return window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<nav
				className={`
				${visible ? "visible" : ""}`}
			>
				<img className="h-8 w-8 rounded-lg -ml-1" src={PortfolioIcon} alt="Portfolio Icon" />
				<div className="flex items-center gap-5 ">
					<h2 className="nav-item">About</h2>
					<h2 className="nav-item">Skills</h2>
					<h2 className="nav-item">Projects</h2>
					<h2 className="nav-item">Resume</h2>
					<h2 className="nav-item">Contact</h2>
				</div>
				<div className="flex align-middle justify-around gap-6 rounded-lg nav-logo">
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</div>
			</nav>
		</>
	);
}

export default Nav;
