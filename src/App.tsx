import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { useModule } from './store/language'

import LocaleBtn from './components/LocaleBtn'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Hero from './pages/Hero'
import { manner, clean, eco } from './assets/index'

const App: React.FC = () => {
  // load epic and reducer
  useModule()

  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/manner" render={() => <Hero key="manner" title={'manner'} image={manner} />} />
          <Route exact path="/clean" render={() => <Hero key="clean" title={'clean'} image={clean} />} />
          <Route exact path="/eco" render={() => <Hero key="eco" title={'eco'} image={eco} />} />
        </Switch>
        <Footer />
        <LocaleBtn />
      </div>
    </HashRouter>
  );
}

export default App;
