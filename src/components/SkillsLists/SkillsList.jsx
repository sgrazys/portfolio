import './SkillsList.css';

import Skill from '../Skill/Skill';

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
		</section>
	);
}

export default SkillsList;
