import React, {Component} from "react";
import helpers from "./utils/helpers";

// Importing components
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Watching from "./Watching";
import Results from "./Results";

export default class Main extends React.Component {
    constructor(props){
        super(props);
            this.state = {
            };
    }

    // Show data in database
    componentDidMount(){

    }

    // Fire when you search, watch, save etc (every time you complete action/ change)
    componentDidUpdate(){

    }

    //   When "Reset" button is clicked,  clear results
    handleClear(event){
        event.preventDefault();

    }

    //   When "Watching" button is clicked,  update boot to "Watching" (doesn't work)
    handleClick(){

    }

    render() {
        return(
            <div className="main-wrapper">
                
            </div>
        );
    }
}