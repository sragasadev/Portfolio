import heroPic from "../assets/hero-picture.png";
import "../App.css";

function Hero() {
	return (
		<section
			id="hero"
			className="h-[100vh] max-h-[700px] pt-28 pb-8 sm:px-20"
		>
			<div className="portfolioComponent grid grid-cols-1 lg:grid-cols-2">
				<div className="py-4 flex flex-col items-center lg:items-start">
					<h2 className="tracking-wider">
						Hey there <span className="animate-handWave origin-[70%_70%] inline-block">👋</span> My name is
						Shaun!
					</h2>
					<div className="mt-2 py-2">
						<h1 className="text-4xl">I'm a </h1>
						<span className="text-3xl"></span>
					</div>
					<p className="mt-auto tracking-wide text-justify [text-align-last:center] lg:[text-align-last:justify]">
						I am a full-stack software engineer with a drive for life-long learning and improving my skill
						set. I have experience developing several full-stack applications in an Agile environment.
					</p>
				</div>
				<img
					className="h-72 w-auto pt-6 2xl:pl-20 place-self-center lg:place-self-end 2xl:place-self-center "
					src={heroPic}
					alt="Shaun Ragasa Picture"
					title="Shaun Ragasa Picture"
				/>
			</div>
		</section>
	);
}

export default Hero;
