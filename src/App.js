import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

// Adding Font Awesome here!
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
  );
}
export default App;
  
