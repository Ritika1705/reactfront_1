
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/pages/Contact";
import myform from "./components/pages/myform";
import dumform from "./components/pages/dummy";
import fd from "./components/pages/fetch";
import edituser from "./components/pages/Edituser";
import viewuser from "./components/pages/view";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
	    <div className="App">
	      
	      <Navbar/>

	      <Switch>
	      		<Route exact path="/" component={dumform}/>
	      		<Route exact path="/about" component={fd}/>
	      		<Route exact path="/contact" component={Contact}/>
	      		<Route exact path="/edituser/:id" component={edituser}/>
	      		<Route exact path="/viewuser/:id" component={viewuser}/>
	      </Switch>
	      
	    </div>
    </Router>
  );
}

export default App;
