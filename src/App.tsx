import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import LocaleBtn from './components/LocaleBtn'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={["/home", "/"]} component={Home} />
          {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} /> */}
        </Switch>
        <Footer />
        <LocaleBtn />
      </div>
    </BrowserRouter>
  );
}

export default App;
