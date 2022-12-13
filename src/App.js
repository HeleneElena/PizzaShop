import './app.scss';
import * as React from 'react';
import { Header } from './components/Header';
import { Events } from './components/Events';
import { Navigation } from './components/Navigation';
import { Location } from './components/Location';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Events />
      <Location />
    </div>
  );
}

export default App;
