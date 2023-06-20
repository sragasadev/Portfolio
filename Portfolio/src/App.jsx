import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Recommendations from "./components/Recommendations";
import ContactMe from "./components/ContactMe";
import "./App.css";

function App() {
	return (
		<>
			<Nav />
			<Hero />
			<AboutMe />
			<Experience />
			<Skills />
			<Recommendations />
			<ContactMe />
		</>
	);
}

export default App;
