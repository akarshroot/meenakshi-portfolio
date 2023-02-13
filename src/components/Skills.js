import React, { Fragment } from 'react'
import { SiJavascript, SiOracle, SiNodedotjs, SiReact, SiHtml5, SiCss3, SiCplusplus, SiMongodb, SiExpress, SiZoom } from 'react-icons/si'
import { FaAssistiveListeningSystems } from 'react-icons/fa'
import './Skills.css'

function Skills() {
    return (
        <Fragment>
            <div className="col py-3 d-flex align-items-center">
                <div className='skills-bg-image'>
                    <div className='skills-bg-image-overlay'>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                            <div>
                                <h1 className="font-big text-red slide-in-top">My Skill Set</h1>
                                <hr></hr>
                                <div className="row my-2">
                                    <h3 className="font-small text-white slide-in-top">Tech Skills</h3>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><SiMongodb className='fs-4' /> MongoDB</span>
                                    </div>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><SiExpress className='fs-4' /> Express</span>
                                    </div>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><SiReact className='fs-4' /> React</span>
                                    </div>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><SiNodedotjs className='fs-4' /> Node.js</span>
                                    </div>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><SiHtml5 className='fs-4' /> HTML</span>
                                    </div>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><SiCss3 className='fs-4' /> CSS</span>
                                    </div>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><SiJavascript className='fs-4' /> JavaScript</span>
                                    </div>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><SiOracle className='fs-4' /> Oracle 21C</span>
                                    </div>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><SiCplusplus className='fs-4' /> C++</span>
                                    </div>
                                </div>

                                <div className="row my-2">
                                    <h3 className="font-small text-white slide-in-top">Soft Skills</h3>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span>Interpersonal Skills</span>
                                    </div>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><FaAssistiveListeningSystems className='fs-4' /> Active Listening</span>
                                    </div>
                                    <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                        <span><SiZoom className='fs-4' /> Virtual Collaboration</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-fluid" src="../images/Development-pana.png" alt="..."></img>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Skills