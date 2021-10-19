import React, { Component } from 'react';
import './css/todos.css';

class Todos extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div className='todosContainer'>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/cross.png' alt='Cross image'></img>
                    </div>
                    <div className='todoStatus cross'>
                    </div>
                    <div className='todoName'>
                        <h2> Getting my first Job </h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/check.svg' alt='Check image'></img>
                    </div>
                    <div className='todoStatus check'>
                    </div>
                    <div className='todoName'>
                        <h2> Medical Billing Project </h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/cross.png' alt='Cross image'></img>
                    </div>
                    <div className='todoStatus cross'>
                    </div>
                    <div className='todoName'>
                        <h2> Learning AI </h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/cross.png' alt='Cross image'></img>
                    </div>
                    <div className='todoStatus cross'>
                    </div>
                    <div className='todoName'>
                        <h2> Learning Machine Learning </h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/check.svg' alt='Check image'></img>
                    </div>
                    <div className='todoStatus check'>
                    </div>
                    <div className='todoName'>
                        <h2> File Renamer </h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/check.svg' alt='Check image'></img>
                    </div>
                    <div className='todoStatus check'>
                    </div>
                    <div className='todoName'>
                        <h2> Website Based on Flask </h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/check.svg' alt='Check image'></img>
                    </div>
                    <div className='todoStatus check'>
                    </div>
                    <div className='todoName'>
                        <h2> Resume </h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/check.svg' alt='Check image'></img>
                    </div>
                    <div className='todoStatus check'>
                    </div>
                    <div className='todoName'>
                        <h2> Learning Javascript </h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/cross.png' alt='Cross image'></img>
                    </div>
                    <div className='todoStatus cross'>
                    </div>
                    <div className='todoName'>
                        <h2> Creating Chess in C++ </h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/cross.png' alt='Cross image'></img>
                    </div>
                    <div className='todoStatus cross'>
                    </div>
                    <div className='todoName'>
                        <h2> Learning C++ </h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src='images/check.svg' alt='Check image'></img>
                    </div>
                    <div className='todoStatus check'>
                    </div>
                    <div className='todoName'>
                        <h2> Creating JavaScript based Website [ Visualizer ]</h2>
                    </div>
                </div>
                <div className='todo'>
                    <div className='todoIcon'>
                        <img src= 'images/check.svg' alt='Check image'></img>
                    </div>
                    <div className='todoStatus check'>
                    </div>
                    <div className='todoName'>
                        <h2> Keep on Doing more and more projects :) </h2>
                    </div>
                </div>
            </div>
        )
    }

}

export default Todos;