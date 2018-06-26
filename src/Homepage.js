import React, { Component } from 'react';

const isMobile = window.innerWidth <= 500;
var styles = {
    image_style: {
        position: 'relative',
        height: isMobile ? '500px':'1200px',
        width: '100%',
        flex: 1,
        display: 'flex',

    }
};


class Homepage extends Component {

    render () { 
        console.log("Are we using Mobile: ",isMobile)
        return (
          <img src='./images/homepage.jpg' className="homepage_image" style={styles.image_style} alt="homepage_image"/>            
        );
    }
}

export default Homepage;