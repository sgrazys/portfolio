import Button from './Button';
import NavItem from './NavItem';
import Logo from './Logo';

function Header({ socialmediaList, fullName }) {
	return (
		<>
			<div className='navigation'>
				<Logo />
				<ul className='icons'>
					{socialmediaList.map((socialMedia) => (
						<NavItem
							key={socialMedia.name}
							socialMedia={socialMedia}
						/>
					))}
				</ul>
			</div>

			<div className='header-content-bin'>
				<div className='mobile-profile-img'></div>
				<div className='header-content'>
					<h1 className='main-heading'>
						Nice to meet you! I'm <span> {fullName}</span>.
					</h1>
					<p className='header-body'>
						Based in Vilnius, Lithuania. Passionate and dedicated Front-end developer seeking an entry-level position to embark on a journey in web development. I am
						drive to create visually captivating, user-friendly and modern digital experiences. I bring a blend of enthusiasm, adaptability, and a continuous hunger to
						learn and grow in the dynamic world of Front-end development.
					</p>
					<Button>Contact me</Button>
				</div>

				<div className='profile-img'></div>
			</div>
		</>
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
