import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { todo1 } from '../assets/todo-1.png'

function MyWork() {
    return (
        <Fragment>
            <div className="col p-4">
                <div className="p-4 slide-in-top">

                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2">Some Projects And Volunteer Work...</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/w-01.png" className="d-block w-100" alt="..." />
                                    </div>
                                    {/* <div className="carousel-item">
                                <img src="../portfolio-images/w-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/w-03.png" className="d-block w-100" alt="..."/>
                                </div> */}
                                </div>
                                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                            </div>
                            <h5 className="ff-jose my-1">To-Do App</h5>
                            <div className="row d-flex justify-content-center">
                                <p>Built using the MERN stack, this project helps users keep track of their daily tasks.</p>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/m-01.png" className="d-block w-100" alt="..." />
                                    </div>
                                    {/* <div className="carousel-item">
                                <img src="../portfolio-images/m-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/m-03.png" className="d-block w-100" alt="..."/>
                                </div> */}
                                </div>
                                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                            </div>
                            <div>
                                <h5 className="ff-jose my-1">Pomodoro Clock</h5>
                                <div className="row d-flex justify-content-center">
                                    <p>Blocking out time for specific activities allows you to focus on one task at a time, limit distractions and procrastination.</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4 text-center my-2">
                            <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/solo-01.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/solo-02.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/solo-03.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/solo-04.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">Kalagram</h5>
                            <div className="row d-flex justify-content-center">
                                <p>NSS Outreach Programme</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MyWork