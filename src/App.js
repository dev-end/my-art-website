import React, { Component } from 'react';
import './App.css';
import SideMenu from './sidemenu';
import NavigationData from './container/NavigationData';

class App extends Component { // Dumb component, it includes the child component but it does not interact with the store
  render() {
    return (
      <div className="container">    
       <SideMenu/>  
       <NavigationData />
      </div>
    );
  }
}

export default App;
{/* <SideMenu/>  
<NavigationData /> */}