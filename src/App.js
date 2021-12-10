import { Carousel, Footer, Header, Tabs } from './components';
import './assets/styles/app.scss';
import Person1 from './assets/images/person-1.jpg';
import Person2 from './assets/images/person-2.jpg';
import Person3 from './assets/images/person-3.jpg';
import Skills from './assets/images/skills.jpg';
import { useEffect, useState } from 'react';

const App = () => {
	const [activePassion, setActivePassion] = useState(1);

	useEffect(() => {
		const onMouseEnter = (e) => {
			setActivePassion(e.target.dataset.item);
		};

		const onMouseLeave = (e) => {
			setActivePassion(1);
		};

		document.querySelectorAll('.grid-item').forEach((item) => item.addEventListener('mouseenter', onMouseEnter));
		document.querySelectorAll('.grid-item').forEach((item) => item.addEventListener('mouseleave', onMouseLeave));

		return () => {
			document.querySelectorAll('.grid-item').forEach((item) => item.addEventListener('mouseenter'));
			document.querySelectorAll('.grid-item').forEach((item) => item.addEventListener('mouseleave'));
		};
	}, []);

	return (
		<div className='App'>
			<Header />
			<main>
				<section className='hero-section' id='passion'>
					<div className='container'>
						<div className='hero'>
							<div className='hero-title'>
								<h1>
									Watch.
									<br />
									Learn.
									<br />
									Grow.
								</h1>
							</div>
							<div className='custom-input'>
								<input type='text' placeholder='Find you passion' />
								<a href='#'>
									<span>Go</span>
								</a>
							</div>
							<div className='hero-grid'>
								<div
									className={activePassion === 1 ? 'grid-item grid-item-active' : 'grid-item'}
									data-item='1'>
									<div className='grid-item-gradient'></div>
									<div className='grid-item-image'>
										<img src={Person1} alt='' />
									</div>
									<div className='grid-item-info-active'>
										<h1>
											Writing
											<br />
											Course
										</h1>
										<h1>
											100<p>Topics</p>
										</h1>
									</div>
								</div>
								<div
									className={activePassion === 2 ? 'grid-item grid-item-active' : 'grid-item'}
									data-item='2'>
									<div className='grid-item-gradient'></div>
									<div className='grid-item-image'>
										<img src={Person2} alt='' />
									</div>
									<div className='grid-item-info'>
										<div className='box'></div>
										<h1>Writing</h1>
									</div>
									<div className='grid-item-info-active'>
										<h1>
											Writing
											<br />
											Course
										</h1>
										<h1>
											100<p>Topics</p>
										</h1>
									</div>
								</div>
								<div
									className={activePassion === 3 ? 'grid-item grid-item-active' : 'grid-item'}
									data-item='3'>
									<div className='grid-item-gradient'></div>
									<div className='grid-item-image'>
										<img src={Person3} alt='' />
									</div>
									<div className='grid-item-info'>
										<div className='box'></div>
										<h1>Business</h1>
									</div>
									<div className='grid-item-info-active'>
										<h1>
											Business
											<br />
											Course
										</h1>
										<h1>
											100<p>Topics</p>
										</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='categories-section' id='categories'>
					<div className='section-head'>
						<h1>
							Unlimited access to 100+ instructors<span className='green-dot'>.</span>
						</h1>
					</div>
					<Tabs />
				</section>
				<section className='skills-section' id='skills'>
					<div className='container'>
						<div className='skills'>
							<h1 className='skills-title'>
								Get the skills you
								<br />
								need for a job that
								<br />
								is in demand<span className='green-dot'>.</span>
							</h1>
							<div className='skills-content'>
								<div className='skills-list'>
									<div className='skill'>
										<div className='skill-icon'>
											<img
												src='https://img.icons8.com/windows/24/faa789/prize.png'
												alt='leadership'
											/>
										</div>
										<div className='skill-info'>
											<h3>Leadership</h3>
											<p>Fully committed to the success of the company</p>
										</div>
									</div>
									<div className='skill'>
										<div className='skill-icon'>
											<img
												src='https://img.icons8.com/windows/24/faa789/brain.png'
												alt='Responsibility'
											/>
										</div>
										<div className='skill-info'>
											<h3>Responsibility</h3>
											<p>Employees will always be my top priority</p>
										</div>
									</div>
									<div className='skill'>
										<div className='skill-icon'>
											<img
												src='https://img.icons8.com/material-outlined/24/faa789/lightning-bolt.png'
												alt='Flexibility'
											/>
										</div>
										<div className='skill-info'>
											<h3>Flexibility</h3>
											<p>The ability to switch is an important skill</p>
										</div>
									</div>
								</div>
								<div className='skills-video'>
									<div className='video'>
										<img src={Skills} alt='skills' />
									</div>
									<div className='numbers'>
										<div className='numbers-text'>
											<p>
												The modern labor market dictates its own terms. <br />
												Today, to be a competitive specialist requires more than professional
												skills.
											</p>
										</div>
										<div className='numbers-details'>
											<div className='numbers-details-item'>
												<h1>10</h1>
												<div>
													<span>years</span>
													<span>experience</span>
												</div>
											</div>
											<div className='numbers-details-item line'></div>
											<div className='numbers-details-item'>
												<h1>250</h1>
												<div>
													<span>types of</span>
													<span>courses</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='customers-section' id='customers'>
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
