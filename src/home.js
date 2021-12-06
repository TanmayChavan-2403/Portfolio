import React, { Component } from 'react';
import './routes/css/home.css';
import Intro from './routes/intro.js';
import Hobbies from './routes/hobbies.js';
import Projects from './routes/projects.js';
import Todos from './routes/todos.js';
import Extracurr from './routes/extracurr.js'
import Contact from './routes/contact.js'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            divContainer: null,
            btnContainer: null,
            // containerImage: null,
        }
    };

    manageDimention(){
        // Setting size of content container
        let navbarHeight = document.getElementById('navbar').offsetHeight
        let footerHeight = document.getElementById('footer').offsetHeight
        document.getElementById('content').style.height = `${footerHeight - navbarHeight}px`;
    }

    componentDidMount(){

        // Setting size of content container
        let navbarHeight = document.getElementById('navbar').offsetHeight
        let footerHeight = document.getElementById('footer').offsetHeight
        document.getElementById('content').style.height = `${footerHeight - navbarHeight}px`;

        // Code responsible for slideshow
        this.setState({
            divContainer: document.getElementById('p1'),
            btnContainer: document.querySelector('.intro'),
        })
        const folder = 'demonSlayer';
        const numOfImages = 16;
        var currImage = 1;
        setInterval(() => {
            let imgContainer = document.getElementById('slideShow');
            imgContainer.src = `/images/rightContainer/${folder}/profile ${currImage}.png`;
            document.getElementsByTagName('body')[0].style.backgroundImage = `url('/images/rightContainer/${folder}/profile ${currImage}.png')`;

            if (currImage == numOfImages){
                currImage = 1
            } else {
                currImage += 1
            }
        }, 5000)

        // Setting subscription
        window.addEventListener('resize', this.manageDimention)
        
    }

    display(id, btn) {
        if (this.state.divContainer) {
            this.state.divContainer.style.display = 'none';
            this.state.btnContainer.style.background = 'none';
            this.state.btnContainer.style.color = 'white';
        }
        const container = document.getElementById(`p${id}`);
        const button = document.querySelector(`.${btn}`);
        container.style.display = 'block';
        button.style.background = '#232d48';
        button.style.color = '#ffcc29';         

        this.setState({
            divContainer: container,
            btnContainer: button,
        });
    }


    render() {
        return (
            <>
                <div id = 'background'></div>
                <div id='portfolio-main-container'>
                    <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" /> 
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Rubik&family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
                    
                    <section id='left-container'>
                        <section id ='header'>
                            <div id='name'>
                                <h1> TANMAY  <span> CHAVAN </span> 
                                    <sub> <i> &lt; Full Stack Developer / &gt; </i> </sub>
                                </h1>
                            </div>
                            {/* <div id='profilePic'>
                                <img src='images/photo.png'></img>
                            </div> */}
                        </section>

                        <section id='footer'>
                            <div id='navbar'>
                                <div className='intro nav' onClick={() => this.display(1, 'intro')} >  <h2> Introduction </h2>  </div>
                                <div className='hobbies nav' onClick={() => this.display(2, 'hobbies')}> <h2> Hobbies </h2>  </div>
                                <div className='extracurr nav' onClick={() => this.display(3, 'extracurr')}> <h2> Certifications </h2> </div>
                                <div className='projects nav' onClick={() => this.display(4, 'projects')}><h2> Projects </h2></div>
                                <div className='todos nav' onClick={() => this.display(5, 'todos')}><h2> Todo's </h2></div>
                                <div className='contact nav' onClick={() => this.display(6, 'contact')}><h2> Contact </h2></div>
                            </div>

                            <div id='content'>

                                {/* Page 1 container */}
                                <div className='pages' id='p1'>
                                    {<Intro> </Intro>}
                                </div>

                                {/* Page 2 container */}
                                <div className='pages' id='p2' >
                                    {<Hobbies> </Hobbies>}
                                </div>
                                {/* <div className='content-image' id='img2'>
                                    <img src='images/hobby.png' ></img>
                                </div> */}

                                {/* Page 3 container */}
                                <div className='pages' id='p3' >
                                    {<Extracurr> </Extracurr>}
                                </div>
                                {/* <div className='content-image' id='img3'>
                                    <img src='images/certification.png' ></img>
                                </div> */}

                                {/* Page 4 container */}
                                <div className='pages' id='p4' >
                                    {<Projects> </Projects>}
                                </div>
                                {/* <div className='content-image' id='img4'>
                                    <img src='images/project.png' ></img>
                                </div> */}


                                {/* Page 5 container */}
                                <div className='pages' id='p5' >
                                    {<Todos> </Todos>}
                                </div>
                                {/* <div className='content-image' id='img5'>
                                    <img src='images/todo.png' ></img>
                                </div> */}


                                
                                {/* Page 6 container */}
                                <div className='pages' id='p6'>
                                    {<Contact> </Contact>}
                                </div>
                                {/* <div className='content-image' id='img6'>
                                    <img src='images/contact.png' ></img>
                                </div> */}
                            </div>

                        </section>

                    </section>

                    <section id='right-container'>
                        <img src='/images/rightContainer/demonSlayer/profile 5.png' id='slideShow'></img>
                    </section>

                    <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
                </div>
            </>
        )
    }
}

export default Home