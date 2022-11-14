import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { useState } from 'react';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
