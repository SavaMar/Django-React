import React from 'react'
import 'babel-polyfill';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

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

  deleteFunc = (e) => {
    axios.delete(`/api/app/${this.state.app.id}`, {  })
      .then((result) => {
        console.log(result);
        this.setState({ redirect: true })
      }
    );
  }

  render(){
    const { app, redirect } = this.state;
    console.log(this.state.app)
    console.log(this.props.match.params.id)
    if (redirect) {
       return <Redirect to='/'/>;
     }
    return (
       <Card style={{marginTop:"20px"}}>
        <CardHeader
          title={app.name} 
          subtitle={app.platform == 1 ? "iOS" : "Android"}
          avatar="https://docs.microsoft.com/pl-pl/azure/app-service-mobile/media/index/app-service-mobile.svg"
        />
        <CardText>
          {app.description}
        </CardText>
        <CardHeader
            subtitle={ <Moment format="YYYY/MM/DD" date={app.created_at}/>}
          />
        <CardActions>
        <Link to={`/`}>
          <RaisedButton primary={true} label="Go beck" />
        </Link>
          <RaisedButton primary={true} label="Delete" onClick={this.deleteFunc} />
        </CardActions>
      </Card>
    )
   }
}

export default AppOne
