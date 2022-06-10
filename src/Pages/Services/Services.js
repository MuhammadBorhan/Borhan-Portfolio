import React from 'react';
import Card from './Card';
import { FaArtstation, FaRegFileCode, FaRegCalendarPlus, FaBug } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='services px-12 py-8 border-t-4' id='service'>
            <h1 className='text-4xl font-bold font-sans text-center'>My Services what I provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-6'>
                <Card icon={<FaArtstation />} heading='Website Design' detail='A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good'></Card>
                <Card icon={<FaRegCalendarPlus />} heading='Website Re-Design' detail="If your existing design isn't userfriendly or look like not so good so i can do it marvelous design in a very short time"></Card>
                <Card icon={<FaRegFileCode />} heading='Web App Development' detail='I can develop Web application very nicely using ReactJs and NodeJs you can create it through me if you want in a very short time.'></Card>
                <Card icon={<FaBug />} heading='Website Bug Fixing' detail="If your website under too bugs and doesn't work properly, you can fix it through me if you want in a very short time."></Card>
            </div>
        </div>
    );
};

export default Services;