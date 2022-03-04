import './App.css';
import { Component } from 'react';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import MainApp from './main';
class App extends Component {
  render(){
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/manager" exact component={MainApp} />
            <Route component={NotFound}></Route>
          </Switch>
      </Router>
    );
  }
}
export default App;
