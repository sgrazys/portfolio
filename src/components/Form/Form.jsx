import './Form.css';
import Button from '../Button/Button';
import { Rings } from '../GraphicElements';

function Form() {
	return (
		<form className='form'>
			<div className='form__heading'>
				<h2 className='form__title'>Contact me</h2>
				<p className='form__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sitconsequatur at dolorum laudantium? Eligendi .</p>
			</div>

			<div className='form__body'>
				<input
					type='text'
					name='name'
					placeholder='Name'
				/>
				<input
					type='email'
					name='email'
					placeholder='Email'
				/>

				<textarea
					placeholder='Message'
					cols='20'
					rows='4'></textarea>

				<Button>Send Message</Button>
			</div>
			<div className='rings-container'>
				<Rings />
			</div>
		</form>
	);
}

export default Form;
