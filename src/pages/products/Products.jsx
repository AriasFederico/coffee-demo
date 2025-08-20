import './Products.scss';
import { global } from '../../data/global';
import { productsList } from '../../data/products';
import { ProductCard } from './components/ProductCard.jsx/ProductCard';

const { products } = global;
const { title, description } = products;
export const Products = () => {
	return (
		<section className='Products'>
			<div className='Products__container'>
				<div className='Products__sectionTitle'>
					<h2 className='Products__h2'>{title}</h2>
					<p className='Products__p'>{description}</p>
				</div>
				<div className='Products__content'>
					{productsList?.map(({ image, name, description, price }) => (
						<ProductCard
							name={name}
							image={image}
							description={description}
							price={price}
							key={name}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
