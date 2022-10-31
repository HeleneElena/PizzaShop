import './scss/app.scss';
import './App.css';
import { Header } from './components/Header';
import { Category } from './components/Category';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';
import pizzas from './assets/pizza.json';
import { useEffect, useState } from 'react';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
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
    <div className="App">
      <div className="wrapper">
        <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Category pizzas={pizzas} />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {
            isLoading ? [...new Array(5)].map((_, index) => <Skeleton key={index} />) : (
              pizzas.map(obj => <PizzaBlock key={obj.id} {...obj} />)
            )
          }
    
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
