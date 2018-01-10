import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Home from './home';
import Test from './test';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/:project/:id" component={Test}/>
        </div>
    </Router>
, document.getElementById('app')
);