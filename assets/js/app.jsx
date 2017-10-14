import React from 'react'
import Routes from './config/routes'
import Header from './components/header'

class Main extends React.Component {
  render(){
    return (
        <div className="container">
            <Header/>
            <Routes/>
        </div>
    )
   }
}

export default Main
