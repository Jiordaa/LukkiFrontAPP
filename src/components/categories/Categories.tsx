/*'use client'

import './Categories.css';

export default function Categories() {
    const topRow = [
        { name: 'Womens', color: '#F9B9B7' },
        { name: 'Mens', color: '#A0C4FF' },
        { name: 'Kids', color: '#FFD6A5' },
    ];

    const bottomRow = [
        { name: 'Shoes', color: '#BDB2FF' },
        { name: 'Shirts', color: '#FFADAD' },
        { name: 'Pants', color: '#CAFFBF' },
        { name: 'Outerwear', color: '#FDFFB6' },
    ];

    return (
        <section className="categories-section">
            <h2 className="categories-title">Categories</h2>

            <div className="categories-row top-row">
                {topRow.map((cat, idx) => (
                    <div
                        key={idx}
                        className="category-card"
                        style={{ backgroundColor: cat.color }}
                    >
                        <div className="category-overlay">
                            <span className="category-text">{cat.name} →</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="categories-row bottom-row">
                {bottomRow.map((cat, idx) => (
                    <div
                        key={idx}
                        className="category-card"
                        style={{ backgroundColor: cat.color }}
                    >
                        <div className="category-overlay">
                            <span className="category-text">{cat.name} →</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}*/
'use client';

import './Categories.css';

export default function Categories() {
    const topRow = [
        { name: 'Womens', color: '#F9B9B7', link: '/womens' },
        { name: 'Mens', color: '#A0C4FF', link: '/mens' },
        { name: 'Kids', color: '#FFD6A5', link: '/kids' },
    ];

    const bottomRow = [
        { name: 'Shoes', color: '#BDB2FF', link: '/shoes' },
        { name: 'Shirts', color: '#FFADAD', link: '/shirts' },
        { name: 'Pants', color: '#CAFFBF', link: '/pants' },
        { name: 'Outerwear', color: '#FDFFB6', link: '/outerwear' },
    ];

    return (
        <section className="categories-section">


            <div className="categories-row top-row">
                {topRow.map((cat, idx) => (
                    <div
                        key={idx}
                        className="category-card"
                        style={{ backgroundColor: cat.color }}
                    >
                        <div className="category-overlay">
                            <a href={cat.link} className="category-link">
                                {cat.name} <span className="category-arrow">→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="categories-row bottom-row">
                {bottomRow.map((cat, idx) => (
                    <div
                        key={idx}
                        className="category-card"
                        style={{ backgroundColor: cat.color }}
                    >
                        <div className="category-overlay">
                            <a href={cat.link} className="category-link">
                                {cat.name} <span className="category-arrow">→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
