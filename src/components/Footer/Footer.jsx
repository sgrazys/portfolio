import './Footer.css';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon';
import { frontEndMentor, gitHub, linkedIn } from '../../icons';

function Footer() {
	return (
		<>
			<Form />
			<div className='footer__content'>
				<Logo />
				<div className='icons-list'>
					<SocialMediaIcon
						linkURL={'https://github.com/sgrazys'}
						width={25}
						height={24}
						coords={'0 0 25 24'}
						icon={gitHub}
					/>
					<SocialMediaIcon
						linkURL={'https://www.linkedin.com/in/saulius-grazys/'}
						width={25}
						height={24}
						coords={'0 0 25 24'}
						icon={linkedIn}
					/>
					<SocialMediaIcon
						linkURL={'https://www.frontendmentor.io/profile/sgrazys'}
						width={26}
						height={23}
						coords={'0 0 26 23'}
						icon={frontEndMentor}
					/>
				</div>
			</div>
		</>
	);
}

export default Footer;
