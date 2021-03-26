import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Industries from '../Industries';
import Services from '../Services';
import AboutUs from '../AboutUs';

//Routes for web-site pages 
//todos: redirect
class Routes extends Component {
    render() {
      return (
        <Switch>
            <Route exact path="/" component={Industries} />
            <Route path="/industries" component={Industries} />
            <Route path="/services" component={Services} />
            <Route path="/about-us" component={AboutUs} />
        </Switch>
        );
    }  
} 

export default Routes;