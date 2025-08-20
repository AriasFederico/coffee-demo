import './App.scss';
import { Header } from './pages/components/header/Header';
import { Hero } from './pages/hero/Hero';
import { Products } from './pages/products/Products';
import { About } from './pages/about/About';
function App() {
	return (
		<div className='App'>
			<Header />
			<div>
				<Hero />
				<Products />
				<About />
			</div>
		</div>
	);
}

export default App;
