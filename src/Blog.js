import React, { Component } from 'react';

const isMobile = window.innerWidth <= 500;

class Blog extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            timeline_item: [
                {image:"./images/homepage.jpg",
                title:"Welcome to my website",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                {image:"./images/webgl_game.png",
                 title:"Play games I created",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
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
            <div id="blog">
                
                <div className="timeline-container" id="timeline-1">
                    <div className="timeline-header">
                        <h2 className="timeline-header__title"> Blog Post</h2>
                        <h3 className="timeline-header__subtitle">Random stuff in random life</h3>
                    </div>
  
                    <div className="timeline">
                    {
                        this.state.timeline_item.map( (item, i) => (
                            <div className="timeline-item" data-text="My Proje" key={i}>
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

export default Blog;
