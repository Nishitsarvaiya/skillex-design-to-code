import { Carousel, Footer, Header, Tabs } from './components';
import './assets/styles/app.scss';
import Person1 from './assets/images/person-1.jpg';
import Person2 from './assets/images/person-2.jpg';
import Person3 from './assets/images/person-3.jpg';
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
                <section className='hero-section'>
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
                            <form>
                                <div className='custom-input'>
                                    <input type='text' placeholder='Find you passion' />
                                    <a href='#'>Go</a>
                                </div>
                            </form>
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
