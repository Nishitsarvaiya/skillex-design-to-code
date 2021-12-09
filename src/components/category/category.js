const Category = ({ category }) => {
	return (
		<div className='category'>
			<div className='category-image'>
				<img src={category.image} alt='' />
			</div>
			<div className='category-info'>
				<h1>{category.title}</h1>
				<p>{category.duration}</p>
			</div>
		</div>
	);
};

export default Category;
