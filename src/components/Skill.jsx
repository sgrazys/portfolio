function Skill({ skill }) {
	return (
		<li className='skill'>
			<h2 className='skill-title'>{skill.title}</h2>
			<p className='skill-experience'>{skill.level}</p>
		</li>
	);
}

export default Skill;
