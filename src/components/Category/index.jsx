import { useState } from 'react';



export const Category = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const LIST = ['Все','Мясные','Вегетарианская','Гриль','Острые', 'Закрытые'];

    const changeActive = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="categories">
            <ul>
                {
                    LIST.map((category, index) => {
                        return <li key={index} onClick={() => changeActive(index)} className={activeIndex === index ? 'active' : ''}>{category}</li>
                    })
                }
            
            </ul>
        </div>
    );
};
