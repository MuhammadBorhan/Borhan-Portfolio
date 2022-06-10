import React from 'react';
import Typical from 'react-typical';
import './About.css';

const About = () => {
    return (
        <div className='px-12 py-8' id='about'>
            <h1 className='text-center font-bold font-serif text-4xl'>About Me</h1>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <div className='abouts-img'>
                            <div className='about-img'>

                            </div>
                        </div>
                    </div>
                    <div className='flex-1 ml-0 lg:ml-24'>
                        <h1 className='text-3xl text-orange-600 font-serif'>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "MERN Stack Developer",
                                    1000,
                                    "React Developer",
                                    1000,
                                ]}
                            ></Typical>
                        </h1>
                        <p className='text-xl font-sans my-3 text-justify'>I am a MERN Stack Developer and I have almost one year of experience. I specialize in javascript, react for front end project and nodejs, expressjs for back end projects with mongoDB database. I also work on problem solving. I am prepared to contribute abilities while further developing acquired skills.</p>
                        <a href='Borhan_Resume.pdf' download="Borhan_Resume.pdf">
                            <button className="btn btn-primary">Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;