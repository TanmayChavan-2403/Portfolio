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
                                Currently i have completed <span> 5 projects </span> based on Python, JavaScript, Html ,Css & React. Topics which i learned 
                                in these projects are Web scraping, Asynchronous programming, Handling API(JSON, XML), Flask framework, React Framework,
                                Mysql and Tkinter.

                            </i>
                        </p>
                    </div>


                    <div className='python language'>
                        <div className ='langIcon'>
                            <img src='images/arrow.png'></img>
                        </div>
                        <p> Python  </p>
                        <div className = 'percent py'>
                            <svg>
                                <circle cx='55' cy='55' r = '55' ></circle>
                                <circle cx='55' cy='55' r = '55' ></circle>
                            </svg>
                            <h1>82<span>%</span> </h1>
                        </div>

                    </div>

                    <div className='c language'>
                        <p> C++  </p>
                        <div className ='langIcon'>
                            <img src='images/arrow.png'></img>
                        </div>

                        <div className = 'percent clang'>
                            <svg>
                                <circle cx='55' cy='55' r = '55' ></circle>
                                <circle cx='55' cy='55' r = '55' ></circle>
                            </svg>
                            <h1> 5<span>%</span> </h1>
                        </div>
                    </div>

                    <div className='javascript language'>
                        <p> JavaScript  </p>
                        <div className ='langIcon'>
                            <img src='images/arrow.png'></img>
                        </div>
                        <div className = 'percent js'>
                            <svg>
                                <circle cx='55' cy='55' r = '55' ></circle>
                                <circle cx='55' cy='55' r = '55' ></circle>
                            </svg>
                            <h1> 75<span>%</span> </h1>
                        </div>
                    </div>

                    <div className='html language'>
                        <p> HTML  </p>
                        <div className ='langIcon'>
                            <img src='images/arrow.png'></img>
                        </div>
                        <div className = 'percent ht'>
                            <svg>
                                <circle cx='55' cy='55' r = '55' ></circle>
                                <circle cx='55' cy='55' r = '55' ></circle>
                            </svg>
                            <h1> 85<span>%</span> </h1>

                        </div>
                    </div>

                    <div className='css language'>
                        <p> CSS  </p>
                        <div className ='langIcon'>
                            <img src='images/arrow.png'></img>
                        </div>
                        <div className = 'percent cs'>
                            <svg>
                                <circle cx='55' cy='55' r = '55' ></circle>
                                <circle cx='55' cy='55' r = '55' ></circle>
                            </svg>
                            <h1> 85<span>%</span> </h1>

                        </div>
                    </div>

                    <div className='mysql language'>
                        <div className ='langIcon'>
                            <img src='images/arrow.png'></img>
                        </div>
                        <p> MySql  </p>
                        <div className = 'percent sql'>
                            <svg>
                                <circle cx='55' cy='55' r = '55' ></circle>
                                <circle cx='55' cy='55' r = '55' ></circle>
                            </svg>
                            <h1>50<span>%</span> </h1>
                        </div>

                    </div>

                    <div className='github language'>
                        <div className ='langIcon'>
                            <img src='images/arrow.png'></img>
                        </div>
                        <p> Github </p>
                        <div className = 'percent github'>
                            <svg>
                                <circle cx='55' cy='55' r = '55' ></circle>
                                <circle cx='55' cy='55' r = '55' ></circle>
                            </svg>
                            <h1>20<span>%</span> </h1>
                        </div>

                    </div>

                    <div className='react language'>
                        <div className ='langIcon'>
                            <img src='images/arrow.png'></img>
                        </div>
                        <p> ReactJS </p>
                        <div className = 'percent react'>
                            <svg>
                                <circle cx='55' cy='55' r = '55' ></circle>
                                <circle cx='55' cy='55' r = '55' ></circle>
                            </svg>
                            <h1>65<span>%</span> </h1>
                        </div>

                    </div>

                    <div className='flask language'>
                        <div className ='langIcon'>
                            <img src='images/arrow.png'></img>
                        </div>
                        <p> Flask </p>
                        <div className = 'percent flask'>
                            <svg>
                                <circle cx='55' cy='55' r = '55' ></circle>
                                <circle cx='55' cy='55' r = '55' ></circle>
                            </svg>
                            <h1>60<span>%</span> </h1>
                        </div>

                    </div>

                </div>
            </div>
        )
    }


}

export default Intro