import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/home/home';
import PokemonView from './views/pokemon/pokemon';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon/:name" component={PokemonView} />
      </Switch>
    </Router>
  );
}

export default App;
