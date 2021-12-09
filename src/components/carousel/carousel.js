import { useEffect, useState } from 'react';
import { Card } from '..';

const Carousel = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPage] = useState(0);
	const [people, setPeople] = useState([]);

	const goLeft = () => (currentPage === 1 ? console.log('end') : setCurrentPage(currentPage - 1));

	const goRight = () => (currentPage === totalPages - 1 ? console.log('end') : setCurrentPage(currentPage + 1));

	const shiftCarousel = (currentPage) => {
		let carousel = document.querySelector('.carousel');
		let carouselItemWidth = document.querySelector('.carousel-item').getBoundingClientRect().width;
		carousel.style.transform = `translate3d(calc(${-(carouselItemWidth * 2) * currentPage}px - ${
			4 * currentPage
		}rem), 0, 0`;
	};

	useEffect(() => {
		setPeople([
			{
				id: 1,
				name: 'Rob Zuber',
				position: 'CEO',
				text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
			},
			{
				id: 2,
				name: 'Rob Zuber',
				position: 'CEO',
				text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
			},
			{
				id: 3,
				name: 'Rob Zuber',
				position: 'CEO',
				text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
			},
			{
				id: 4,
				name: 'Rob Zuber',
				position: 'CEO',
				text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
			},
			{
				id: 5,
				name: 'Rob Zuber',
				position: 'CEO',
				text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
			},
			{
				id: 6,
				name: 'Rob Zuber',
				position: 'CEO',
				text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
			},
			{
				id: 7,
				name: 'Rob Zuber',
				position: 'CEO',
				text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
			},
			{
				id: 8,
				name: 'Rob Zuber',
				position: 'CEO',
				text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
			},
			{
				id: 9,
				name: 'Rob Zuber',
				position: 'CEO',
				text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
			},
			{
				id: 10,
				name: 'Rob Zuber',
				position: 'CEO',
				text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
			},
		]);
	}, []);

	useEffect(() => {
		setTotalPage(() => Math.ceil(people.length / 2));
	}, [people]);

	useEffect(() => {
		shiftCarousel(currentPage - 1);
	}, [currentPage]);

	return (
		<div className='carousel-container'>
			<div className='container'>
				<div className='carousel'>
					{people.map((person) => (
						<div key={person.id} className='carousel-item'>
							<Card person={person} />
						</div>
					))}
				</div>
				<div className='carousel-nav'>
					<button onClick={goLeft}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M10 19l-7-7m0 0l7-7m-7 7h18'
							/>
						</svg>
					</button>
					<button onClick={goRight}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M14 5l7 7m0 0l-7 7m7-7H3'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
