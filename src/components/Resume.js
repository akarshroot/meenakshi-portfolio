import React, { Fragment } from 'react'
import { SiLeetcode, SiLinkedin } from 'react-icons/si';
import './Resume.css'

function Resume() {
    return (
        <Fragment>
            <div className='resume-bg-image'>
                <div className='resume-bg-image-overlay'>
                </div>
            </div>
            <div className="col p-4 resume">
                <div className="p-4 slide-in-top">
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2">EDUCATION</h4>
                            <ul>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">BE - Computer Science & Engineering</h4>
                                    <h6 className="blue-label px-2 py-1">2020-2024</h6>
                                    <p className="m-0">Chitkara University</p>
                                    {/* <p>CGPA: </p> */}
                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">Class 12th</h4>
                                    <h6 className="blue-label px-2 py-1">2019-2020</h6>
                                    <p className="m-0">Paramount Convent Senior Secondary School</p>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2">CERTIFICATIONS</h4>
                            <ul>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">Advanced Web Technologies</h4>
                                    <h6 className="blue-label px-2 py-1">2022</h6>
                                    <p className="m-0">Coding Ninjas</p>
                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">Introduction to Web Technologies</h4>
                                    <h6 className="blue-label px-2 py-1">2021</h6>
                                    <p className="m-0">Coding Ninjas</p>
                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">Object Oriented Programming in Java</h4>
                                    <h6 className="blue-label px-2 py-1">2021</h6>
                                    <p className="m-0">Coding Ninjas</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="ff-jose ls-2">INTERESTS</h4>
                            <div className="row my-2">
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>Travel</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>Manual Arts</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>Yoga</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>Sports</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>Winning People</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Resume