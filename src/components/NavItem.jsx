function NavItem({ socialMedia }) {
	return (
		<li className='icon'>
			<a
				href={socialMedia.url}
				target='_blank'
				rel='noreferrer'>
				<img
					src={process.env.PUBLIC_URL + socialMedia.icon}
					alt=''
				/>
			</a>
		</li>
	);
}

export default NavItem;
