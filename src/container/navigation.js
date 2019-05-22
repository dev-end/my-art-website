
import React from 'react';
import {connect} from 'react-redux'; // react-redux provides a connect function for you to read the values from the redux store(and re-read the values when the store updates)
import {clickEvent} from '../actions';
import {Click_Event} from '../actions/ActionType'

class Navigation extends React.Component { // once u connect the component to the redux store then dont do "export class ClassName{ }"
    contentList = ['About', 'Gallery', 'Store', 'Contact', 'GridFeature' ];
    constructor(props){
        super(props);
        
       // The bind method differs from call and apply in that the bind method attaches an object to a function so that every 
       // time the function is called it refers to the bound object.    
        this.menuItemClicked = this.menuItemClicked.bind(this);
    }

    menuItemClicked(param) {
        console.log('Item clicked is : ' +param)
        this.props.clic(param);
    }

    render(){
         return (            
             <ul> 
                 {   
                     this.contentList.map(function(content, index)
                    {
                        // if(this === undefined)
                        // return;
                        // only dom elements are allowed to have event handlers
                        return <li key={content.toString()}><button id={content} onClick={(e) => this.menuItemClicked(content, e)}>{content}
                                                            </button>
                               </li>
                    }, this) // this here will tell the object that the current function is binded to
                 }
            </ul>
         )
     }
}

// this function is needed because we need to pass dispatch as a property to our component, 
// and also we need to bind actions with this component

// Providing a map dispatch to props allows you to specify which actions your component might need to dispatch. It lets
// you provide action dispatching functions as props
var mapDispatch = dispatch => ({ 
    clic: (param) => dispatch({ // action to be dispatched
        type: Click_Event,
        text: param
        })
//    return {actions: bindActionCreators(clickEvent, dispatch)} 
});

//connecting our component to the redux store
export default connect(null, mapDispatch)(Navigation); // by passing action to the connect, our component receives it as a prop, and will automatically dispatch the action when it will be called

//export default Navigation;


// By default a connected component receives props.dispatch and can dispatch actions itself.
// connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called,
//         and pass those functions as props to your component