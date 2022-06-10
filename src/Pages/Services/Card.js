import React from 'react';
import './Card.css'

const Card = ({ heading, detail, icon }) => {
    return (
        <div class="card lg:max-w-md mx-auto cart-hover bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <span className='text-4xl text-red-600'>{icon}</span>
                <h2 class="card-title">{heading}</h2>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default Card;