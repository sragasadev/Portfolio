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
	];

	return (
		<section className="text-center w-full flex flex-col justify-center border-2 border-primaryAccent">
			<h1>SKILLS</h1>
			<h1>🚧 CURRENTLY IN DEVELOPMENT 🚧</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, cum quas dolore, eos harum quibusdam
				reprehenderit eaque ducimus, sit error tenetur cupiditate veritatis illo illum accusantium beatae eum
				rem fugit.
			</p>
			<div className="flex">
				{skills.map((skill, index) => (
					<div className="" key={index}>
						<h1>{skill.skill}</h1>
						<img className="h-2 w-2" src={skill.picture} alt={skill.skill} />
						<h3>{skill.description}</h3>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skills;
