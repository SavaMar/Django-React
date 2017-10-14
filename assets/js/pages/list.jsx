import React from 'react'
import AppItem from '../components/appItem'
import 'babel-polyfill';
import map from 'lodash/map';

class List extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      apps: []
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

  //================
  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }
  //================
  render(){
    return (
      <div className="container">

        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
             <label>
              Desctiption:
              <textarea value={this.state.description} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div style={{ marginTop: '20px' }}>
          
           {this.state.apps.map((app, index) => (
            <div key={index} className="col-md-6">
              <AppItem app={app}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default List
