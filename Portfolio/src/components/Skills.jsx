function Skills() {
	const skills = [
		{
			skill: "Python",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "JavaScript",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "TypeScript",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "React",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "Django",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "FastAPI",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "Docker",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "Git",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "HTML",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "CSS",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "Tailwind",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "Bootstrap",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "MongoDB",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "PostgreSQL",
			picture: "",
			link: "",
			description: "",
		},
		{
			skill: "Redux.js",
			picture: "",
			link: "",
			description: "",
		},
	];

	return (
		<section className="text-center w-full flex flex-col justify-center border-2 border-primaryAccent">
			<h1>SKILLS</h1>
			<h1>🚧 CURRENTLY IN DEVELOPMENT 🚧</h1>
			<div className="flex justify-around">
				{skills.map((skill, index) => (
					<div className="flex flex-col space-y-4" key={index}>
						<h1 className="text-center">{skill.skill}</h1>
						<img className="h-2 w-2 mx-auto" src={skill.picture} alt={skill.skill} />
						<h3 className="text-center">{skill.description}</h3>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skills;
