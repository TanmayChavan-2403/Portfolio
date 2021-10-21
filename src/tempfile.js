                    <div className='navbar'>
                        <div className='intro nav' onClick={() => this.display(1, 'intro')} >  <h2> Introduction </h2>  </div>
                        <div className='hobbies nav' onClick={() => this.display(2, 'hobbies')}> <h2> Hobbies </h2>  </div>
                        <div className='extracurr nav' onClick={() => this.display(3, 'extracurr')}> <h2> Certifications </h2> </div>
                        <div className='projects nav' onClick={() => this.display(4, 'projects')}><h2> Projects </h2></div>
                        <div className='todos nav' onClick={() => this.display(5, 'todos')}><h2> Todo's </h2></div>
                        <div className='contact nav' onClick={() => this.display(6, 'contact')}><h2> Contact </h2></div>
                    </div>

                    <div className='content'>
                        {/* Page 1 container */}
                        <div className='pages' id='p1'>
                            {<Intro> </Intro>}
                        </div>
                        <div className='content-image' id='img1'>
                            <img src='images/introImage.png' ></img>
                        </div>

                        {/* Page 2 container */}
                        <div className='pages' id='p2' >
                            {<Hobbies> </Hobbies>}
                        </div>
                        <div className='content-image' id='img2'>
                            <img src='images/hobby.png' ></img>
                        </div>

                        {/* Page 4 container */}
                        <div className='pages' id='p4' >
                            {<Projects> </Projects>}
                        </div>
                        <div className='content-image' id='img4'>
                            <img src='images/project.png' ></img>
                        </div>


                        {/* Page 5 container */}
                        <div className='pages' id='p5' >
                            {<Todos> </Todos>}
                        </div>
                        <div className='content-image' id='img5'>
                            <img src='images/todo.png' ></img>
                        </div>


                        {/* Page 3 container */}
                        <div className='pages' id='p3' >
                            {<Extracurr> </Extracurr>}
                        </div>
                        <div className='content-image' id='img3'>
                            <img src='images/certification.png' ></img>
                        </div>


                        {/* Page 6 container */}
                        <div className='pages' id='p6'>
                            {<Contact> </Contact>}
                        </div>
                        <div className='content-image' id='img6'>
                            <img src='images/contact.png' ></img>
                        </div>

                    </div>
                