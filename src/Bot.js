import React, { Component } from 'react';

const isMobile = window.innerWidth <= 500;



class Bot extends Component {

    render () { 
        console.log("Are we using Mobile: ",isMobile)
        return (
            <div class="center menu">
                <div id="myMenu"></div>
            </div>
        );

    }
}
export default Bot;
