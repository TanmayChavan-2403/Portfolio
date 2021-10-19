import React, { Component } from 'react';
import './css/projects.css';

class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toggled: [],
        }
    }

    toggleContainer(id, height) {
        let arrow = document.querySelectorAll('.projectArrow')[id];
        let content = document.querySelectorAll('.prj')[id];

        if (this.state.toggled.includes(id)) {
            console.log(this.state.toggled);
            arrow.style.transform = 'rotate(-90deg)';
            content.style.height = '80px';
            this.setState({
                toggled: this.state.toggled.filter(element => {
                    return id !== element;
                })
            })
        }
        else {
            console.log('Its reaching here');
            content.style.height = `${height}px`;
            arrow.style.transform = 'rotate(90deg)';
            this.setState({
                toggled: [...this.state.toggled, id],
            })
        }
    }

    render() {
        return (
            <div className='projectContainer'>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,200;0,300;0,400;1,200;1,300&display=swap" rel="stylesheet" /> 
                <div className='projects'>

                    <div className='medicalBilling prj'>
                        <div className='projectIcon'>
                            <img src='images/mysql.svg'></img>
                        </div>
                        <div className='projectName'>
                            <h2> Medical Billing Software </h2>
                        </div>
                        <div className='projectArrow' onClick={() => this.toggleContainer('0', 330)}>
                            <img src='images/dirArrow.png'></img>
                        </div>
                        <div className='projectContent'>
                            <p>
                                Medical billing software is basic software created using <span>Python </span>,<span> Tkinter </span>and
                                <span> MySql</span>.
                                This was my first project of my first year so it contains very basic functionality like taking order
                                from customers and printing the bill, checking medicine availibility in database, adding
                                new medicines in database, updating medicine values.
                                <br></br>
                                <br></br>
                                I also did my best handling all possible errors and displaying them as a message, warning or error.
                                For e.g. If owner tries to add new medicine in database and if that medicine is already availaible, then info dialogue box will appear saying that
                                <span><i> "This medicine is already availaibe in database"</i></span>

                            </p>
                        </div>
                    </div>

                    <div className='fileRenamer prj'>
                        <div className='projectIcon'>
                            <img src='images/programming.png'></img>
                        </div>
                        <div className='projectName'>
                            <h2> File Renamer </h2>
                        </div>
                        <div className='projectArrow' onClick={() => this.toggleContainer('1', 350)}>
                            <img src='images/dirArrow.png'></img>
                        </div>
                        <div className='projectContent'>
                            <p>
                                File renamer is my second project base on Python & Tkinter  which can rename all the files,
                                present in the browsed folder. My main motive behind creating this software was
                                to get my hands on OS module, but later on as i kept adding functionality to this
                                software it became a project.
                                <br></br>
                                <br></br>
                                <span> I have created my own file browsing system </span> instead
                                of using inbuilt functions. It consists of all basic fucntionality like navigation path
                                on the top, Back and forward button error handling etc. It takes file name from user and bydefault
                                it adds a incremental number in front of every renamed file.
                                After renaming is done a dialogue box appears telling us which files is renamed by what name in order
                                to confirm that file are renamed properly.

                            </p>
                        </div>
                    </div>


                    <div className='algoVisuilizer prj'>
                        <div className='projectIcon'>
                            <img src='images/javascript.svg'></img>
                        </div>
                        <div className='projectName'>
                            <h2> Algorithm Visualizer </h2>
                        </div>
                        <div className='projectArrow' onClick={() => this.toggleContainer('2', 330)}>
                            <img src='images/dirArrow.png'></img>
                        </div>
                        <div className='projectContent'>
                            <p>
                                Algorithm visualizer is a project which visualizes various algorithms mainly <span>Dijsktra's algorithm. </span>
                                I created this project when i was in 2nd year inspired by an example present on Wikipedia. Entire idea
                                is same i just added little bit of spice in it to make it different and added some more funtionalities of
                                my own to make it even better.
                                <br></br>
                                <br></br>
                                Project's name is  <span> Catch the Thief </span>. Idea behind this name is that we have to deploy one police officer 
                                andthieves on the grid. Number of thieves depends on what you give in input, after deploying thieves you have to give a 
                                target thief as a boss and several algorithms will run inorder to catch that thief

                            </p>
                        </div>
                    </div>


                    <div className='resume prj'>
                        <div className='projectIcon'>
                            <img src='images/react.svg'></img>
                        </div>
                        <div className='projectName'>
                            <h2> Resume </h2>
                        </div>
                        <div className='projectArrow' onClick={() => this.toggleContainer('3', 170)}>
                            <img src='images/dirArrow.png'></img>
                        </div>
                        <div className='projectContent'>
                            <p>
                                This resume project <span>[ The one which you are currently looking at ]</span> is a basic web app created using React Framework, Html & Css.
                            </p>
                        </div>
                    </div>



                    <div className='otakuStash prj'>
                        <div className='projectIcon'>
                            <img src='images/flask.svg'></img>
                        </div>
                        <div className='projectName'>
                            <h2> OtakuStash Website for Weebs </h2>
                        </div>
                        <div className='projectArrow' onClick={() => this.toggleContainer('4', 450)}>
                            <img src='images/dirArrow.png'></img>
                        </div>
                        <div className='projectContent'>
                            <p>
                                OtakuStash is the heaviest project among all of the above.<span> This website is created in Python[Flask] </span>
                                for Otaku's [ Anime lovers ]. I Used API of <span> myanimelist.com,  anilist.co & animenewsnetwork.com </span> to fetch 
                                details for series. I created web scrapers to scrape episodes from other websites to provide downloading functionality in 
                                my website. I leaned Asynchronous Programming in order to parse XML data retireved from animenewsnetwork.com which gave me 
                                hands on experience on how to use Asynchronous programming to boost performance.
                                <br></br>
                                <br></br>

                                I tried implementing Graphics and smoothness to website to make it more attractive using Css for which, I learned
                                advance Css. I have also added manny intresting features in this website like changing theme, font, avatars. I have
                                used MySql database inorder to store user registration information. The password which are stored in database are encrypted 
                                for security. And still planning to add some more features in this website in future...
                            </p>
                        </div>
                    </div>


                    <div className='shopManagement prj'>
                        <div className='projectIcon'>
                            <img src='images/firebase.svg'></img>
                        </div>
                        <div className='projectName'>
                            <h2> Shop Management  [ E-commerse ] </h2>
                        </div>
                        <div className='projectArrow' onClick={() => this.toggleContainer('5', 450)}>
                            <img src='images/dirArrow.png'></img>
                        </div>
                        <div className='projectContent'>
                            <p>
                                Shop management website is E-commerce website developed for college project. I have used HTML for markup language, CSS for 
                                styling, JS for logic and Firebase for backend. In this project I learned to host website on firebase hosting and also got
                                more experience on HTML, CSS and JS. It includes login and registration form with all types of validation, a pannel which 
                                lies in user settings for shop owner to manage items like add new product or remove one. 
                                <br></br>
                                <br></br>
                                Customer login also have a pannel in user settings with all necessary features like updating username, password, email, avatar,
                                address. It also includes order history list which keeps track of orders along with time and date. In this project I have tried 
                                to improve my CSS and JS skills and also got hands on experience on how to host websites on firebase and github. <a href='' target="_blank">Here is link
                                of website. </a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Projects;