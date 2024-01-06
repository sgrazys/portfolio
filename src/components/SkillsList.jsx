import Skill from './Skill';

function SkillsList({ skillArr }) {
	return (
		<ul className='skills'>
			{skillArr.map((skill) => (
				<Skill
					key={skill.title}
					skill={skill}
				/>
			))}
		</ul>
	);
}

export default SkillsList;
