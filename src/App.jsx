import { useEffect } from 'react';
import './App.scss';
import { Header } from './pages/components/header/Header';
import { Hero } from './pages/hero/Hero';
import { Products } from './pages/products/Products';
import { About } from './pages/about/About';
import { Footer } from './pages/components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<div className='App'>
			<Header />
			<div>
				<Hero />
				<Products />
				<About />
			</div>
			<Footer />
		</div>
	);
}

export default App;
