import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
class Educations extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>EDUCATION</strong></h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-size"><strong>Web Development Professional Track Nano Degree Scholarship, Udacity, Online</strong>

                                        <br></br>
                                        <br></br>
                                        <span >Web Development Professional Track Nano Degree Scholarship provided by the EgyptFWD</span>
                                    </td>



                                    <td>October 2020 - December 2020</td>
                                    <td><Link to={{ pathname: 'https://drive.google.com/file/d/1RDOjJ1o6dhCln8RO50_jCh2dQ--822N5/view?usp=sharing' }} target="_blank" className='btn blue lighten-2'>
                                        View
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td className="font-size"><strong>Web Development Diploma, Senior Steps Training Institute, Cairo, Egypt</strong>
                                        <br></br>
                                        <br></br>
                                        <span >FrontEnd: HTML, CSS, JavaScript, Bootstrap, JQuery</span>
                                        <br></br>
                                        <span >BackEnd: PHP, SQL</span></td>
                                    <td>January 2019 - August 2019</td>
                                    <td><Link to={{ pathname: 'https://drive.google.com/file/d/1fa8EbwsIQnSsbcyKjhX7jT2j8rkIKFae/view?usp=sharing' }} target="_blank" className='btn blue lighten-2'>
                                        View
                                    </Link></td>

                                </tr>
                                <tr>
                                    <td className="font-size"><strong>Bachelor of Mass Communication (Grade Excellent), CIC (CANADIAN INTERNATIONAL COLLEGE), Cairo, Egypt</strong>

                                        <br></br>
                                        <br></br>
                                        <span >Bachelor of Mass Communication (PR & Advertising) <u>GRADE:</u> <strong>Excellent</strong></span>
                                    </td>



                                    <td>September 2013 -August 2017</td>
                                    <td><Link to={{ pathname: 'https://drive.google.com/file/d/1p1uiCa06AC6U8ZVs8VGcJIXB8IFvqTO9/view?usp=sharing' }} target="_blank" className='btn blue lighten-2'>
                                        View
                                    </Link></td>
                                </tr>
                                <tr>
                                    <td className="font-size"><strong>Courses</strong>


                                        <br></br>
                                        <span ><strong>English Courses, Berlitz</strong></span>
                                    </td>



                                    <td>2017 - 2019</td>
                                    <td><Link to={{ pathname: 'https://drive.google.com/file/d/1tGfTL444RGL1qr_n7F6UhiJuo-8YTZc-/view?usp=sharing' }} target="_blank" className='btn blue lighten-2'>
                                        View
                                    </Link></td>
                                    
                                 
                                    
                                    
                                    
                                </tr>
                                <tr>
                                    <td className="font-size"><strong>Courses</strong>


                                        <br></br>
                                        <span ><strong>German Course A1, DeutschAkademie</strong></span>
                                    </td>



                                    <td>February 2021 - May 2021</td>
                                    <td><Link to={{ pathname: 'https://drive.google.com/file/d/1WnJCNsYGuyNHUhKhDwQap6JkpGrXQma3/view?usp=sharing' }} target="_blank" className='btn blue lighten-2'>
                                        View
                                    </Link></td>
                                    
                                 
                                    
                                    
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Educations;
