const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='footer-container'>
					<div className='main-row'>
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
						<div className='community'>
							<h3 className='community-title'>Join our community</h3>
							<form>
								<div className='custom-input'>
									<input type='text' placeholder='Enter your email' />
									<a href='#'>
										<span>Go</span>
									</a>
								</div>
							</form>
						</div>
					</div>
					<div className='bottom-row'>
						<div className='copyrights'>
							<p>2021 Halo Lab. All rights reserved</p>
						</div>
						<div className='socials'>
							<div className='social'>
								<a href='#'>
									<img src='https://img.icons8.com/windows/24/000000/facebook-f.png' alt='facebook' />
								</a>
							</div>
							<div className='social'>
								<a href='#'>
									<img src='https://img.icons8.com/windows/24/000000/behance.png' alt='behance' />
								</a>
							</div>
							<div className='social'>
								<a href='#'>
									<img src='https://img.icons8.com/windows/24/000000/linkedin-2.png' alt='linkedin' />
								</a>
							</div>
							<div className='social'>
								<a href='#'>
									<img
										src='https://img.icons8.com/windows/24/000000/instagram-new--v1.png'
										alt='instagram'
									/>
								</a>
							</div>
							<div className='social'>
								<a href='#'>
									<img src='https://img.icons8.com/windows/24/000000/dribbble.png' alt='dribbble' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
