import NavItem from './NavItem';

function NavList({ socialmediaList }) {
	return (
		<ul className='icons'>
			{socialmediaList.map((socialMedia) => (
				<NavItem
					key={socialMedia.name}
					socialMedia={socialMedia}
				/>
			))}
		</ul>
	);
}

export default NavList;
