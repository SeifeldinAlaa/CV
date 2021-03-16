import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-content'>
            <h6 className='mt-bottom'>
              <strong>ABOUT ME</strong>
              </h6>
              {/* <p className='grey-text'> */}
              <text style={{ color: "grey" }}>
              I am a Frontend Developer who graduated from The Canadian International College in Cairo CIC with an Overall Grade Excellent, who is willing to learn more and more at every step.
Also Finished A Degree at Udacity for the Professional Web Development Track which was a scholarship from FWD Egypt through the Ministry of Communications and Information Technology after passing the test for the scholarship I was selected to get full fund for the Udacity Nano Degree program which I already finished and The certificate is attached to my CV,I also did a Web Design and Web Development Diploma which I successfully finished and its Certificate is attached to my CV.
you can find my GitHub account link to check my work and all my continuous learning projects 

<br />
 https://github.com/SeifeldinAlaa
 <br />

I am always seeking to find the opportunity to work in a fun and challenging working environment that will encourage me to improve and learn new and necessary skills as well as being motivated by the company to do my best for the sake of helping myself and the company advance. I seek always being up to date with the latest web technologies as it is my hobby and the career I want to pursue.
<br />
My Dream is to work and evolve always which I work on continuously by always doing up to date courses and projects all I need is A chance and I will prove to you how hard working I am and how keen I am always to learn and stay up to date as this is the career I am passionate about.
</text>
          </div>
          <div className='card-action'>
            <h6>
              <strong>PERSONAL INFO</strong>
              </h6>
              <div className='row mt'>
                <div className='col s12 m6 l6 xl6'>
                  <p><strong>Address:</strong> El-Rehab City, New Cairo,Egypt</p>
                  <p><strong>Email:</strong> seifeldin.alaa@gmail.com</p>
                  <p><strong>Phone:</strong> 01007685933</p>
                </div>
                <div className='s12 m6 l6 xl6'>
                <p><strong>Native Language:</strong> Arabic</p>
                  <p><strong>First Language:</strong> English</p>
                  <p><strong>Second Language:</strong> German</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
