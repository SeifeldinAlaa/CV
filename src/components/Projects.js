import React, { Component } from 'react';
import Gym from '../images/gym-website.PNG';
import Hospital from '../images/hospital.JPG';
import RealEstate from '../images/real_estate.JPG'
import Weather from '../images/Weather_Journal_App.PNG';
import LandingPage from '../images/Landing_Page.PNG';
import WeatherAppReact from '../images/WeatherAppReact.PNG';
import RegistrationForm from '../images/Registration_Form.PNG';
import Bird_Shooting_JavaScript_Game from '../images/Bird_Shooting_JavaScript_Game.PNG';
import Teachers from '../images/Teachers.PNG';
import SocialFollowComponent from '../images/Social_Follow_Component.PNG';
import MyPortfolio from '../images/My_Portfolio.PNG';
import ToDoListReact from '../images/To_Do_List_React.PNG';
import { HashLink as Link } from 'react-router-hash-link';
export default class Projects extends Component {
    render() {
        return <div>
            <div className="card">
                <div className="card-content">
                    <h6><strong>Projects</strong></h6>
                    <p><strong>Hospital App:</strong></p>
                    <p style={{ 'font-size': '13px' }}> A Responsive React Hospital App Sample which shows the hospital information, Doctors information and Clinics information using React App, HTML and CSS.

                        With A contact form and whats app chat connection</p>
                    <Link className='text-wrap' to={{ pathname: 'https://hospital-arabic.netlify.app' }} target="_blank" >
                        <img src={Hospital} style={{ 'width': '80%', 'height': '80%' }} alt="A Responsive React Hospital App Sample which shows the hospital information, Doctors information and Clinics information using React App, HTML and CSS.

With A contact form and whats app chat connection" />
                        <br /> https://hospital-arabic.netlify.app </Link>
                    <br></br>
                    <p><strong>Real Estate App:</strong></p>
                    <p style={{ 'font-size': '13px' }}> A Responsive Real Estate App Sample which shows the different projects of the Company, the construction projects and the Company Information using React App.

                        With A contact form and whats app chat connection</p>
                    <Link className='text-wrap' to={{ pathname: 'https://real-estate-sample-arabic.netlify.app' }} target="_blank" >
                        <img src={RealEstate} style={{ 'width': '80%', 'height': '80%' }} alt="A Responsive Real Estate App Sample which shows the different projects of the Company, the construction projects and the Company Information using React App.

With A contact form and whats app chat connection" />
                        <br /> https://real-estate-sample-arabic.netlify.app </Link>
                    <br></br>
                    <p><strong>Responsive Gym Website Design:</strong></p>
                    <p style={{ 'font-size': '13px' }}> Responsive Web Design using Html, Css and Javascript.</p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/GYM_Website_Responsive' }} target="_blank" >
                        <img src={Gym} style={{ 'width': '80%', 'height': '80%' }} alt="Responsive Web Design using Html, Css and Javascript" />
                        https://github.com/SeifeldinAlaa/GYM_Website_Responsive </Link>
                    <br></br>
                    <p><strong>Udacity Weather Journal App:</strong></p>
                    <p style={{ 'font-size': '13px' }}>A javascript app to get the weather data from https://openweathermap.org/api using nodejs server and dynamically updating the UI.</p>
                    <Link className='text-wrap' text='https://github.com/SeifeldinAlaa/Udacity_weather_journal_app' to={{ pathname: 'https://github.com/SeifeldinAlaa/Udacity_weather_journal_app' }} target="_blank" >
                        <img src={Weather} style={{ 'width': '80%', 'height': '80%' }} alt="Udacity Weather Journal App" />
                        https://github.com/SeifeldinAlaa/Udacity_weather_journal_app</Link>
                    <br></br>
                    <p><strong>Udacity Landing Page:</strong></p>
                    <p style={{ 'font-size': '13px' }}>A JavaScript app which creates a Navbar dynamically according to the present sections and updates the UI.</p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/Udacity_landingpage_project' }} target="_blank" >
                        <img src={LandingPage} style={{ 'width': '80%', 'height': '80%' }} alt="Udacity Landing Page" />
                        https://github.com/SeifeldinAlaa/Udacity_landingpage_project</Link>
                    <br></br>
                    <p><strong>Weather App React:</strong></p>
                    <p style={{ 'font-size': '13px' }}>A react app to get the weather data from https://openweathermap.org/api using city name.</p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/WeatherAppReact' }} target="_blank" >
                        <img src={WeatherAppReact} style={{ 'width': '80%', 'height': '80%' }} alt="Weather App React" />
                        <br></br>
                        https://github.com/SeifeldinAlaa/WeatherAppReact
                    </Link>
                    <br></br>
                    <p><strong>Weather App PHP Api:</strong></p>
                    <p style={{ 'font-size': '13px' }}>A PHP app to get weather data.</p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/WeatherAppApi' }} target="_blank">https://github.com/SeifeldinAlaa/WeatherAppApi</Link>
                    <br></br>
                    <p><strong>Websites created using Wordpress:</strong></p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/WordPress' }} target="_blank">https://github.com/SeifeldinAlaa/WordPress</Link>
                    <br></br>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/WordPress2' }} target="_blank">https://github.com/SeifeldinAlaa/WordPress2</Link>
                    <br></br>
                    <p><strong>To Do List React:</strong></p>
                    <p style={{ 'font-size': '13px' }}>A To Do List created using react.</p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/To_Do_List_React' }} target="_blank" >
                        <img src={ToDoListReact} style={{ 'width': '60%', 'height': '80%', 'color': 'red' }} alt="To Do List React" />
                        <br></br>
                        https://github.com/SeifeldinAlaa/To_Do_List_React
                    </Link>
                    <br></br>
                    <p><strong>Bird shooting JavaScript Game:</strong></p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/JavaScript_Game' }} target="_blank">
                        <img src={Bird_Shooting_JavaScript_Game} style={{ 'width': '80%', 'height': '80%' }} alt="Bird shooting JavaScript Game" />
                        <br></br>
                        https://github.com/SeifeldinAlaa/JavaScript_Game
                    </Link>
                    <br></br>
                    <p><strong>Teachers Accounts Website:</strong></p>
                    <p style={{ 'font-size': '13px' }}>A website which shows teachers information like Teacher's name, age, followers and pictures.</p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/Teachers' }} target="_blank" >
                        <img src={Teachers} style={{ 'width': '80%', 'height': '80%' }} alt="Teachers" />
                        <br></br>
                        https://github.com/SeifeldinAlaa/Teachers
                    </Link>
                    <br></br>
                    <p><strong>Registration Form:</strong></p>
                    <p style={{ 'font-size': '13px' }}>A HTML Registration Form which submits your registration's data.</p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/Registration_Form' }} target="_blank">
                        <img src={RegistrationForm} style={{ 'width': '80%', 'height': '80%' }} alt="Registration Form" />
                        <br></br>
                        https://github.com/SeifeldinAlaa/Registration_Form
                    </Link>
                    <br></br>
                    <p><strong>My Portfolio:</strong></p>
                    <p style={{ 'font-size': '13px' }}>A Portfolio React app which contains my information and my projects.</p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/My_Portfolio' }} target="_blank">
                        <img src={MyPortfolio} style={{ 'width': '80%', 'height': '80%' }} alt="My Portfolio" />
                        <br></br>
                        https://github.com/SeifeldinAlaa/My_Portfolio
                    </Link>
                    <br></br>
                    <p><strong>Social Follow Component:</strong></p>
                    <p style={{ 'font-size': '13px' }}>A react app which creates social media icons as links and connects to social media channels.</p>
                    <Link className='text-wrap' to={{ pathname: 'https://github.com/SeifeldinAlaa/Social_Follow_Component' }} target="_blank" >
                        <img src={SocialFollowComponent} style={{ 'width': '80%', 'height': '80%' }} alt="Social Follow Component" />
                        <br></br>
                        https://github.com/SeifeldinAlaa/Social_Follow_Component
                    </Link>
                </div>

            </div>

        </div>;
    }
}


