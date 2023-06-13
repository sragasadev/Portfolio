import "../App.css";
import "./css/hero.css";

function Hero() {
	return (
		<section id="hero" className="pt-60 bg-[#FAF3DD] font-lexend border-2 border-red-400">
			<h2 className="portfolioComponent tracking-wider text-md">
				Hey there <span className="wave">👋</span> My name is Shaun!
			</h2>
			<div id="typewriter" className="portfolioComponent ">
				<h1 className="static-text text-3xl">I'm a </h1>
				<h1 className="dynamic-text text-3xl">software engineer.</h1>
			</div>
		</section>
	);
}

export default Hero;
