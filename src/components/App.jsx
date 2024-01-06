import myData from '../myData';
import Header from './Header';

import Ring from './Rings';
import { Circle } from './Patterns';
import SkillsList from './SkillsList';

const { socialMedia, skills } = myData;

function App() {
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
