import { PizzaBlock } from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';
import { Category } from '../../components/Category';
import { Sort } from '../../components/Sort';
import { useEffect, useState } from 'react';

export const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (items) {
        fetch('https://635fa0523e8f65f283b7781a.mockapi.io/items')
        .then(res => res.json())
        .then(arr => setItems(arr));
        setIsLoading(false);
        } 
    }, []);

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Category pizzas={items} />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                {
                    isLoading ? [...new Array(5)].map((_, index) => <Skeleton key={index} />) : (
                    items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                    )
                }
            
                </div>
            </div>
        </div>
    );
};
