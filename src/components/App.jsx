import myData from '../myData';

import Footer from './Footer/Footer';
import { Circle, Rings } from './GraphicElements';
import Header from './Header/Header';
import Projects from './ProjectsList/Projects';
import SkillsList from './SkillsLists/SkillsList';

const { socialMedia, skills } = myData;

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<div className='rings-container'>
					<Rings />
				</div>
				<div className='circle-container'>
					<Circle />
				</div>

				<Header
					socialmediaList={socialMedia}
					fullName={'Saulius Grazys'}
					intro={`Based in Vilnius, Lithuania. Passionate and dedicated Front-end developer seeking an entry-level position to embark on a journey in web development. I am
						drive to create visually captivating, user-friendly and modern digital experiences. I bring a blend of enthusiasm, adaptability, and a continuous hunger to
						learn and grow in the dynamic world of Front-end development.`}
				/>
			</header>
			<main>
				<SkillsList skillArr={skills} />
				<Projects />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
