import './Projects.css';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Tool from '../Tool/Tool';

function Projects() {
	return (
		<section className='projects'>
			<div className='projects__header'>
				<h2 className='header__title'>Projects</h2>
				<Button>Contact me</Button>
			</div>
			<ul className='project-list'>
				<Card title={'Saulius'}>
					<Tool toolName={'html'} />
					<Tool toolName={'css'} />
				</Card>

				<Card title={'Grazys'}>
					<Tool toolName={'JavaScript'} />
				</Card>
			</ul>
		</section>
	);
}

export default Projects;
