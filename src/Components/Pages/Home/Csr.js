import React from 'react';
import csr2 from '../../../assets/CSR/csr2.jpg'
import csr3 from '../../../assets/CSR/csr3.jpg'
import csr4 from '../../../assets/CSR/csr4.jpg'
import csr1 from '../../../assets/CSR/csr1.jpg'
const Csr = () => {
    return (
        <>
            <h1 className='text-3xl text-center font-bold text-secondary my-10'>CSR Contribution</h1>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src={csr1} class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img  src={csr3} class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img  src={csr4} class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img  src={csr2} class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>

        </>

    );
};

export default Csr;