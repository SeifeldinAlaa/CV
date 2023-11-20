import React, { Component } from 'react';
import ImgProfile from '../images/Seif_Alaa.jpg';
import { HashLink as Link } from 'react-router-hash-link';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-image'>
                        <img className='activator' src={ImgProfile} alt='Seif Alaa' />
                        <Link className='btn-floating halfway-fab waves-effect wave-light red'>
                            <i className='material-icons activator'>more_vert</i>
                        </Link>

                    </div>
                    <div className='card-content'>
                        <span className='card-title activator grey-text text-darken-4'>
                            Seif Alaa
                        </span>
                        <p> Web Developer / Data Entry</p>
                    </div>
                    <div className='card-reveal'>
                        <span className='card-title grey-text text-darken-4'>
                            Follow Me
                            <i className='material-icons right'>close</i>
                        </span>
                        <p className='flex-container'>
                            <a href="https://www.facebook.com/seif.alaa.10/">  <i className='fab fa-facebook-f grey-text text-darken-4 social-style'></i></a>

                            <a href="https://github.com/SeifeldinAlaa">   <i class="fab fa-github" style={{ 'color': 'black' }}></i></a>

                            <a href="https://www.instagram.com/seif_alaa_1408/"> <i className='fab fa-instagram grey-text text-darken-4 social-style'></i></a>
                            <a href="https://www.linkedin.com/in/seifeldin-alaa-b27049123/"> <i class="fab fa-linkedin" style={{ 'color': 'black' }}></i></a>
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}


export default Profile;