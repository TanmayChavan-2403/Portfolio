import React, { Component } from 'react';
import './css/hobbies.css' ;

class Hobbies extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <div className='hobbiesContainer'>

                    <div className = 'hobby novel'>
                        <div className='hobbyIcon'>
                            <img src="images/novel.png"></img>
                        </div>
                        <div className = 'hobbyName'>
                            <h2> Reading Novels </h2>
                        </div>
                    </div>

                    <div className = 'hobby badminton'>
                        <div className='hobbyIcon'>
                            <img src='images/badminton.png' ></img>
                        </div>
                        <div className = 'hobbyName'>
                            <h2> Playing Badminton </h2>
                        </div>
                    </div>

                    <div className = 'hobby IT'>
                        <div className='hobbyIcon'>
                            <img src='images/chess.png' ></img>
                        </div>
                        <div className = 'hobbyName'>
                            <h2> Playing Chess </h2>
                        </div>
                    </div>
                    <div className = 'hobby sketching'>
                        <div className='hobbyIcon'>
                            <img src='images/sketching.png' ></img>
                        </div>
                        <div className = 'hobbyName'>
                            <h2> Sketching </h2>
                        </div>
                    </div>
                    <div className = 'hobby programming'>
                        <div className='hobbyIcon'>
                            <img src='images/programming.png' ></img>
                        </div>
                        <div className = 'hobbyName'>
                            <h2> Programming </h2>
                        </div>
                    </div>
                    <div className = 'hobby projects'>
                        <div className='hobbyIcon'>
                            <img src='images/project.png' ></img>
                        </div>
                        <div className = 'hobbyName'>
                            <h2> Making projects </h2>
                        </div>
                    </div>

                    <div className = 'hobby Music'>
                        <div className='hobbyIcon'>
                            <img src='images/music.png' ></img>
                        </div>
                        <div className = 'hobbyName'>
                            <h2> Listening to songs </h2>
                        </div>
                    </div>

                    <div className = 'hobby Anime'>
                        <div className='hobbyIcon'>
                            <img src='images/anime.svg' ></img>
                        </div>
                        <div className = 'hobbyName'>
                            <h2> Watching Anime </h2>
                        </div>
                    </div>



                </div>
            </div>
        )
    }

}

export default Hobbies;