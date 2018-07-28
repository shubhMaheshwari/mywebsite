import React, { Component } from 'react';

const isMobile = window.innerWidth <= 500;



class Footer extends Component {

    render () { 
        console.log("Are we using Mobile: ",isMobile)
        return (
            <footer className="w3-container w3-padding-32 w3-center w3-black w3-xlarge" id="contact">
                <h2 className="">Contact Me</h2> 
                <a className="" href="https://www.facebook.com/shubh.maheshwari.9" ><i className="fa fa-facebook-official w3-hover-opacity w3-padding-large"></i></a>
                <a className="" href="https://twitter.com/maheshwarishub9" ><i className="fa fa-twitter w3-hover-opacity w3-padding-large"></i></a>
                <a className="" href="https://github.com/shubhMaheshwari" ><i className="fa fa-github w3-hover-opacity w3-padding-large w3-xxlarge"></i></a>                
                <a className="" href="mailto:shubh.maheshwari@students.iiit.ac.in" ><i className="fa fa-envelope w3-hover-opacity w3-padding-large w3-xxxlarge"></i></a>                
                <a className="" href="https://www.linkedin.com/in/shubh-maheshwari-663737151" ><i className="fa fa-linkedin w3-hover-opacity w3-padding-large w3-xxlarge"></i></a>
                <a className="" href="mailto:maheshwarishubh98@gmail.com" ><i className="fa fa-google w3-hover-opacity w3-padding-large "></i></a>
                <a className="" href="https://www.instagram.com/shubhmaheshwari98/" ><i className="fa fa-instagram w3-hover-opacity w3-padding-large"></i></a>                
                <h4> Thank you for visiting </h4>
            </footer>
        );
    }
}

export default Footer;
