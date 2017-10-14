import React from 'react'
import 'babel-polyfill';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

class AppOne extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      app:[],
      redirect: false
    };
  }

  loadApp(app_id) {
    fetch(`/api/app/${app_id}?format=json`).then(response => response.json()).then(app =>
      this.setState({ app: app }))
  }

  componentDidMount() {
    this.loadApp(this.props.match.params.id);
  }

  handleChange = (app) => {
    axios.delete(`/api/app/${app.id}`, {app})
      .then((result) => {
        console.log(result);
        this.setState({ redirect: true })
      });
  }
// https://docs.microsoft.com/pl-pl/azure/app-service-mobile/media/index/app-service-mobile.svg
  render(){
    const { app, redirect } = this.state;
    console.log(this.state.app)
    console.log(this.props.match.params.id)
    // if (redirect) {
    //    return <Redirect to='/somewhere'/>;
    //  }
    return (
       <Card>
        <CardHeader
          title={app.name} 
          subtitle={app.platform == 1 ? "iOS" : "Android"}
          avatar="https://docs.microsoft.com/pl-pl/azure/app-service-mobile/media/index/app-service-mobile.svg"
        />
        <CardText>
          {app.description}
        </CardText>
        <CardActions>
          <FlatButton label="Delete" onClick={this.handleChange(app)} />
        </CardActions>
      </Card>
    )
   }
}

export default AppOne
