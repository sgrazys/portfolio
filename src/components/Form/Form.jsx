import './Form.css';

import { Rings } from '../GraphicElements';
import { useEffect, useState } from 'react';
// import Input from '../Input/Input';

function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	// const [textAreaMsg, setTextAreaMsg] = useState('');

	// const [emailErrMsg, setEmailErrMsg] = useState('');

	const [showNameErr, setShowNameErr] = useState(false);
	const [showEmailErr, setShowEmailErr] = useState(false);

	const invalidSymbols = [' ', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '\\', '?', '/'];

	function handleSubmit(e) {
		e.preventDefault();

		const isNotAllowedSymbol = email.split('').some((char) => invalidSymbols.includes(char));

		const domain = email.slice(email.indexOf('@'));

		if (name.trim().length === 0) setShowNameErr(true);
		if (!email) {
			setShowEmailErr(true);
			// setEmailErrMsg('Field can not be empty');
		}

		if ((email && isNotAllowedSymbol) || (email && !email.includes('@')) || (email && !domain.includes('.'))) {
			// setEmailErrMsg('Sorry, invalid format here');
			setShowEmailErr(true);
		}

		setName('');
		setEmail('');
		// setTextAreaMsg('');
	}

	useEffect(() => {
		if (name && showNameErr) setShowNameErr(false);
		if (email && showEmailErr) setShowEmailErr(false);
	}, [name, showNameErr, email, showEmailErr]);

	return (
		<form
			name='contact'
			method='post'
			id='form'
			className='form'
			onSubmit={handleSubmit}>
			<input
				type='hidden'
				name='my-site-contact-form'
				value='contact'
			/>
			<div className='form__heading'>
				<h2 className='form__title'>Contact me</h2>
				<p className='form__description'>
					To accelerate my journey in front-end development, I am open to internships, collaboration on web projects and front-end-related tasks. If you need assistance,
					I am glad to help. So let's talk!
				</p>
			</div>

			<div className='form__body'>
				{/* TESTING PURPOSE START */}
				<form
					name='contact'
					method='post'>
					<input
						type='hidden'
						name='form-name'
						value='contact'
					/>
					<p>
						<label>
							Your Name:{' '}
							<input
								type='text'
								name='name'
							/>
						</label>
					</p>
					<p>
						<label>
							Your Email:{' '}
							<input
								type='email'
								name='email'
							/>
						</label>
					</p>
					<p>
						<label>
							Message: <textarea name='message'></textarea>
						</label>
					</p>
					<p>
						<button type='submit'>Send</button>
					</p>
				</form>

				{/* TESTING PURPOSE END */}

				{/* <Input
					onChange={(e) => setName(e.target.value)}
					value={name}
					type={'text'}
					name={'name'}
					placeholder={'name'}
					errMsg={'Field can not be empty'}
					showErr={showNameErr}
				/>
				<Input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type={'text'}
					name={'email'}
					placeholder={'email'}
					showErr={showEmailErr}
					errMsg={emailErrMsg}
				/>

				<textarea
					onChange={(e) => setTextAreaMsg(e.target.value)}
					value={textAreaMsg}
					placeholder='Message'
					cols='20'
					rows='4'
					name='message'></textarea>

				<button type='submit'>Send</button> */}
			</div>
			<div className='rings-container'>
				<Rings />
			</div>
		</form>
	);
}

export default Form;
