import RingPattern from './RingPattern';
import Skill from './Skill';

function SkillsList({ skillArr }) {
	return (
		<section className='skills-container'>
			<ul className='skills'>
				{skillArr.map((skill) => (
					<Skill
						key={skill.title}
						skill={skill}
					/>
				))}
			</ul>
			<RingPattern />
		</section>
	);
}

export default SkillsList;
