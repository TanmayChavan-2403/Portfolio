import React, { Component } from 'react';
import './css/contact.css' ;

class Contact extends Component{
    
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700;800&display=swap" rel="stylesheet" /> 


                <div id='contact-container'>
                    <section id = 'details'>

                        <section id = 'contact-details'>
                            <section className='heading'>
                                <p>CONTACT</p>
                            </section>
                            <section className='detail-section'>
                                <section className = 'block'>
                                    <section className = 'img-block'>
                                        <img src='images/location.png'></img>
                                    </section>
                                    <section className = 'content-block'>
                                        <p> Mumbai, Maharashtra </p>
                                    </section>
                                </section>
                                <section className = 'block'>
                                <section className = 'img-block'>
                                    <img src='images/email.png'></img>
                                </section>
                                    <section className = 'content-block'>
                                        <p>tanmaychavan1306@gmail.com  </p>
                                    </section>
                                </section>
                                <section className = 'block'>
                                <section className = 'img-block'>
                                    <img src='images/phone.png'></img>   
                                </section>
                                    <section className = 'content-block'>
                                        +91 9372462820
                                    </section>
                                </section>
                                <section className = 'block'>
                                <section className = 'img-block'>
                                    <img src='images/website.png'></img>
                                </section>
                                    <section className = 'content-block'>
                                        <a> website </a>
                                    </section>
                                </section>
                            </section>
                        </section>


                        <section id = 'socialMedia-details'>
                            <section className='heading'>
                                SOCIAL MEDIA
                            </section>
                            <section className='detail-section'>
                                <section className = 'block'>
                                    <section className = 'img-block'>
                                        <img src='images/socialMedia/github.png'></img>
                                    </section>
                                    <section className = 'content-block'>
                                        <a href='https://github.com/TanmayChavan-2403' target='_black'> Github </a>
                                    </section>
                                </section>
                            
                                <section className = 'block'>
                                    <section className = 'img-block'>
                                        <img src='images/socialMedia/hackerRank.png'></img>
                                    </section>
                                    <section className = 'content-block'>
                                        <a href='https://www.hackerrank.com/tanmaychavan1306' target='_blank'> Hackerrank </a>
                                    </section>
                                </section>
                            
                                <section className = 'block'>
                                    <section className = 'img-block'>
                                        <img src='images/socialMedia/linkedIn.svg'></img>
                                    </section>
                                    <section className = 'content-block'>
                                        <a href='https://www.linkedin.com/in/tanmay-chavan-3b46b021b' target='_blank'> LinkedIn </a>
                                    </section>
                                </section>
                                
                                <section className = 'block'>
                                    <section className = 'img-block'>
                                        <img src='images/socialMedia/telegram.svg'></img>
                                    </section>
                                    <section className = 'content-block'>
                                        <a href='https://t.me/Natsu_Dragneel_01' target='_blank'> Telegram </a>
                                    </section>
                                </section>
                            
                                <section className = 'block'>
                                    <section className = 'img-block'>
                                        <img src='images/socialMedia/interviewBit.png'></img>
                                    </section>
                                    <section className = 'content-block'>
                                        <a href='https://www.interviewbit.com/profile/hackytech1306_dcd48fe6e932' target='_blank'> InterviewBit </a>
                                    </section>
                                </section>

                                <section className = 'block'>
                                    <section className = 'img-block'>
                                        <img src='images/socialMedia/codeChef.png'></img>
                                    </section>
                                    <section className = 'content-block'>
                                        <a href='https://www.codechef.com/users/hackytech' target='_blank'> Codechef </a>
                                    </section>
                                </section>

                                <section className = 'block'>
                                    <section className = 'img-block'>
                                        <img src='images/socialMedia/codeSignal.png'></img>
                                    </section>
                                    <section className = 'content-block'>
                                        <a href='https://app.codesignal.com/profile/hackytech' target='_blank'> Code Signal </a>
                                    </section>
                                </section>

                                <section className = 'block'>
                                    <section className = 'img-block'>
                                        <img src='images/socialMedia/leetCode.jpeg'></img>
                                    </section>
                                    <section className = 'content-block'>
                                        <a href='https://leetcode.com/Hackytech/' target='_blank'> Leet Code </a>
                                    </section>
                                </section>

                            </section>
                        </section>

                    </section>
                </div>
                
            </>

        )
    }
}

export default Contact