import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Home from './home';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
        </div>
    </Router>
, document.getElementById('app')
);