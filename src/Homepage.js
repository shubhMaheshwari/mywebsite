import React, { Component } from 'react';
import Slider from "react-slick";

var isMobile = window.innerWidth <= 500;
var styles = {
    image_style: {
        position: 'relative',
        height: (isMobile ? window.innerHeight/2 :window.innerHeight),
        width: '100%',
        flex: 1,
        alignContent: 'center',
    },
    container:{
        marginTop: '40px',
        position: 'relative',
        overflow: 'hidden',

    }, 
    rightArrow: {
        position:'absolute',
        top:'50%',
        right: isMobile ? '5.0%' : '2.5%',
        zIndex: '999',
    },
    leftArrow: {
        position:'absolute',
        top:'50%',
        left: isMobile ? '2.5%' : '2.5%',        
        zIndex: '999'
        
    }
};

var classes = {
    welcome_heading: "fade w3-container w3-text-white w3-padding-32 " + (isMobile ?  "w3-large w3-display-bottommiddle" : "w3-xxlarge w3-display-middle")
}

class SliderItem extends Component{
    render() {
        return (
            <div className="w3-display-container w3-center fade">
                <img src={this.props.image} style={styles.image_style} alt="homepage_image"/>
                <div className={classes.welcome_heading}>
                <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}


class AboutSection extends Component{

    render() {
        return (
            <div className="w3-container w3-content w3-center w3-padding-64" id="about">
              <h2 className="">About me</h2>
              <p className="w3-large "> I am Shubh Maheshwari.</p>
              <p className="w3-large "> Geek, Guitarist, Gregarious </p>
              <p className="w3-large "> Pursuing B.Tech in Computer Science at IIIT Hyderabad India. </p>
              <p className="w3-large "> I’m fiercely competitive personally/professionally but I lose gracefully. </p>
              <p className="w3-large "> My primary interests are Computer Vision, Deep Learning and contributing to a future of AI.</p>
            </div>
        );
    }
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", ...styles.rightArrow}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", ...styles.leftArrow}}
        onClick={onClick}
      />
    );
  }

class Homepage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            images: [
                {image:"./images/homepage.jpg",
                 text:"Welcome to my website"},
                {image:"./images/webgl_game.png",
                 text:"Play games I created"},
                 
                  ],
        }
      }


    mod = (x) => (x+this.state.slideLength)%this.state.slideLength;

    nextSlide = () => {
        this.setState({ slideCount: this.mod(this.state.slideCount + 1) })
    };
  
    previousSlide= () => {
        this.setState({ slideCount: this.mod(this.state.slideCount - 1) })
    };

    render () { 
        // console.log("Are we using Mobile: ",isMobile, this.state.slideCount)
        var settings = {
            accessibility: true,
            dots: true,
            infinite: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: 4000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };

        return (
            <div id="home" className="homePage" style={styles.container}>
                <Slider {...settings} >
                    {
                        this.state.images.map( (item, i) => (
                            <SliderItem key={i}
                            image={item.image}
                            text={item.text} 
                            />
                        ))
                    }
                </Slider>
                <AboutSection />
            </div>
        );
    }
}


export default Homepage;