import React, { Component } from 'react';


class AboutUs extends Component {
    render() {
        return (
            <div className="container-fluid">
                <br/>
                <h1>About Me</h1>
                <br/>
                <div className="AboutMe">
                <p>
                I am from India . I completed my Bachelor's degree from Amravati University in the 2013 and since then I was working as a Technical Lead at Capgemini.In total I have around 4.8 years of IT experience. I was at London for an year to work at client location. After that i joined Pace university as a Computer Science Master student in 2018.
                </p>
                <p>
                <ul>
                    <li> Programming : </li>
                    <li> Playing Soccer :   <a href="https://www.fcbarcelona.com/">Click Here To Know Which Club I support</a> </li>
                    <li> Listening Music :</li>
                    <li> Modeling  :    <a href="https://www.instagram.com/chinmay_wanderer/?hl=en">Click Here To Know More</a></li>
                    <li> Travelling : </li>
                </ul>
            </p>
                </div>
            </div>
        );
    }
}

export default AboutUs;
