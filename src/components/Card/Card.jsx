import './Card.css';
import Button from '../Button/Button';

function Card({ title, children }) {
	return (
		<li className='card'>
			{/* <div className='card-layer__buttons'>
				<Button>View project</Button>
				<Button>View codde</Button>
			</div> */}

			<div className='image'>
				<img
					className='card__img'
					src={process.env.PUBLIC_URL + 'assets/images/thumbnail-project-1-small.webp'}
					alt=''
				/>

				<div className='image-overlay'>
					<Button>View project</Button>
					<Button>View codde</Button>
				</div>
			</div>

			<h3 className='card__title'>{title}</h3>
			<div className='card__tools'>{children}</div>

			<div className='card__buttons'>
				<Button>View project</Button>
				<Button>View codde</Button>
			</div>
		</li>
	);
}

export default Card;
