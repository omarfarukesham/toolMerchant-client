import React from 'react';
import newCollection from '../../../assets/images/newCollection3.png'

const NewCollection = () => {
    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${newCollection})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        
                        <button className="btn btn-accent">Get More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;