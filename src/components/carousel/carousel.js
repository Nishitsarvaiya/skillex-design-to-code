import { useEffect, useState } from 'react';
import { Card } from '..';

const Carousel = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPage] = useState(0);
	const [people, setPeople] = useState([]);

	const goLeft = () => (currentPage === 1 ? console.log('end') : setCurrentPage(currentPage - 1));

	const goRight = () => (currentPage === totalPages - 1 ? console.log('end') : setCurrentPage(currentPage + 1));

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
				name: 'Melanie Pickett',
				position: 'IT Manager',
				text: 'I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client',
			},
			{
				id: 3,
				name: 'Regis Wilson',
				position: 'Engineer',
				text: 'I really like the speakers of the course and the quality of the lectures. There is always feedback',
			},
			{
				id: 4,
				name: 'Emma Watson',
				position: 'Cook',
				text: 'A new profession is a lot of vivid impressions. Today I was at the presentation of the regional business award',
			},
			{
				id: 5,
				name: 'Emma Watson',
				position: 'CEO',
				text: 'The course shows all the stages of the work of an SMM marketer. And also excellent practice',
			},
			{
				id: 6,
				name: 'Chris Hemsworth',
				position: 'CEO',
				text: 'On the course "Data Analyst in Python" everything is very interesting and informative, very detailed material',
			},
			{
				id: 7,
				name: 'Andrew Garfield',
				position: 'CEO',
				text: 'For several months I studied one of the most popular programming languages on the course "Java developer"',
			},
			{
				id: 8,
				name: 'Elizabeth Stone',
				position: 'CEO',
				text: 'The course shows all the stages of the work of an SMM marketer. And also excellent practice',
			},
			{
				id: 9,
				name: 'Chris Hemsworth',
				position: 'CEO',
				text: 'On the course "Data Analyst in Python" everything is very interesting and informative, very detailed material',
			},
			{
				id: 10,
				name: 'John Cena',
				position: 'CEO',
				text: 'For several months I studied one of the most popular programming languages on the course "Java developer"',
			},
		]);
	}, []);

	useEffect(() => {
		setTotalPage(() => Math.ceil(people.length / 2));
	}, [people]);

	useEffect(() => {
		const shiftCarousel = (currentPage) => {
			let carousel = document.querySelector('.carousel');
			if (carousel.children[0]) {
				let carouselItemWidth = carousel.children[0].getBoundingClientRect().width;
				carousel.style.transform = `translate3d(calc(${-(carouselItemWidth * 2) * currentPage}px - ${
					4 * currentPage
				}rem), 0, 0`;
			}
		};

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
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M10 19l-7-7m0 0l7-7m-7 7h18'
							/>
						</svg>
					</button>
					<button onClick={goRight}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
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
