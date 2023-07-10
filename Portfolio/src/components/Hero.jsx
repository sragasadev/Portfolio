import "../App.css";
import "./css/hero.css";
import heroPic from "../assets/hero_picture.png";

function Hero() {
	const typewritingScript = () => {
		const text = document.querySelector(".dynamic-text");

		const textLoad = () => {
			setTimeout(() => {
				text.textContent = "software engineer.";
			}, 0);
			setTimeout(() => {
				text.textContent = "front-end developer.";
			}, 4000);
			setTimeout(() => {
				text.textContent = "back-end developer.";
			}, 8000);
			setTimeout(() => {
				text.textContent = "full-stack developer.";
			}, 12000);

		}

		textLoad();
		setInterval(textLoad, 16000);
	};

	return (
		<section id="hero" className="pt-28 pb-8 sm:px-20 bg-[#FAF3DD] font-lexend border-b-2 border-red-400">
			<div className="portfolioComponent grid grid-cols-1 lg:grid-cols-2">
				<div className="flex flex-col py-4 items-center lg:items-start">
					<h2 className="tracking-wider text-md">
						Hey there <span className="wave">👋</span> My name is Shaun!
					</h2>
					<div id="typewriter" className="mt-2 py-1 overflow-hidden">
						<h1 className="static-text text-4xl">I'm a </h1>
						<span className="dynamic-text text-3xl"></span>
						<script>{typewritingScript}</script>
					</div>
					<p className="mt-auto tracking-wide text-md text-justify [text-align-last:center] lg:[text-align-last:justify]">
						I am a full-stack software engineer with a drive for life-long learning and improving my skill
						set. I have experience developing several full-stack applications in an Agile environment.
					</p>
				</div>
				<img
					className="h-72 w-auto pt-6 2xl:pl-20 place-self-center lg:place-self-end 2xl:place-self-center "
					src={heroPic}
					alt="Shaun Ragasa Hero Picture"
				/>
			</div>
		</section>
	);
}

export default Hero;
