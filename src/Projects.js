import React, { Component } from 'react';

const isMobile = window.innerWidth <= 500;

class Projects extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            timeline_item: [
                {image:"./images/robotics.jpg",
                title:"Robotics",
                text:"At CVIT we developed a robot which gives us a tour of research lab."},
                {image:"./images/DP.jpg",
                 title:"Deep Learning",
                 text:"Era of deep learning is here!!!"},
                 {image:"./images/AI.jpg",
                title:"Machine Learning",
                text:"Data analytics and much more"},
                {image:"./images/Web_Security.png",
                 title:"Web Security",
                 text:"CSRF attacks and how to prevent them"},
                {image:"./images/chatbot.png",
                title:"AI Bots",
                text:"Simple bots to beat humans."},
                {image:"./images/CP.jpg",
                title:"Competitive programming",
                text:""},
                {image:"./images/homepage.jpg",
                title:"My Website",
                text:"Look into how I made this website"},
                {image:"./images/webgl.gif",
                 title:"Game Design",
                 text:"Checkout the new tunnel rush I made."}
                  ],
        }
      }
    
    componentDidMount() {
        
        // To run a static js for timeline
        const js = document.createElement('script');
        js.type = 'text/javascript';
        js.async = true;
        js.innerHTML = '$("#timeline-1").timeline()';
        this.instance.appendChild(js);
      }
    

    render () { 
        return (            
            <div id="projects">
                
                <div className="timeline-container" id="timeline-1">
                    <div className="timeline-header">
                        <h2 className="timeline-header__title"> My Projects</h2>
                        <h3 className="timeline-header__subtitle">How intresting computer science is</h3>
                    </div>
  
                    <div className="timeline">
                    {
                        this.state.timeline_item.map( (item, i) => (
                            <div className="timeline-item" data-text="My Projects" key={i}>
                                <div className="timeline__content"><img className="timeline__img" src={item.image}/>
                                    <h2 className="timeline__content-title">{item.title}</h2>
                                    <p className="timeline__content-desc">{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                
                {/* Run the static js */}
                <div ref={el => (this.instance = el)} />
            </div>
        );
    }
}

export default Projects;
