/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Heart = ({ className = '' }) => {
    return (
        <div className={`${className}`}>
            <img
                className="w-1 object-contain"
                src="https://res.cloudinary.com/bedding-shop/image/upload/v1727290755/heart_l4zptf.png"
                alt="heart-image"
            />
        </div>
    );
};

export default Heart;
