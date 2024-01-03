import Button from './Button';
import NavItem from './NavItem';
import Logo from './Logo';

function Header({ socialmediaList }) {
	console.log(socialmediaList);
	return (
		<header className='header'>
			<div className='navigation'>
				<Logo />
				<ul className='icons'>
					{socialmediaList.map((socialMedia) => (
						<NavItem
							key={socialMedia.id}
							socialMedia={socialMedia}
						/>
					))}
				</ul>
				<div className='mobile-profile-img'></div>
			</div>

			<div className='header-content-bin'>
				<div className='header-content'>
					<h1 className='main-heading'>
						Nice to meet you! I'm <span>Saulius Grazys</span>.
					</h1>
					<p className='header-body'>
						Based in Vilnius, Lithuania, I'm eager to become a professional front-end developer passionate about building accessible and modern web apps that users
						love.
					</p>
					<Button>Contact me</Button>
				</div>

				<div className='profile-img'></div>
			</div>
		</header>
	);
}

export default Header;

/* 
<li className='icon'>
						<a
							href='https://github.com/sgrazys'
							target='_blank'
							rel='noreferrer'>
							<img
								src={process.env.PUBLIC_URL + '/assets/images/icon-github.svg'}
								alt=''
							/>
						</a>
					</li>
					<li className='icon'>
						<a
							href='https://www.frontendmentor.io/profile/sgrazys'
							target='_blank'
							rel='noreferrer'>
							<img
								src={process.env.PUBLIC_URL + '/assets/images/icon-frontend-mentor.svg'}
								alt=''
							/>
						</a>
					</li>
					<li className='icon'>
						<a
							href='https://www.linkedin.com/in/saulius-grazys/'
							target='_blank'
							rel='noreferrer'>
							<img
								src={process.env.PUBLIC_URL + '/assets/images/icon-linkedin.svg'}
								alt=''
							/>
						</a>
					</li>
*/
