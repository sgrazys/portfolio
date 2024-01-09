import Button from './Button';
import Card from './Card';
import Tool from './Tool';

function Projects() {
	return (
		<section className='projects'>
			<div className='projects__header'>
				<div className='header__title'>Projects</div>
				<Button>Contact me</Button>
			</div>
			<ul className='cards'>
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
