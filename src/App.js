import React from 'react';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Adventure from './Pages/Adventure/Adventure';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/adventure" component={Adventure}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
