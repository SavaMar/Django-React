import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';



class AppItem extends React.Component {
  render(){
    const {app} = this.props
    return (
      <Link to={`/app/${app.id}`}>
        <Card>
          <CardHeader
            title={app.name}
            subtitle={app.created_at}
          />
          <CardText>
            {app.description}
          </CardText>
          <CardActions>
            <FlatButton label="Edit" />
          </CardActions>
        </Card>
      </Link>
    )
  }
}

export default AppItem