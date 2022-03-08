require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import Master from './components/Master';
import CreateCliente from './components/CreateCliente';
import DisplayCliente from './components/DisplayCliente';
import UpdateCliente from './components/UpdateCliente';
import UpdateCliente from './components/UpdateCliente';


render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
        <Route path="/add-item" component={CreateCliente} />
        <Route path="/display-item" component={DisplayCliente} />
        <Route path="/edit/:id" component={UpdateCliente} />
      </Route>
    </Router>,
        document.getElementById('crud-app'));
