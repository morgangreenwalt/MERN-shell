import React from "react";
import {NavLink} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return(
            <div className="site-header">
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button> 
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav"></ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">EXAMPLE</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">EXAMPLE</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">EXAMPLE</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">EXAMPLE</NavLink>
                            </li>

                            <li className="nav-item">
                                <form onSubmit={this.props.reset} action="/" className="nav-link">
                                    <button type="submit" className="btn btn-danger">EXAMPLE</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>
          </div> 
        );
    }
}

// <form onSubmit={this.props.clear} className="nav-link" action="/reset" method="POST"><button type="submit" id="reset-search" className="btn btn-danger" name="reset-search">Reset</button></form></NavLink>