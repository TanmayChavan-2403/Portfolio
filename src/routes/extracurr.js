import React, { Component } from 'react';
import './css/extracurr.css' ;

class Extracurr extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }


    render(){
        return (
            <div className='extracurrContainer'>
                <div id = "certifications">
                    <div id = 'badge-details'>
                        <div className="bdg">
                            <div class="badge-image">
                                <img src="images/participation.png"></img>
                            </div>
                            <h2>
                                Participation Badge
                            </h2>
                        </div>
                        <div className="bdg">
                            <div class="badge-image">
                                <img src="images/completion.png"></img>
                            </div>
                            <h2>
                                Completion Badge
                            </h2>
                        </div>
                    </div>

                    < div id = "certificates">
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default Extracurr;