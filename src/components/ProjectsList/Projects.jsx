import './Projects.css';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Tool from '../Tool/Tool';

function Projects() {
	return (
		<section className='projects'>
			<div className='projects__header'>
				<h2 className='header__title'>Projects</h2>
				<Button url={'#form'}>Contact me</Button>
			</div>
			<ul className='project-list'>
				<Card
					siteURL='https://sauliusgrazys.netlify.app'
					codeURL='https://github.com/sgrazys/portfolio'
					title={'Personal website'}
					img={'1'}>
					<Tool toolName={'html'} />
					<Tool toolName={'css'} />
					<Tool toolName={'react'} />
				</Card>
				<Card
					siteURL='https://sgrazys-sign-up-intro-component.netlify.app/'
					codeURL='https://github.com/sgrazys/intro-component-with-signup'
					title={'Component with sign-up'}
					img={'2'}>
					<Tool toolName={'html'} />
					<Tool toolName={'css'} />
					<Tool toolName={'react'} />
				</Card>

				<Card
					siteURL='https://saulius-grazys-rating-component.netlify.app/'
					codeURL='https://github.com/sgrazys/interactive-rating-component'
					title={'Interactive rating component'}
					img={'3'}>
					<Tool toolName={'html'} />
					<Tool toolName={'css'} />
					<Tool toolName={'react'} />
				</Card>

				<Card
					siteURL='https://sgrazys-ping-landing.netlify.app/'
					codeURL='https://github.com/sgrazys/13_ping-coming-soon'
					title={'Single column coming soon page'}
					img={'4'}>
					<Tool toolName={'html'} />
					<Tool toolName={'css'} />
					<Tool toolName={'react'} />
				</Card>

				<Card
					siteURL='https://saul-meet-landing-page.netlify.app/'
					codeURL='https://github.com/sgrazys/12_meet-landing-page'
					title={'Meet landing page'}
					img={'6'}>
					<Tool toolName={'html'} />
					<Tool toolName={'css'} />
				</Card>

				<Card
					siteURL='https://sgrazys.github.io/10_testimonials-grid-section-main/'
					codeURL='https://github.com/sgrazys/10_testimonials-grid-section-main'
					title={'Testimonials grid section'}
					img={'5'}>
					<Tool toolName={'html'} />
					<Tool toolName={'css'} />
				</Card>
			</ul>
		</section>
	);
}

export default Projects;
