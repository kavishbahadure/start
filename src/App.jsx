import React from 'react';
import Home from './Component/Home';
import ListUser from "./Component/ListUser";
import AddUser from "./Component/AddUser";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Component/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from "react-bootstrap/esm/Container";
import { Col } from "react-bootstrap";

function App() {
  return (
    <div>
        <Header/>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/list-user" component={ListUser} exact></Route>
            <Route path="/add-user" component={AddUser} exact></Route>

          </Switch>
        </Router>
    </div>
    
  );
}

export default App;
