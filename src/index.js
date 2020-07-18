import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import "typeface-livvic";
import './styles/main.css'
import Home from './pages/home'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  </Router>,
  document.getElementById('root')
);