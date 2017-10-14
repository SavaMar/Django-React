import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardText} from 'material-ui/Card';

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
    // alert('A name was submitted: ' + this.state.name);
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
      <div className="col-md-6" style={{marginTop: "20px"}} >
      <Card style={{padding: "20px"}}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="Name"
            multiLine={true}
              rows={2}
            name="name" 
            value={name} 
            onChange={this.handleChange}
          /><br />
           <TextField
              hintText="Description"
              multiLine={true}
              rows={2}
              rowsMax={4}
              value={description} 
              onChange={this.handleChange}
              name="description"
            /><br />
            <select name="platform" value={platform} onChange={this.handleChange} style={{margin: "10px 0"}}>
              <option value="1">IOS</option>
              <option value="2">Android</option>
            </select>
            <br />
          <RaisedButton label="Create new app" primary={true} type="submit" value="Submit"/>
        </form>
      </Card>
      </div>
    )
   }
}

export default Form
