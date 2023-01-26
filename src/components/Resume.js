import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
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
                                <p className="m-0">XYZ Senior Secondary School</p>
                                <p>Grade: 99.9%</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.codechef.com/users/yagnik_003" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodechef className="zoom-on-hover"/>
                            </a> 
                            <a href="https://www.hackerrank.com/Yagnik_003" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiHackerrank className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume