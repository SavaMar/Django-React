import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';



class AppItem extends React.Component {
  render(){
    const {app} = this.props
    return (
      <Link to={`/app/${app.id}`}>
        <Card>
          <CardHeader
            title={app.name}
            subtitle={ app.platform == 1 ? "iOS" : "Android"}
          />
          <CardText>
            {app.description}
          </CardText>
          <CardHeader
            subtitle={ <Moment format="YYYY/MM/DD" date={app.created_at}/>}
          />
        </Card>
      </Link>
    )
  }
}

export default AppItem