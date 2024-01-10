import './SkillsList.css';
import { Rings } from '../GraphicElements';
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
			<div className='rings-container'>
				<Rings />
			</div>
		</section>
	);
}

export default SkillsList;
