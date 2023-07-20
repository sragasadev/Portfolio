import { useState, useEffect, useRef } from "react";
import useScrollPosition from "./hooks/useScrollPosition";
import useActiveLink from "./hooks/useActiveLink";
import PortfolioIcon from "../assets/portfolio_icon.png";
import "../components/css/nav.css";
import "../components/css/hamburgers.css";

function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);
	const navbar = useRef(null);
	const hamburgerMenu = useRef(null);
	const scrollPosition = useScrollPosition();

	const glassmorphism = "rounded-xl bg-[rgba(255,255,255,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md";

	// expanded classes
	const expandedIcons =
		"w-8 h-8 relative inline-flex justify-center items-center rounded-full bg-transparent border-2 border-[#8FC0A9] overflow-hidden text-xl text-[#8FC0A9]";

	const navActive = "[&.active]:text-[#4A7C59]";

	// hamburger classes
	const hamburgerIcons =
		"w-8 h-8 relative inline-flex justify-center items-center rounded-full bg-transparent border-2 border-black overflow-hidden text-xl text-black hover:border-[#faf3dd] hover:text-[#faf3dd]";

	const hamburgerItems =
		"py-2 border-t-2 border-primaryAccent hover:bg-[#faf3dd] hover:underline hover:underline-offset-[6px] hover:decoration-2 hover:tracking-widest";

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	};

	const handleLargeWindow = () => {
		const windowSize = window.innerWidth;
		if (windowSize >= 1024) {
			setMenuOpen(false);
		}
	};

	useActiveLink();

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (
				navbar.current &&
				hamburgerMenu.current &&
				menuOpen &&
				!navbar.current.contains(e.target) &&
				!hamburgerMenu.current.contains(e.target)
			) {
				setMenuOpen(false);
			}
		};

		window.addEventListener("mousedown", handleOutsideClick);

		return () => {
			window.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [menuOpen]);

	useEffect(() => {
		window.addEventListener("resize", handleLargeWindow);

		return () => {
			window.removeEventListener("resize", handleLargeWindow);
		};
	}, []);

	return (
		<>
			<nav className={scrollPosition > 0 ? `${glassmorphism}` : ""} ref={navbar}>
				<div>
					<a href="#hero" onClick={closeMenu}>
						<img
							className="h-8 w-auto rounded-lg"
							src={PortfolioIcon}
							alt="Portfolio Icon"
							title="Portfolio Icon"
						/>
					</a>
				</div>
				<div className="lg:hidden flex">
					<button
						className={`hamburger hamburger--spin ${menuOpen ? "is-active" : ""}`}
						type="button"
						onClick={handleMenuClick}
					>
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</button>
				</div>
				<div id="hamburgerMenu" className={`font-lexend ${menuOpen ? "" : "hidden"}`} ref={hamburgerMenu}>
					<ul className={`border-2 border-black bg-mainBg rounded-xl text-center`}>
						<li className="py-5 grid grid-cols-5 place-items-center">
							<div className="col-span-3 flex">
								<div
									id="rotating"
									className="h-[15px] leading-[15px] text-[11px] sm:h-[21px] sm:leading-[21px] sm:text-[16px] md:h-[25px] md:leading-[25px] md:text-[20px] tracking-widest overflow-hidden"
								>
									<span className="relative animate-rotatingXS sm:animate-rotatingSM md:animate-rotatingMD">
										{`Hi I'm Shaun Ragasa!`}
										<br />
										A Full-Stack Developer,
										<br />
										a Front-End Developer,
										<br />& a Back-End Developer.
										{/* <br />
										& a Software Engineer! */}
									</span>
								</div>
							</div>
							<div className="col-span-2 items-center justify-evenly space-x-1 sm:space-x-3">
								<a
									href="https://www.linkedin.com/in/shaunragasa/"
									target="_blank"
									rel="noopener noreferrer"
									alt="LinkedIn"
									title="LinkedIn"
								>
									<i className={`bx bxl-linkedin ${hamburgerIcons}`}></i>
								</a>
								<a
									href="https://gitlab.com/sragasadev"
									target="_blank"
									rel="noopener noreferrer"
									alt="Gitlab"
									title="Gitlab"
								>
									<i className={`bx bxl-gitlab ${hamburgerIcons}`}></i>
								</a>
								<a
									href="https://drive.google.com/file/d/1PjY6bqQEBeuHqvUC4zZAjB1nhtxbTqUs/view?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									alt="Resume"
									title="Resume"
								>
									<i className={`bx bx-receipt ${hamburgerIcons}`}></i>
								</a>
							</div>
						</li>
						<li className={hamburgerItems}>
							<a href="#hero" onClick={closeMenu}>
								HOME
							</a>
						</li>
						<li className={hamburgerItems}>
							<a href="#aboutme" onClick={closeMenu}>
								ABOUT ME
							</a>
						</li>
						<li className={hamburgerItems}>
							<a href="#experience" onClick={closeMenu}>
								EXPERIENCE
							</a>
						</li>
						<li className={hamburgerItems}>
							<a href="#skills" onClick={closeMenu}>
								SKILLS
							</a>
						</li>
						<li className={hamburgerItems}>
							<a href="#recommendations" onClick={closeMenu}>
								RECOMMENDATIONS
							</a>
						</li>
						<li className={`${hamburgerItems} rounded-b-xl`}>
							<a href="#contactme" onClick={closeMenu}>
								CONTACT ME
							</a>
						</li>
					</ul>
				</div>
				<div
					id="expandedNav"
					className="hidden lg:flex justify-center gap-4 xl:gap-6 font-lexend text-[0.475rem] xl:text-[0.525rem] 2xl:text-[0.65rem] text-center"
				>
					<a href="#hero" className={`nav-item ${navActive}`}>
						HOME
					</a>
					<a href="#aboutme" className={`nav-item ${navActive}`}>
						ABOUT ME
					</a>
					<a href="#experience" className={`nav-item ${navActive}`}>
						EXPERIENCE
					</a>
					<a href="#skills" className={`nav-item ${navActive}`}>
						SKILLS
					</a>
					<a href="#recommendations" className={`nav-item ${navActive}`}>
						RECOMMENDATIONS
					</a>
					<a href="#contactme" className={`nav-item ${navActive}`}>
						CONTACT ME
					</a>
				</div>
				<div className="hidden lg:flex items-center justify-evenly space-x-2 logoHover">
					<a
						href="https://www.linkedin.com/in/shaunragasa/"
						target="_blank"
						rel="noopener noreferrer"
						alt="LinkedIn"
						title="LinkedIn"
					>
						<i className={`bx bxl-linkedin ${expandedIcons}`}></i>
					</a>
					<a
						href="https://gitlab.com/sragasadev"
						target="_blank"
						rel="noopener noreferrer"
						alt="Gitlab"
						title="Gitlab"
					>
						<i className={`bx bxl-gitlab ${expandedIcons}`}></i>
					</a>
					<a
						href="https://drive.google.com/file/d/1PjY6bqQEBeuHqvUC4zZAjB1nhtxbTqUs/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						alt="Resume"
						title="Resume"
					>
						<i className={`bx bx-receipt ${expandedIcons}`}></i>
					</a>
				</div>
			</nav>
			<div className={`${menuOpen ? "fixed h-screen w-screen top-0 left-0 z-10 backdrop-blur-md" : ""}`}></div>
		</>
	);
}

export default Nav;
