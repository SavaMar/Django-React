import React from 'react';
import Main  from './app';
import ReactDOM from 'react-dom';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);

ReactDOM.render( <App />, document.getElementById('react-app'))
