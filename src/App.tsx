import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import LocaleBtn from './components/LocaleBtn'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Home />
        <Footer />
        <LocaleBtn />
      </div>
    </HashRouter>
  );
}

export default App;
