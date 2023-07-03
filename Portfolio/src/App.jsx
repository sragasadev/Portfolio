import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Recommendations from "./components/Recommendations";
import ContactMe from "./components/ContactMe";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as UpArrowLight } from "./assets/up-arrow.svg";
import "./App.css";

function App() {
	// ADD DARK MODE SCROLL UP SVG
	// USE NPM REACT-TYPING FOR HERO PAGE
	return (
		<>
			<Nav />
			<Hero />
			<AboutMe />
			<Experience />
			<Skills />
			<Recommendations />
			<ContactMe />
			<div className="">
				<ScrollToTop smooth component={<UpArrowLight />} title="Scroll back to top" />
			</div>
		</>
	);
}

export default App;
