import myData from '../myData';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';
import Ring from './Rings';
import { Circle } from './Patterns';
import SkillsList from './SkillsList';

const { socialMedia, skills } = myData;

function App() {
	console.log(skills);
	return (
		<div className='App'>
			<header className='header'>
				<Ring />
				<Circle />
				<Header
					socialmediaList={socialMedia}
					fullName={'Saulius Grazys'}
				/>
			</header>
			<main>
				<SkillsList skillArr={skills} />
			</main>
		</div>
	);
}

export default App;
