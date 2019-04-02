import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Jokes from './components/Jokes';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/jokes' component={Jokes} />
        </Switch>
    </Router>,
    document.getElementById('root'));
