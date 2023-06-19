import { useState } from "react";
import useScrollPosition from "./hooks/useScrollPosition";
import PortfolioIcon from "../assets/portfolio_icon.png";
import "../components/css/nav.css";

function Nav() {
	const scrollPosition = useScrollPosition();

	const glassmorphism = "rounded-2xl bg-[rgba(255,255,255,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md";

	const logoClasses =
		"w-8 h-8 relative inline-flex justify-center items-center rounded-full bg-transparent border-2 border-[#8FC0A9] overflow-hidden text-xl text-[#8FC0A9]";

	const navHover =
		"[&.active]:underline [&.active]:underline-offset-8 [&.active]:decoration-[3px] [&.active]:decoration-[#4A7C59] [&.active]:text-[#8FC0A9]";

	return (
		<>
			<nav className={scrollPosition > 0 ? `${glassmorphism}` : ""}>
				<div>
					<img className="h-8 w-auto rounded-lg" src={PortfolioIcon} alt="Portfolio Icon" title="Portfolio Icon" />
				</div>
				<div className="order-3 lg:hidden">
					<button
						data-collapse-toggle="navbar"
						type="button"
						className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-8 h-8"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<div
					className="hidden lg:flex justify-center gap-5 xl:gap-6 font-lexend text-[0.425rem] xl:text-[0.525rem] 2xl:text-[0.65rem] text-center"
					id="navbar"
				>
					<a href="#" className={`nav-item ${navHover}`}>
						HOME
					</a>
					<a href="#" className={`nav-item ${navHover}`}>
						ABOUT ME
					</a>
					<a href="#" className={`nav-item ${navHover}`}>
						EXPERIENCE
					</a>
					<a href="#" className={`nav-item ${navHover}`}>
						SKILLS
					</a>
					<a href="#" className={`nav-item ${navHover}`}>
						RECOMMENDATIONS
					</a>
					<a href="#" className={`nav-item ${navHover}`}>
						CONTACT ME
					</a>
				</div>
				<div className="order-2 ml-auto lg:ml-0 items-center justify-evenly space-x-2 logoHover">
					<a
						href="https://www.linkedin.com/in/shaunragasa/"
						target="_blank"
						rel="noopener noreferrer"
						alt="LinkedIn"
						title="LinkedIn"
					>
						<i className={`bx bxl-linkedin ${logoClasses}`}></i>
					</a>
					<a href="https://gitlab.com/sragasa97" target="_blank" rel="noopener noreferrer" alt="Gitlab" title="Gitlab">
						<i className={`bx bxl-gitlab ${logoClasses}`}></i>
					</a>
					<a
						href="https://drive.google.com/file/d/1PjY6bqQEBeuHqvUC4zZAjB1nhtxbTqUs/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						alt="Resume"
						title="Resume"
					>
						<i className={`bx bx-receipt ${logoClasses}`}></i>
					</a>
				</div>
			</nav>
		</>
	);
}

export default Nav;
