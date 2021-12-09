import { Carousel, Footer, Header, Tabs } from './components';
import './assets/styles/app.scss';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<main>
				<section className='categories-section'>
					<div className='section-head'>
						<h1>
							Unlimited access to 100+ instructors<span className='green-dot'>.</span>
						</h1>
					</div>
					<Tabs />
				</section>
				<section className='customer-section'>
					<div className='section-head'>
						<h1>
							What our customers say<span className='green-dot'>.</span>
						</h1>
					</div>
					<Carousel />
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default App;
