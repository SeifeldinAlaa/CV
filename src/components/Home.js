import React, { Component } from 'react';
import Skills from './Skills';
import Experiences from './Experiences';
import About from './About';

import Profile from './Profile';
import Educations from './Educations';
import Projects from './Projects';

 export default class Home extends Component {
    render() {
        return ( 
                  <section>
                     
                 
                
                 <div className = "container">
                 <div className = "row">
                 <div className = "col s12 m4 l3">
                 <Profile />
                  </div>
                 <div className = "col s12 m8 l9">
                 <About />
                 <Skills />
                 <Experiences /> 
                  <Educations />
                 <Projects />
                 </div> 
                 </div>
                  </div> 
                  </section>
        );   
    }
}






