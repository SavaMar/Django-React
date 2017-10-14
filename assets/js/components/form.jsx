import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      platform: 1
    }
  }

  cleanForm(){
    const state = this.state
    state[name] = '';
    state[description] = '';
    state[platform] = 1;
    this.setState(state);
  }

  handleChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit = (e) => {
    alert('A name was submitted: ' + this.state.name);
    e.preventDefault();
        const { name, description, platform } = this.state;
        axios.post('/api/app/', { name, description, platform })
          .then((result) => {
            console.log(result);
          });
        this.setState({name:'', description:'', platform:1});
  }
  render(){
    const { name, description, platform } = this.state;
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          <textarea type="text" name="description" value={description} onChange={this.handleChange} />
            <select name="platform" value={platform} onChange={this.handleChange}>
              <option value="1">IOS</option>
              <option value="2">Android</option>
            </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
   }
}

export default Form
