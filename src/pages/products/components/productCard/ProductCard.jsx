import './ProductCard.scss';
export const ProductCard = ({ name, description, image, price }) => {
	return (
		<div className='ProductCard' >
			<div className='ProductCard__container'>
				<div className='ProductCard__media'>
					<img src={image} alt={name} className='ProductCard__image' />
				</div>

				<div className='ProductCard__content'>
					<h3 className='ProductCard__h3'>{name}</h3>
					<p className='ProductCard__p'>{description}</p>
					<span className='ProductCard__price'>{price}</span>
				</div>
			</div>
		</div>
	);
};
