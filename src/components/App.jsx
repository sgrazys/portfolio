import myData from '../myData';
import '../index.css';
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
					intro={`Based in Vilnius, Lithuania, I am dedicated to becoming a professional front-end developer, seeking an entry-level position to start my journey in web development. I enjoy creating visually captivating, user-friendly, and modern digital experiences. I am adaptable and full of enthusiasm continuous learner, aiming to grow in the dynamic world of front-end development.`}
				/>
			</header>

			<main>
				<SkillsList skillArr={skills} />
				<div className='rings-container'>
					<Rings />
				</div>
				<Projects />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
