
export const Category = ({ activeCatigory, onClickCategory }) => {
    const LIST = ['Все','Мясные','Вегетарианская','Гриль','Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
             {
                LIST.map((el, i) => {
                    return <li key={i}
                               className={activeCatigory === i ? 'active' : ''} 
                               onClick={() => onClickCategory(i)}
                    >
                            {el}
                    </li>
                })
             }
            </ul>
        </div>
    );
};
