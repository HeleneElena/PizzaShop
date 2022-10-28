import './scss/app.scss';
import './App.css';
import { Header } from './components/Header';
import { Category } from './components/Category';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';
import pizzas from './assets/pizza.json';

console.log(pizzas);

function App() {
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
            pizzas.map(obj => <PizzaBlock key={obj.id} {...obj} />)
          }
    
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
