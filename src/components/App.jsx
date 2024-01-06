import myData from '../myData';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';
import Ring from './Rings';
import { Circle } from './Patterns';

const { socialMedia } = myData;
const socialmediaData = socialMedia.map((el) => ({ ...el, id: uuidv4() }));

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<Ring />
				<Circle />
				<Header
					socialmediaList={socialmediaData}
					fullName={'Saulius Grazys'}
				/>
			</header>
			<main></main>
		</div>
	);
}

export default App;
