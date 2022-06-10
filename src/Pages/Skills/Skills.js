import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className=' px-12 md:px-20 py-8 border-t-4' id='skill'>
            <h1 className='text-4xl font-bold text-purple-600 font-sans text-center mb-8'>My Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 ml-0 md:ml-32'>
                <div>
                    <h4 className='text-2xl font-bold font-sans'>My creative skills & experiences.</h4>
                    <p className='text-xl font-mono text-justify my-10'>As a MERN Stack developer, everyone needs to know about frontend and backend technology. Over 1 years I have been working hard on various frontend and backend technologies. I also created Website front-end design from PSD, Figma with HTML5, CSS3, JavaScript, React. I am also develop website backend with latest NodeJs, MongoDB and DaisyUi framework Technology. Below are links to some of the responsive sites I have created.</p>
                    <button class="btn btn-outline btn-primary text-xl font-bold">
                        <a className='flex items-center gap-2' target='_blank' href="https://github.com/MuhammadBorhan"> <span className='text-3xl'><FaGithubSquare /></span> <span>Github Activity</span></a>
                    </button>
                </div>
                <div>
                    <p className='text-xl font-bold ml-2'>HTML</p>
                    <progress class="progress progress-info w-80 block m-2 mb-4" value="90" max="100"></progress>
                    <p className='text-xl font-bold ml-2'>CSS (Tailwind CSS)</p>
                    <progress class="progress progress-info w-80 block m-2 mb-4" value="95" max="100"></progress>
                    <p className='text-xl font-bold ml-2'>Javascript</p>
                    <progress class="progress progress-info w-80 block m-2 mb-4" value="88" max="100"></progress>
                    <p className='text-xl font-bold ml-2'>React.js</p>
                    <progress class="progress progress-info w-80 block m-2 mb-4" value="85" max="100"></progress>
                    <p className='text-xl font-bold ml-2'>Node.js</p>
                    <progress class="progress progress-info w-80 block m-2 mb-4" value="80" max="100"></progress>
                    <p className='text-xl font-bold ml-2'>Express.js</p>
                    <progress class="progress progress-info w-80 block m-2 mb-4" value="82" max="100"></progress>
                    <p className='text-xl font-bold ml-2'> MongoDB (noSQL Database)</p>
                    <progress class="progress progress-info w-80 block m-2 mb-4" value="92" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;