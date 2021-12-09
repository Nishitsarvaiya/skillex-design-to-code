import { useState, useEffect } from 'react';

const Card = ({ person }) => {
	const [image, setImage] = useState('');

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=1&inc=picture&noinfo')
			.then((response) => response.json())
			.then((data) => setImage(data.results[0].picture.medium));
	}, []);

	return (
		<div className='card'>
			<div className='card-content'>
				<p className='card-content-text'>{person.text}</p>
				<div className='card-content-customer'>
					<div className='card-content-customer-image'>
						<img src={image} alt='' />
					</div>
					<div className='card-content-customer-info'>
						<h4>{person.name}</h4>
						<span>{person.position}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
