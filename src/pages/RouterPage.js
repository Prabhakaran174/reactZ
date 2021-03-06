import React from 'react'
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function RouterPage() {
  return (
    <div>
      <Router>
      <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
          </Switch>
      </Router>
    </div>
  )
}


