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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </Link>
    )
  }
}

export default AppItem