import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Wallet from './pages/wallet';
import Shop from './pages/shop';
import SignUp from './pages/signup';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/wallet' component={Wallet} />z
        <Route path='/shop' component={Shop} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}
  
export default App;