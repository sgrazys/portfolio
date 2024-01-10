import './Button.css';

function Button({ children, url }) {
	return (
		<a
			className='btn'
			role='button'
			href={url}>
			{children}
		</a>
	);
}

export default Button;
