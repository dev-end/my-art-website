import React from 'react';
import '../../App.css'
import thanos from './thanos.jpg';

export class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='dataBar'>
            <img src={thanos} alt="thanos image" className= "aboutImage"/>
            </div>
        )
    }
}
