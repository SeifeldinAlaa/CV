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
              I am Public Relations & Advertising Major Graduate From CIC (CANDIAN INTERNATIONAL COLLEGE ) with GRADE: EXCELLENT, who is willing to learn more and more at every step.
              <br />
              <br />
              Also Finished A Degree at Udacity for the Professional Web Development Track that was a scholarship from FWD Egypt through the Ministry of Communications and Information Technology, after passing the test for the scholarship I was selected to get full fund for the Udacity Nano Degree program which I already finished and The certificate is attached to my CV.
              <br />
              <br />
              I also did a Web Design and Web Development Diploma which I successfully finished and its Certificate is attached to my CV.
              <br />
              <br />
              you can find my GitHub account link to check my work and all my continuous learning projects  https://github.com/SeifeldinAlaa
              <br />
              <br />
              I seek always being up to date with the latest web technologies.
              <br />
              <br />
              I also have Experience in Data Entry and Customer Service.
            </text>
          </div>
          <div className='card-action'>
            <h6>
              <strong>PERSONAL INFO</strong>
            </h6>
            <div className='row mt'>
              <div className='col s12 m6 l6 xl6'>
                <p><strong>Address:</strong> El Rehab City, Cairo, Egypt</p>
                <p><strong>Email:</strong> seifeldin.alaa@gmail.com</p>
                <p><strong>Phone:</strong> +201007685933</p>
              </div>
              <div className='col s12 m6 l6 xl6'>
                <p> <strong>Native Language:</strong> Arabic</p>


                <p> <strong>First Language:</strong> English</p>


                <p> <strong>Second Language:</strong> German</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
