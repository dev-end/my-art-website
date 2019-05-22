import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';
import { Gallery } from './dataComponents/gallery';
import { About } from './dataComponents/about';
import { GridFeature } from './dataComponents/gridFeature'

var navigatedButtonClicked = "About";

// this is the smart component, we need to connect it with the redux store, so we have connected it with the redux store and fetched the latest state from the store and display it
class NavigationData extends Component{
    constructor(props){
        super(props);
    }

    render() {
        console.log("buttoon" +JSON.stringify(this.props.buttonClicked.Choice))
        return (
            <SelectedComponent buttonClicked = {this.props.buttonClicked.Choice}/>
        )
        return <About/> // default
    }
} // class

// creating this component for conditional rendering
function SelectedComponent(props) {
    console.log(props);
    // let jsonPropString = JSON.stringify(props.buttonClicked);
    // let jsonProp = JSON.parse(JSON.stringify(props.buttonClicked));
    navigatedButtonClicked = props.buttonClicked;

    if(navigatedButtonClicked == "About")
    return <About/>
    else if(navigatedButtonClicked == "Gallery")
    return <Gallery/>
    else if(navigatedButtonClicked == "GridFeature")
    return <GridFeature />
}

// this function maps the state to the props of the current component
//called everytime the store state changes. It receives entire store state, and should return an object of data this component needs.
var mapState = (state) => {
    return {
        buttonClicked: state.clickReducer, // state would be accessed via prop here
    }
}
// <div>{JSON.stringify(this.props.buttonClicked)}</div>

// connecting component to the redux store
// connect returns a new function that accepts the component to wrap.
// and that function returns the connected wrapper component
// const connectToStore = connect(mapStateToProps);

// export const connectedComponent = connectToStore(NavigationData)z

// normally the above can be written in a single line.
export default connect(mapState)(NavigationData); 

//mapDispatchToProps
//this parameter can either be a function or an object, 
// if function: it will be called once on component creation. It will receive dispatch as an argument, and should return object full of 
//     functions that use dispatch to dispatch actions