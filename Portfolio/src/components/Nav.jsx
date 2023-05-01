import { useState, useRef, useEffect } from "react";
import PortfolioIcon from "../assets/portfolio_icon.png";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin-icon.svg";
import { ReactComponent as GitlabIcon } from "../assets/gitlab-icon.svg";
import { ReactComponent as ResumeIcon } from "../assets/resume-icon.svg";

// import { ReactComponent as LinkedInSquare } from "../assets/linkedin-square.svg";
// import { ReactComponent as GitlabSquare } from "../assets/gitlab-square.svg";
// import { ReactComponent as ResumeSquare } from "../assets/resume-square.svg";

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
				<div>
					<img className="h-8 w-8 rounded-lg -ml-1" src={PortfolioIcon} alt="Portfolio Icon" />
				</div>
				<div className="flex items-center justify-around gap-5">
					<h2 className="nav-item">About</h2>
					<h2 className="nav-item">Skills</h2>
					<h2 className="nav-item">Projects</h2>
					<h2 className="nav-item">Resume</h2>
					<h2 className="nav-item">Contact</h2>
				</div>
				{/* <div className="w-screen flex items-center justify-around">
					<LinkedInSquare className="h-8" />
					<GitlabSquare className="h-8" />
					<ResumeSquare className="h-8" />
				</div> */}
				<div className="flex items-center justify-around gap-2">
					<a
						href="https://www.linkedin.com/in/shaunragasa/"
						target="_blank"
						rel="noopener noreferrer"
						alt="LinkedIn"
					>
						<LinkedInIcon className="nav-logo" />
					</a>
					<a href="https://gitlab.com/sragasa97" target="_blank" rel="noopener noreferrer" alt="Gitlab">
						<GitlabIcon className="nav-logo" />
					</a>
					<a
						href="https://drive.google.com/file/d/1q1Dq2DOt4etw1dQTqOzg9ucIMk57d7Sp/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						alt="Resume"
					>
						<ResumeIcon className="nav-logo" />
					</a>
				</div>
			</nav>
		</>
	);
}

export default Nav;
