import './Card.css';
import Button from '../Button/Button';

function Card({ title, img, siteURL, codeURL, children }) {
	return (
		<li className='card'>
			<div className='image'>
				<img
					className='card__img'
					src={process.env.PUBLIC_URL + `assets/images/thumbnail-${img}.png`}
					alt=''
				/>

				<div className='image-overlay'>
					<Button url={siteURL}>View project</Button>
					<Button url={codeURL}>View codde</Button>
				</div>
			</div>

			<h3 className='card__title'>{title}</h3>
			<div className='card__tools'>{children}</div>

			<div className='card__buttons'>
				<Button url={siteURL}>View project</Button>
				<Button url={codeURL}>View codde</Button>
			</div>
		</li>
	);
}

export default Card;
