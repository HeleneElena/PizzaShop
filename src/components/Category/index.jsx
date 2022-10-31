import { useState } from 'react';

export const Category = () => {
    const [activeCatigory, setActiveCatigory] = useState(0);

    const LIST = ['Все','Мясные','Вегетарианская','Гриль','Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {
                  LIST.map((el, index) => {
                    return <li 
                        key={index} 
                        className={activeCatigory === index ? 'active' : ''}
                        onClick={() => setActiveCatigory(index)}
                        >
                            {el}
                    </li>
                  })
                }
            </ul>
        </div>
    );
};
