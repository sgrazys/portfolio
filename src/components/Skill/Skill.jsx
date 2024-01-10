import './Skill.css';

function Skill({ skill }) {
	return (
		<li className='skill'>
			<p className='skill-title'>{skill.title}</p>
			<p className='skill-experience'>{skill.level}</p>
		</li>
	);
}

export default Skill;
