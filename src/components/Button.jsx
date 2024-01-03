function Button({ children }) {
	return (
		<a
			className='btn'
			role='button'
			href='https://www.google.com'>
			{children}
		</a>
	);
}

export default Button;
