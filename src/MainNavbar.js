import React, { Component } from 'react';

class MainNavbar extends Component {

    render () { 
        return (
            <div className="w3-top">
                <div className="w3-bar w3-black w3-card">
                    <a href="#home" className="w3-bar-item w3-button w3-padding-large">HOME</a>
                    <a href="#about" className="w3-bar-item w3-button w3-padding-large">ABOUT</a>
                    <a href="#contact" className="w3-bar-item w3-button w3-padding-large">CONTACT</a>
                    <a href="/projects" className="w3-bar-item w3-button w3-padding-large w3-hide-small">PROJECTS</a>
                    <a href="/blog" className="w3-bar-item w3-button w3-padding-large w3-hide-small">BLOG</a>
                    <a href="/portfolio" className="w3-bar-item w3-button w3-padding-large w3-hide-small">PORTFOLIO</a>

                    {/* Show button for toggle navigation on small devices */}
                    <a className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onClick={() => {
                        var x = document.getElementById("navDemo");
                        if (x.className.indexOf("w3-show") == -1) x.className += " w3-show";
                        else x.className = x.className.replace(" w3-show", "");                
                        }
                        } title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
                </div>

                {/* For small devices show navbar as as a seperate window */}
                <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium" >
                    <a href="/projects" className="w3-bar-item w3-button w3-padding-large ">PROJECTS</a>
                    <a href="/blog" className="w3-bar-item w3-button w3-padding-large ">BLOG</a>
                    <a href="/portfolio" className="w3-bar-item w3-button w3-padding-large ">PORTFOLIO</a>
                </div>
            </div>
        );
    }
}

export default MainNavbar;