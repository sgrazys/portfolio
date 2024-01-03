function Header() {
	return (
		<header className='header'>
			<div className='navigation'>
				<div className='logo'>sauliusgrazys</div>
				<ul className='icons'>
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
				</ul>
				<div className='mobile-profile-img'></div>
			</div>

			<div className='header-content-bin'>
				<div className='header-content'>
					<h1 className='heading-xl'>
						Nice to meet you! I'm <span>Saulius Grazys</span>
					</h1>
					<p className='body'>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
					<button className='btn'>CONTACT</button>
				</div>

				<div className='profile-img'></div>
			</div>
		</header>
	);
}

export default Header;
