import { useState } from 'react';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => setShowMenu(!showMenu);

	return (
		<>
			<header>
				<div className='container'>
					<div className='header-container'>
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
									<a href='#passion' className='nav-link'>
										<span>Find Passion</span>
									</a>
								</li>
								<li className='nav-list-item'>
									<a href='#categories' className='nav-link'>
										<span>Categories</span>
									</a>
								</li>
								<li className='nav-list-item'>
									<a href='#skills' className='nav-link'>
										<span>Skills</span>
									</a>
								</li>
								<li className='nav-list-item'>
									<a href='#customers' className='nav-link'>
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
						<div className={showMenu ? 'hamburger active' : 'hamburger'} onClick={toggleMenu}>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
			</header>
			<div className={showMenu ? 'mobile-menu active' : 'mobile-menu'}>
				<div className='container'>
					<div className='logo-container'>
						<a href='#'>
							<h1 className='logo'>
								Skillex<span className='green-dot'>.</span>
							</h1>
						</a>
					</div>
					<nav>
						<ul>
							<li>
								<a href='#'>
									<h1>Find Passion</h1>
								</a>
							</li>
							<li>
								<a href='#'>
									<h1>Categories</h1>
								</a>
							</li>
							<li>
								<a href='#'>
									<h1>Skills</h1>
								</a>
							</li>
							<li>
								<a href='#'>
									<h1>Customers</h1>
								</a>
							</li>
						</ul>
					</nav>
					<div className='cta-group'>
						<div>
							<a href='#'>
								<h3>Login</h3>
							</a>
						</div>
						<div>
							<a href='#' className='cta-trial'>
								<h3>Free Trial</h3>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
