import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Services = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://aqueous-scrubland-33744.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,9)))
    }, [products])

    const purchaseHandler = (id) => {
        navigate(`/purchase/${id}`);
    };


    return (
        <>
            <div className='mx-auto bg-base-200 shadow-lg p-10 w-full'>
                <h1 className='text-3xl mb-5 text-secondary text-center font-bold'><i class="fa-solid fa-dolly mx-2 text-secondary"></i>Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products?.map(product => <>
                            <div className='card bg-base-100 shadow-xl' data-aos="fade-up" data-aos-duration="2000">
                                <img src={product?.image} alt="product" className="rounded-xl  h-96 p-5 " />

                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Product - {product?.name}</h2>
                                   
                                    <small className='text-bold text-red-500 text-center'> Price ${product?.price}</small>
                                    <div className="card-actions flex justify-between ">
                                        <button onClick={() => purchaseHandler(product?._id)} className="btn btn-secondary text-white">Buy Now</button>
                                        <button onClick={() => purchaseHandler(product?._id)} className="btn btn-accent text-white">See Details</button>
                                    </div>
                                </div>
                            </div>

                        </>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;