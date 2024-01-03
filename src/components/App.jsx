import myData from '../myData';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';

const { socialMedia } = myData;
const socialmediaData = socialMedia.map((el) => ({ ...el, id: uuidv4() }));

function App() {
	return (
		<div className='App'>
			<Header socialmediaList={socialmediaData} />
		</div>
	);
}

export default App;
