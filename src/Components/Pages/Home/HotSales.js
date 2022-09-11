import React from 'react';
import img1 from '../../../assets/images/2.png'
import img2 from '../../../assets/images/1.png'

const HotSales = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/4 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
               
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/4 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotSales;