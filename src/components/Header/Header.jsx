import './Header.css';
import Button from '../Button/Button';
import HeaderTop from '../HeaderTop/HeaderTop';

function Header({ fullName, intro }) {
	return (
		<>
			<HeaderTop />

			<div className='header-container'>
				<div className='profile-img'></div>
				<div className='header-container__content'>
					<h1 className='header-heading'>
						Nice to meet you! I'm <span className='underline'> {fullName}.</span>
					</h1>
					<p className='header-body'>{intro}</p>
					<Button url={'#form'}>Contact me</Button>
				</div>
			</div>
		</>
	);
}

export default Header;
