import { useState } from 'react';

export const Category = () => {
    const LIST = ['Все','Мясные','Вегетарианская','Гриль','Острые', 'Закрытые'];
    const [activeCatigory, setActiveCatigory] = useState(0);

    return (
        <div className="categories">
            <ul>
             {
                LIST.map((el, i) => {
                    return <li key={i}
                               className={activeCatigory === i ? 'active' : ''} 
                               onClick={() => setActiveCatigory(i)}
                    >
                            {el}
                    </li>
                })
             }
            </ul>
        </div>
    );
};
