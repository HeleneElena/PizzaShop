import './app.scss';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { LocationPage1 } from './pages/LocationPage1';
import { Roads } from './pages/Roads';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='lokacions' element={<LocationPage1 />}  />
        <Route path='roads' element={<Roads />}  />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
