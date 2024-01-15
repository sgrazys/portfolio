import './Form.css';

import { Rings } from '../GraphicElements';
import { useEffect, useState } from 'react';
import Input from '../Input/Input';

function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [textAreaMsg, setTextAreaMsg] = useState('');

	const [emailErrMsg, setEmailErrMsg] = useState('');

	const [showNameErr, setShowNameErr] = useState(false);
	const [showEmailErr, setShowEmailErr] = useState(false);

	const [isValidInput, setIsValidInputs] = useState(false);

	const invalidSymbols = [' ', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '\\', '?', '/'];

	function handleSubmit(e) {
		e.preventDefault();

		const isNotAllowedSymbol = email.split('').some((char) => invalidSymbols.includes(char));

		const domain = email.slice(email.indexOf('@'));

		if (name.trim().length === 0) setShowNameErr(true);

		if (!email.trim()) {
			setShowEmailErr(true);
			setEmailErrMsg('Field can not be empty');
		} else if (isNotAllowedSymbol || !email.includes('@') || !domain.includes('.')) {
			setEmailErrMsg('Sorry, invalid format here');
			setShowEmailErr(true);
		}

		if (isValidInput) {
			// MESSING
			const myForm = e.target;
			const formData = new FormData(myForm);

			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData).toString(),
			})
				.then(alert('all good'))
				.catch((error) => alert(error));
			// MESSING
		}

		setName('');
		setEmail('');
		setTextAreaMsg('');
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
				name='form-name'
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
				<Input
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
				<button
					type='submit'
					className='btn'>
					Send message
				</button>
			</div>
			<div className='rings-container'>
				<Rings />
			</div>
		</form>
	);
}

export default Form;
