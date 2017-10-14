import React from 'react'
import AppItem from '../components/appItem'
import 'babel-polyfill';
import map from 'lodash/map';

import Form from '../components/form'

class List extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      apps: [],
    };
  }

  componentDidMount() {
    this.loadApps();
  }

  async loadApps() {
    this.setState({
      apps: await fetch("/api/app/").then(response =>response.json())
    })
  }

  render(){
    return (
      <div className="container">
        <Form/>
        <div>
           {this.state.apps.map((app, index) => (
            <div key={index} className="col-md-6" style={{ marginTop: '20px' }}>
              <AppItem app={app}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default List
