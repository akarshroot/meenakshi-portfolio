import React, { Fragment } from 'react'

function About() {
    return (
        <Fragment>
            <div className="col py-3 d-flex align-items-center about-image">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                            <div>
                                <h1 className="font-big text-red slide-in-top">About me</h1>
                                <hr></hr>
                                <p className='slide-in-bottom'>An ambitious student, a self-led learner and a team player
                                    currently exploring my own self and looking to build a good foundation for my career.
                                </p>
                                <p className='slide-in-bottom'>
                                    I would also like to introduce myself as an explorer. I’ve spent quite some time visiting new
                                    places and getting to know various cultures. I am overall a pretty extroverted person. I’m also
                                    a member of the National Service Scheme as I find peace in helping the needy. I’m also a big supporter of sustainable development
                                    and I try to participate in many events that aim on preserving the environment.
                                </p>
                                <p className='slide-in-bottom'>
                                    I have a strong STEM foundation. In the recent years during my bachelor's degree, I've been learning to work on modern technologies.<br></br>
                                </p>
                                <p className="slide-in-bottom">
                                    Some of the technologies I've worked with include : <br /><span className="text-red ls-2">React.js Node.js, Express.js, HTML, CSS, MongoDb, Oracle 21c </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                        </div>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}

export default About