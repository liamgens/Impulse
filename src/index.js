import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';

import Home from './home';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <hr/>   
        </div>
    </Router>
, document.getElementById('app')
);