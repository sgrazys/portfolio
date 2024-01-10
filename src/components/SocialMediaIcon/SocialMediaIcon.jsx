import './SocialMediaIcon.css';

function SocialMediaIcon({ linkURL, coords, icon, width, height }) {
	return (
		<a
			className='icon-link'
			href={linkURL}
			target='_blank'
			rel='noreferrer'>
			<svg
				className='icon'
				xmlns='http://www.w3.org/2000/svg'
				viewBox={coords}
				width={width}
				height={height}>
				<path
					fill='#FFF'
					fillRule='evenodd'
					d={icon}
				/>
			</svg>
		</a>
	);
}

export default SocialMediaIcon;
