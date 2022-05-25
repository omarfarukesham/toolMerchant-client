import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Services = () => {
    const [products, setProducts] = useState([])
     const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const purchaseHandler = (id) => {
        navigate(`/purchase/${id}`);
      };


    return (
        <>
            <div className='mx-auto bg-base-200 shadow-lg p-10 w-full'>
                <h1 className='text-5xl mb-5 text-secondary text-center font-bold'>Tools</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        products.map(product => <>
                            <div className='card bg-base-100 shadow-xl"'>
                                <figure class="px-10 pt-10">
                                    <img src={product?.image} alt="product" class="rounded-xl object-cover h-48 w-96" />
                                </figure>
                                <h3 className='text-bold text-secondary text-center mt-5'> Price ${product?.price}</h3>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">{product?.name}</h2>
                                    <h2 class="card-title">Minimum Order :{product?.minOrderQty}</h2>
                                    <h2 class="card-title">Stock Available :{product?.stock}</h2>
                                    <p>{product?.details.slice(0, 30)}</p>
                                    <div class="card-actions">
                                        <button onClick={() => purchaseHandler(product?._id)} class="btn btn-secondary text-white">Booking Now</button>
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