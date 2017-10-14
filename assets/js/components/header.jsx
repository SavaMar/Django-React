import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

class Header extends React.Component {
  render(){
    return (
     <Toolbar>
         <ToolbarGroup>
          <a href="/"><ToolbarTitle text="Apps" /> </a>           
        </ToolbarGroup>
        <ToolbarGroup>
            <RaisedButton label="New App" primary={true} />
        </ToolbarGroup>
     </Toolbar>
    )
   }
}

export default Header
