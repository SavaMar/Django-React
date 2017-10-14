import React from 'react'
import 'babel-polyfill';
import axios from 'axios'

class AppOne extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      app:[]
    };
  }

  loadApp(app_id) {
    fetch(`/api/app/${app_id}/`).then(response => response.json()).then(app =>
      this.setState({ app: app }))
  }

  componentDidMount() {
    this.loadApp(this.props.match.params.id);
  }

  render(){
    const { app } = this.state;
    console.log(this.state.app)
    console.log(this.props.match.params.id)
    return (
      <div className="col-md-2">{app.name}</div>
    )
   }
}

export default AppOne
