import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { 
  BrowserRouter as Router, 
  Route, 
  useLocation,
  withRouter}from 'react-router-dom'
import "typeface-livvic";
import './styles/main.css'
import Home from './pages/home'
import About from './pages/about'
import Post from './pages/post'
import NotFound from './pages/notfound'

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

ReactDOM.render(
  <Router>
    <div>
      <ScrollToTop>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/404" component={NotFound}/>
      <Route exact path="/post/:id" render={props => <Post {...props}/>}/>
      </ScrollToTop>
    </div>
  </Router>,
  document.getElementById('root')
);