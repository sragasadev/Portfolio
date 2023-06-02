import useScrollPosition from "./hooks/useScrollPosition";
import PortfolioIcon from "../assets/portfolio_icon.png";
import "../components/css/nav.css";

function Nav() {
	const scrollPosition = useScrollPosition();

	const glassmorphism =
		"bg-[rgba(255,255,255,0.12)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm";

	const logoClasses =
		"w-8 h-8 relative text-xl text-[#8FC0A9] rounded-full inline-flex justify-center items-center bg-transparent border-2 border-[#8FC0A9] overflow-hidden";

	const navHover =
		"hover:underline hover:underline-offset-8 hover:decoration-[3px] hover:decoration-[#8FC0A9] [&.active]:underline [&.active]:underline-offset-8 [&.active]:decoration-[3px] [&.active]:decoration-[#4A7C59] [&.active]:text-[#8FC0A9]";

	return (
		<>
			<nav className={scrollPosition > 0 ? `${glassmorphism}` : ""}>
				<div>
					<img className="h-10 w-auto rounded-lg" src={PortfolioIcon} alt="Portfolio Icon" />
				</div>
				<div className="mx-12 flex items-center justify-center gap-8 font-lexend text-[0.65rem]">
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
				<div className="flex items-center justify-evenly gap-2 logoHover">
					<a
						href="https://www.linkedin.com/in/shaunragasa/"
						target="_blank"
						rel="noopener noreferrer"
						alt="LinkedIn"
					>
						<i className={`bx bxl-linkedin ${logoClasses}`}></i>
					</a>
					<a href="https://gitlab.com/sragasa97" target="_blank" rel="noopener noreferrer" alt="Gitlab">
						<i className={`bx bxl-gitlab ${logoClasses}`}></i>
					</a>
					<a
						href="https://drive.google.com/file/d/1PjY6bqQEBeuHqvUC4zZAjB1nhtxbTqUs/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						alt="Resume"
					>
						<i className={`bx bx-receipt ${logoClasses}`}></i>
					</a>
				</div>
			</nav>
		</>
	);
}

export default Nav;
