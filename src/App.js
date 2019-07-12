import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Header from './component/headerComponent';
import Home from './component/homeComponent';
import Profile from './component/profileComponent';
import Gallery from './component/galleryComponent';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
      <div>    
        <Header />
        <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/gallery" component={Gallery} />
        </div>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
