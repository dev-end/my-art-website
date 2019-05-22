import React from 'react';
import {Component} from 'react';
import Sidebar from 'react-sidebar';
import Navigation from './container/navigation';
import {connect} from 'react-redux'; //React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

class SideMenu extends React.Component { // these are statefull components.
    constructor(props){
        super(props); // to honor the inheritance of the component
        this.state = { // the state object is a simple instance property so we can initialize it inside the constructor function of the class
            sidebarOpen : true
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        }

    // using the modern class field syntax which allows us to use the arrow functions that are bound to the component instance. handle click will now act as a prototype function on this class
    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }
    
    render(){
        return(
            <Sidebar
            sidebar={
            <div>   
                <Navigation/>
            </div>
            }
            open={this.state.sidebarOpen}
        //  onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "#282c34", zindex : 1, color: "red", width: "18%", height:"100%"} }}
            >
            {/* <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
            </button> */}
            </Sidebar>
        )
    }
}

export default SideMenu;