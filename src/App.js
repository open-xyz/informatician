import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book/:id" component={BookDetails} />
      </Switch>
    </Router>
  );
}

export default App;
