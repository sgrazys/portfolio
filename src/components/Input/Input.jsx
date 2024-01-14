import './Input.css';
import { MdErrorOutline } from 'react-icons/md';

function Input({ onChange, value, type, name, placeholder, errMsg, showErr }) {
	return (
		<div className='input-row'>
			<input
				style={showErr ? { borderBottom: 'solid 1px #ff6f5b' } : null}
				onChange={onChange}
				value={value}
				type={type}
				name={name}
				placeholder={placeholder}
			/>
			{showErr && (
				<>
					<MdErrorOutline className='errIcon' />
					<p className='err-msg'>{errMsg}</p>
				</>
			)}
		</div>
	);
}

export default Input;

/*
	<div className='input-row'>
					<input
						onChange={(e) => setName(e.target.value)}
						value={name}
						type='text'
						name='name'
						placeholder='Name'
					/>

					<MdErrorOutline className='errIcon' />

					<p className='err-msg'>Field can not be empty.</p>
				</div>

        	<div className='input-row'>
					<input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type='email'
						name='email'
						placeholder='Email'
						style={{ borderBottom: 'solid 1px #ff6f5b' }}
					/>

					<MdErrorOutline className='errIcon' />

					<p className='err-msg'>Field can not be empty.</p>
					
				</div>


*/
