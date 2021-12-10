import { useEffect, useState } from 'react';
import { Category } from '..';
import Category1 from '../../assets/images/category-1.jpg';
import Category2 from '../../assets/images/category-2.jpg';
import Category3 from '../../assets/images/category-3.jpg';
import Category4 from '../../assets/images/category-4.jpg';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [tabs, setTabs] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setTabs([
            {
                id: 1,
                name: 'All Categories',
            },
            {
                id: 2,
                name: 'Entertainment',
            },
            {
                id: 3,
                name: 'Lifestyle',
            },
            {
                id: 4,
                name: 'Writing',
            },
            {
                id: 5,
                name: 'Business',
            },
            {
                id: 6,
                name: 'Food',
            },
        ]);

        setCategories([
            {
                id: 1,
                image: Category1,
                title: 'Sales Marketing',
                duration: '4 months',
            },
            {
                id: 2,
                image: Category2,
                title: 'Data Analytics',
                duration: '3 months',
            },
            {
                id: 3,
                image: Category3,
                title: 'Copywriting Pro',
                duration: '2 months',
            },
            {
                id: 4,
                image: Category4,
                title: 'Design Art',
                duration: '4 months',
            },
        ]);
    }, []);

    return (
        <div className='container'>
            <div className='tabs-container'>
                <ul className='tabs'>
                    {tabs.map((tab) => (
                        <li key={tab.id} className={activeTab === tab.id ? 'tab tab-active' : 'tab'}>
                            <button onClick={() => setActiveTab(tab.id)}>
                                <span>{tab.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className='tabs-content'>
                    {tabs.map((tab) => (
                        <div key={tab.id} className={activeTab === tab.id ? 'tab-pane tab-pane-active' : 'tab-pane'}>
                            <div className='categories'>
                                {categories
                                    .sort(() => Math.random() - 0.5)
                                    .map((category) => (
                                        <Category key={category.id} category={category} />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
