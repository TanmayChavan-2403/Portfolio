import React, { Component } from 'react';
import './css/intro.css' ;

class Intro extends Component{
    constructor(props){
        super(props)
        this.state = {};
        
    }

    render(){
        return (
            <div>
                <div className = 'container' >
                    <div className= 'introduction'>
                        <p>
                            <i>
                                Hello! My name is <span> Tanmay Chavan </span>. I am avarage level programmer persuing degree from <span>  Royal college </span>
                                which is in Mira-road. I am a <span> Python developer </span> and also excelled at <span> HTML </span> and <span>CSS</span>. I  have basic knowledge of 
                                <span> C++ </span>,<span> JavaScript </span>,<span> Data structures </span> an planning to excell it in future. 
                                <br></br>
                                <br></br>
                                Currently i have completed <span> 6 projects </span> based on Python, JavaScript, Html ,Css & React. Topics which i learned 
                                in these projects are Web scraping, Asynchronous programming, Handling API(JSON, XML), Flask framework, React Framework,
                                Mysql and Tkinter.

                            </i>
                        </p>
                    </div>

                    <div id='skills'>

                        <div className='language'>
                            <div className ='langIcon'>
                                <img src='images/arrow.png'></img>
                            </div>
                            <p> Python  </p>
                            <div className = 'python percent'>
                                <h2>82%</h2>
                                <h2>82%</h2>
                            </div>
                        </div>

                        <div className='language'>
                            <div className ='langIcon'>
                                <img src='images/arrow.png'></img>
                            </div>
                            <p> JavaScript  </p>
                            <div className = 'javascript percent'>
                                <h2>60%</h2>
                                <h2>60%</h2>
                            </div>
                        </div>

                        <div className='language'>
                            <div className ='langIcon'>
                                <img src='images/arrow.png'></img>
                            </div>
                            <p> HTML5  </p>
                            <div className = 'html percent'>
                                <h2>90%</h2>
                                <h2>90%</h2>
                            </div>
                        </div>

                        <div className='language'>
                            <div className ='langIcon'>
                                <img src='images/arrow.png'></img>
                            </div>
                            <p> CSS  </p>
                            {/* I have kept class same as html becase it have exactly same properties */}
                            <div className = 'html percent'> 
                                <h2>90%</h2>
                                <h2 style={{animationDelay: '1s' }} >90%</h2>
                                
                            </div>
                        </div>

                        <div className='language'>
                            <div className ='langIcon'>
                                <img src='images/arrow.png'></img>
                            </div>
                            <p> MySQL  </p>
                            {/* I have kept class same as html becase it have exactly same properties */}
                            <div className = 'mysql percent'> 
                                <h2>20%</h2>
                                <h2>20%</h2>
                            </div>
                        </div>

                        <div className='language'>
                            <div className ='langIcon'>
                                <img src='images/arrow.png'></img>
                            </div>
                            <p> Github  </p>
                            {/* I have kept class same as html becase it have exactly same properties */}
                            <div className = 'github percent'> 
                                <h2>40%</h2>
                                <h2>40%</h2>
                            </div>
                        </div>

                        <div className='language'>
                            <div className ='langIcon'>
                                <img src='images/arrow.png'></img>
                            </div>
                            <p> ReactJS  </p>
                            {/* I have kept class same as html becase it have exactly same properties */}
                            <div className = 'react percent'> 
                                <h2>60%</h2>
                                <h2>60%</h2>
                            </div>
                        </div>

                        <div className='language'>
                            <div className ='langIcon'>
                                <img src='images/arrow.png'></img>
                            </div>
                            <p> Flask  </p>
                            {/* I have kept class same as html becase it have exactly same properties */}
                            <div className = 'flask percent'> 
                                <h2>60%</h2>
                                <h2>60%</h2>
                            </div>
                        </div>

                        <div className='language'>
                            <div className ='langIcon'>
                                <img src='images/arrow.png'></img>
                            </div>
                            <p> NodeJS  </p>
                            {/* I have kept class same as html becase it have exactly same properties */}
                            <div className = 'node percent'> 
                                <h2>00%</h2>
                                <h2>00%</h2>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        )
    }


}

export default Intro