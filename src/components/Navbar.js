import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import {HashLink as Link} from 'react-router-hash-link';


  
  
   class Navbar extends Component {

    state = {clicked:false}
      render() {
          return (
             <nav className="NavbarItems">
             <h1 className="navbar-logo">Web Developer</h1>
             <div className="menu-icon" onClick={this.handleClick}>
<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
             </div>
             <ul className="right hide-on-med-and-down">
                 {MenuItems.map((item, index) => {
return (
<li key={index}><Link className={item.cName} to={item.url}>
    <i className={item.iconCName}></i> {item.title}
    </Link></li>    
)

                 })}


             </ul>
             </nav>
          )
      }
  }

  export default Navbar
  


