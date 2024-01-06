import myData from '../myData';
import CirclePattern from './CirclePattern';
import Header from './Header';
import RingPattern from './RingPattern';

import SkillsList from './SkillsList';

const { socialMedia, skills } = myData;

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<RingPattern />
				<CirclePattern />

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
