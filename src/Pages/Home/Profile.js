import React from 'react';
import { FaFacebook, FaGithubSquare, FaLinkedin, FaReact } from 'react-icons/fa';
import Typical from 'react-typical';
import borhan from '../../images/borhan.JPG';
import './Profile.css';

const Profile = () => {
    return (
        <div className='portfolio-profile text-white' id='profile'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='portfolio-img'>
                        <div className='profile-img'>

                        </div>
                    </div>
                    <div>
                        <ul className='flex'>
                            <li className='text-4xl mr-4'><a target='_blank' href="https://www.facebook.com/mdborhan.uddin.121/"><FaFacebook /></a></li>
                            <li className='text-4xl mr-4'><a target='_blank' href="https://github.com/MuhammadBorhan"><FaGithubSquare /></a></li>
                            <li className='text-4xl mr-4'><a target='_blank' href="https://www.linkedin.com/in/mdborhanuddin-majumder-3a37a61a4/"><FaLinkedin /></a></li>
                        </ul>
                        <h3 className='text-3xl font-bold text-indigo-300 my-2'>Hello I,m Borhan</h3>
                        <h1 className='text-3xl text-yellow-400 font-serif'>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Developer Borhan",
                                    1000,
                                    "MERN Stack Developer",
                                    1000,
                                    "React Developer",
                                    1000,
                                ]}
                            ></Typical>
                        </h1>
                        <p className='text-xl font-mono my-1'>Skill of building application with front and back end operations.</p>
                        <div className='flex items-center mt-2'>
                            <h3 className='btn btn-dark mr-2 text-2xl font-bold'>Hire Me</h3>
                            <a href="Borhan_Resume.pdf" download='Borhan_Resume.pdf'>
                                <button className="btn btn-primary rounded-full resume-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="blur hidden lg:block"
                    style={{
                        background: 'white',
                        // top: '10rem',
                        // position: 'relative',
                        width: '21rem',
                        height: '11rem',
                        opacity: '.2'
                        // left: '10rem'
                    }}
                ></div>
                <div className="blur hidden lg:block"
                    style={{
                        background: '#C1F5FF',
                        top: '-5rem',
                        position: 'relative',
                        width: '21rem',
                        height: '11rem',
                        opacity: '.2'
                        // left: '10rem'
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Profile;