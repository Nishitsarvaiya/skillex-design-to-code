const Header = () => {
	return (
		<header>
			<div className='container header-container'>
				<div className='logo-container'>
					<a href='#'>
						<h1 className='logo'>
							Skillex<span className='green-dot'>.</span>
						</h1>
					</a>
				</div>
				<nav className='nav'>
					<ul className='nav-list'>
						<li className='nav-list-item'>
							<a href='#' className='nav-link'>
								<span>Find Passion</span>
							</a>
						</li>
						<li className='nav-list-item'>
							<a href='#' className='nav-link'>
								<span>Categories</span>
							</a>
						</li>
						<li className='nav-list-item'>
							<a href='#' className='nav-link'>
								<span>Skills</span>
							</a>
						</li>
						<li className='nav-list-item'>
							<a href='#' className='nav-link'>
								<span>Customers</span>
							</a>
						</li>
					</ul>
				</nav>
				<div className='cta-group'>
					<div>
						<a href='#' className='nav-link'>
							Login
						</a>
					</div>
					<div>
						<a href='#' className='cta-trial'>
							Free Trial
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
