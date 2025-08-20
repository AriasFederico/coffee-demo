import './Hero.scss';
import { global } from '../../data/global';
import { Button } from '../components/common/button/Button';
const { hero } = global;
const { title, span, endTitle, description, ctaButton, image } = hero;

export const Hero = () => {
	return (
		<main className='Hero' >
			<div className='Hero__container'>
				<div className='Hero__content'>
					<h1 className='Hero__h1'>
						{title} <span className='Hero__span'>{span}</span> {endTitle}
					</h1>
					<p className='Hero__description'>{description}</p>
					<div className='Hero__ctaButtons-container'>
						{ctaButton?.map(({ text, url, variant }) => (
							<Button text={text} url={url} variant={variant} key={text} />
						))}
					</div>
				</div>
				<div className='Hero__media'>
					<img src={image} alt={title} className='Hero__image' />
				</div>
			</div>
		</main>
	);
};
