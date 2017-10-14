import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { BaseLayout } from '../components/baseLayout'
import List from '../pages/list'
import AppOne from '../pages/appOne'


class Routes extends Component {
    render(){
        return(
            <Router>
                <div>
                  <Route exact path="/" component={List} />
                  <Route exact path="/app/:id" component={AppOne} />
                </div>
              </Router>
        );
    }
}


export default Routes